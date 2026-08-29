import { toast } from "sonner";
import { useState } from "react";
import api from "../../../../lib/api";
import { useForm } from "react-hook-form";
import ProductImages from "./ProductImage";
import { PATHS } from "../../../../routes/paths";
import { zodResolver } from "@hookform/resolvers/zod";
import ProductInformation from "./ProductInformation";
import { Button } from "../../../../components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { productInfoSchema, type productInfoData } from "../types/product";


export default function ProductForm() {
    const { id } = useParams()
    const [images, setImages] = useState([])
    const [uploaded, setUploaded] = useState(false)
    const [uploadProgress, setUploadProgress] = useState(0)
    const [isLoading, setIsloading] = useState(false)
    const { handleSubmit, register, formState: { errors }, reset } = useForm<productInfoData>({
        resolver: zodResolver(productInfoSchema)
    })

    const navigate = useNavigate()

    const sendUpdate = async (data: productInfoData) => {
        try {
            setUploaded(false)
            setIsloading(true)

            if (!data) return

            const formData = new FormData();

            formData.append("productInfo", JSON.stringify(data))

            images?.forEach((img: any) => {
                formData.append("images", img.file);
            });

            await api.put(`/product/update/${id}`, formData, {
                onUploadProgress: (progressEvent) => {
                    const percent = Math.round((progressEvent.loaded * 100) / (progressEvent.total ?? 1))
                    setUploadProgress(percent)
                }
            })
            toast.success("Product Updated!..")
            setIsloading(false)
            navigate(PATHS.admin.products, { replace: true })
            setUploaded(true)
            reset()

        } catch (error) {
            console.log(error)
            setIsloading(false)
            setUploaded(false)
            toast.error("Server Error")
        } finally {
            if (uploaded) {

                setImages([])
            }

        }
    }


    return (

        <div className="lg:col-span-8 space-y-8">
            <ProductInformation
                register={register} errors={errors}
            />
            <ProductImages
                setImages={setImages} uploaded={uploaded} uploadProgress={uploadProgress} images={images}
            />

            <Button variant={"default"} disabled={isLoading} onClick={handleSubmit(sendUpdate)}>
                Save Update
            </Button>
        </div>
    );
}