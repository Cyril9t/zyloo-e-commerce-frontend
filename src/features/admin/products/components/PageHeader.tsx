import { ArrowLeft, Eye, Loader, Save, } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { PATHS } from "../../../../routes/paths";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../../lib/api";
import { toast } from "sonner";
import { useState } from "react";


export default function PageHeader({ uploaded, setUploaded, setUploadProgress, setImages, reset, handleSubmit, images }: any) {
    const [isLoading, setIsloading] = useState(false)

    const navigate = useNavigate()

    const submitInfo = async (data: any) => {
        try {
            setUploaded(false)
            setIsloading(true)

            if (!data) return

            const formData = new FormData()

            formData.append("productInfo", JSON.stringify(data));

            images?.forEach((img: any) => {
                formData.append("images", img.file);
            });

            if (images.length === 0) {
                setIsloading(false);
                toast.error("No Images selected for storefront...")
                return
            }
            const uploadPromise = await api.post("/product/upload", formData, {
                onUploadProgress: (progressEvent) => {
                    const percent = Math.round((progressEvent.loaded * 100) / (progressEvent.total ?? 1))
                    setUploadProgress(percent)
                }
            })

            const res = uploadPromise.data
            setIsloading(false)
            toast.success("Product Uploaded")
            navigate(`/admin/product-item/${res?.product?.id}`, { replace: true })

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

        <div className="relative">
            {isLoading ? <div className="flex animate-slideDown text-white text-2xl font-semibold gap-4">
                <div ><Loader size={30} /></div>
                <div>Uploading in Progress....</div>
            </div> : (
                <div className="w-full gap-70 text-background flex ">
                    <div className="w-full flex items-center gap-4 grow text-start">
                        <Link to={PATHS.admin.products}>
                            <Button variant="secondary" size="icon" className="h-9 w-9  shadow-2xs">
                                <ArrowLeft className="h-4 w-4 " />
                            </Button>
                        </Link>
                        <div>


                            <h1 className="text-xl font-semibold tracking-tight   flex items-center gap-2">
                                Add New Product
                            </h1>

                            <p className="hidden sm:block text-xs  font-medium">Instantiate a novel commercial inventory entry across system channels.</p>
                        </div>
                    </div>

                    <div className=" flex items-center gap-2 text-end">
                        <Button variant="secondary" size="sm" className="h-9 text-xs font-semibold  shadow-2xs">
                            <Save className="h-3.5 w-3.5 mr-2 " />
                            Save Draft
                        </Button>
                        <Button variant="secondary" size="sm" className="h-9 text-xs font-semibold  shadow-2xs">
                            <Eye className="h-3.5 w-3.5 mr-2" />
                            Preview
                        </Button>
                        <Button variant={"default"} size="sm" onClick={handleSubmit(submitInfo)} className="h-9 text-xs font-bold uppercase tracking-wider px-4  hover:opacity-90 transition-opacity shadow-sm">
                            Publish Product
                        </Button>

                    </div>
                </div >)}


        </div>

    );
}