interface OrderStatusBadgeProps {
    status: string;
}

export default function OrderStatusBadge({
    status,
}: OrderStatusBadgeProps) {
    const styles = {
        Pending:
            "bg-yellow-100 text-yellow-800",
        Processing:
            "bg-blue-100 text-blue-800",
        Shipped:
            "bg-purple-100 text-purple-800",
        Delivered:
            "bg-green-100 text-green-800",
        Cancelled:
            "bg-red-100 text-red-800",
    };

    return (
        <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${styles[status as keyof typeof styles]
                }`}
        >
            {status}
        </span>
    );
}