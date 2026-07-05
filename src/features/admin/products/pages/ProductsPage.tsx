import { Button } from "../../../../components/ui/button";

import ProductTable from "../components/ProductTable";

export default function ProductsPage() {
    return (
        <section className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Products
                    </h1>

                    <p className="text-muted-foreground">
                        Manage all store products.
                    </p>
                </div>

                <Button>
                    Add Product
                </Button>
            </div>

            <ProductTable />
        </section>
    );
}