
import {


    Globe,

    Link2,



} from "lucide-react";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { cn } from "../../../../lib/utils";



interface SEOProps {
    title: string;
    desc: string;
    onTitleChange: (val: string) => void;
    onDescChange: (val: string) => void;
}

export default function ProductSEO({ title, desc, onTitleChange, onDescChange }: SEOProps) {
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
            <Accordion type="single" collapsible defaultValue="seo-panel">
                <AccordionItem value="seo-panel" className="border-none">
                    <AccordionTrigger className="p-6 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 hover:no-underline">
                        <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-neutral-500 stroke-[1.5]" /> Search Engine Metadata Optimization (SEO)</div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-0 space-y-4">

                        {/* Live Snippet Simulation Container */}
                        <div className="p-3 border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/60 rounded-md text-xs space-y-1">
                            <span className="text-[10px] font-medium text-neutral-400 font-mono flex items-center gap-1"><Link2 className="h-3 w-3 text-emerald-500" /> core-system.shop/products/<span className="text-neutral-600 dark:text-neutral-300 font-bold">{title.toLowerCase().replace(/\s+/g, '-') || 'unnamed-permalink'}</span></span>
                            <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 truncate">{title || 'Index Meta Title Placeholder String'}</h4>
                            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">{desc || 'Provide comprehensive structural target markers matching data fields. Search results display index lines here.'}</p>
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs">
                                <Label htmlFor="seo-t-in" className="font-semibold text-neutral-600 dark:text-neutral-400">Meta Title Header Override</Label>
                                <span className={cn("font-mono text-[10px]", title.length > 60 ? "text-amber-500" : "text-neutral-400")}>{title.length} / 60 characters</span>
                            </div>
                            <Input id="seo-t-in" maxLength={70} value={title} onChange={(e) => onTitleChange(e.target.value)} placeholder="Keep titles focused, descriptive, and under 60 characters..." className="h-9 text-xs" />
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs">
                                <Label htmlFor="seo-d-in" className="font-semibold text-neutral-600 dark:text-neutral-400">Meta Description Core String</Label>
                                <span className={cn("font-mono text-[10px]", desc.length > 155 ? "text-amber-500" : "text-neutral-400")}>{desc.length} / 155 characters</span>
                            </div>
                            <Textarea id="seo-d-in" maxLength={180} value={desc} onChange={(e) => onDescChange(e.target.value)} placeholder="Summarize listing context matching search expectations..." className="min-h-[70px] text-xs leading-normal" />
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Card>
    );
}