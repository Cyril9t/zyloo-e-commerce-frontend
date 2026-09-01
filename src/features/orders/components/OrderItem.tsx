import type { OrderItem as OrderItemType } from "../types/Order";

interface OrderItemProps {
    item: OrderItemType;
}

export default function OrderItem({ item }: OrderItemProps) {
    return (
        <div className="flex items-center gap-4 rounded-xl border p-4">
            <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-lg object-cover"
            />

            <div className="flex-1">
                <h3 className="font-semibold">
                    {item.name}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                    Quantity: {item.quantity}
                </p>
            </div>

            <p className="text-lg font-semibold">
                ${item.price.toFixed(2)}
            </p>
        </div>
    );
}