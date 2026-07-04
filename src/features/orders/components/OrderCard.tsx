import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { PATHS } from "../../../routes/paths";

import type { Order } from "../types/order";
import OrderStatusBadge from "./OrderStatusBadge";

interface OrderCardProps {
    order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
    return (
        <Card>
            <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold">
                        {order.id}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Ordered on {order.createdAt}
                    </p>

                    <OrderStatusBadge status={order.status} />
                </div>

                <div className="text-left md:text-right">
                    <p className="text-sm text-muted-foreground">
                        Total
                    </p>

                    <p className="text-2xl font-bold">
                        ${order.total.toFixed(2)}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        {order.items.length} item(s)
                    </p>
                </div>

                <Button asChild>
                    <Link to={PATHS.customer.orderDetails}>
                        View Details

                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}