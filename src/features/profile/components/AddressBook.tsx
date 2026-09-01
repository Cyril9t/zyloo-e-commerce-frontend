import { Edit2, Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import type { AddressItem } from "../pages/ProfilePage";
import { cn } from "../../../lib/utils";
import { useAuth } from "../../../context/AuthProvider";
const MOCK_ADDRESSES: AddressItem[] = [
    { id: "a1", type: "Home", fullName: "Alexander Vanguard", street: "742 Evergreen Terrace", cityStateZip: "Springfield, OR 97477", isDefault: true },
    { id: "a2", type: "Office", fullName: "Vanguard Studio LLC", street: "100 Broadway Suite 4B", cityStateZip: "New York, NY 10005", isDefault: false }
];

export function AddressBook() {
    const { user } = useAuth()

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MOCK_ADDRESSES.map((addr) => (
                    <Card key={addr.id} className={cn("border bg-background shadow-xs relative overflow-hidden transition-all", addr.isDefault ? "border-green-500  ring-1 ring-sidebar-primary " : "border-border")}>
                        <CardContent className="p-5">
                            <div className="flex items-center gap-2 mb-3">
                                <Badge variant="secondary" className="text-[12px] font-bold uppercase tracking-wider rounded-sm px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800">{addr.type}</Badge>
                                {addr.isDefault && (
                                    <Badge className="text-[12px] font-bold uppercase tracking-wider rounded-sm px-2 py-0.5 bg-neutral-950 text-white dark:bg-white dark:text-black">Primary Logistics</Badge>
                                )}
                            </div>
                            <h3 className="text-xl font-semibold text-muted-foreground tracking-tight">{user?.firstName} {user?.lastName}</h3>
                            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed font-medium">
                                {addr.street}<br />
                                {addr.cityStateZip}
                            </p>
                        </CardContent>
                        <CardFooter className=" flex justify-end gap-1.5">
                            <Button variant="ghost" size="sm" className="h-8 px-2.5 text-xs text-neutral-500 font-semibold hover:text-neutral-950 dark:hover:text-neutral-50"><Edit2 className="h-3 w-3 mr-1.5" />Edit</Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2.5 text-xs text-rose-600 font-semibold hover:bg-rose-50/50"><Trash2 className="h-3 w-3 mr-1.5" />Delete</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <Button variant="outline" className="w-full sm:w-auto text-xs font-semibold h-9 border-dashed border-neutral-300 dark:border-neutral-700 shadow-none hover:bg-neutral-50 dark:hover:bg-neutral-900">
                <Plus className="h-3.5 w-3.5 mr-2 text-neutral-400" /> Stash New Address Record
            </Button>
        </div>
    );
}