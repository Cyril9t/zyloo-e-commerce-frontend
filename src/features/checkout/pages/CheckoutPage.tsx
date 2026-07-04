import BillingForm from "../components/BillingForm";
import OrderSummary from "../components/OrderSummary";
import PaymentMethod from "../components/PaymentMethod";

export default function CheckoutPage() {
    return (
        <section className="container-page py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Checkout
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Complete your order by providing your billing information and
                    selecting a payment method.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
                <div className="space-y-8">
                    <BillingForm />
                    <PaymentMethod />
                </div>

                <OrderSummary />
            </div>
        </section>
    );
}