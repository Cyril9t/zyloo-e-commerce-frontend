import * as React from "react";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { Tooltip, TooltipProvider, } from "../../../../components/ui/tooltip";
import PageHeader from "../components/PageHeader";
import ProductInformation from "../components/ProductInformation";
import ProductImages from "../components/ProductImage";
import PricingInventory from "../components/ProductPrice";
import ProductSEO from "../components/ProdutSEO";
import AdvancedAccordion from "../components/AdvanceCordination";
import ActionButtons from "../components/ActionButton";
import { useForm } from "react-hook-form";
import { productInfoSchema, type productInfoData } from "../types/product";
import { zodResolver } from "@hookform/resolvers/zod";


interface ProductInfo {
    name: string,
    summary: string,
    description: string,
    category: string,
    tag: string
}

// export interface ProductVariantOption {
//     id: string;
//     name: string; // e.g., Size, Color
//     values: string[];
// }

// export interface CustomAttribute {
//     id: string;
//     key: string;
//     value: string;
// }

export default function AddProductPage() {

    const ProductInformationAny = ProductInformation as any;

    // const [tags, setTags] = React.useState<string[]>(["Premium", "Essentials", "Winter-26"]);
    // const [tagInput, setTagInput] = React.useState("");
    // const [images, setImages] = React.useState<ProductImageFile[]>([
    //     { id: "img-1", url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80", name: "merino_front.jpg", size: "1.2 MB", isFeatured: true },
    //     { id: "img-2", url: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&q=80", name: "merino_weave.jpg", size: "2.4 MB", isFeatured: false }
    // ]);
    // const [variants, setVariants] = React.useState<ProductVariantOption[]>([
    //     { id: "v-1", name: "Size", values: ["S", "M", "L"] },
    //     { id: "v-2", name: "Color", values: ["Slate", "Charcoal"] }
    // ]);
    // const [attributes, setAttributes] = React.useState<CustomAttribute[]>([
    //     { id: "a-1", key: "Material", value: "100% Merino Wool" },
    //     { id: "a-2", key: "Warranty", value: "2-Year Studio Guarantee" }
    // ]);
    // const [seoTitle, setSeoTitle] = React.useState("");
    // const [seoDesc, setSeoDesc] = React.useState("");
    // const [publishDate, setPublishDate] = React.useState<Date | undefined>(new Date());

    // // Local state mechanics helpers
    // const handleAddTag = (e: React.KeyboardEvent) => {
    //     if (e.key === "Enter" && tagInput.trim()) {
    //         e.preventDefault();
    //         if (!tags.includes(tagInput.trim())) setTags([...tags, tagInput.trim()]);
    //         setTagInput("");
    //     }
    // };

    // const handleRemoveTag = (index: number) => {
    //     setTags(tags.filter((_, i) => i !== index));
    // };

    // const setFeaturedImage = (id: string) => {
    //     setImages(images.map(img => ({ ...img, isFeatured: img.id === id })));
    // };

    // const removeImage = (id: string) => {
    //     setImages(images.filter(img => img.id !== id));
    // };


    const { handleSubmit, register, formState: { errors } } = useForm<productInfoData>({
        resolver: zodResolver(productInfoSchema)
    })



    return (
        <TooltipProvider>
            <Tooltip>
                <div className="w-full min-h-screen dark:bg-neutral-950  dark:text-neutral-50 antialiased selection:bg-neutral-200">

                    {/* Global Sticky Layout Top Navigation Header Wrapper */}
                    <div className="sticky top-0 z-40 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-800/60 transition-colors">
                        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                            <PageHeader />
                        </div>
                    </div>

                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

                        {/* Primary Grid Layout Frame: Desktop Two-Column, Mobile Stacked */}
                        <div className="items-start">

                            {/* LEFT COLUMN: Large Administrative Core Manifest Fields (8/12 Layout) */}
                            <div className="lg:col-span-8 space-y-8">
                                <ProductInformationAny
                                    handleSubmit={handleSubmit} register={register} errors={errors}
                                // tagInput={tagInput}
                                // onTagInputChange={setTagInput}
                                // onAddTag={handleAddTag}
                                // onRemoveTag={handleRemoveTag}
                                />
                                <ProductImages

                                />
                                <PricingInventory />
                                {/* <ProductVariants variants={variants} setVariants={setVariants} /> */}
                                {/* <ShippingInformation /> */}
                                {/* <ProductAttributes attributes={attributes} setAttributes={setAttributes} /> */}
                                {/* <ProductSEO
                                    // title={seoTitle}
                                    // desc={seoDesc}
                                    // onTitleChange={setSeoTitle}
                                    // onDescChange={setSeoDesc}
                                /> */}
                                <AdvancedAccordion />
                            </div>

                            {/* RIGHT COLUMN: Sticky Publishing Panels & Platform Context (4/12 Layout) */}
                            {/* <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
                                <PublishSettings publishDate={publishDate} setPublishDate={setPublishDate} />
                                <CategorySection />
                                <ProductStatistics />
                            </div> */}

                        </div>

                        {/* Universal Bottom Layout Control Strip */}
                        <div className="mt-8 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60">
                            <ActionButtons />
                        </div>

                    </div>
                </div>
            </Tooltip>
        </TooltipProvider>
    );
}


















function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}