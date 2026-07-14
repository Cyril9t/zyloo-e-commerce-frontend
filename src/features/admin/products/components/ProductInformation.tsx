import * as React from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import { productInfoSchema } from "../types/product";
import type { productInfoData } from "../types/product";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { Button } from "../../../../components/ui/button";


// interface InfoProps {
//     tags: string[];
//     tagInput: string;
//     onTagInputChange: (val: string) => void;
//     onAddTag: (e: React.KeyboardEvent) => void;
//     onRemoveTag: (idx: number) => void;
// }



export default function ProductInformation({ handleSubmit, register, errors }: any) {
    // const { handleSubmit, register, formState: { errors } } = useForm<productInfoData>({
    //     resolver: zodResolver(productInfoSchema)
    // })

    const submitInfo = (data: any) => {
        console.log(data)
    }

    // const [productInfo, setProductInfo] = useState()
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
            <CardHeader className="p-6 pb-4">
                <CardTitle className="text-xl font-bold uppercase tracking-wider ">Product Specification Matrix</CardTitle>
                <CardDescription className="">Configure identity markers and detailed text copy blocks mapping to digital storefront views.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
                <form onSubmit={handleSubmit(submitInfo)}>
                    <div className="space-y-3">
                        <Label htmlFor="prod-name" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Formal Product Designation Name</Label>

                        <Input id="prod-name" {...register("name")} placeholder="e.g., Silk Structural Blazer" className="h-9 focus-visible:ring-1 focus-visible:ring-neutral-950" />
                        <small className="text-destructive">{errors.name?.message}</small>


                    </div>

                    <div className="space-y-3">
                        <Label htmlFor="prod-short-desc" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Teaser Abstract Summary</Label>
                        <Input id="prod-short-desc" {...register("summary")} placeholder="Brief summary displayed in list search frames..." className="h-9 focus-visible:ring-1" />
                        <small className="text-destructive">{errors.summary?.message}</small>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <Label htmlFor="prod-full-desc" {...register("description")} className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Comprehensive Storefront Rich Manifest Description</Label>
                            <span className="text-[10px] text-neutral-400 font-medium">Rich-Text Editor Layer Engaged</span>
                        </div>
                        <Textarea id="prod-full-desc" {...register("description")} placeholder="Describe materials, cut, design philosophy, structural maintenance instructions..." className="min-h-[140px] focus-visible:ring-1 resize-y leading-relaxed" />
                        <small className="text-destructive">
                            {errors.description?.message}
                        </small>
                    </div>

                    <div className="pt-2">
                        <div className="">
                            <Label htmlFor="prod-brand" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Product Category</Label>
                            <Input id="prod-brand" {...register("category")} placeholder="e.g., Footwear.." className="h-9" />
                            <small className="text-destructive">{errors.category?.message}</small>
                        </div>

                    </div>

                    {/* Tags Management Block Component Inset */}
                    <div className="space-y-2 pt-2">
                        <Label htmlFor="prod-tags" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Search Engine Collection Tokens (Tags)</Label>
                        <div className="flex flex-wrap gap-1.5 p-2 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/70 dark:border-neutral-800/70 rounded-md min-h-9 items-center">

                            <input
                                id="prod-tags"
                                type="text"
                                placeholder="Add tag..."
                                {...register("tag")}
                                className="flex-1 min-w-[120px] bg-transparent outline-none border-none shadow-none text-xs text-neutral-700 dark:text-neutral-300 px-1 py-0.5"
                            />
                            <small className="text-destructive">{errors.tag?.message}</small>
                        </div>
                    </div>

                    {/* <div className="justify-end text-end mt-5">
                        <Button type="submit" variant={"default"} >
                            Done
                        </Button>
                    </div> */}
                </form>
            </CardContent>
        </Card>
    );
}