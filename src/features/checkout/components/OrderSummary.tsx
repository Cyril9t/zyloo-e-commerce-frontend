import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";

export default function OrderSummary() {
    return (
        <Card className="sticky top-24">
            <CardHeader>
                <CardTitle>Order Summary</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                {/* Products */}

                <div className="space-y-4">
                    {[1, 2].map((item) => (
                        <div
                            key={item}
                            className="flex items-center gap-4"
                        >
                            <img
                                src={`https://picsum.photos/100?random=${item}`}
                                alt="Product"
                                className="h-16 w-16 rounded-lg object-cover"
                            />

                            <div className="flex-1">
                                <h4 className="font-medium">
                                    Wireless Headphones
                                </h4>

                                <p className="text-sm text-muted-foreground">
                                    Qty: 1
                                </p>
                            </div>

                            <span className="font-semibold">
                                $299
                            </span>
                        </div>
                    ))}
                </div>

                {/* Coupon */}

                <div className="flex gap-2">
                    <Input placeholder="Promo code" />

                    <Button variant="outline">
                        Apply
                    </Button>
                </div>

                {/* Totals */}

                <div className="space-y-3 border-t pt-6">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">
                            Subtotal
                        </span>

                        <span>$598.00</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">
                            Shipping
                        </span>

                        <span>Free</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">
                            Tax
                        </span>

                        <span>$30.00</span>
                    </div>

                    <div className="flex justify-between border-t pt-4 text-lg font-bold">
                        <span>Total</span>

                        <span>$628.00</span>
                    </div>
                </div>

                <Button
                    size="lg"
                    className="w-full"
                >
                    Place Order
                </Button>
            </CardContent>
        </Card>
    );
}