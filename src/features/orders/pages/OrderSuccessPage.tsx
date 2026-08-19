import { useEffect, useState } from "react";

import {
    CheckCircle2,
    Package,
    Truck,
    ArrowRight,
    Download,
    ShoppingBag,
    Mail,
    Share2,
    Calendar,
    MapPin
} from "lucide-react";


import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Link } from "react-router-dom";
import { PATHS } from "../../../routes/paths";
import { useParams } from "react-router-dom";
import api from "../../../lib/api";
import ECommercePageLoader from "../../../components/common/UniversalLoadingState";


interface PurchasedItem {
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
    email: string;
    firstName: string;
    lastName: string;
    paymentMethod: string;
    postalCode: string;
    state: string;
}


export interface OrderSuccess {
    Address: Address[];
    OderItem: PurchasedItem[];
    id: string;
    orderDate: string;
    orderid: string;
    status: string;
    total: number;
}

export type OrderDetails = {
    OrderSuccess: OrderSuccess
}


export default function OrderSuccessPage() {
    const { id } = useParams()
    const [orderDetails, setOrderDetails] = useState<OrderSuccess | null>(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const Order = async () => {
            try {
                const Order = await api.get(`/Order/OrderSuccess/${id}`)
                const data = await Order.data

                setOrderDetails(data?.OrderSuccess)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        Order()
    }, [id])


    if (isLoading) return (<ECommercePageLoader variant="list" fullScreen={false} />)



    return (
        <div className="w-full min-h-screen  selection:bg-neutral-200">

            {/* Storefront Mini Header */}

            {/* Main Content Area */}
            <main className="max-w-3xl mx-auto px-2 sm:px-6 py-5 space-y-8">

                {/* Success Hero Header */}
                <div className="text-center space-y-3">
                    <div className="flex flex-col justify-self-center">

                        <div className="justify-center">
                            <span className="inline-flex h-30 w-30 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800 items-center justify-center mb-5">
                                <CheckCircle2 className="h-15 w-15 text-emerald-600 dark:text-emerald-400" />
                            </span>
                        </div>

                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800 text-[13px] font-bold uppercase tracking-wider p-3">
                            Payment Confirmed
                        </Badge>
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
                        Order Successfully Placed!
                    </h1>

                    <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
                        We've received your order and sent a confirmation receipt to{" "}
                        <span className="font-semibold text-neutral-900 dark:text-white">{orderDetails?.Address[0].email}</span>.
                    </p>
                </div>

                <Card className="  shadow-2xs">
                    <CardHeader className="p-4 sm:p-3 border-b border-border dark:border-neutral-800/60 flex flex-row items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="text-[15px] text-neutral-500 uppercase tracking-wider font-bold">Order Number</div>
                            <div className="text-[17px] font-mono font-bold text-foreground ">{orderDetails?.orderid}</div>
                        </div>
                        <Badge variant="outline" className=" font-mono font-semibold text-[15px] p-3">
                            ₦{orderDetails?.total}
                        </Badge>
                    </CardHeader>

                    <CardContent className="p-4 sm:p-1 space-y-6">


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-lg text-xs">
                            <div className="space-y-1">
                                <div className="flex items-center gap-1.5 text-neutral-500 font-bold uppercase tracking-wider text-[12px]">
                                    <Calendar className="h-4 w-4" /> Estimated Delivery
                                </div>
                                <div className="font-bold text-[11px] text-neutral-900 dark:text-white">{orderDetails?.orderDate}</div>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center gap-1.5 text-neutral-600 font-bold uppercase tracking-wider text-[12px]">
                                    <MapPin className="h-4 w-4" /> Ship To
                                </div>
                                <div className="font-medium  truncate">{orderDetails?.Address[0].StreetAddress}{' '},{orderDetails?.Address[0].state},{' '}{orderDetails?.Address[0].postalCode}</div>
                            </div>
                        </div>

                        <div className="space-y-4 mt-6 mb-3 p-5">
                            <div className="text-[15px] font-bold uppercase tracking-wider text-neutral-600">
                                Order Items ({orderDetails?.OderItem?.length})
                            </div>

                            <div className="divide-y divide-neutral-100 dark:divide-neutral-800/60">
                                {orderDetails?.OderItem?.map((item) => (
                                    <div key={item.id} className="py-3 first:pt-0 last:pb-0 flex items-center gap-3">
                                        <div className="h-20 w-20 rounded-md overflow-hidden  shrink-0 border border-border ">
                                            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-[14px] font-bold text-neutral-900 dark:text-white truncate">{item.name}</h4>
                                            <p className="text-[11px] text-neutral-600 font-medium">{item.color} • {item.size} • Qty: {item.quantity}</p>
                                        </div>

                                        <div className="text-[16px] font-mono font-bold text-neutral-950 dark:text-white">
                                            ₦{(item.price * item.quantity).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </CardContent>

                    <CardFooter className="p-4 sm:p-6 bg-neutral-50/30 dark:bg-neutral-900/30 border-t border-neutral-100 dark:border-neutral-800/60 flex flex-col sm:flex-row gap-3">
                        <Button className="w-full sm:flex-1 h-9 text-xs font-bold uppercase tracking-wider bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950 hover:opacity-90">
                            <Link to={`/orders/${orderDetails?.orderid}`} className="flex">
                                View OrderDetails <ArrowRight className="h-3.5 w-3.5 ml-2" />
                            </Link>
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto h-9 text-xs font-semibold border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                            <ShoppingBag className="h-3.5 w-3.5 mr-1.5" /> Continue Shopping
                        </Button>
                    </CardFooter>
                </Card>


                <div className="text-center text-xs text-neutral-6  00 space-y-1">
                    <p>Need to make changes to your order? Contact support within 2 hours.</p>
                    <p className="font-semibold text-neutral-900 dark:text-neutral-200">support@zyloo.com</p>
                </div>

            </main>
        </div>
    );
}