
import { Search, Package, Truck, CheckCircle2, Clock, XCircle, ChevronRight, Download, Filter } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Badge } from "../../../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../../../components/ui/select";
import { useEffect, useState } from "react";
import { Order } from "../../../lib/actions";
import { Link } from "react-router-dom";
import { PATHS } from "../../../routes/paths";
import OrderPageSkeleton from "../../../components/common/LoadingState";


export default function OrdersPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const { trigger, data, isMutating } = Order()

    useEffect(() => {
        const orders = async () => {
            try {
                await trigger()


            } catch (error) {

                console.log(error)
            }
        }
        orders()

    }, [])

    if (isMutating) return <OrderPageSkeleton />

    return (
        <div className="w-full min-h-screen ">

            {/* Main Content Area */}
            <main className="max-w-350 mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 space-y-4 sm:space-y-5 md:space-y-6">

                {/* Page Title Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                    <div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
                            Your Orders
                        </h1>
                        <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-0.5">
                            Manage and track your previous purchases and active shipments
                        </p>
                    </div>

                    <Button variant="outline" size="sm" className="h-8 sm:h-9 text-xs font-semibold bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 self-start sm:self-auto whitespace-nowrap">
                        <Download className="h-3 sm:h-3.5 w-3 sm:w-3.5 mr-1.5 text-neutral-400" /> Export History
                    </Button>
                </div>

                {/* Search & Filter Toolbar */}
                <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
                    <CardContent className="p-2.5 sm:p-3 md:p-4 flex flex-col gap-2.5 sm:gap-3">

                        {/* Search Input */}
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
                            <Input
                                placeholder="Search by Order ID or item name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 h-8 sm:h-9 text-xs bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 focus-visible:ring-neutral-950 dark:focus-visible:ring-white"
                            />
                        </div>

                        {/* Status Filter Dropdown */}
                        <div className="flex items-center gap-2 w-full">
                            <Select value={statusFilter} onValueChange={setStatusFilter}>
                                <SelectTrigger className="h-8 sm:h-9 flex-1 sm:flex-none sm:w-44 text-xs bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                                    <div className="flex items-center gap-2">
                                        <Filter className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-neutral-400" />
                                        <SelectValue placeholder="All Statuses" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Orders</SelectItem>
                                    <SelectItem value="in-transit">In Transit</SelectItem>
                                    <SelectItem value="delivered">Delivered</SelectItem>
                                    <SelectItem value="processing">Processing</SelectItem>
                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                    </CardContent>
                </Card>

                {/* Orders List Container */}
                <div className="space-y-3 sm:space-y-4 md:space-y-5">

                    {data?.Orders?.length === 0 && (

                        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs p-6 sm:p-8 md:p-12 text-center space-y-3">
                            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mx-auto text-neutral-400">
                                <Package className="h-4 w-4 sm:h-5 sm:w-5" />
                            </div>
                            <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">No orders found</h3>
                            <p className="text-xs sm:text-sm text-neutral-500 max-w-sm mx-auto">
                                We couldn't find any orders matching your search or filter criteria.
                            </p>
                        </Card>
                    )}


                    {data?.Orders?.map((order: any) => {
                        return (

                            <Card
                                key={order.id}
                                className="shadow-2xs hover:border hover:border-neutral-500 transition-colors"
                            >
                                {/* Order Card Header */}
                                <div className="p-3 sm:p-4 md:px-6 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                                    <div className="flex flex-row sm:flex-row sm:items-center gap-3 sm:gap-4 md:gap-6 lg:gap-9 flex-wrap">
                                        <div>
                                            <span className="text-neutral-600 text-[11px] sm:text-[12px] md:text-[13px] uppercase font-bold tracking-wider block">Order ID</span>
                                            <span className="font-mono font-bold text-sm sm:text-base md:text-lg">{order.orderid}</span>
                                        </div>

                                        <div>
                                            <span className="text-neutral-600 text-[11px] sm:text-[12px] md:text-[13px] uppercase font-bold tracking-wider block">Date Placed</span>
                                            <span className="font-medium text-xs sm:text-sm">{new Date(order.orderDate).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",

                                            })}</span>
                                        </div>

                                        <div>
                                            <span className="text-neutral-600 text-[11px] sm:text-[12px] md:text-[13px] uppercase font-bold tracking-wider block">Total Amount</span>
                                            <span className="font-mono font-bold tracking-widest text-base sm:text-lg md:text-xl">₦{order?.total?.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 sm:gap-3">
                                        {OrderStatusBadge(order.status)}
                                    </div>
                                </div>

                                <div className="p-3 sm:p-4">

                                    {order?.OderItem?.map((item: any) => {
                                        return (

                                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4" key={item.id}>

                                                <div className="flex gap-3 grow justify-start">

                                                    <div className="flex shrink-0">

                                                        <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-2 border-white dark:border-neutral-900 shrink-0">
                                                            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                                        </div>

                                                    </div>

                                                    <div className="space-y-0.5 min-w-0 flex-1">
                                                        <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white truncate">
                                                            {item?.name}
                                                            {item?.quantity > 1 && <span className="text-neutral-400 font-normal"> + {item.quantity - 1} more</span>}
                                                        </h4>
                                                        <p className="text-[11px] text-neutral-400 font-mono">
                                                            {item?.quantity} {item?.quantity === 1 ? "Item" : "Items"}
                                                        </p>
                                                    </div>

                                                </div>

                                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto shrink-0">

                                                    {order.status === "PROCESSING" && (
                                                        <Button variant="outline" size="sm" className="h-8 text-xs font-semibold bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 w-full sm:w-auto">
                                                            <Truck className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1.5 text-neutral-400" /> Track
                                                        </Button>
                                                    )}

                                                    <Link to={`/orders/${order.orderid}`} className="w-full sm:w-auto">

                                                        <Button size="sm" className="h-8 text-xs font-bold uppercase tracking-wider bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950 hover:opacity-90 w-full sm:w-auto">
                                                            View Details <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 ml-1" />
                                                        </Button>
                                                    </Link>

                                                </div>

                                            </div>

                                        )
                                    })}
                                </div>
                            </Card>
                        )
                    }
                    )}
                </div>

            </main>
        </div>
    );
}


function OrderStatusBadge(status: string) {
    switch (status) {
        case "PROCESSING":
            return (
                <Badge variant="secondary" className="bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400 border-amber-200/60 dark:border-amber-800 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                    <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" /> {status}
                </Badge>
            );

        case "DELIVERED":
            return (
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                    <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" /> {status}
                </Badge>
            );
        case "CANCELLED":
            return (
                <Badge variant="secondary" className="bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400 border-rose-200/60 dark:border-rose-800 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                    <XCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" /> {status}
                </Badge>
            );
    }
}