// Globe — Originkit with Interactive Drag-to-Rotate
"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    SphereGeometry,
    MeshBasicMaterial,
    Color,
    Mesh,
    Group,
    InstancedMesh,
    Matrix4,
    Vector3,
    CanvasTexture,
    CatmullRomCurve3,
    TubeGeometry,
} from "three";
import { geoEquirectangular, geoPath } from "d3-geo";

type Rgba = { r: number; g: number; b: number; a: number };

function parseColorToRgba(input: string): Rgba {
    if (!input || input.trim() === "") return { r: 0, g: 0, b: 0, a: 0 };
    const str = input.trim();
    const rgbaMatch = str.match(
        /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i
    );
    if (rgbaMatch) {
        const r = Math.max(0, Math.min(255, parseFloat(rgbaMatch[1]))) / 255;
        const g = Math.max(0, Math.min(255, parseFloat(rgbaMatch[2]))) / 255;
        const b = Math.max(0, Math.min(255, parseFloat(rgbaMatch[3]))) / 255;
        const a =
            rgbaMatch[4] !== undefined
                ? Math.max(0, Math.min(1, parseFloat(rgbaMatch[4])))
                : 1;
        return { r, g, b, a };
    }
    const hex = str.replace(/^#/, "");
    if (hex.length === 8) {
        return {
            r: parseInt(hex.slice(0, 2), 16) / 255,
            g: parseInt(hex.slice(2, 4), 16) / 255,
            b: parseInt(hex.slice(4, 6), 16) / 255,
            a: parseInt(hex.slice(6, 8), 16) / 255,
        };
    }
    if (hex.length === 6) {
        return {
            r: parseInt(hex.slice(0, 2), 16) / 255,
            g: parseInt(hex.slice(2, 4), 16) / 255,
            b: parseInt(hex.slice(4, 6), 16) / 255,
            a: 1,
        };
    }
    if (hex.length === 4) {
        return {
            r: parseInt(hex[0] + hex[0], 16) / 255,
            g: parseInt(hex[1] + hex[1], 16) / 255,
            b: parseInt(hex[2] + hex[2], 16) / 255,
            a: parseInt(hex[3] + hex[3], 16) / 255,
        };
    }
    if (hex.length === 3) {
        return {
            r: parseInt(hex[0] + hex[0], 16) / 255,
            g: parseInt(hex[1] + hex[1], 16) / 255,
            b: parseInt(hex[2] + hex[2], 16) / 255,
            a: 1,
        };
    }
    return { r: 0, g: 0, b: 0, a: 1 };
}

function mapLinear(
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
): number {
    if (inMax === inMin) return outMin;
    const t = (value - inMin) / (inMax - inMin);
    return outMin + t * (outMax - outMin);
}

function mapSpeedUiToInternal(ui: number): number {
    if (ui === 0) return 0;
    const clamped = Math.max(0, Math.min(10, ui));
    return mapLinear(clamped, 0, 10, 0, 0.9);
}
function mapDensityUiToSpacing(ui: number): number {
    const clamped = Math.max(1, Math.min(10, ui));
    return mapLinear(clamped, 1, 10, 24, 8);
}
function mapScaleUiToMultiplier(ui: number): number {
    const clamped = Math.max(1, Math.min(20, ui));
    return mapLinear(clamped, 1, 20, 0.2, 2);
}
function mapDotSizeUiToMultiplier(ui: number): number {
    const clamped = Math.max(1, Math.min(10, ui));
    return mapLinear(clamped, 1, 10, 0.1, 0.5);
}
function mapMarkerDotSizeUiToMultiplier(ui: number): number {
    const clamped = Math.max(0, Math.min(100, ui));
    return mapLinear(clamped, 0, 100, 0.1, 2.5);
}
function mapDetailToStepSize(ui: number): number {
    const clamped = Math.max(1, Math.min(10, ui));
    return mapLinear(clamped, 1, 10, 10, 1);
}

function simplifyRing(ring: number[][], detail: number): number[][] {
    if (ring.length < 2) return ring;
    if (detail >= 10) return ring;
    const stepSize = Math.max(1, Math.floor(mapDetailToStepSize(detail)));
    const simplified: number[][] = [];
    simplified.push(ring[0]);
    for (let i = stepSize; i < ring.length - 1; i += stepSize) {
        const idx = Math.min(i, ring.length - 1);
        simplified.push(ring[idx]);
    }
    const lastPoint = ring[ring.length - 1];
    const firstPoint = ring[0];
    const isClosed =
        Math.abs(lastPoint[0] - firstPoint[0]) < 1e-4 &&
        Math.abs(lastPoint[1] - firstPoint[1]) < 1e-4;
    if (!isClosed) {
        simplified.push(lastPoint);
    }
    return simplified.length >= 2 ? simplified : ring;
}

function latLngToPosition(
    lat: number,
    lng: number
): { x: number; y: number; z: number } {
    const latRad = lat * (Math.PI / 180);
    const lngRad = lng * (Math.PI / 180);
    const x = Math.cos(latRad) * Math.sin(lngRad);
    const y = Math.sin(latRad);
    const z = Math.cos(latRad) * Math.cos(lngRad);
    return { x, y, z };
}

interface Marker {
    lat: number;
    lng: number;
}
interface MarkerConfig {
    markers: Marker[];
    color: string;
    size: number;
}
interface DotsConfig {
    color: string;
    size: number;
    density: number;
    allDots: boolean;
}
interface GlobeProps {
    speed?: number;
    smoothing?: number;
    dots?: DotsConfig;
    fill?: "dots" | "solid";
    fillColor?: string;
    scale?: number;
    stopOnHover?: boolean;
    markerConfig?: MarkerConfig;
    direction?: "left" | "right";
    initialLatitude?: number;
    initialLongitude?: number;
    oceanColor?: string;
    outlineColor?: string;
    showOutline?: boolean;
    graticuleColor?: string;
    showGrid?: boolean;
    outlineWidth?: number;
    dragSpeed?: number;
    detail?: number;
    style?: CSSProperties;
}

export default function RotateEarth({
    speed = 3,
    dots = { color: "#ffffff", size: 5, density: 8, allDots: false },
    fill = "dots",
    fillColor = "#ffffff",
    scale = 8,
    stopOnHover = true,
    markerConfig = { markers: [], color: "#03eaf1", size: 40 },
    direction = "left",
    initialLatitude = 23,
    initialLongitude = -23,
    oceanColor = "#000000",
    outlineColor = "#ffffff",
    showOutline = true,
    graticuleColor = "#D4D4D4",
    showGrid = true,
    outlineWidth = 1,
    dragSpeed = 1,
    detail = 5,
    style,
}: GlobeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const dotsStr = JSON.stringify(dots);
    const markerConfigStr = JSON.stringify(markerConfig);

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        let animationFrameId: number;

        // Interaction tracking variables
        let isHovered = false;
        let isDragging = false;
        let previousPointerPosition = { x: 0, y: 0 };

        const width = container.clientWidth || 800;
        const height = container.clientHeight || 600;

        const parsedDots: DotsConfig = JSON.parse(dotsStr);
        const parsedMarkerConfig: MarkerConfig = JSON.parse(markerConfigStr);

        const baseRotationSpeed = mapSpeedUiToInternal(speed) * 0.005;
        const rotationSpeed = direction === "left" ? -baseRotationSpeed : baseRotationSpeed;
        const dotSpacing = mapDensityUiToSpacing(parsedDots.density);
        const dotSizeMultiplier = mapDotSizeUiToMultiplier(parsedDots.size);
        const markerRadiusMultiplier = mapMarkerDotSizeUiToMultiplier(parsedMarkerConfig.size);
        const scaleMultiplier = mapScaleUiToMultiplier(scale);

        const scene = new Scene();
        const camera = new PerspectiveCamera(50, width / height, 0.1, 1000);
        const baseRadius = 1;
        const globeRadius = baseRadius * scaleMultiplier;
        camera.position.set(0, 0, 2.5 / scaleMultiplier);
        camera.lookAt(0, 0, 0);

        const renderer = new WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = "srgb";

        const canvas = renderer.domElement;
        canvas.style.position = "absolute";
        canvas.style.inset = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.display = "block";
        canvas.style.cursor = "grab";
        container.appendChild(canvas);

        const oceanRgba = parseColorToRgba(oceanColor);
        const outlineRgba = parseColorToRgba(outlineColor);
        const dotRgba = parseColorToRgba(parsedDots.color);
        const graticuleRgba = parseColorToRgba(graticuleColor);
        const fillRgba = parseColorToRgba(fillColor);

        const globeGroup = new Group();
        globeGroup.rotation.y = (initialLongitude * Math.PI) / 180;
        globeGroup.rotation.x = (initialLatitude * Math.PI) / 180;
        scene.add(globeGroup);

        // Ocean Mesh
        const oceanGeometry = new SphereGeometry(globeRadius, 64, 64);
        const oceanMaterial = new MeshBasicMaterial({
            color: new Color(oceanColor),
            transparent: oceanRgba.a < 1,
            opacity: oceanRgba.a,
        });
        const oceanMesh = new Mesh(oceanGeometry, oceanMaterial);
        globeGroup.add(oceanMesh);

        // Graticules / Grid
        const graticuleGroup = new Group();
        if (showGrid && graticuleColor && graticuleRgba.a > 0) {
            const graticuleMaterial = new MeshBasicMaterial({
                color: new Color(graticuleColor),
                transparent: graticuleRgba.a < 1,
                opacity: graticuleRgba.a,
            });
            const gridSpacing = 15;
            for (let lat = -90; lat <= 90; lat += gridSpacing) {
                const points: Vector3[] = [];
                for (let i = 0; i <= 64; i++) {
                    const lng = (i / 64) * 360 - 180;
                    const pos = latLngToPosition(lat, lng);
                    points.push(new Vector3(pos.x * globeRadius, pos.y * globeRadius, pos.z * globeRadius));
                }
                const curve = new CatmullRomCurve3(points);
                const tubeGeometry = new TubeGeometry(curve, 128, 0.001, 8, false);
                graticuleGroup.add(new Mesh(tubeGeometry, graticuleMaterial));
            }
            for (let lng = -180; lng < 180; lng += gridSpacing) {
                const points: Vector3[] = [];
                for (let i = 0; i <= 64; i++) {
                    const lat = (i / 64) * 180 - 90;
                    const pos = latLngToPosition(lat, lng);
                    points.push(new Vector3(pos.x * globeRadius, pos.y * globeRadius, pos.z * globeRadius));
                }
                const curve = new CatmullRomCurve3(points);
                const tubeGeometry = new TubeGeometry(curve, 128, 0.001, 8, false);
                graticuleGroup.add(new Mesh(tubeGeometry, graticuleMaterial));
            }
            globeGroup.add(graticuleGroup);
        }

        const continentOutlineGroup = new Group();
        globeGroup.add(continentOutlineGroup);

        // Async Land Data Fetching & Rendering
        const loadWorldData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/50m/physical/ne_50m_land.json"
                );
                if (!response.ok) throw new Error("Failed to load land data");
                const landFeatures = await response.json();

                if (showOutline && outlineColor && outlineRgba.a > 0) {
                    const outlineMaterial = new MeshBasicMaterial({
                        color: new Color(outlineColor),
                        transparent: outlineRgba.a < 1,
                        opacity: outlineRgba.a,
                    });

                    landFeatures.features.forEach((feature: any) => {
                        const geometry = feature.geometry;
                        if (!geometry || !geometry.coordinates) return;

                        const processRing = (ring: number[][]) => {
                            const simplifiedRing = simplifyRing(ring, detail);
                            const points: Vector3[] = simplifiedRing.map((coord) => {
                                const pos = latLngToPosition(coord[1], coord[0]);
                                return new Vector3(pos.x * globeRadius, pos.y * globeRadius, pos.z * globeRadius);
                            });

                            if (points.length >= 2) {
                                const curve = new CatmullRomCurve3(points);
                                const tubeGeometry = new TubeGeometry(
                                    curve,
                                    points.length * 2,
                                    (outlineWidth / 10) * 0.005,
                                    6,
                                    false
                                );
                                continentOutlineGroup.add(new Mesh(tubeGeometry, outlineMaterial));
                            }
                        };

                        if (geometry.type === "Polygon") {
                            processRing(geometry.coordinates[0]);
                        } else if (geometry.type === "MultiPolygon") {
                            geometry.coordinates.forEach((poly: any) => processRing(poly[0]));
                        }
                    });
                }

                // Land detection bitmap canvas
                const bitmapWidth = 2048;
                const bitmapHeight = 1024;
                const offscreenCanvas = document.createElement("canvas");
                offscreenCanvas.width = bitmapWidth;
                offscreenCanvas.height = bitmapHeight;
                const ctx = offscreenCanvas.getContext("2d", { willReadFrequently: true });
                if (!ctx) return;

                const projection = geoEquirectangular().fitSize([bitmapWidth, bitmapHeight], {
                    type: "Sphere",
                } as any);
                const pathGenerator = geoPath().projection(projection).context(ctx);

                ctx.fillStyle = "#000";
                ctx.fillRect(0, 0, bitmapWidth, bitmapHeight);
                ctx.fillStyle = "#fff";
                ctx.beginPath();
                landFeatures.features.forEach((feature: any) => pathGenerator(feature));
                ctx.fill();

                const pixels = ctx.getImageData(0, 0, bitmapWidth, bitmapHeight).data;
                const isOnLand = (lng: number, lat: number) => {
                    const x = Math.round(((lng + 180) / 360) * bitmapWidth) % bitmapWidth;
                    const y = Math.round(((90 - lat) / 180) * bitmapHeight);
                    const clampedY = Math.max(0, Math.min(bitmapHeight - 1, y));
                    const idx = (clampedY * bitmapWidth + x) * 4;
                    return pixels[idx] > 128;
                };

                if (fill === "solid") {
                    const fillCanvas = document.createElement("canvas");
                    fillCanvas.width = 1024;
                    fillCanvas.height = 512;
                    const fctx = fillCanvas.getContext("2d")!;
                    const img = fctx.createImageData(1024, 512);
                    const data = img.data;

                    for (let ty = 0; ty < 512; ty++) {
                        for (let tx = 0; tx < 1024; tx++) {
                            const u = tx / 1024;
                            const v = ty / 512;
                            let lng = (u - 0.25) * 360;
                            lng = ((((lng + 180) % 360) + 360) % 360) - 180;
                            const lat = (v - 0.5) * 180;
                            const idx = (ty * 1024 + tx) * 4;
                            if (parsedDots.allDots || isOnLand(lng, lat)) {
                                data[idx] = Math.round(fillRgba.r * 255);
                                data[idx + 1] = Math.round(fillRgba.g * 255);
                                data[idx + 2] = Math.round(fillRgba.b * 255);
                                data[idx + 3] = Math.round((fillRgba.a || 1) * 255);
                            }
                        }
                    }
                    fctx.putImageData(img, 0, 0);
                    const fillTexture = new CanvasTexture(fillCanvas);
                    fillTexture.flipY = false;
                    fillTexture.needsUpdate = true;
                    const fillMesh = new Mesh(
                        new SphereGeometry(globeRadius * 1.002, 64, 64),
                        new MeshBasicMaterial({ map: fillTexture, transparent: true })
                    );
                    globeGroup.add(fillMesh);
                } else {
                    const dotCoordinates: number[][] = [];
                    const baseStep = dotSpacing * 0.08;
                    for (let lat = -90; lat <= 90; lat += baseStep) {
                        const latRad = (Math.abs(lat) * Math.PI) / 180;
                        const cosLat = Math.cos(latRad);
                        const lngStep = cosLat > 0.01 ? baseStep / Math.max(0.3, cosLat) : 360;
                        for (let lng = -180; lng < 180; lng += lngStep) {
                            if (parsedDots.allDots || isOnLand(lng, lat)) {
                                dotCoordinates.push([lng, lat]);
                            }
                        }
                    }

                    if (dotCoordinates.length > 0) {
                        const dotGeometry = new SphereGeometry(0.01 * dotSizeMultiplier, 6, 6);
                        const dotMaterial = new MeshBasicMaterial({
                            color: new Color(parsedDots.color),
                            transparent: dotRgba.a < 1,
                            opacity: dotRgba.a,
                        });
                        const instanced = new InstancedMesh(dotGeometry, dotMaterial, dotCoordinates.length);
                        const matrix = new Matrix4();

                        for (let i = 0; i < dotCoordinates.length; i++) {
                            const [lng, lat] = dotCoordinates[i];
                            const pos = latLngToPosition(lat, lng);
                            matrix.setPosition(
                                pos.x * globeRadius,
                                pos.y * globeRadius,
                                pos.z * globeRadius
                            );
                            instanced.setMatrixAt(i, matrix);
                        }
                        instanced.instanceMatrix.needsUpdate = true;
                        globeGroup.add(instanced);
                    }
                }

                // Render Markers
                if (parsedMarkerConfig.markers && parsedMarkerConfig.markers.length > 0) {
                    const markerGeometry = new SphereGeometry(0.01 * markerRadiusMultiplier, 16, 16);
                    const markerMaterial = new MeshBasicMaterial({
                        color: new Color(parsedMarkerConfig.color),
                    });
                    parsedMarkerConfig.markers.forEach((marker) => {
                        if (typeof marker?.lat === "number" && typeof marker?.lng === "number") {
                            const pos = latLngToPosition(marker.lat, marker.lng);
                            const markerMesh = new Mesh(markerGeometry, markerMaterial);
                            markerMesh.position.set(
                                pos.x * globeRadius * 1.01,
                                pos.y * globeRadius * 1.01,
                                pos.z * globeRadius * 1.01
                            );
                            globeGroup.add(markerMesh);
                        }
                    });
                }

                setIsLoading(false);
            } catch (err) {
                setError("Failed to load map land data");
                setIsLoading(false);
            }
        };

        loadWorldData();

        // Hover Event Listeners
        const handleMouseEnter = () => {
            if (stopOnHover) isHovered = true;
        };
        const handleMouseLeave = () => {
            if (stopOnHover) isHovered = false;
            isDragging = false;
            canvas.style.cursor = "grab";
        };

        // Drag-to-Rotate Interaction Listeners
        const handlePointerDown = (e: PointerEvent) => {
            isDragging = true;
            previousPointerPosition = { x: e.clientX, y: e.clientY };
            canvas.style.cursor = "grabbing";
        };

        const handlePointerMove = (e: PointerEvent) => {
            if (!isDragging) return;

            const deltaX = e.clientX - previousPointerPosition.x;
            const deltaY = e.clientY - previousPointerPosition.y;

            const factor = 0.005 * dragSpeed;
            globeGroup.rotation.y += deltaX * factor;
            globeGroup.rotation.x += deltaY * factor;

            // Clamp latitude rotation to avoid flipping upside down
            const maxLat = Math.PI / 2 - 0.05;
            globeGroup.rotation.x = Math.max(-maxLat, Math.min(maxLat, globeGroup.rotation.x));

            previousPointerPosition = { x: e.clientX, y: e.clientY };
        };

        const handlePointerUp = () => {
            isDragging = false;
            canvas.style.cursor = "grab";
        };

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);
        canvas.addEventListener("pointerdown", handlePointerDown);
        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerUp);

        // Animation Loop
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            if (!isHovered && !isDragging) {
                globeGroup.rotation.y += rotationSpeed;
            }
            renderer.render(scene, camera);
        };
        animate();

        // Clean up listeners and WebGL resources
        return () => {
            cancelAnimationFrame(animationFrameId);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
            canvas.removeEventListener("pointerdown", handlePointerDown);
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
            renderer.dispose();
            if (container.contains(canvas)) {
                container.removeChild(canvas);
            }
        };
    }, [
        speed,
        dotsStr,
        fill,
        fillColor,
        scale,
        stopOnHover,
        markerConfigStr,
        direction,
        initialLatitude,
        initialLongitude,
        oceanColor,
        outlineColor,
        showOutline,
        graticuleColor,
        showGrid,
        outlineWidth,
        dragSpeed,
        detail,
    ]);

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height: "600px",
                position: "relative",
                overflow: "hidden",
                userSelect: "none",
                touchAction: "none",
                ...style,
            }}
        >
            {error && (
                <div style={{ color: "red", position: "absolute", zIndex: 10 }}>
                    {error}
                </div>
            )}
        </div>
    );
}