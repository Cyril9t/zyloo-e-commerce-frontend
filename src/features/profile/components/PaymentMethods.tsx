import { Plus, Trash2 } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";
import type { PaymentCard } from "../pages/ProfilePage";
import { Badge } from "../../../components/ui/badge";
import { cn } from "../../../lib/utils";

const MOCK_PAYMENTS: PaymentCard[] = [
    { id: "p1", brand: "Visa", last4: "4242", expiry: "12/29", isDefault: true },
    { id: "p2", brand: "Amex", last4: "8007", expiry: "04/28", isDefault: false }
];

export function PaymentMethods() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MOCK_PAYMENTS.map((card) => (
                    <Card key={card.id} className={cn("border bg-white dark:bg-neutral-900/20 shadow-xs relative overflow-hidden transition-all", card.isDefault ? "border-neutral-950 dark:border-neutral-50 ring-1 ring-neutral-950 dark:ring-neutral-50" : "border-neutral-200/60 dark:border-neutral-800/60")}>
                        <CardContent className="p-5 flex items-start gap-4">
                            <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-md border text-xs font-black tracking-tighter text-neutral-500 font-mono">
                                {card.brand.toUpperCase()}
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-mono font-bold tracking-wider text-neutral-950 dark:text-neutral-50">•••• •••• •••• {card.last4}</span>
                                    {card.isDefault && <Badge className="text-[9px] font-bold uppercase tracking-wider bg-neutral-950 dark:bg-white dark:text-black rounded-sm px-1.5 py-0">Default</Badge>}
                                </div>
                                <p className="text-[11px] text-neutral-400 font-medium">Expires {card.expiry}</p>
                            </div>
                        </CardContent>
                        <CardFooter className="p-3 bg-neutral-50/30 dark:bg-neutral-900/30 border-t border-neutral-100/50 dark:border-neutral-800/40 flex justify-end gap-1">
                            <Button variant="ghost" size="sm" className="h-8 px-2.5 text-xs text-neutral-500 font-semibold hover:text-neutral-950 dark:hover:text-neutral-50">Manage</Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2.5 text-xs text-neutral-400 hover:text-rose-600"><Trash2 className="h-3 w-3" /></Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <Button variant="outline" className="w-full sm:w-auto text-xs font-semibold h-9 border-dashed border-neutral-300 dark:border-neutral-700 shadow-none hover:bg-neutral-50 dark:hover:bg-neutral-900">
                <Plus className="h-3.5 w-3.5 mr-2 text-neutral-400" /> Secure Tokenize New Method
            </Button>
        </div>
    );
}