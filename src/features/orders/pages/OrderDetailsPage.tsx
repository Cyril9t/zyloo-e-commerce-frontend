import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { orders } from "../../../mock/orders";
import { PATHS } from "../../../routes/paths";

import OrderItem from "../components/OrderItem";
import OrderStatusBadge from "../components/OrderStatusBadge";

export default function OrderDetailsPage() {
    // Temporary until we connect the backend
    const order = orders[0];

    return (
        <section className="container-page py-10">
            <Button
                asChild
                variant="ghost"
                className="mb-6"
            >
                <Link to={PATHS.customer.orders}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Orders
                </Link>
            </Button>

            <Card>
                <CardContent className="space-y-8 p-8">
                    {/* Header */}

                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                        <div>
                            <h1 className="text-3xl font-bold">
                                Order {order.id}
                            </h1>

                            <p className="mt-2 text-muted-foreground">
                                Placed on {order.createdAt}
                            </p>
                        </div>

                        <OrderStatusBadge status={order.status} />
                    </div>

                    {/* Items */}

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            Items
                        </h2>

                        {order.items.map((item) => (
                            <OrderItem
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>

                    {/* Summary */}

                    <div className="rounded-xl border p-6">
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                    Subtotal
                                </span>

                                <span>
                                    ${order.subtotal.toFixed(2)}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                    Shipping
                                </span>

                                <span>
                                    ${order.shipping.toFixed(2)}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                    Tax
                                </span>

                                <span>
                                    ${order.tax.toFixed(2)}
                                </span>
                            </div>

                            <div className="flex justify-between border-t pt-4 text-xl font-bold">
                                <span>Total</span>

                                <span>
                                    ${order.total.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}