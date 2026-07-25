
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Switch } from "../../../../components/ui/switch";




export default function PricingInventory() {
    return (
        <Card className="border-none border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
            <CardHeader className="p-6 pb-4 border-b border-neutral-100 dark:border-neutral-800/60">
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Financial Ledger & Warehouse Logistical Parameters</CardTitle>
                <CardDescription className="text-xs">Establish fiscal margin targets and warehouse unit-tracking parameters.</CardDescription>
            </CardHeader>
            <CardContent className="">

                {/* Fiscal Columns Pricing Section */}
                <div className="space-y-4 md:pr-4 ">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-950 dark:text-neutral-50 flex items-center gap-2">Fiscal Parameters</h3>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="price-reg" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Regular Store Price</Label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-neutral-400">$</span>
                                <Input id="price-reg" placeholder="0.00" className="pl-7 h-9 font-mono" />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="price-sale" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Campaign Sale Price</Label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-neutral-400">$</span>
                                <Input id="price-sale" placeholder="0.00" className="pl-7 h-9 font-mono" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="price-cost" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Net Cost Per Piece</Label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-neutral-400">$</span>
                                <Input id="price-cost" placeholder="0.00" className="pl-7 h-9 font-mono" />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="price-tax" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Tax Matrix Mapping</Label>
                            <Select defaultValue="standard">
                                <SelectTrigger id="price-tax" className="h-9">
                                    <SelectValue placeholder="Select Class" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="standard">Standard Domestic VAT (20%)</SelectItem>
                                    <SelectItem value="exempt">Corporate Tax Exempt (0%)</SelectItem>
                                    <SelectItem value="reduced">Reduced Services Bracket (5%)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Warehouse Metrics Inventory Section */}
                {/* <div className="space-y-4 pt-6 md:pt-0 md:pl-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-950 dark:text-neutral-50 flex items-center gap-2">Warehouse Metrics</h3>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="inv-sku" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">SKU Root Identifier</Label>
                            <Input id="inv-sku" placeholder="e.g., AT-BLZ-MER-26" className="h-9 font-mono uppercase" />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="inv-barcode" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">EAN/UPC Barcode</Label>
                            <Input id="inv-barcode" placeholder="Barcode code string..." className="h-9 font-mono" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="inv-qty" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Physical Stock Count</Label>
                            <Input id="inv-qty" type="number" placeholder="100" className="h-9 font-mono" />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="inv-low" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Low Stock Trigger Node</Label>
                            <Input id="inv-low" type="number" placeholder="10" className="h-9 font-mono" />
                        </div>
                    </div>

                    <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between text-xs">
                            <Label htmlFor="sw-track" className="font-bold text-neutral-900 dark:text-neutral-50 tracking-tight cursor-pointer">Enforce Automated Ledger Depletion</Label>
                            <Switch id="sw-track" defaultChecked className="cursor-pointer" />
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <Label htmlFor="sw-oversell" className="font-bold text-neutral-900 dark:text-neutral-50 tracking-tight cursor-pointer">Allow Backorders on Stock Deficit</Label>
                            <Switch id="sw-oversell" className="cursor-pointer" />
                        </div>
                    </div>
                </div> */}

            </CardContent>
        </Card>
    );
}