import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import ProductTable from "../components/ProductTable";
import { PATHS } from "../../../../routes/paths";

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
                <Link to={PATHS.admin.addProducts}>
                    <Button>
                        Add Product
                    </Button>
                </Link>
            </div>

            <ProductTable />
        </section>
    );
}