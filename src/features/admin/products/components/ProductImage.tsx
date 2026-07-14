import * as React from "react";
import {

    UploadCloud,
    X,
    Image as ImageIcon,
    Calendar as CalendarIcon,

} from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card";

import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { Progress } from "../../../../components/ui/progress";
import type { ProductImageFile } from "../pages/AddProductPage";
import { cn } from "../../../../utils/cn";
import { useState, useEffect } from "react";
import type { ChangeEvent, SetStateAction } from "react";



interface ImagesProps {
    preview: []
}


export default function ProductImages() {

    // const [image, setImage] = useState({});

    const [files, setFiles] = useState<any>([]);


    const fileUpload = (e: ChangeEvent<HTMLInputElement>) => {

        const selectedFiles = Array.from(e.target.files || []);

        const preview = selectedFiles.map((uploaded) => ({
            preview: URL.createObjectURL(uploaded),
        }))

        setFiles((prev: any) => [...prev, ...preview]);

    };

    useEffect(() => {
        console.log(files)
        // console.log(image)
    }, [files])




    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
            <CardHeader className="p-6 pb-4">
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Storefront Visual Asset Repository</CardTitle>
                <CardDescription className="text-xs">Upload and structure visual array tokens matching product variations. High-fidelity textures preferred.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-6">

                {/* Drag and Drop Visual Platform Area */}
                <div className="relative border border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-8 text-center bg-neutral-50/50 dark:bg-neutral-900/40 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer group flex flex-col items-center justify-center">
                    <input type="file" onChange={fileUpload} className="h-full w-full z-30 absolute opacity-0" />
                    <UploadCloud className="h-8 w-8 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 transition-colors mb-3 stroke-[1.5]" />
                    <span className="text-xs font-bold text-neutral-950 dark:text-neutral-50 tracking-tight">Stream assets via local system files</span>
                    <p className="text-[11px] text-neutral-400 mt-1 font-medium">Drag and drop raw structures or browse arrays (PNG, JPEG, WEBP up to 15MB each)</p>
                </div>

                {/* Simulated Core Pipeline Active Upload State Tracker */}
                <div className="p-3 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800 rounded-md space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-medium text-neutral-400">
                        <div className="flex items-center gap-2"><ImageIcon className="h-3.5 w-3.5 text-neutral-500" /> <span>studio_blazer_hd_back.png</span></div>
                        <span className="font-mono">74% Buffered</span>
                    </div>
                    <Progress value={74} className="h-1 bg-neutral-200 dark:bg-neutral-800" />
                </div>

                {/* {file && (<img src={file} alt="" />)} */}

                {/* Dynamic Grid Layout Array Container */}
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                    {files?.map((img: any) => (
                        <div key={crypto.randomUUID()} className={cn("group relative aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden border transition-all shadow-2xs", img.isFeatured ? "border-neutral-950 dark:border-white ring-1 ring-neutral-950 dark:ring-white" : "border-neutral-200/80 dark:border-neutral-800")}>
                            <img src={img?.preview} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102" />

                            {/* Action Overlay Strip */}
                            <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                                <div className="flex justify-end">
                                    <button type="button" className="p-1 bg-white/90 rounded-md text-neutral-500 hover:text-rose-600 shadow-xs transition-colors backdrop-blur-xs">
                                        <X className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[9px] font-mono text-white truncate px-1">{img.name}</span>
                                    {/* {!img.isFeatured ? (
                                        <Button size="sm" variant="secondary" className="h-6 text-[10px] font-bold uppercase tracking-wider rounded-sm w-full py-0" onClick={() => onSetFeatured(img.id)}>Set Hero</Button>
                                    ) : (
                                        <Badge className="text-[9px] font-bold uppercase tracking-wider rounded-sm bg-white text-neutral-950 justify-center h-5">Hero Node</Badge>
                                    )} */}
                                </div>
                            </div>

                            {/* Static Top Flag for Featured Asset */}
                            {/* {img.isFeatured && (
                                <div className="absolute top-2 left-2 pointer-events-none">
                                    <Badge className="text-[9px] font-bold uppercase tracking-wider rounded-xs px-1.5 py-0 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-sm border border-white/20">Primary</Badge>
                                </div>
                            )} */}
                        </div>
                    ))}
                </div>
                <div className="text-end">
                    <Button variant={"default"}>
                        Done
                    </Button>
                </div>

            </CardContent>
        </Card>
    );
}