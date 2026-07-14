
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";

export default function CategorySection() {
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/40 shadow-2xs">
            <CardHeader className="p-5 pb-3 border-b border-neutral-100 dark:border-neutral-800/60">
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-neutral-950 dark:text-white flex items-center gap-2">Taxonomy Organization</CardTitle>
            </CardHeader>
            <CardContent className="p-5 space-y-4">
                <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Primary Product Category Tier</Label>
                    <Select defaultValue="apparel">
                        <SelectTrigger className="h-9"><SelectValue placeholder="Select Category" /></SelectTrigger>
                        <SelectContent><SelectItem value="apparel">Apparel & Fine Textiles</SelectItem></SelectContent>
                    </Select>
                </div>

                <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Subcategory Placement Node</Label>
                    <Select defaultValue="outerwear">
                        <SelectTrigger className="h-9"><SelectValue placeholder="Select Subcategory" /></SelectTrigger>
                        <SelectContent><SelectItem value="outerwear">Outerwear Shells & Jackets</SelectItem></SelectContent>
                    </Select>
                </div>

                <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Assigned Platform Collection</Label>
                    <Select defaultValue="winter26">
                        <SelectTrigger className="h-9"><SelectValue placeholder="Select Collection" /></SelectTrigger>
                        <SelectContent><SelectItem value="winter26">Winter Capsule Core (2026)</SelectItem></SelectContent>
                    </Select>
                </div>

                <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Assigned Supplier Vendor</Label>
                    <Input placeholder="Search vendor ledger..." className="h-9 text-xs" />
                </div>
            </CardContent>
        </Card>
    );
}