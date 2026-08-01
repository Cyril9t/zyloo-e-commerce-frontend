import { ArrowRight, Lock, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { PATHS } from "../../../routes/paths";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Separator } from "../../../components/ui/separator";
import { Card } from "../../../components/ui/card";
import { useState } from "react";

interface CartSummaryProps {
    subtotal: number;
    shipping: number;
    tax: number;
    discount: number;
    onCheckout: () => void;
    isCartEmpty: boolean;
}

export function CartSummary({ subtotal, shipping, tax, discount, onCheckout, isCartEmpty }: CartSummaryProps) {
    const [couponCode, setCouponCode] = useState("");
    const [loading, setLoading] = useState(false);
    const grandTotal = subtotal + shipping + tax - discount;

    const handleApplyCoupon = (e: React.FormEvent) => {
        e.preventDefault();
        if (!couponCode.trim()) return;
        setLoading(true);
        setTimeout(() => setLoading(false), 800);
    };

    return (
        <Card className="p-5 sm:p-6 border-border/50 bg-card shadow-sm space-y-5 lg:sticky lg:top-24">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Order Summary</h3>

            {/* Price Grid */}
            <div className="space-y-3 text-sm font-medium">
                <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="font-mono text-foreground">${subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                        <span>Discount Applied</span>
                        <span className="font-mono">-${discount.toLocaleString()}</span>
                    </div>
                )}
                <div className="flex justify-between text-muted-foreground">
                    <span>Estimated Shipping</span>
                    <span className="font-mono text-foreground">
                        {shipping === 0 ? "Complimentary" : `$${shipping.toLocaleString()}`}
                    </span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                    <span>Estimated Tax</span>
                    <span className="font-mono text-foreground">${tax.toLocaleString()}</span>
                </div>

                <Separator className="bg-border/40 my-2" />

                <div className="flex justify-between items-baseline pt-1">
                    <span className="text-base font-semibold text-foreground">Grand Total</span>
                    <span className="text-lg font-mono font-bold text-foreground">${grandTotal.toLocaleString()}</span>
                </div>
            </div>

            {/* Coupon Form */}
            <form onSubmit={handleApplyCoupon} className="space-y-2 pt-1">
                <label htmlFor="coupon" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                    Promotional Code
                </label>
                <div className="flex gap-2">
                    <Input
                        id="coupon"
                        type="text"
                        placeholder="ENTER CODE"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="h-9 text-xs focus-visible:ring-1 bg-muted/30 uppercase rounded-md tracking-wide"
                    />
                    <Button
                        type="submit"
                        variant="secondary"
                        size="sm"
                        disabled={loading || !couponCode.trim()}
                        className="h-9 px-4 border text-xs font-semibold tracking-wide"
                    >
                        {loading ? "..." : "Apply"}
                    </Button>
                </div>
            </form>

            {/* Primary Actions */}
            <div className="space-y-2.5 pt-2">
                <Button
                    onClick={onCheckout}
                    disabled={isCartEmpty}
                    className="w-full h-11 text-xs font-semibold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 group"
                >
                    Proceed to Checkout
                    <ArrowRight className="h-3.5 w-3.5 transform transition-transform group-hover:translate-x-0.5" />
                </Button>

                <Button
                    variant="outline"
                    className="w-full h-11 text-xs font-semibold uppercase tracking-wider bg-transparent"
                    asChild
                >
                    <Link to={PATHS.customer.products}>Continue Shopping</Link>
                </Button>
            </div>

            {/* Security Indicator */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground/80 bg-muted/40 py-2.5 px-3 rounded-md border border-border/30">
                <Lock className="h-3.5 w-3.5 text-foreground/70" />
                <span className="flex items-center gap-1 font-medium">
                    Secured Checkout via <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 inline -mt-0.5" /> Stripe
                </span>
            </div>
        </Card>
    );
}

