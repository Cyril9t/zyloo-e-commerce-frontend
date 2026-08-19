
import {
    ShieldCheck,
    Lock,
    Truck,
    CreditCard,
    CheckCircle2,
    ChevronRight,
    ArrowLeft,
    Tag,
    Building2
} from "lucide-react";


import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import { Label } from "../../../components/ui/label";
import { Separator } from "../../../components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../../routes/paths";
import { useAuth, type Data, type productItem } from "../../../context/AuhProvider";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Address } from "../data";
import type { AddressType } from "../data";
import { zodResolver } from "@hookform/resolvers/zod";
import { cart } from "../../../lib/actions";
import api from "../../../lib/api";
import { date, email, size } from "zod";

export default function CheckoutPage() {
    const { trigger } = cart()
    const { items } = useAuth()
    const [paymentMethod, setPaymentMethod] = useState<"card" | "express">("card");
    const [loading, setLoading] = useState(false)
    const [promoCode, setPromoCode] = useState<string>("");
    const [discountApplied, setDiscountApplied] = useState<boolean>(false);
    const { handleSubmit, register, reset, formState: { errors } } = useForm<AddressType>({
        resolver: zodResolver(Address)
    });

    const [itemsInfo, setItemsIfo] = useState<Data>()
    const subtotal = items.reduce((acc, item) => acc + item.productItem.price * item.quantity, 0);
    const shipping = 0.00;
    const discount = discountApplied ? subtotal * 0.1 : 0;
    const tax = (subtotal - discount) * 0.08;
    const total = subtotal - discount + shipping + tax;

    const navigate = useNavigate()

    const handleApplyPromo = (e: React.FormEvent) => {
        e.preventDefault();
        if (promoCode.trim().toLowerCase() === "atelier10") {
            setDiscountApplied(true);
        }
    };


    const ChackOut = async (data: AddressType) => {
        setLoading(true)


        if (!data || !itemsInfo) return console.log("NO DATA AVAILABLE")
        try {
            const res = await api.post("/checkOut/checkOuts", { firstName: data.firstName, lastName: data.lastName, email: data.email, state: data.state, StreetAddress: data.StreetAddress, postalCode: data.postalCode, city: data.city, paymentMethod: paymentMethod, name: itemsInfo?.productItem.product.name, color: itemsInfo?.productItem.color, quantity: itemsInfo?.quantity, image: itemsInfo?.productItem.image, size: itemsInfo?.productItem.size, price: itemsInfo?.productItem.price, total: total, item: items })
            const order = await res.data

            reset();
            await api.delete("/cart/deleteCarts")

            await trigger()

            navigate(`/order-success/${order.OrderPlaced.id}`)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }



    return (
        <div className="w-full min-h-screen bg-background">

            {/* Header / Security Navbar */}
            <header className="hidden md:block sticky top-10 h-13 z-100 ">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link to={PATHS?.customer?.cart}>
                        <Button variant="default" size="sm" className="h-9 gap-2 text-xs font-semibold ">
                            <ArrowLeft className="h-3.5 w-3.5" />
                            Return to Cart
                        </Button>
                    </Link>

                    <div className="flex items-center gap-2 text-xs font-mono font-medium text-neutral-500">
                        <Lock className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>256-Bit Encrypted Checkout</span>
                    </div>
                </div>
            </header>

            {/* Main Content Split View */}
            <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

                {/* Checkout Steps Tracker */}
                <div className="flex items-center gap-2  text-neutral-400 font-medium">
                    <span>Storefront</span>
                    <ChevronRight className="h-3 w-3" />
                    <span>Cart</span>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-neutral-900 dark:text-neutral-100 font-bold">Secure Checkout</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* LEFT COLUMN: Shipping & Payment Form Controls (7/12) */}
                    <form onSubmit={handleSubmit(ChackOut)} className="lg:col-span-7 space-y-6">




                        <Card className="">
                            <CardHeader className="p-4 sm:p-6 pb-0">
                                <CardTitle className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 flex items-center justify-between">
                                    <span>1. Contact Details</span>

                                </CardTitle>
                            </CardHeader>

                            <CardContent className="p-4 sm:p-6 space-y-4">
                                <div className="space-y-1.5">
                                    <Label className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">Email Address</Label>
                                    <Input
                                        type="email"
                                        {...register("email")}
                                        placeholder="alex.morgan@example.com"
                                        className="h-9 text-xs bg-neutral-50 dark:bg-neutral-900 border-neutral-200/80 dark:border-neutral-800"
                                    />
                                    <small className="text-destructive">{errors.email?.message}</small>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="marketing" defaultChecked />
                                    <label htmlFor="marketing" className="text-xs text-neutral-500 font-medium leading-none cursor-pointer">
                                        Keep me updated on new seasonal collection drops
                                    </label>
                                </div>
                            </CardContent>
                        </Card>


                        <Card className="">
                            <CardHeader className="p-4 sm:p-6 pb-0">
                                <CardTitle className="text-2xl font-bold tracking-tight ">
                                    2. Delivery Address
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1.5">
                                        <Label className="text-[15px] font-semibold text-neutral-700 dark:text-neutral-300">First Name</Label>
                                        <Input {...register("firstName")} placeholder="Alex" className="h-9 text-xs bg-neutral-50 dark:bg-neutral-900 border-neutral-200/80 dark:border-neutral-800" />
                                        <small className="text-destructive">{errors.firstName?.message}</small>
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-[15px] font-semibold text-neutral-700 dark:text-neutral-300">Last Name</Label>
                                        <Input {...register("lastName")} placeholder="Morgan" className="h-9 text-xs bg-neutral-50 dark:bg-neutral-900 border-neutral-200/80 dark:border-neutral-800" />
                                        <small className="text-destructive">{errors.lastName?.message}</small>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <Label className="text-[15px] font-semibold text-neutral-700 dark:text-neutral-300">Street Address</Label>
                                    <Input {...register("StreetAddress")} placeholder="742 Evergreen Terrace" className="h-9 text-xs bg-neutral-50 dark:bg-neutral-900 border-neutral-200/80 dark:border-neutral-800" />
                                    <small className="text-destructive">{errors.StreetAddress?.message}</small>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    <div className="space-y-1.5">
                                        <Label className="text-[15px] font-semibold text-neutral-700 dark:text-neutral-300">City</Label>
                                        <Input {...register("city")} placeholder="New York" className="h-9 text-xs bg-neutral-50 dark:bg-neutral-900 border-neutral-200/80 dark:border-neutral-800" />
                                        <small className="text-destructive">{errors.city?.message}</small>
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-[15px] flex-row font-semibold text-neutral-700 dark:text-neutral-300">
                                            <span>State/</span><span>Region</span>
                                        </Label>
                                        <Input {...register("state")} placeholder="NY" className="h-9 text-xs bg-neutral-50 dark:bg-neutral-900 border-neutral-200/80 dark:border-neutral-800" />
                                        <small className="text-destructive">{errors.state?.message}</small>
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-[15px] font-semibold text-neutral-700 dark:text-neutral-300">Postal Code</Label>
                                        <Input
                                            type="number"
                                            {...register("postalCode", {
                                                valueAsNumber: true
                                            })} placeholder="10001" className="h-9 text-xs font-mono bg-neutral-50 dark:bg-neutral-900 border-neutral-200/80 dark:border-neutral-800" />
                                        <small className="text-destructive">{errors.postalCode?.message}</small>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>


                        <Card className="">
                            <CardHeader className="p-4 sm:p-6 pb-0">
                                <CardTitle className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
                                    3. Payment Method
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 space-y-4">
                                <RadioGroup defaultValue="card" onValueChange={(v) => setPaymentMethod(v as "card" | "express")} className="space-y-3">

                                    {/* Credit Card Option */}
                                    <div className={`flex items-start space-x-3 p-3.5 rounded-lg border transition-all ${paymentMethod === "card" ? "border-neutral-950 dark:border-white bg-neutral-50/50 dark:bg-neutral-900/60" : "border-neutral-200/80 dark:border-neutral-800"}`}>
                                        <RadioGroupItem value="card" id="card" className="mt-0.5" />
                                        <div className="flex-1 space-y-3">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="card" className="text-xl font-bold text-neutral-950 dark:text-white cursor-pointer">Credit or Debit Card</Label>
                                                <div className="flex items-center gap-1.5 text-neutral-400">
                                                    <CreditCard className="h-4 w-4" />
                                                </div>
                                            </div>

                                            {paymentMethod === "card" && (
                                                <div className="space-y-3 pt-2">
                                                    <div className="space-y-1.5">
                                                        <Label className="text-[15px] font-semibold text-neutral-500">Card Number</Label>
                                                        <Input placeholder="4532 •••• •••• 8892" className="h-9 text-xs font-mono bg-white dark:bg-neutral-950 border-neutral-200/80 dark:border-neutral-800" />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <div className="space-y-1.5">
                                                            <Label className="text-[15px] font-semibold text-neutral-500">Expiry (MM/YY)</Label>
                                                            <Input placeholder="08/28" className="h-9 text-xs font-mono bg-white dark:bg-neutral-950 border-neutral-200/80 dark:border-neutral-800" />
                                                        </div>
                                                        <div className="space-y-1.5">
                                                            <Label className="text-[15px] font-semibold text-neutral-500">CVC / CVV</Label>
                                                            <Input placeholder="382" className="h-9 text-xs font-mono bg-white dark:bg-neutral-950 border-neutral-200/80 dark:border-neutral-800" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Bank Transfer Option */}
                                    <div className={`flex items-start space-x-3 p-3.5 rounded-lg border transition-all ${paymentMethod === "express" ? "border-neutral-950 dark:border-white bg-neutral-50/50 dark:bg-neutral-900/60" : "border-neutral-200/80 dark:border-neutral-800"}`}>
                                        <RadioGroupItem value="express" id="express" className="mt-0.5" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="express" className="text-xl font-bold text-neutral-950 dark:text-white cursor-pointer">Direct Bank Transfer</Label>
                                                <Building2 className="h-4 w-4 text-neutral-400" />
                                            </div>
                                            <p className="text-[15px] text-neutral-400 mt-1">
                                                Instructions for wire transfer will be dispatched to your email immediately after confirmation.
                                            </p>
                                        </div>
                                    </div>

                                </RadioGroup>
                            </CardContent>
                        </Card>

                        {/* Submit CTA */}

                        <Button disabled={loading} className="w-full h-12 text-xs font-bold uppercase tracking-wider bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950 hover:opacity-90 shadow-sm transition-opacity">

                            Place Order — ${total.toFixed(2)}
                        </Button>


                    </form>

                    {/* RIGHT COLUMN: Order Summary (5/12) */}
                    <div className="lg:col-span-5 space-y-6">
                        <Card className="sticky top-24">
                            <CardHeader className="p-4 sm:p-2 pb-4 border-b ">
                                <CardTitle className="text-xl font-bold uppercase tracking-wider text-neutral-500">
                                    <p className="text-center">

                                        Order Summary ({items?.length})
                                    </p>
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="p-4 sm:p-6 space-y-5">

                                {items.map((item) => {
                                    useEffect(() => {
                                        setItemsIfo(item)
                                    }, [item])
                                    return (

                                        <div key={item.id} className="pt-4 first:pt-0 flex items-center gap-3">
                                            <div className="relative h-18 w-18 rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-800 shrink-0 border border-neutral-200/60 dark:border-neutral-800/60">
                                                <img src={item.productItem.image} alt={item.productItem.product.name} className="h-full w-full object-cover" />
                                                <span className="absolute top-0 right-0 h-5 w-5 rounded-bl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-[9px] font-mono font-bold flex items-center justify-center">
                                                    {item.quantity}
                                                </span>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-2xs font-bold text-neutral-900 dark:text-white truncate">{item.productItem.product.name}</h4>
                                                <p className="text-[13px] text-neutral-400 font-medium">{item?.productItem?.color} • {item.productItem.size}</p>
                                            </div>

                                            <div className="text-xs font-mono font-bold text-neutral-950 dark:text-white">
                                                ${(item.productItem.price * item.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    )
                                })}


                                <Separator className="bg-neutral-100 dark:bg-neutral-800/60 " />

                                {/* Promo Code Form */}
                                <form onSubmit={handleApplyPromo} className="flex gap-2">
                                    <div className="relative flex-1">
                                        <Tag className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
                                        <Input
                                            value={promoCode}
                                            onChange={(e) => setPromoCode(e.target.value)}
                                            placeholder="Promo code (e.g. ZYLOO10)"
                                            className="pl-8 h-9 text-xs bg-neutral-50 dark:bg-neutral-900 border-neutral-200/80 dark:border-neutral-800"
                                        />
                                    </div>
                                    <Button type="submit" variant="outline" size="sm" className="h-9 text-xs font-semibold border-neutral-200 dark:border-neutral-800">
                                        Apply
                                    </Button>
                                </form>

                                {discountApplied && (
                                    <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded border border-emerald-200/60 dark:border-emerald-800">
                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                        <span>10% promotional discount applied!</span>
                                    </div>
                                )}

                                <Separator className="bg-neutral-100 dark:bg-neutral-800/60" />

                                {/* Price Breakdown */}
                                <div className="space-y-2 text-xs font-medium">
                                    <div className="flex justify-between text-neutral-500">
                                        <span>Subtotal</span>
                                        <span className="font-mono text-neutral-900 dark:text-white">${subtotal.toFixed(2)}</span>
                                    </div>

                                    {discountApplied && (
                                        <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                                            <span>Discount</span>
                                            <span className="font-mono">-${discount.toFixed(2)}</span>
                                        </div>
                                    )}

                                    <div className="flex justify-between text-neutral-500">
                                        <span>Shipping</span>
                                        <span className="font-mono text-neutral-900 dark:text-white">Free</span>
                                    </div>

                                    <div className="flex justify-between text-neutral-500">
                                        <span>Estimated Tax</span>
                                        <span className="font-mono text-neutral-900 dark:text-white">${tax.toFixed(2)}</span>
                                    </div>

                                    <Separator className="bg-neutral-100 dark:bg-neutral-800/60 my-2" />

                                    <div className="flex justify-between items-baseline text-sm font-bold text-neutral-950 dark:text-white pt-1">
                                        <span>Total due</span>
                                        <span className="font-mono text-2xl ">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="p-4 sm:p-6 bg-neutral-50/50 dark:bg-neutral-900/50 border-t border-neutral-100 dark:border-neutral-800/60 rounded-b-xl flex items-center justify-around text-neutral-400 text-[11px] font-medium">
                                <div className="flex items-center gap-1.5">
                                    <Truck className="h-3.5 w-3.5" /> Free Express Shipping
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <ShieldCheck className="h-3.5 w-3.5" /> Buyer Guarantee
                                </div>
                            </CardFooter>
                        </Card>
                    </div>

                </div>

            </main>
        </div>
    );
}