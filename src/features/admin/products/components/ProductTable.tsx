import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import DataTable from "../../shared/components/DataTable";
import ConfirmDialog from "../../shared/components/ConfirmDialog";
import { useAuth } from "../../../../context/AuthProvider";
import { Link, } from "react-router-dom";
import api from "../../../../lib/api";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function ProductTable() {
    const { products } = useAuth()
    const [product, setProduct] = useState<any>([])

    useEffect(() => {
        setProduct(products)
    }, [])
    const cate = (product: any) => {
        const category = product.length === 1
            ? product?.map((item: any) => item.name)
            : "Uncategorized";

        return category
    }

    const handleDelete = async (id: string) => {
        try {
            const deleteItem = await api.delete(`/product/delete-product/${id}`)
            toast.success((await deleteItem.data.Message))
            setProduct(product.filter((p: any) => (p.id !== id)))

        } catch (error: any) {
            console.log(error.response.data.Message)
            toast.error(error.response.data.Message)
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
                    {product.map((product: any) => (
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
                                ₦{product?.productItems?.map((p: any) => (p.price))}
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