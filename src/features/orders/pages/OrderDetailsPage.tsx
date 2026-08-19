
import { CheckCircle2, Truck, MapPin, CreditCard, Download, ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Separator } from "../../..//components/ui/separator";
import { Link, useParams } from "react-router-dom";
import { PATHS } from "../../../routes/paths";
import { useEffect, useState } from "react";
import api from "../../../lib/api";



interface OderItem {
    id: string;
    name: string;
    color: string;
    size: string;
    price: number;
    quantity: number;
    image: string;
}

interface Address {
    StreetAddress: string;
    city: string;
    state: string;
    email: string;
    postalCode: string;
    paymentMethod: string;
}
interface OrderDetails {
    orderid: string;
    orderDate: string;
    status: string;
    paymentMethod: string;
    cardLast4: string;
    OderItem: OderItem[];
    Address: Address[];
    total: number;
}


export default function OrderDetailsPage() {
    const { id } = useParams()
    const [order, setOrder] = useState<OrderDetails | null>(null)
    useEffect(() => {
        const getOrderDetails = async () => {
            try {
                const order = await api.get(`/Order/order/${id}`)
                const res = await order.data

                setOrder(res.Order)
            } catch (error) {
                console.log(error)
            }
        }

        getOrderDetails()
    }, [])

    return (
        <div className="w-full min-h-screen bg-background">

            <header className="sticky top-1 z-40 w-full h-13  bg-background border-b border-border">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                    <Link to={PATHS.customer.orders}>
                        <Button variant="ghost" size="sm" className="h-8 gap-2 text-xs font-semibold ">
                            <ArrowLeft className="h-3.5 w-3.5" /> Back to Orders
                        </Button>
                    </Link>

                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 text-xs font-semibold bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                            <Download className="h-3.5 w-3.5 mr-1.5 text-neutral-500" /> Invoice PDF
                        </Button>
                    </div>
                </div>
            </header>


            <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
                <div className="border hover:border hover:border-neutral-500  transition-colors rounded-xl p-6 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-6">

                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <div className="h-15 w-15 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl md:text-3xl font-bold tracking-tight ">
                                    Thank you for your order!
                                </h1>
                                {OrderStatusBadge(order?.status)}
                            </div>
                            <p className="text-foreground/50 font-medium">
                                Confirmation email dispatched to <span className="text-neutral-950 dark:text-white font-semibold">{order?.Address.map((A) => A.email)}</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start md:items-end gap-1 font-mono  text-foreground/50">
                        <span>Order Reference:</span>
                        <span className="font-bold text-foreground text-[14px]">{order?.orderid}</span>
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">


                    <div className="lg:col-span-7 space-y-6">


                        <Card className=" shadow-2xs hover:border hover:border-neutral-500  transition-colors">
                            <CardHeader className="p-4 sm:p-6 pb-4 border-b border-neutral-100 dark:border-neutral-800/60">
                                <CardTitle className="font-bold uppercase tracking-wider text-foreground/60">
                                    Items in Order ({order?.OderItem?.length})
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-7 -mt-7 space-y-4">
                                <div className="divide-y divide-ring/50">
                                    {order?.OderItem?.map((item) => (
                                        <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex items-center gap-4">
                                            <div className="h-20 w-20 rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-800 shrink-0 border border-neutral-200/60 dark:border-neutral-800/60">
                                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                            </div>

                                            <div className="flex-1 min-w-0 space-y-1">
                                                <h4 className="text-[15px] font-bold truncate">{item.name}</h4>

                                                <p className="text-[12px] text-foreground/70 font-medium">
                                                    Color: {item.color} • Size: {item.size} • Qty: {item.quantity}
                                                </p>
                                            </div>

                                            <div className="text-right font-mono text-[14px] font-bold tracking-widest">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                    </div>


                    <div className="lg:col-span-5 space-y-6">


                        <Card className="shadow-2xs hover:border hover:border-neutral-500  transition-colors">
                            <CardHeader className="p-4 sm:p-3 ml-6 pb-4 border-b border-ring/30 ">
                                <CardTitle className="text-[14px] font-bold uppercase tracking-wider text-foreground/70">
                                    Payment Summary
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-7 space-y-3  font-medium">
                                <div className="flex justify-between ">
                                    <span>Subtotal</span>
                                    <span className="font-mono">${order?.total.toFixed(2)}</span>
                                </div>


                                <div className="flex justify-between text-neutral-500">
                                    <span>Shipping</span>
                                    <span className="font-mono text-neutral-900 dark:text-white">Free</span>
                                </div>


                                <Separator className="bg-ring/50 my-2" />

                                <div className="flex justify-between items-baseline text-sm font-bold text-neutral-950 dark:text-white pt-1">
                                    <span>Total Paid</span>
                                    <span className="font-mono text-base">${order?.total.toFixed(2)}</span>
                                </div>
                            </CardContent>
                        </Card>


                        <Card className="shadow-2xs hover:border hover:border-neutral-500  transition-colors">
                            {order?.Address?.map((A) => {
                                return (


                                    <CardContent key={A.postalCode} className="p-4 sm:p-6 space-y-7">

                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2  font-bold uppercase tracking-wider text-foreground/65">
                                                <MapPin className="h-4 w-4" /> Shipping Address
                                            </div>

                                            <div className="text-[13px] text-foreground/70 space-y-0.5 pl-5 font-medium">
                                                <div className="font-bold text-neutral-950 dark:text-white">{A.StreetAddress}, {A.postalCode}</div>

                                                <div>{A.city}, {A.state} </div>

                                            </div>
                                        </div>

                                        <Separator className="bg-ring/30" />


                                        <div className="space-y-2.5">
                                            <div className="flex items-center gap-2 font-bold uppercase tracking-wider">
                                                <CreditCard className="h-4 w-4" /> Billing Method
                                            </div>
                                            <div className="text-[14px] text-foreground/70 pl-5 font-medium">
                                                {A.paymentMethod} <span className="font-mono font-bold">•••• 496</span>
                                            </div>
                                        </div>

                                        <Separator className="bg-ring/30" />


                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2  font-bold uppercase tracking-wider ">
                                                <Truck className="h-4 w-4" /> Courier Method
                                            </div>
                                            <div className="text-[13px] font-foreground pl-5 font-medium space-y-1">
                                                <div>Emirate Airline</div>

                                                <div className="font-mono text-foreground/60 text-[14px] flex items-center gap-1">
                                                    <span>Tracking: 93193</span>
                                                    <ExternalLink className="h-4 w-4 cursor-pointer hover:text-neutral-950 dark:hover:text-white" />
                                                </div>
                                            </div>
                                        </div>

                                    </CardContent>
                                )
                            })}
                        </Card>

                    </div>

                </div>

            </main>
        </div>
    );
}


function OrderStatusBadge(status: any) {
    switch (status) {
        case "PROCESSING":
            return (
                <Badge variant="secondary" className="bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400 border-amber-200/60 dark:border-amber-800 text-[12px] font-bold uppercase tracking-wider p-3">
                    Processing
                </Badge>
            );
        case "DELIVERED":
            return (
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 border-blue-200/60 dark:border-blue-800 text-[10px] font-bold uppercase tracking-wider">
                    Shipped
                </Badge>
            );

        case "CANCELED":
            return (
                <Badge variant="secondary" className="bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400 border-rose-200/60 dark:border-rose-800 text-[10px] font-bold uppercase tracking-wider">
                    Cancelled
                </Badge>
            );
    }
}