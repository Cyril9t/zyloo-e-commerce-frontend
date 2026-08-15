import * as React from "react";
import {
    CheckCircle2,
    Package,
    Truck,
    MapPin,
    CreditCard,
    Download,
    Mail,
    ArrowLeft,
    Clock,
    ChevronRight,
    ExternalLink
} from "lucide-react";

// ==========================================
// SHADCN/UI PRIMITIVES (Mocked Paths)
// ==========================================
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Separator } from "../../..//components/ui/separator";
import { Link } from "react-router-dom";
import { PATHS } from "../../../routes/paths";

// ==========================================
// CORE STATE TYPES
// ==========================================
interface PurchasedItem {
    id: string;
    name: string;
    sku: string;
    color: string;
    size: string;
    price: number;
    quantity: number;
    image: string;
}

interface OrderDetails {
    orderId: string;
    date: string;
    estimatedDelivery: string;
    trackingNumber: string;
    carrier: string;
    status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
    paymentMethod: string;
    cardLast4: string;
    items: PurchasedItem[];
    shippingAddress: {
        name: string;
        street: string;
        city: string;
        state: string;
        zip: string;
        country: string;
    };
    subtotal: number;
    discount: number;
    tax: number;
    shipping: number;
    total: number;
}

// ==========================================
// MAIN ORDER DETAILS / CONFIRMATION PAGE
// ==========================================
export default function OrderDetailsPage() {
    const order: OrderDetails = {
        orderId: "ORD-2026-8841",
        date: "Aug 11, 2026",
        estimatedDelivery: "Aug 14, 2026",
        trackingNumber: "TRK-904821094-US",
        carrier: "FedEx Express",
        status: "Processing",
        paymentMethod: "Visa ending in",
        cardLast4: "8892",
        items: [
            {
                id: "PRD-01",
                name: "Silk Structural Blazer",
                sku: "AT-BLZ-MER-26",
                color: "Onyx Black",
                size: "M",
                price: 450.00,
                quantity: 1,
                image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300&q=80"
            },
            {
                id: "PRD-04",
                name: "Pleated Tailored Trousers",
                sku: "AT-TRS-PLT-26",
                color: "Slate Grey",
                size: "M",
                price: 195.00,
                quantity: 1,
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&q=80"
            }
        ],
        shippingAddress: {
            name: "Alex Morgan",
            street: "742 Evergreen Terrace",
            city: "New York",
            state: "NY",
            zip: "10001",
            country: "United States"
        },
        subtotal: 645.00,
        discount: 64.50,
        tax: 46.44,
        shipping: 0.00,
        total: 626.94
    };

    // Timeline Steps Data
    const timelineSteps = [
        { label: "Order Placed", date: "Aug 11, 10:34 AM", completed: true },
        { label: "Processing", date: "In Progress", completed: true, active: true },
        { label: "Shipped", date: "Pending", completed: false },
        { label: "Delivered", date: "Est. Aug 14", completed: false }
    ];

    return (
        <div className="w-full min-h-screen bg-neutral-50/60 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 antialiased selection:bg-neutral-200">

            {/* Header Navigation */}
            <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-800/60">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="h-8 gap-2 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                        <Link to={PATHS.customer.orders}>
                            <ArrowLeft className="h-3.5 w-3.5" /> Back to Storefront
                        </Link>
                    </Button>

                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 text-xs font-semibold bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                            <Download className="h-3.5 w-3.5 mr-1.5 text-neutral-400" /> Invoice PDF
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

                {/* Order Success Header Banner */}
                <div className="bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60 rounded-xl p-6 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
                                    Thank you for your order!
                                </h1>
                                <OrderStatusBadge status={order.status} />
                            </div>
                            <p className="text-xs text-neutral-500 font-medium">
                                Confirmation email dispatched to <span className="text-neutral-950 dark:text-white font-semibold">alex.morgan@example.com</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start md:items-end gap-1 font-mono text-xs text-neutral-400">
                        <span>Order Reference:</span>
                        <span className="font-bold text-neutral-950 dark:text-white text-sm">{order.orderId}</span>
                    </div>
                </div>

                {/* Main Split Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Tracking & Line Items (7/12) */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* Fulfillment Tracker Progress Bar */}
                        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
                            <CardHeader className="p-4 sm:p-6 pb-2">
                                <CardTitle className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center justify-between">
                                    <span>Fulfillment Status</span>
                                    <span className="text-neutral-950 dark:text-white font-mono font-semibold">Est. Delivery {order.estimatedDelivery}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 pt-4">
                                <div className="grid grid-cols-4 gap-2 relative">
                                    {timelineSteps.map((step, idx) => (
                                        <div key={idx} className="flex flex-col items-center text-center space-y-2">
                                            <div
                                                className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold z-10 border transition-colors ${step.active
                                                    ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 border-neutral-950 dark:border-white ring-2 ring-neutral-200 dark:ring-neutral-800"
                                                    : step.completed
                                                        ? "bg-emerald-500 text-white border-emerald-500"
                                                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 border-neutral-200 dark:border-neutral-700"
                                                    }`}
                                            >
                                                {step.completed && !step.active ? "✓" : idx + 1}
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-neutral-900 dark:text-white">{step.label}</div>
                                                <div className="text-[10px] text-neutral-400 font-mono mt-0.5">{step.date}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Order Line Items */}
                        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
                            <CardHeader className="p-4 sm:p-6 pb-4 border-b border-neutral-100 dark:border-neutral-800/60">
                                <CardTitle className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                                    Items in Order ({order.items.length})
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 space-y-4">
                                <div className="divide-y divide-neutral-100 dark:divide-neutral-800/60">
                                    {order.items.map((item) => (
                                        <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex items-center gap-4">
                                            <div className="h-16 w-16 rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-800 shrink-0 border border-neutral-200/60 dark:border-neutral-800/60">
                                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                            </div>

                                            <div className="flex-1 min-w-0 space-y-1">
                                                <h4 className="text-xs font-bold text-neutral-900 dark:text-white truncate">{item.name}</h4>
                                                <div className="text-[11px] text-neutral-400 font-mono">SKU: {item.sku}</div>
                                                <p className="text-[11px] text-neutral-500 font-medium">
                                                    Color: {item.color} • Size: {item.size} • Qty: {item.quantity}
                                                </p>
                                            </div>

                                            <div className="text-right font-mono text-xs font-bold text-neutral-950 dark:text-white">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                    </div>

                    {/* RIGHT COLUMN: Payment & Address Summary (5/12) */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Financial Totals Card */}
                        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
                            <CardHeader className="p-4 sm:p-6 pb-4 border-b border-neutral-100 dark:border-neutral-800/60">
                                <CardTitle className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                                    Payment Summary
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 space-y-3 text-xs font-medium">
                                <div className="flex justify-between text-neutral-500">
                                    <span>Subtotal</span>
                                    <span className="font-mono text-neutral-900 dark:text-white">${order.subtotal.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                                    <span>Discount (10% ATELIER10)</span>
                                    <span className="font-mono">-${order.discount.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between text-neutral-500">
                                    <span>Shipping</span>
                                    <span className="font-mono text-neutral-900 dark:text-white">Free</span>
                                </div>

                                <div className="flex justify-between text-neutral-500">
                                    <span>Tax</span>
                                    <span className="font-mono text-neutral-900 dark:text-white">${order.tax.toFixed(2)}</span>
                                </div>

                                <Separator className="bg-neutral-100 dark:bg-neutral-800/60 my-2" />

                                <div className="flex justify-between items-baseline text-sm font-bold text-neutral-950 dark:text-white pt-1">
                                    <span>Total Paid</span>
                                    <span className="font-mono text-base">${order.total.toFixed(2)}</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Shipping & Payment Info Grid */}
                        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
                            <CardContent className="p-4 sm:p-6 space-y-6">

                                {/* Delivery Address */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
                                        <MapPin className="h-3.5 w-3.5" /> Shipping Address
                                    </div>
                                    <div className="text-xs text-neutral-700 dark:text-neutral-300 space-y-0.5 pl-5 font-medium">
                                        <div className="font-bold text-neutral-950 dark:text-white">{order.shippingAddress.name}</div>
                                        <div>{order.shippingAddress.street}</div>
                                        <div>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</div>
                                        <div>{order.shippingAddress.country}</div>
                                    </div>
                                </div>

                                <Separator className="bg-neutral-100 dark:bg-neutral-800/60" />

                                {/* Payment Method Details */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
                                        <CreditCard className="h-3.5 w-3.5" /> Billing Method
                                    </div>
                                    <div className="text-xs text-neutral-700 dark:text-neutral-300 pl-5 font-medium">
                                        {order.paymentMethod} <span className="font-mono font-bold">•••• {order.cardLast4}</span>
                                    </div>
                                </div>

                                <Separator className="bg-neutral-100 dark:bg-neutral-800/60" />

                                {/* Courier Details */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
                                        <Truck className="h-3.5 w-3.5" /> Courier Method
                                    </div>
                                    <div className="text-xs text-neutral-700 dark:text-neutral-300 pl-5 font-medium space-y-1">
                                        <div>{order.carrier}</div>
                                        <div className="font-mono text-neutral-400 text-[11px] flex items-center gap-1">
                                            <span>Tracking: {order.trackingNumber}</span>
                                            <ExternalLink className="h-3 w-3 cursor-pointer hover:text-neutral-950 dark:hover:text-white" />
                                        </div>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>

                    </div>

                </div>

            </main>
        </div>
    );
}

// ==========================================
// BADGE HELPER COMPONENT
// ==========================================
function OrderStatusBadge({ status }: { status: OrderDetails["status"] }) {
    switch (status) {
        case "Processing":
            return (
                <Badge variant="secondary" className="bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400 border-amber-200/60 dark:border-amber-800 text-[10px] font-bold uppercase tracking-wider">
                    Processing
                </Badge>
            );
        case "Shipped":
            return (
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 border-blue-200/60 dark:border-blue-800 text-[10px] font-bold uppercase tracking-wider">
                    Shipped
                </Badge>
            );
        case "Delivered":
            return (
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                    Delivered
                </Badge>
            );
        case "Cancelled":
            return (
                <Badge variant="secondary" className="bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400 border-rose-200/60 dark:border-rose-800 text-[10px] font-bold uppercase tracking-wider">
                    Cancelled
                </Badge>
            );
    }
}