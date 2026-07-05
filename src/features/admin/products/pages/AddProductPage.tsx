import ProductForm from "../components/ProductForm";

export default function AddProductPage() {
    return (
        <section className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">
                    Add Product
                </h1>

                <p className="text-muted-foreground">
                    Create a new product for your store.
                </p>
            </div>

            <ProductForm />
        </section>
    );
}