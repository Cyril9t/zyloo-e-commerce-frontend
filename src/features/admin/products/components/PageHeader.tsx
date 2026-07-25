import { ArrowLeft, Eye, Heading1, Heading2, ImageIcon, Save, SaveAll } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { PATHS } from "../../../../routes/paths";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { upload } from "../../../../lib/actions";
import api from "../../../../lib/api";
import { toast } from "sonner";
import { Progress } from "../../../../components/ui/progress";
import {
    Popover,
    PopoverAnchor,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "../../../../components/ui/popover";
import ConfirmDialog from "../../shared/components/ConfirmDialog";
import UploadDialog from "../../shared/components/UploadDialog";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card";


export default function PageHeader({ uploaded, setUploaded, setUploadProgress, setImages, reset, handleSubmit, images }: any) {


    const submitInfo = async (data: any) => {

        try {
            setUploaded(false)

            if (!data) return

            const formData = new FormData()

            formData.append("productInfo", JSON.stringify(data));

            images?.forEach((img: any) => {
                formData.append("images", img.file);
            });

            if (images.length === 0) {
                return toast.error("No Images selected...")
            } else if (images.length === 1) return toast.error("Product can not have just one image.")

            const uploadPromise = api.post("/product/upload", formData, {
                onUploadProgress: (progressEvent) => {
                    const percent = Math.round((progressEvent.loaded * 100) / (progressEvent.total ?? 1))
                    setUploadProgress(percent)
                }
            })

            toast.promise(uploadPromise, {
                success: (msg) => msg.data.Message,
                loading: "Processing....",
                error: "Operation Failed"
            })

            setUploaded(true)
            reset()

        } catch (error) {
            console.log(error)
            toast.error("Server Error")
        } finally {
            if (uploaded) {

                setImages([])
            }

        }
    }

    return (

        <div className="relative">

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
            </div >

        </div>

    );
}