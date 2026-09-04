import { AlertCircle, CheckCircle2, Heart, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Card } from "../../../components/ui/card";
import type { Data } from "../../../context/AuthProvider";

import api from "../../../lib/api";
import { useAuth } from "../../../context/AuthProvider";
import { toast } from "sonner";
import ConfirmDialog from "../../admin/shared/components/ConfirmDialog";


interface CartItemCardProps {
    items: Data[] | [];
    onUpdateQuantity: (id: string, delta: number) => void;
    onRemove: (id: string) => void;
}

export default function CartItemCard({ items, onUpdateQuantity, onRemove }: CartItemCardProps) {
    const { setItems, setCartCount } = useAuth()

    const AddItemQuantity = async (id: string, quantity: number, productItemId: string) => {
        try {
            if (!id) return toast.warning("SelectItem To add to cart")
            await api.patch(`/cart/cartUpdate/${id}`, { quantity: quantity, productItemId: productItemId })
            toast.success("Item Quantity Updated")
        } catch (error) {
            console.log(error)
        }
    }

    const DeletCart = async (id: string) => {
        try {
            if (!id) return toast.warning("SelectItem To add to cart")
            const res = await api.delete(`/cart/deleteCart/${id}`)
            toast.success("item Deleted")
            setItems(res?.data?.cart)
            setCartCount(res?.data?.cart?.length)
        } catch (error) {
            console.log(error)
        }
    }


    const MinusItem = async (id: string, quantity: number, productItemId: string) => {
        try {
            if (!id) return toast.warning("SelectItem To add to cart")
            await api.patch(`/cart/minusCartItem/${id}`, { quantity: quantity, productItemId: productItemId })
            toast.success("item Minus")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col gap-10">
            {items?.map((item) => {
                return (
                    <Card key={item.id} className="p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:shadow-md border-border/11 bg-card/60 backdrop-blur-sm group">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

                            <div className="relative h-28 w-24 sm:h-32 sm:w-28 bg-muted rounded-lg overflow-hidden border border-border/40 shrink-0 mx-auto sm:mx-0">
                                <img
                                    src={item?.productItem?.image}
                                    alt={item?.productItem?.product?.name}
                                    className="h-full w-full object-cover object-center transform transition-transform duration-500 group-hover:scale-102"
                                />
                            </div>


                            <div className="flex flex-col justify-between flex-1">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                    <div>
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/90 block mb-0.5">
                                            {item?.productItem?.product?.tags.map((t) => (t?.name))}
                                        </span>
                                        <h3 className="text-sm font-medium text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors">
                                            {item?.productItem?.product?.name}
                                        </h3>


                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1.5">
                                                Color:
                                                <span
                                                    className="h-3 w-3 rounded-full border border-border/80 inline-block shadow-sm"
                                                    style={{ backgroundColor: item.productItem.color }}
                                                    title={item.productItem.color}
                                                />
                                                <strong className="text-foreground font-medium">{item.productItem.color}</strong>
                                            </span>
                                            <span className="text-border/80">|</span>
                                            <span>Size: <strong className="text-foreground font-medium">{item.productItem.size}</strong></span>
                                        </div>
                                    </div>


                                    <div className="text-left sm:text-right mt-1 sm:mt-0">
                                        <span className="text-sm font-mono font-semibold block text-foreground">
                                            ${(item.productItem.price * item.quantity).toLocaleString()}
                                        </span>
                                        {item.quantity > 1 && (
                                            <span className="text-[11px] font-mono text-muted-foreground/70 block mt-0.5">
                                                (${item.productItem.price} each)
                                            </span>
                                        )}
                                    </div>
                                </div>


                                <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-border/40">

                                    <div className="flex items-center border border-input rounded-md bg-background shadow-sm h-9 overflow-hidden">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => {
                                                onUpdateQuantity(item?.id, - 1)
                                                MinusItem(item.id, item.quantity, item.productItem.id)
                                            }}
                                            disabled={item.quantity <= 1}
                                            className="h-full w-9 rounded-none text-muted-foreground hover:text-foreground hover:bg-muted"
                                        >
                                            <Minus className="h-3 w-3" />
                                        </Button>
                                        <span className="w-9 text-center text-xs font-mono font-medium select-none text-foreground">
                                            {item.quantity}
                                        </span>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => {
                                                onUpdateQuantity(item.id, 1)
                                                AddItemQuantity(item?.id, item?.quantity, item?.productItem?.id)
                                            }}
                                            className="h-full w-9 rounded-none text-muted-foreground hover:text-foreground hover:bg-muted"
                                        >
                                            <Plus className="h-3 w-3" />
                                        </Button>
                                    </div>


                                    <div className="flex items-center gap-4">
                                        <Badge
                                            variant={item?.productItem?.stock ? "secondary" : "destructive"}
                                            className="text-[10px] font-medium tracking-wide gap-1 rounded px-2"
                                        >
                                            {item?.productItem?.stock ? (
                                                <>
                                                    <CheckCircle2 className="h-3 w-3 text-emerald-600 fill-emerald-100" /> In Stock
                                                </>
                                            ) : (
                                                <>
                                                    <AlertCircle className="h-3 w-3" /> Out of Stock
                                                </>
                                            )}
                                        </Badge>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-muted-foreground/70 hover:text-foreground hover:bg-muted"
                                            title="Save for later"
                                        >
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                        <ConfirmDialog
                                            title="Delete CartItem"
                                            description="This action cannot be undone."
                                            onConfirm={() => {
                                                onRemove(item.id)
                                                DeletCart(item.id)
                                            }}
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
                                </div>
                            </div>
                        </div>
                    </Card>
                )
            })}
        </div>

    );
}