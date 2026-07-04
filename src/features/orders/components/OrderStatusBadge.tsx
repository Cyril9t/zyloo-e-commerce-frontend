import { Badge } from "../../../components/ui/badge";
import type { OrderStatus } from "../types/order";

interface OrderStatusBadgeProps {
    status: OrderStatus;
}

const variants: Record<OrderStatus, string> = {
    Pending: "secondary",
    Processing: "default",
    Shipped: "outline",
    Delivered: "default",
    Cancelled: "destructive",
};

export default function OrderStatusBadge({
    status,
}: OrderStatusBadgeProps) {
    return (
        <Badge variant={variants[status] as any}>
            {status}
        </Badge>
    );
}