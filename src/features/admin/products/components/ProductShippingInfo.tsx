
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Switch } from "../../../../components/ui/switch";



export default function ShippingInformation() {
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
            <CardHeader className="p-6 pb-4">
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Logistical Dispatch Metrics</CardTitle>
                <CardDescription className="text-xs">Specify box physical dimensional data matrices utilized by parcel systems to quote transit costs.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="ship-weight" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Weight (kg)</Label>
                        <Input id="ship-weight" placeholder="0.80" className="h-9 font-mono" />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="ship-len" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Length (cm)</Label>
                        <Input id="ship-len" placeholder="40" className="h-9 font-mono" />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="ship-width" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Width (cm)</Label>
                        <Input id="ship-width" placeholder="30" className="h-9 font-mono" />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="ship-height" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Height (cm)</Label>
                        <Input id="ship-height" placeholder="8" className="h-9 font-mono" />
                    </div>
                </div>

                <div className="space-y-1.5 pt-2">
                    <Label htmlFor="ship-class" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Fulfillment Classification Ruleset</Label>
                    <Select defaultValue="standard">
                        <SelectTrigger id="ship-class" className="h-9">
                            <SelectValue placeholder="Select rule" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="standard">Standard Domestic Ground Transit</SelectItem>
                            <SelectItem value="fragile">Heavy Protective Double-Box Wrap</SelectItem>
                            <SelectItem value="oversized">Oversized Freight Logistics (Palletized)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                    <div className="flex items-center justify-between text-xs p-3 border border-neutral-100 dark:border-neutral-800 rounded-md bg-neutral-50/40 dark:bg-neutral-900/40">
                        <div className="space-y-0.5">
                            <Label htmlFor="sw-ship-req" className="font-bold text-neutral-950 dark:text-white cursor-pointer">Physical Distribution Required</Label>
                            <p className="text-[11px] text-neutral-400">Item relies on physical shipping infrastructure.</p>
                        </div>
                        <Switch id="sw-ship-req" defaultChecked className="cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between text-xs p-3 border border-neutral-100 dark:border-neutral-800 rounded-md bg-neutral-50/40 dark:bg-neutral-900/40">
                        <div className="space-y-0.5">
                            <Label htmlFor="sw-ship-free" className="font-bold text-neutral-950 dark:text-white cursor-pointer">Global Free Shipping Tier</Label>
                            <p className="text-[11px] text-neutral-400">Bypass carrier freight quotes globally.</p>
                        </div>
                        <Switch id="sw-ship-free" className="cursor-pointer" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}