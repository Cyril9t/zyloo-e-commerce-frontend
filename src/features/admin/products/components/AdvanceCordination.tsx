import {
    Plus,
    FileDown,
    Layers,
} from "lucide-react";

import { Card } from "../../../../components/ui/card";
import { Label } from "../../../../components/ui/label";
import { Button } from "../../../../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";




export default function AdvancedAccordion() {
    return (
        <Accordion type="multiple" className="space-y-4">
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs overflow-hidden">
                <AccordionItem value="adv-downloads" className="border-none">
                    <AccordionTrigger className="p-4 px-6 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 hover:no-underline">
                        <div className="flex items-center gap-2"><FileDown className="h-4 w-4 text-neutral-500 stroke-[1.5]" /> Digital Cryptographic Manifest Downloads</div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0 text-xs text-neutral-500 font-medium leading-relaxed space-y-3">
                        <p>Attach binary blobs, operational manuals, software keys, or digital art licenses released upon gateway clearing.</p>
                        <Button size="sm" variant="outline" className="h-8 text-xs font-semibold bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"><Plus className="h-3 w-3 mr-1.5 text-neutral-400" /> Link Digital Binary Token</Button>
                    </AccordionContent>
                </AccordionItem>
            </Card>

            <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs overflow-hidden">
                <AccordionItem value="adv-cross" className="border-none">
                    <AccordionTrigger className="p-4 px-6 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 hover:no-underline">
                        <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-neutral-500 stroke-[1.5]" /> Architectural Product Graph Links (Cross-Sells & Upsells)</div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0 text-xs text-neutral-400 font-medium space-y-4">
                        <div className="space-y-1.5">
                            <Label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Upsell Recommendation Array Nodes</Label>
                            <Select>
                                <SelectTrigger className="h-9"><SelectValue placeholder="Link high-margin equivalents..." /></SelectTrigger>
                                <SelectContent><SelectItem value="m1">Premium Merino Trench Coat ($850)</SelectItem></SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Cross-Sell Composite Accessories</Label>
                            <Select>
                                <SelectTrigger className="h-9"><SelectValue placeholder="Link complementing accessories..." /></SelectTrigger>
                                <SelectContent><SelectItem value="c1">Silk Guard Scarf ($95)</SelectItem></SelectContent>
                            </Select>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Card>
        </Accordion>
    );
}
