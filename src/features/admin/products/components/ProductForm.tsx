import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

export default function ProductForm() {
    return (
        <form className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name">
                    Product Name
                </Label>

                <Input
                    id="name"
                    placeholder="Wireless Headphones"
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="category">
                        Category
                    </Label>

                    <Input
                        id="category"
                        placeholder="Electronics"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="price">
                        Price
                    </Label>

                    <Input
                        id="price"
                        type="number"
                        placeholder="299"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="stock">
                    Stock
                </Label>

                <Input
                    id="stock"
                    type="number"
                    placeholder="20"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="image">
                    Image URL
                </Label>

                <Input
                    id="image"
                    placeholder="https://..."
                />
            </div>

            <Button type="submit">
                Save Product
            </Button>
        </form>
    );
}