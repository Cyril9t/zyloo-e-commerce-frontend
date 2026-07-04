import { Button } from "../../..//components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

export default function CartSummary() {
    return (
        <Card className="sticky top-24">
            <CardContent className="space-y-6 p-6">
                <h2 className="text-xl font-semibold">
                    Order Summary
                </h2>

                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>$598.00</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>Free</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>$30.00</span>
                    </div>

                    <div className="border-t pt-4">
                        <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>$628.00</span>
                        </div>
                    </div>
                </div>

                <Button className="w-full" size="lg">
                    Proceed to Checkout
                </Button>
            </CardContent>
        </Card>
    );
}   