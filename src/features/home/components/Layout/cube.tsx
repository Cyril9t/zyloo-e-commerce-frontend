import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let phi = 0;

        const globe = createGlobe(canvas, {
            devicePixelRatio: 2,
            width: 800,
            height: 800,
            phi: 0,
            theta: 0.3,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.1, 0.1, 0.1],
            markerColor: [0.2, 0.8, 1],
            glowColor: [0.1, 0.3, 0.5],
            markers: [],
        });

        const animate = () => {
            phi += 0.005;

            globe.update({
                phi,
            });

            requestAnimationFrame(animate);
        };

        const animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
            globe.destroy();
        };
    }, []);

    return (
        <div className="relative aspect-square w-full">
            <canvas
                ref={canvasRef}
                className="h-full w-full"
            />
        </div>
    );
}