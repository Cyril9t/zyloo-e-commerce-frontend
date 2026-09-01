import * as React from "react";
import {

    Plus,
    Trash2,


} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";

interface VariantsProps {
    variants: any;
    setVariants: React.Dispatch<React.SetStateAction<any>>;
}

export default function ProductVariants({ variants, setVariants }: VariantsProps) {
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
            <CardHeader className="p-6 pb-4 flex flex-row items-center justify-between gap-4">
                <div>
                    <CardTitle className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Dimensional Variant Matrix Architecture</CardTitle>
                    <CardDescription className="text-xs">Generate multiple option matrices for size, sizing charts, colors, or technical frameworks.</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="h-8 text-xs font-semibold bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-2xs">
                    <Plus className="h-3.5 w-3.5 mr-1.5 text-neutral-400" /> Options Template
                </Button>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
                {variants.map((variant: any) => (
                    <div key={variant.id} className="p-4 border border-neutral-200/60 dark:border-neutral-800/60 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/40 relative group animate-in fade-in duration-200">
                        <button type="button" onClick={() => setVariants(variants.filter((v: any) => v.id !== variant.id))} className="absolute top-3 right-3 p-1 text-neutral-400 hover:text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Trash2 className="h-3.5 w-3.5" />
                        </button>

                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
                            <div className="space-y-1.5 sm:col-span-1">
                                <Label className="text-xs font-semibold text-neutral-500">Matrix Variable</Label>
                                <Input value={variant.name} disabled className="h-9 bg-neutral-100/60 dark:bg-neutral-800/60 font-medium" />
                            </div>
                            <div className="space-y-1.5 sm:col-span-3">
                                <Label className="text-xs font-semibold text-neutral-500">Construct Tokens (Values Array)</Label>
                                <div className="flex flex-wrap gap-1 p-1.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md min-h-9 items-center">
                                    {variant.values.map((v: any, i: any) => (
                                        <Badge key={i} className="text-[10px] font-bold tracking-tight rounded-xs bg-neutral-900 dark:bg-neutral-800 text-white dark:text-neutral-200 px-2 py-0.5">{v}</Badge>
                                    ))}
                                    <span className="text-[10px] text-neutral-400 font-medium px-2 italic">Read-only schema</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Simulated Programmatic Generation Table Display Segment */}
                <div className="pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Generated Matrix Inset Skus (6 Active Skus)</div>
                    <div className="border border-neutral-200/60 dark:border-neutral-800/60 rounded-lg overflow-hidden text-xs bg-white dark:bg-neutral-900/40">
                        <div className="grid grid-cols-4 gap-2 bg-neutral-50 dark:bg-neutral-900/80 p-2.5 font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-200/60 dark:border-neutral-800/60">
                            <div>Variant Core</div>
                            <div>Price Shift</div>
                            <div>Stock Adjust</div>
                            <div className="text-right">Unique SKU Infix</div>
                        </div>
                        <div className="divide-y divide-neutral-100 dark:divide-neutral-800/60">
                            <div className="grid grid-cols-4 gap-2 p-2.5 items-center font-mono text-[11px]">
                                <div className="font-sans font-bold text-neutral-950 dark:text-white">S / Slate</div>
                                <div><input type="text" defaultValue="0.00" className="w-16 bg-transparent border-b border-neutral-200 dark:border-neutral-800 outline-none" /></div>
                                <div><input type="text" defaultValue="50" className="w-12 bg-transparent border-b border-neutral-200 dark:border-neutral-800 outline-none" /></div>
                                <div className="text-right text-neutral-400">AT-BLZ-S-SLT</div>
                            </div>
                            <div className="grid grid-cols-4 gap-2 p-2.5 items-center font-mono text-[11px]">
                                <div className="font-sans font-bold text-neutral-950 dark:text-white">M / Slate</div>
                                <div><input type="text" defaultValue="0.00" className="w-16 bg-transparent border-b border-neutral-200 dark:border-neutral-800 outline-none" /></div>
                                <div><input type="text" defaultValue="45" className="w-12 bg-transparent border-b border-neutral-200 dark:border-neutral-800 outline-none" /></div>
                                <div className="text-right text-neutral-400">AT-BLZ-M-SLT</div>
                            </div>
                        </div>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}