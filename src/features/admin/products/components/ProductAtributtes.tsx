import * as React from "react";
import {
    X,
    Plus,
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";


interface AttributesProps {
    attributes: any;
    setAttributes: React.Dispatch<React.SetStateAction<any>>;
}

export default function ProductAttributes({ attributes, setAttributes }: AttributesProps) {
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
            <CardHeader className="p-6 pb-4 flex flex-row items-center justify-between gap-4">
                <div>
                    <CardTitle className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Custom Spec Specification Attributes</CardTitle>
                    <CardDescription className="text-xs">Define technical specifications mapping to data summary blocks displayed on storefront viewports.</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="h-8 text-xs font-semibold bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-2xs" onClick={() => setAttributes([...attributes, { id: `attr-${Date.now()}`, key: "", value: "" }])}>
                    <Plus className="h-3.5 w-3.5 mr-1.5 text-neutral-400" /> New Attribute Row
                </Button>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-3">
                {attributes.map((attr: any) => (
                    <div key={attr.id} className="flex gap-4 items-center animate-in fade-in duration-200">
                        <Input
                            placeholder="Specification Parameter Key (e.g., Fabric)"
                            value={attr.key}
                            onChange={(e) => setAttributes(attributes.map((a: any) => a.id === attr.id ? { ...a, key: e.target.value } : a))}
                            className="h-9 text-xs font-semibold"
                        />
                        <Input
                            placeholder="Data Target Mapping Value (e.g., 100% Cotton)"
                            value={attr.value}
                            onChange={(e) => setAttributes(attributes.map((a: any) => a.id === attr.id ? { ...a, value: e.target.value } : a))}
                            className="h-9 text-xs"
                        />
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-neutral-400 hover:text-rose-600 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 rounded-md shrink-0" onClick={() => setAttributes(attributes.filter((a: any) => a.id !== attr.id))}>
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}