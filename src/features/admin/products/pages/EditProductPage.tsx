import ProductForm from "../components/ProductForm";

export default function EditProductPage() {
    return (
        <section className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">
                    Edit Product
                </h1>

                <p className="text-muted-foreground">
                    Update an existing product.
                </p>
            </div>

            <ProductForm />
        </section>
    );
}