import { Pencil, Trash2 } from "lucide-react";

import { Button } from "../../../../components/ui/button";
import { adminProducts } from "../../../../mock/adminProducts";

import DataTable from "../../shared/components/DataTable";
import ConfirmDialog from "../../shared/components/ConfirmDialog";
import { useAuth } from "../../../../context/AuhProvider";
import type { Products } from "../../../products/types/Product";

export default function ProductTable() {
    const { products } = useAuth()

    const cate = (product: any) => {
        const category = product.length === 1
            ? product?.map((item: any) => item.name)
            : "Uncategorized";

        return category
    }

    console.log(products)

    return (
        <DataTable>
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
                    {products.map((product) => (
                        <tr
                            key={product.id}
                            className="border-t"
                        >
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={product?.images[0]?.productImages}
                                        alt={product.name}
                                        className="h-12 w-12 rounded-lg object-cover"
                                    />

                                    {product.name}
                                </div>
                            </td>

                            <td className="p-4">
                                {cate(product.category)}
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

                                    <ConfirmDialog
                                        title="Delete Product"
                                        description="This action cannot be undone."
                                        onConfirm={() => console.log("Delete Product")}
                                        trigger={
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        }
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </DataTable>
    );
}