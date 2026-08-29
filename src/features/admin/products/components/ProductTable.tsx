import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import DataTable from "../../shared/components/DataTable";
import ConfirmDialog from "../../shared/components/ConfirmDialog";
import { useAuth } from "../../../../context/AuthProvider";
import { Link, useParams } from "react-router-dom";
import api from "../../../../lib/api";
import { toast } from "sonner";

export default function ProductTable() {
    const { products } = useAuth()

    const cate = (product: any) => {
        const category = product.length === 1
            ? product?.map((item: any) => item.name)
            : "Uncategorized";

        return category
    }

    const handleDelete = async (id: string) => {
        try {
            const deletProduct = await api.delete(`/product/delete-product/${id}`)
            const res = await deletProduct.data;
            console.log(res)
            toast.success("Product Deleted Successfully")
        } catch (error) {
            console.log("Internal Error", error)
            toast.error("Server Error")
        }
    }

    return (
        <DataTable>
            <table className="w-full">
                <thead className="bg-muted">
                    <tr>
                        <th className="p-4 text-left">Product</th>
                        <th className="p-4 text-left">Category</th>
                        <th className="p-4 text-left">Price</th>

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
                                ₦{product?.productItems?.map((p) => (p.price))}
                            </td>


                            <td className="p-4">
                                <div className="flex justify-end gap-2">
                                    <Link to={`/admin/Update-product/${product.id}`}>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                    </Link>

                                    <ConfirmDialog
                                        title="Delete Product"
                                        description="This action cannot be undone."
                                        onConfirm={() => handleDelete(product.id)}
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