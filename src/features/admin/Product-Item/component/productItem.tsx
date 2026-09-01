import { CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Link, useParams } from "react-router-dom";
import { productItem } from "../../../../lib/actions";
import { toast } from "sonner";
import { productItemInfo } from "../data";
import type { productItemType } from "../data";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../../components/ui/button";
import { useState, type ChangeEvent } from "react";
import type { ImagePreview } from "../../products/pages/AddProductPage";
import { cn } from "../../../../lib/utils";
import api from "../../../../lib/api";
import { PATHS } from "../../../../routes/paths";
import { UploadCloud, X } from "lucide-react";

function ProductItem() {
    const { id } = useParams()
    const [isLoading, setIsloading] = useState(false)



    const [images, setImages] = useState<ImagePreview[]>([])

    const fileUpload = (e: ChangeEvent<HTMLInputElement>) => {

        const selectedFiles = Array.from(e.target.files || []);

        const preview = selectedFiles.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }))

        setImages(prev => [...prev, ...preview])

    };


    const { handleSubmit, register, formState: { errors }, reset } = useForm<productItemType>({
        resolver: zodResolver(productItemInfo)
    })



    const uploadProductItems = async (data: productItemType) => {
        setIsloading(true)
        try {

            const formData = new FormData()

            formData.append("productItemInfo", JSON.stringify(data))

            images?.forEach((img: any) => {
                formData.append("images", img.file);
            });

            if (!id) return

            if (images.length === 0) {
                setIsloading(false)
                return toast.warning("No Image selected for this productItem")
            }

            await api.post(`/product/product-item/${id}`, formData, {
                onUploadProgress: (progressEvent) => {
                    Math.round((progressEvent.loaded * 100) / (progressEvent.total ?? 1))

                }
            })



            setIsloading(false)
            setImages([])
            reset()

            toast.success("Item Added to the Product created")

        } catch (error) {
            setIsloading(false)
            toast.error("Operation failed")
            console.log(error)
        }
    }

    return (
        <div className="max-w-7xl mx-auto space-y-6 p-2 sm:p-3">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-5">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                        Add Product Variant
                    </h1>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        Configure pricing, stock levels, color scheme, and visual assets for this variant.
                    </p>
                </div>
            </div>


            <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm overflow-hidden transition-all">
                <CardHeader className="p-6 border-b border-neutral-100 dark:border-neutral-800/60 bg-neutral-50/50 dark:bg-neutral-900/50">
                    <CardTitle className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Item Specifications
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                        Set core numerical data and define color swatch properties for the storefront.
                    </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                    <form onSubmit={handleSubmit(uploadProductItems)} className="space-y-8">


                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">


                            <div className="space-y-2">
                                <Label htmlFor="prod-price" className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                                    Price (₦)
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="prod-price"
                                        type="number"
                                        placeholder="128.00"
                                        {...register("price", { valueAsNumber: true })}
                                        className="w-full focus-visible:ring-1 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-300"
                                    />
                                </div>
                                {errors.price?.message && (
                                    <p className="text-xs font-medium text-rose-500 mt-1">{errors.price.message}</p>
                                )}
                            </div>


                            <div className="space-y-2">
                                <Label htmlFor="prod-color" className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                                    Color Swatch
                                </Label>
                                <div className="flex items-center gap-3 h-10 px-3 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
                                    <input
                                        id="prod-color"
                                        type="color"
                                        {...register("color")}
                                        className="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded [&::-webkit-color-swatch]:border-0"
                                    />
                                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase">
                                        Select Color
                                    </span>
                                </div>
                                {errors.color?.message && (
                                    <p className="text-xs font-medium text-rose-500 mt-1">{errors.color.message}</p>
                                )}
                            </div>


                            <div className="space-y-2">
                                <Label htmlFor="prod-tags" className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                                    Stock Quantity
                                </Label>
                                <Input
                                    id="prod-tags"
                                    type="number"
                                    placeholder="e.g. 24"
                                    {...register("stock", { valueAsNumber: true })}
                                    className="w-full focus-visible:ring-1 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-300"
                                />
                                {errors.stock?.message && (
                                    <p className="text-xs font-medium text-rose-500 mt-1">{errors.stock.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="prod-tags" className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                                    Size
                                </Label>
                                <Input
                                    id="prod-tags"
                                    type="text"
                                    placeholder="e.g. S M L XL XS"
                                    {...register("size")}
                                    className="w-full focus-visible:ring-1 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-300"
                                />
                                {errors.stock?.message && (
                                    <p className="text-xs font-medium text-rose-500 mt-1">{errors.size?.message}</p>
                                )}
                            </div>

                        </div>

                        {/* Media Upload Section */}
                        <div className="space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                            <div>
                                <h3 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                                    Product Images
                                </h3>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                                    Upload high-resolution media for storefront gallery mapping.
                                </p>
                            </div>

                            {/* Drag and Drop Zone */}
                            <div className="relative border-2 border-dashed border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 rounded-xl p-8 text-center bg-neutral-50/40 dark:bg-neutral-950/40 transition-all cursor-pointer group flex flex-col items-center justify-center">
                                <input
                                    type="file"

                                    onChange={fileUpload}
                                    className="h-full w-full absolute inset-0 z-10 opacity-0 cursor-pointer"
                                />
                                <div className="p-3 rounded-full bg-white dark:bg-neutral-900 shadow-xs border border-neutral-200/60 dark:border-neutral-800 mb-3 group-hover:scale-105 transition-transform">
                                    <UploadCloud className="h-5 w-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                                    Click to upload or drag and drop
                                </span>
                                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                                    PNG, JPG, or WEBP (Max 15MB per file)
                                </p>
                            </div>

                            {/* Image Previews Grid */}
                            {images && images.length > 0 && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 pt-2">
                                    {images.map((img: any) => (
                                        <div
                                            key={crypto.randomUUID()}
                                            className={cn(
                                                "group relative aspect-square bg-neutral-100 dark:bg-neutral-950 rounded-lg overflow-hidden border transition-all shadow-xs",
                                                img.isFeatured
                                                    ? "border-neutral-950 dark:border-white ring-2 ring-neutral-950 dark:ring-white"
                                                    : "border-neutral-200 dark:border-neutral-800"
                                            )}
                                        >
                                            <img
                                                src={img?.preview}
                                                alt=""
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-neutral-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                                                <div className="flex justify-end">
                                                    <button
                                                        type="button"
                                                        className="p-1.5 bg-white/90 dark:bg-neutral-900/90 rounded-md text-neutral-600 dark:text-neutral-300 hover:text-rose-600 dark:hover:text-rose-400 shadow-sm transition-colors backdrop-blur-xs"
                                                    >
                                                        <X className="h-3.5 w-3.5" />
                                                    </button>
                                                </div>
                                                <div className="truncate px-1">
                                                    <span className="text-[10px] font-mono text-white truncate block">
                                                        {img.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Submit Actions */}
                        <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                            <Button
                                disabled={isLoading}
                                type="submit"
                                variant="default"
                                className="w-full sm:w-auto px-6 font-medium"
                            >
                                {isLoading ? "Saving..." : "Save Variant Item"}
                            </Button>
                        </div>

                    </form>
                    <br />
                    <Button
                        disabled={isLoading}
                        type="submit"
                        variant="outline"
                        className="w-full sm:w-auto px-6 font-medium"
                    >
                        <Link to={PATHS.admin.products}>

                            Finished
                        </Link>
                    </Button>
                </CardContent>
            </div>
        </div>
    );
}

export default ProductItem;