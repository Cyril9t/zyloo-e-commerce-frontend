import { Pencil, Trash2 } from "lucide-react";

import { Button } from "../../../../components/ui/button";
import { adminProducts } from "../../../../mock/adminProducts";

export default function ProductTable() {
    return (
        <div className="overflow-hidden rounded-xl border">
            <table className="w-full">
                <thead className="bg-muted">
                    <tr>
                        <th className="p-4 text-left">Product</th>
                        <th className="p-4 text-left">Category</th>
                        <th className="p-4 text-left">Price</th>
                        <th className="p-4 text-left">Stock</th>
                        <th className="p-4 text-right">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {adminProducts.map((product) => (
                        <tr
                            key={product.id}
                            className="border-t"
                        >
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-12 w-12 rounded-lg object-cover"
                                    />

                                    {product.name}
                                </div>
                            </td>

                            <td className="p-4">
                                {product.category}
                            </td>

                            <td className="p-4">
                                ${product.price}
                            </td>

                            <td className="p-4">
                                {product.stock}
                            </td>

                            <td className="p-4">
                                <div className="flex justify-end gap-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Button>

                                    <Button
                                        variant="destructive"
                                        size="icon"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}