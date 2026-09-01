import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ProductInformation from "../components/ProductInformation";
import ProductImages from "../components/ProductImage";
import AdvancedAccordion from "../components/AdvanceCordination";
import ActionButtons from "../components/ActionButton";
import { useForm } from "react-hook-form";
import { productInfoSchema, type productInfoData } from "../types/product";
import { zodResolver } from "@hookform/resolvers/zod";


export type ImagePreview = {
    file: File;
    preview: string;
};


export default function AddProductPage() {

    const ProductInformationAny = ProductInformation as any;
    const ProductHeader = PageHeader as any
    const ProductImage = ProductImages as any
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

    const [images, setImages] = useState<ImagePreview | []>([])
    const [uploaded, setUploaded] = useState(false)
    const [uploadProgress, setUploadProgress] = useState(0)

    const { handleSubmit, register, formState: { errors }, reset } = useForm<productInfoData>({
        resolver: zodResolver(productInfoSchema)
    })



    return (


        <div className=" antialiased ">


            <div className=" sticky top-0 z-40 w-full bg-foreground/80 rounded-tl-xl rounded-tr-xl backdrop-blur-md ">
                <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <ProductHeader handleSubmit={handleSubmit} setImages={setImages} setUploadProgress={setUploadProgress} setUploaded={setUploaded} reset={reset} images={images} />
                </div>
            </div>


            <div className="lg:col-span-8 space-y-8">
                <ProductInformationAny
                    register={register} errors={errors}
                />
                <ProductImage
                    setImages={setImages} uploaded={uploaded} uploadProgress={uploadProgress} images={images}
                />

                <AdvancedAccordion />
            </div>

            <div className="mt-8 pt-6 border-t dark:border-neutral-800/60">
                <ActionButtons />
            </div>


        </div>


    );
}














