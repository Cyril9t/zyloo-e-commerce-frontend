import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { PATHS } from "../../../routes/paths";

export default function OrderSuccessPage() {
    const orderNumber = "ORD-1001";

    return (
        <section className="container-page flex min-h-[70vh] items-center justify-center py-10">
            <Card className="w-full max-w-2xl">
                <CardContent className="flex flex-col items-center p-10 text-center">
                    <div className="mb-6 rounded-full bg-green-100 p-5 dark:bg-green-900/20">
                        <CheckCircle2 className="h-16 w-16 text-green-600" />
                    </div>

                    <h1 className="text-4xl font-bold">
                        Order Confirmed!
                    </h1>

                    <p className="mt-4 max-w-lg text-muted-foreground">
                        Thank you for your purchase. Your order has been placed
                        successfully and is now being processed.
                    </p>

                    <div className="mt-8 rounded-lg border bg-muted/40 px-6 py-4">
                        <p className="text-sm text-muted-foreground">
                            Order Number
                        </p>

                        <p className="mt-1 text-xl font-semibold">
                            {orderNumber}
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Button asChild size="lg">
                            <Link to={PATHS.customer.orders}>
                                View My Orders
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                        >
                            <Link to={PATHS.customer.products}>
                                Continue Shopping
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}