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
    id: string;
    file: File;
    preview: string;
};


export default function AddProductPage() {

    const ProductInformationAny = ProductInformation as any;
    const ProductHeader = PageHeader as any
    const ProductImage = ProductImages as any



    const [images, setImages] = useState<ImagePreview[]>([])
    const [uploaded, setUploaded] = useState(false)
    const [uploadProgress, setUploadProgress] = useState(0)

    const { handleSubmit, register, formState: { errors }, reset } = useForm<productInfoData>({
        resolver: zodResolver(productInfoSchema)
    })


    const removeImage = (id: string) => {

        const deleteImage = images.filter(img => img.id !== id)

        setImages(deleteImage);
    };

    return (


        <div className=" antialiased ">


            <div className=" sticky top-0 z-40 w-full bg-foreground/80 rounded-tl-xl rounded-tr-xl backdrop-blur-md ">
                <div className="max-w-350 mx-auto flex min-h-20 items-center px-4 py-4 sm:px-6 lg:px-8">
                    <ProductHeader handleSubmit={handleSubmit} setImages={setImages} setUploadProgress={setUploadProgress} setUploaded={setUploaded} reset={reset} images={images} />
                </div>
            </div>


            <div className="lg:col-span-8 space-y-8">
                <ProductInformationAny
                    register={register} errors={errors}
                />
                <ProductImage
                    setImages={setImages} uploaded={uploaded} uploadProgress={uploadProgress} images={images} deleteImage={removeImage}
                />

                <AdvancedAccordion />
            </div>

            <div className="mt-8 pt-6 border-t dark:border-neutral-800/60">
                <ActionButtons />
            </div>


        </div>


    );
}














