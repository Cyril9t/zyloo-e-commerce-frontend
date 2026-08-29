import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../../lib/api";
import { createCart } from "../../../lib/actions";

import {
    Star,
    Heart,
    Truck,
    ShieldCheck,
    RotateCcw,
    ChevronRight,
    Minus,
    Plus,
    Check,
    ShoppingCart,
} from "lucide-react";

import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { string } from "zod";
import { map } from "zod/v3";
import { PATHS } from "../../../routes/paths";
import { toast } from "sonner";
import { getAllUser } from "../../../context/userContext";
import { useAuth } from "../../../context/AuthProvider";


export interface Category {
    id: string;
    name: string;
}

export interface Image {
    id: string;
    productImages: string;
}

export interface ProductItem {
    id: string;
    color: string | null,
    createdAt: string,
    price: number,
    productId: string,
    size: string | null,
    stock: number,
    image: string,
    updatedAt: string
}

export interface Tag {
    id: string;
    name: string;
}

export interface ProductDetails {
    id: string;
    name: string;
    description: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    category: Category[];
    images: Image[];
    productItems: ProductItem[];
    tags: Tag[];
}



export default function ProductDetailsPage() {

    const { id } = useParams();
    const { trigger } = createCart()
    const { setCartCount } = useAuth()
    const [selectedImage, setSelectedImage] = useState<string>("")
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [color, setColor] = useState<string | null>(null);
    const [productItemId, setProductItemId] = useState<string | null>("")
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedPrice, setSelectedPrice] = useState<number | null>();
    const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
    const [stock, setStock] = useState<number | null>(1)
    const [productDetail, setProductDetail] = useState<ProductDetails | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log(id)

        const productDetail = async () => {

            try {
                const res = await api.get(`/product/productsDetails/${id}`)
                const data = res.data
                setProductDetail(data.ProductDetails)


            } catch (error) {
                console.log(error)
            }
        }

        productDetail();

    }, [id])


    const AddToCart = async () => {
        try {
            setIsLoading(true)
            if (!productItemId) {
                setIsLoading(false)
                toast.warning("SelectItem To add to cart")
                return
            }

            const res = await trigger({ productItemId: productItemId as string, quantity: quantity })
            const data = await res
            setCartCount(prev => prev + 1)

            toast.success("Item added to Cart")
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    }




    useEffect(() => {
        const initCol = productDetail?.productItems[0]?.color ?? null

        setSelectedColor(initCol)

    }, [productDetail])


    useEffect(() => {

        setSelectedColor(color);
    }, [color,]);

    useEffect(() => {
        // const price = productDetail?.productItems[0]?.price
        // const stocks = productDetail?.productItems[0]?.stock
        // setSelectedPrice(price ?? null)
        // setStock(stocks ?? null)
    })


    return (
        <div className="w-full min-h-screen ">
            <main className="max-w-350 mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 space-y-8 sm:space-y-10 md:space-y-12">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-neutral-400 font-medium flex-wrap">
                    <Link to={PATHS.customer.products}>
                        <span>Shop</span>
                    </Link>
                    <ChevronRight className="h-3 w-3" />
                    {productDetail?.category?.map((p, idx) => (
                        <span key={idx}>{p.name}</span>
                    ))}
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-neutral-900 dark:text-neutral-100 font-semibold truncate">{productDetail?.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start">

                    <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 md:gap-4">

                        <div className="flex-1 rounded-lg overflow-hidden border border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-100 dark:bg-neutral-900 relative h-64 sm:h-96 md:h-125 lg:h-auto lg:aspect-4/5">
                            <img
                                src={!selectedImage ? productDetail?.productItems[0]?.image : selectedImage}
                                alt={productDetail?.name}
                                className="h-full w-full object-cover object-center"
                            />
                            <Badge className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-bold text-[8px] sm:text-[10px] uppercase tracking-wider px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-xs">
                                {productDetail?.tags.map((t, key) => (
                                    <span key={key}>{t.name}</span>
                                ))}
                            </Badge>
                        </div>

                    </div>

                    <div className="lg:col-span-5 space-y-4 sm:space-y-5 md:space-y-6">
                        <div className="space-y-2 border-b border-neutral-100 dark:border-neutral-800/60 pb-6">
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-xl font-mono text-neutral-400">sku</span>
                                <div className="text-xl flex items-center gap-4 font-mono font-bold text-neutral-700 dark:text-neutral-300">
                                    <div className="flex">
                                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                                    </div>
                                    <span className=" text-neutral-400 font-normal">15 reviews</span>
                                </div>
                            </div>
                            <h1 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
                                {productDetail?.name}
                            </h1>
                            <div className="flex items-baseline gap-3 font-mono pt-1">




                                <span className="text-xl font-bold text-neutral-950 dark:text-white">
                                    ₦{selectedPrice}
                                </span>



                            </div>
                        </div>

                        <div className="space-y-2   sm:space-y-2.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                                Color: <span className="text-neutral-900 dark:text-white font-normal text-xs">{selectedColor}</span>
                            </label>
                            <div className="flex items-center gap-4 sm:gap-4 flex-wrap mt-3">
                                {productDetail?.productItems?.map((c) => (
                                    <button
                                        key={c.id}
                                        style={{ backgroundColor: `${c.color}` }}
                                        className={`h-6 w-6 sm:h-7 sm:w-7 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center transition-transform ${selectedColor === c.color ? "ring-2 ring-neutral-950 dark:ring-white ring-offset-2 dark:ring-offset-neutral-950 scale-110" : "hover:scale-105"
                                            }`}
                                    >
                                        {c.color == selectedColor && (
                                            <Check className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${selectedColor ? "text-neutral-900" : "text-white"}`} />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>



                        <div className="space-y-2 sm:space-y-2.5">
                            <div className="flex items-center justify-between text-xs">
                                <label className="font-bold uppercase tracking-wider text-neutral-400">Size</label>
                                <button className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white font-semibold underline text-xs">Size Guide</button>
                            </div>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1.5 sm:gap-2">

                                <Button
                                    variant="outline"
                                    className="h-8 sm:h-9 text-xs font-semibold bg-background border-border"

                                >
                                    {selectedSize}
                                </Button>

                            </div>
                        </div>

                        <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
                            <div className="flex  flex-row items-center gap-2 sm:gap-3">
                                <div className="flex items-center border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-900 h-9 sm:h-10 px-1">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-7 w-7 sm:h-8 sm:w-8 text-neutral-400"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        <Minus className="h-3 w-3" />
                                    </Button>
                                    <span className="w-6 sm:w-8 text-center text-xs font-mono font-bold">{quantity}</span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-7 w-7 sm:h-8 sm:w-8 text-neutral-400"
                                        onClick={() => setQuantity(quantity + 1)}

                                    >
                                        <Plus className="h-3 w-3" />
                                    </Button>
                                </div>

                                <Button onClick={AddToCart} disabled={isLoading} className="md:h-10 md:w-70">
                                    <ShoppingCart className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 sm:mr-2" /> Add to Cart
                                </Button>

                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setIsWishlisted(!isWishlisted)}
                                    className="h-9 w-9 sm:h-10 sm:w-10 border-neutral-200 dark:border-neutral-800"
                                >
                                    <Heart className={`h-4 w-4 ${isWishlisted ? "fill-rose-500 text-rose-500" : "text-neutral-400"}`} />
                                </Button>
                            </div>

                            <p className="text-xs sm:text-sm opacity-80 text-center font-medium">
                                In stock ({stock} units remaining) — Ships within 24 hours.
                            </p>
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-neutral-100 dark:border-neutral-800/60 text-xs sm:text-[11px] text-neutral-500 font-medium">
                            <div className="flex items-center gap-2">
                                <Truck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-neutral-400 shrink-0" />
                                <span>Free Shipping</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <RotateCcw className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-neutral-400 shrink-0" />
                                <span>30-Day Returns</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-neutral-400 shrink-0" />
                                <span>2-Yr Warranty</span>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="flex gap-2 sm:gap-3 shrink-0 overflow-x-auto pb-2">
                    {productDetail?.productItems?.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setProductItemId(img.id)
                                setSelectedImage(img?.image)
                                setSelectedPrice(img.price)
                                setSelectedSize(img.size)
                                setColor(img.color)
                                setStock(img.stock)
                            }}
                            className={`relative h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 rounded-md overflow-hidden border bg-white dark:bg-neutral-900 transition-all shrink-0 ${selectedImage === img.image
                                ? "border-neutral-950 dark:border-white ring-1 ring-neutral-950 dark:ring-white"
                                : "border-neutral-200 dark:border-neutral-800 opacity-70 hover:opacity-100"
                                }`}
                        >
                            <img src={img.image} alt="" className="h-full w-full object-cover" />
                        </button>
                    ))}
                </div>


                <div className="pt-6 sm:pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60 max-w-4xl">
                    <Tabs defaultValue="details">
                        <TabsList className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 h-8 sm:h-9 p-1 mb-4 sm:mb-6 w-full sm:w-auto">
                            <TabsTrigger value="details" className="text-xs px-2 sm:px-4 h-6 sm:h-7 font-medium">Details & Fit</TabsTrigger>
                            <TabsTrigger value="fabric" className="text-xs px-2 sm:px-4 h-6 sm:h-7 font-medium">Fabric & Care</TabsTrigger>
                            <TabsTrigger value="reviews" className="text-xs px-2 sm:px-4 h-6 sm:h-7 font-medium">Reviews 12</TabsTrigger>
                        </TabsList>

                        <TabsContent value="details" className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            <p>{productDetail?.description}</p>
                            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-neutral-500">
                                <li>Structured lapel collars with padded internal architecture</li>
                                <li>Interior passport & card slots</li>
                                <li>Hand-stitched horn buttons</li>
                            </ul>
                        </TabsContent>

                        <TabsContent value="fabric" className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 space-y-2 sm:space-y-3">
                            <p><strong>Composition:</strong> 70% Mulberry Silk, 30% Virgin Wool.</p>
                            <p><strong>Care:</strong> Dry clean only. Do not tumble dry. Low-heat iron with cloth buffer.</p>
                        </TabsContent>

                        <TabsContent value="reviews" className="space-y-3 sm:space-y-4">
                            <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/60">
                                <Avatar className="h-7 w-7 sm:h-8 sm:w-8 shrink-0">
                                    <AvatarFallback className="text-[10px] font-bold">SJ</AvatarFallback>
                                </Avatar>
                                <div className="space-y-0.5 flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">Sarah J.</span>
                                        <div className="flex text-amber-400"><Star className="h-3 w-3 fill-amber-400" /></div>
                                    </div>
                                    <p className="text-xs sm:text-sm text-neutral-500">Exquisite draping and weight. Perfectly tailored for seasonal layering.</p>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

            </main>
        </div>
    );
}