import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import EmptyCart from "../components/EmptyCart";

const hasItems = true;

export default function CartPage() {
    const cartItems = [1, 2];
    if (!hasItems) {
        return <EmptyCart />;
    }

    return (
        <section className="container-page py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Shopping Cart
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Review your items before proceeding to checkout.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <CartItem key={item} />
                    ))}
                </div>

                <CartSummary />
            </div>
        </section>
    );
}