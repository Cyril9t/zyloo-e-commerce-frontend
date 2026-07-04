import { orders } from "../../../mock/orders";
import OrderCard from "../components/OrderCard";

export default function OrdersPage() {
    return (
        <section className="container-page py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    My Orders
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Track your recent purchases and view their details.
                </p>
            </div>

            <div className="space-y-6">
                {orders.map((order) => (
                    <OrderCard
                        key={order.id}
                        order={order}
                    />
                ))}
            </div>
        </section>
    );
}