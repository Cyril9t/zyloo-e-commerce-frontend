
import { CheckCircle2, ArrowRight, PackageCheck, ShoppingBag, Download, Sparkles } from 'lucide-react';

export default function PaymentVerified() {
    const orderDetails = {
        orderNumber: "ORD-982341",
        date: "Aug 21, 2026",
        paymentMethod: "Visa ending in 4242",
        email: "customer@example.com",
        total: "$129.00",
        items: [
            { name: "Minimalist Leather Backpack", qty: 1, price: "$89.00" },
            { name: "Stainless Water Bottle (750ml)", qty: 1, price: "$40.00" },
        ]
    };

    return (
        <div className="">
            <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

                {/* Header / Success Banner */}
                <div className="p-8 text-center bg-linear-to-b from-emerald-50/60 to-white relative">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 border-8 border-emerald-50 text-emerald-600 mb-4 animate-bounce">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-semibold mb-2">
                        <Sparkles className="w-3.5 h-3.5" /> Payment Successful
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                        Thank you for your order!
                    </h1>
                    <p className="text-slate-500 text-sm mt-1">
                        We’ve sent a confirmation email to <span className="font-medium text-slate-700">{orderDetails.email}</span>.
                    </p>
                </div>

                <div className="px-6 md:px-8 pb-8 space-y-6">

                    {/* Order Details Metadata Card */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                        <div>
                            <span className="block text-slate-400 font-medium">Order Number</span>
                            <span className="font-semibold text-slate-800 font-mono text-sm">{orderDetails.orderNumber}</span>
                        </div>
                        <div>
                            <span className="block text-slate-400 font-medium">Date</span>
                            <span className="font-semibold text-slate-800">{orderDetails.date}</span>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <span className="block text-slate-400 font-medium">Payment Method</span>
                            <span className="font-semibold text-slate-800">{orderDetails.paymentMethod}</span>
                        </div>
                    </div>

                    {/* Purchased Items List */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Order Summary</h3>
                        <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
                            {orderDetails.items.map((item, index) => (
                                <div key={index} className="py-3 flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                                            <PackageCheck className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-800">{item.name}</p>
                                            <p className="text-xs text-slate-400">Qty: {item.qty}</p>
                                        </div>
                                    </div>
                                    <span className="font-medium text-slate-700">{item.price}</span>
                                </div>
                            ))}
                        </div>

                        {/* Total Row */}
                        <div className="flex justify-between items-center pt-4 text-base font-bold text-slate-900">
                            <span>Total Paid</span>
                            <span className="text-emerald-600">{orderDetails.total}</span>
                        </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                            onClick={() => window.location.href = '/orders'}
                            className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm text-sm"
                        >
                            <ShoppingBag className="w-4 h-4" />
                            Track Order
                            <ArrowRight className="w-4 h-4 ml-auto" />
                        </button>
                        <button
                            onClick={() => window.print()}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
                        >
                            <Download className="w-4 h-4" />
                            Receipt
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}