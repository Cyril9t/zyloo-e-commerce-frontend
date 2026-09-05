import { useState, useEffect } from 'react';
import { CheckCircle2, ShieldCheck, Loader2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import api from '../../../lib/api';
import PaymentFailed from './PaymentFailed';
import { toast } from 'sonner';
export default function PaymentVerification() {
    const [status, setStatus] = useState<'Verifying' | 'success'>('Verifying');
    const [verify, setVerify] = useState(true);
    const [reason, setReason] = useState("")
    const [searchParams] = useSearchParams()
    const reference = searchParams.get("reference")
    const navigate = useNavigate()

    useEffect(() => {
        const verifyingPayment = async () => {
            try {
                const Verify = await api.post("/Payment/verifyPayment", { reference: reference })
                const res = await Verify.data;


                const message = "Payment successful"

                if (res.Message === message) {
                    toast.success("Payment Verified")
                    navigate(`/order-success/${res?.Order?.id}`, { replace: true })
                    return
                }

            } catch (error: any) {

                setReason(error?.response?.data?.Message)
                setVerify(false)
                toast.error("Payment failed")
            }
        }
        verifyingPayment();
        setStatus("Verifying")
    }, []);


    return (
        <div className="w-full">
            {verify ? (<div className="w-full px-0 md:px-10  rounded-2xl shadow-xl border-2 border-border transition-all duration-300">

                {/* Top Header & Status Graphic */}
                <div className="p-8 text-center ">
                    <div className="relative inline-flex items-center justify-center mb-6">
                        {status !== 'success' ? (
                            <div className="relative">
                                {/* Glowing Background Pulse */}
                                <div className="absolute inset-0 rounded-full animate-ping" />
                                <div className="relative w-20 h-20 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                                    <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                                </div>
                            </div>
                        ) : (
                            <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center animate-in zoom-in-50 duration-300">
                                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                            </div>
                        )}
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight">
                        {status === 'Verifying' && 'Verifying Payment...'}

                        {status === 'success' && 'Payment Confirmed!'}
                    </h2>

                    <p className="text-sm opacity-50 mt-2">
                        {status !== 'success'
                            ? 'Please do not refresh or close this page.'
                            : 'Thank you for your purchase! Your order is being prepared.'}
                    </p>
                </div>

                {/* Progress Timeline */}
                <div className="px-8 pb-6">
                    <div className="flex items-center justify-between text-xs font-medium  border-t border-b border-slate-100 py-3">
                        <span className={status === 'Verifying' ? 'text-indigo-600 font-semibold' : 'text-slate-600'}>
                            1. Verification
                        </span>
                        <span>&rarr;</span>

                        <span>&rarr;</span>
                        <span className={status === 'success' ? 'text-emerald-600 font-semibold' : 'text-slate-500'}>
                            2. Verified
                        </span>
                    </div>
                </div>

                {/* Order Brief Summary */}
                <div className="px-8 pb-8 space-y-4">
                    <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-100 text-sm">
                        <div className="flex justify-between text-slate-500">
                            <span>Transaction ID</span>
                            <span className="font-mono text-slate-700">#TXN-882940</span>
                        </div>
                        <div className="flex justify-between text-slate-500">
                            <span>Payment Method</span>
                            <span className="text-slate-700">•••• 4242</span>
                        </div>
                        <div className="flex justify-between font-semibold text-slate-800 pt-2 border-t border-slate-200">
                            <span>Total Amount</span>
                            <span className="text-slate-900">$129.00</span>
                        </div>
                    </div>

                    {/* Dynamic Action Button */}
                    {status === 'success' ? (
                        <button
                            onClick={() => window.location.href = '/orders'}
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                        >
                            <ShoppingBag className="w-4 h-4" />
                            View Order Details
                            <ArrowRight className="w-4 h-4 ml-auto" />
                        </button>
                    ) : (
                        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 py-2">
                            <ShieldCheck className="w-4 h-4 text-slate-400" />
                            <span>256-bit SSL Encrypted Transaction</span>
                        </div>
                    )}
                </div>

            </div>) : <PaymentFailed reasons={reason} />}
        </div>
    );
}