import React from 'react';
import { XCircle, RefreshCw, CreditCard, AlertCircle, HelpCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../routes/paths';

export default function PaymentFailed({ reasons }: any) {
    const failureDetails = {
        errorCode: "ERR_CARD_DECLINED",
        reason: "Your card was declined due to insufficient funds or bank security flags.",
        paymentMethod: "Visa ending in 4242",
        amountAttempted: "$129.00"
    };

    return (
        <div className="">
            <div className="max-w-md w-full rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

                {/* Error Header */}
                <div className="p-8  flex flex-col justify-self-center">
                    <div className="ml-auto mr-auto inline-flex  items-center justify-center w-20 h-20 rounded-full bg-destructive/10 text-destructive mb-4 animate-shake">
                        <XCircle className="w-10 h-10" />
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive/10  text-destructive text-xs font-semibold mb-2">
                        <AlertCircle className="w-3.5 h-3.5" /> Transaction Unsuccessful
                    </div>

                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight items-center">
                        Payment Failed
                    </h1>
                    <p className="text-slate-500 text-sm mt-1">
                        We couldn't process your payment
                    </p>
                </div>

                <div className="px-6 md:px-8 pb-8 space-y-6">

                    {/* Reason Box */}
                    <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 text-xs space-y-1">
                        <span className="font-bold text-destructive uppercase tracking-wider block">Reason</span>
                        <p className="text-slate-700 leading-relaxed">{reasons}</p>
                    </div>




                    {/* Transaction Metadata */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs flex justify-between text-slate-500 font-mono">
                        <span>Code: (8872)...</span>

                    </div>


                    <div className="space-y-3 pt-2">
                        <Link to={PATHS.customer.checkout}>
                            <Button
                                onClick={() => window.location.href = '/checkout'}
                                className="w-full"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Try Again
                            </Button>
                        </Link>


                        <div className="flex justify-between items-center pt-2 text-xs ">
                            <Link to={PATHS.customer.cart}>
                                <Button variant={"link"} className="flex items-center gap-1  ">
                                    <ArrowLeft className="w-3.5 h-3.5" /> Return to Cart
                                </Button>
                            </Link>

                            <Button variant={"ghost"} className="flex items-center gap-1">
                                <HelpCircle className="w-3.5 h-3.5" /> Need Support?
                            </Button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}