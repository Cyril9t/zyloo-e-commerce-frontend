import * as React from "react";
import {
    ArrowLeft,
    Eye,
    Save,
    UploadCloud,
    X,
    Image as ImageIcon,
    Plus,
    Trash2,
    Settings2,
    Globe,
    FileDown,
    Link2,
    Layers,
    Calendar as CalendarIcon,
    BarChart3,
    CheckCircle2,
    MoveUp,
    Info
} from "lucide-react";

// ==========================================
// SHADCN/UI PRIMITIVES (Mocked Paths)
// ==========================================
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { Separator } from "../../../../components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Switch } from "../../../../components/ui/switch";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "../../../../components/ui/popover";

import { Progress } from "../../../../components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../../components/ui/tooltip";
import { Calendar } from "../../../../components/ui/calendar";

// ==========================================
// CORE STATE TYPES
// ==========================================
interface ProductImageFile {
    id: string;
    url: string;
    name: string;
    size: string;
    isFeatured: boolean;
    progress?: number;
}

interface ProductVariantOption {
    id: string;
    name: string; // e.g., Size, Color
    values: string[];
}

interface CustomAttribute {
    id: string;
    key: string;
    value: string;
}

// ==========================================
// MAIN PARENT COMPONENT
// ==========================================
export default function AddProductPage() {
    // Dynamic interactive states managed locally for administration persistence
    const [tags, setTags] = React.useState<string[]>(["Premium", "Essentials", "Winter-26"]);
    const [tagInput, setTagInput] = React.useState("");
    const [images, setImages] = React.useState<ProductImageFile[]>([
        { id: "img-1", url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80", name: "merino_front.jpg", size: "1.2 MB", isFeatured: true },
        { id: "img-2", url: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&q=80", name: "merino_weave.jpg", size: "2.4 MB", isFeatured: false }
    ]);
    const [variants, setVariants] = React.useState<ProductVariantOption[]>([
        { id: "v-1", name: "Size", values: ["S", "M", "L"] },
        { id: "v-2", name: "Color", values: ["Slate", "Charcoal"] }
    ]);
    const [attributes, setAttributes] = React.useState<CustomAttribute[]>([
        { id: "a-1", key: "Material", value: "100% Merino Wool" },
        { id: "a-2", key: "Warranty", value: "2-Year Studio Guarantee" }
    ]);
    const [seoTitle, setSeoTitle] = React.useState("");
    const [seoDesc, setSeoDesc] = React.useState("");
    const [publishDate, setPublishDate] = React.useState<Date | undefined>(new Date());

    // Local state mechanics helpers
    const handleAddTag = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && tagInput.trim()) {
            e.preventDefault();
            if (!tags.includes(tagInput.trim())) setTags([...tags, tagInput.trim()]);
            setTagInput("");
        }
    };

    const handleRemoveTag = (index: number) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    const setFeaturedImage = (id: string) => {
        setImages(images.map(img => ({ ...img, isFeatured: img.id === id })));
    };

    const removeImage = (id: string) => {
        setImages(images.filter(img => img.id !== id));
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <div className="w-full min-h-screen bg-neutral-50/60 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 antialiased selection:bg-neutral-200">

                    {/* Global Sticky Layout Top Navigation Header Wrapper */}
                    <div className="sticky top-0 z-40 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-800/60 transition-colors">
                        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                            <PageHeader />
                        </div>
                    </div>

                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

                        {/* Primary Grid Layout Frame: Desktop Two-Column, Mobile Stacked */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                            {/* LEFT COLUMN: Large Administrative Core Manifest Fields (8/12 Layout) */}
                            <div className="lg:col-span-8 space-y-8">
                                <ProductInformation
                                    tags={tags}
                                    tagInput={tagInput}
                                    onTagInputChange={setTagInput}
                                    onAddTag={handleAddTag}
                                    onRemoveTag={handleRemoveTag}
                                />
                                <ProductImages
                                    images={images}
                                    onSetFeatured={setFeaturedImage}
                                    onRemove={removeImage}
                                />
                                <PricingInventory />
                                <ProductVariants variants={variants} setVariants={setVariants} />
                                <ShippingInformation />
                                <ProductAttributes attributes={attributes} setAttributes={setAttributes} />
                                <ProductSEO
                                    title={seoTitle}
                                    desc={seoDesc}
                                    onTitleChange={setSeoTitle}
                                    onDescChange={setSeoDesc}
                                />
                                <AdvancedAccordion />
                            </div>

                            {/* RIGHT COLUMN: Sticky Publishing Panels & Platform Context (4/12 Layout) */}
                            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
                                <PublishSettings publishDate={publishDate} setPublishDate={setPublishDate} />
                                <CategorySection />
                                <ProductStatistics />
                            </div>

                        </div>

                        {/* Universal Bottom Layout Control Strip */}
                        <div className="mt-8 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60">
                            <ActionButtons />
                        </div>

                    </div>
                </div>
            </Tooltip>
        </TooltipProvider>
    );
}

// ==========================================
// MODULAR SUB-COMPONENTS
// ==========================================

function PageHeader() {
    return (
        <div className="w-full flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="h-9 w-9 border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-900 shadow-2xs">
                    <ArrowLeft className="h-4 w-4 text-neutral-500" />
                </Button>
                <div>
                    <h1 className="text-base font-bold tracking-tight text-neutral-950 dark:text-neutral-50 flex items-center gap-2">
                        Add New Product
                    </h1>
                    <p className="hidden sm:block text-xs text-neutral-400 font-medium">Instantiate a novel commercial inventory entry across system channels.</p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-9 text-xs font-semibold bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-2xs">
                    <Save className="h-3.5 w-3.5 mr-2 text-neutral-400" />
                    Save Draft
                </Button>
                <Button variant="outline" size="sm" className="h-9 text-xs font-semibold bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-2xs">
                    <Eye className="h-3.5 w-3.5 mr-2 text-neutral-400" />
                    Preview
                </Button>
                <Button size="sm" className="h-9 text-xs font-bold uppercase tracking-wider px-4 bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950 hover:opacity-90 transition-opacity shadow-sm">
                    Publish Product
                </Button>
            </div>
        </div>
    );
}

interface InfoProps {
    tags: string[];
    tagInput: string;
    onTagInputChange: (val: string) => void;
    onAddTag: (e: React.KeyboardEvent) => void;
    onRemoveTag: (idx: number) => void;
}

function ProductInformation({ tags, tagInput, onTagInputChange, onAddTag, onRemoveTag }: InfoProps) {
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
            <CardHeader className="p-6 pb-4">
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Product Specification Matrix</CardTitle>
                <CardDescription className="text-xs">Configure identity markers and detailed text copy blocks mapping to digital storefront views.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
                <div className="space-y-1.5">
                    <Label htmlFor="prod-name" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Formal Product Designation Name</Label>
                    <Input id="prod-name" placeholder="e.g., Silk Structural Blazer" className="h-9 focus-visible:ring-1 focus-visible:ring-neutral-950" />
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="prod-short-desc" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Teaser Abstract Summary</Label>
                    <Input id="prod-short-desc" placeholder="Brief summary displayed in list search frames..." className="h-9 focus-visible:ring-1" />
                </div>

                <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                        <Label htmlFor="prod-full-desc" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Comprehensive Storefront Rich Manifest Description</Label>
                        <span className="text-[10px] text-neutral-400 font-medium">Rich-Text Editor Layer Engaged</span>
                    </div>
                    <Textarea id="prod-full-desc" placeholder="Describe materials, cut, design philosophy, structural maintenance instructions..." className="min-h-[140px] focus-visible:ring-1 resize-y leading-relaxed" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                        <Label htmlFor="prod-brand" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Brand Label Node</Label>
                        <Input id="prod-brand" placeholder="e.g., Studio Atelier" className="h-9" />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="prod-manufacturer" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Corporate Origin Manufacturer</Label>
                        <Input id="prod-manufacturer" placeholder="e.g., Nord Vanguard Industries" className="h-9" />
                    </div>
                </div>

                {/* Tags Management Block Component Inset */}
                <div className="space-y-2 pt-2">
                    <Label htmlFor="prod-tags" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Search Engine Collection Tokens (Tags)</Label>
                    <div className="flex flex-wrap gap-1.5 p-2 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/70 dark:border-neutral-800/70 rounded-md min-h-9 items-center">
                        {tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="inline-flex items-center gap-1 text-[11px] font-medium tracking-tight px-2 py-0.5 rounded-sm border bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                                {tag}
                                <X className="h-2.5 w-2.5 cursor-pointer text-neutral-400 hover:text-neutral-900" onClick={() => onRemoveTag(index)} />
                            </Badge>
                        ))}
                        <input
                            id="prod-tags"
                            type="text"
                            placeholder={tags.length === 0 ? "Type tag token and hit Enter..." : "Add..."}
                            value={tagInput}
                            onChange={(e) => onTagInputChange(e.target.value)}
                            onKeyDown={onAddTag}
                            className="flex-1 min-w-[120px] bg-transparent outline-none border-none shadow-none text-xs text-neutral-700 dark:text-neutral-300 px-1 py-0.5"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

interface ImagesProps {
    images: ProductImageFile[];
    onSetFeatured: (id: string) => void;
    onRemove: (id: string) => void;
}

function ProductImages({ images, onSetFeatured, onRemove }: ImagesProps) {
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
            <CardHeader className="p-6 pb-4">
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Storefront Visual Asset Repository</CardTitle>
                <CardDescription className="text-xs">Upload and structure visual array tokens matching product variations. High-fidelity textures preferred.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-6">

                {/* Drag and Drop Visual Platform Area */}
                <div className="border border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-8 text-center bg-neutral-50/50 dark:bg-neutral-900/40 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer group flex flex-col items-center justify-center">
                    <UploadCloud className="h-8 w-8 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 transition-colors mb-3 stroke-[1.5]" />
                    <span className="text-xs font-bold text-neutral-950 dark:text-neutral-50 tracking-tight">Stream assets via local system files</span>
                    <p className="text-[11px] text-neutral-400 mt-1 font-medium">Drag and drop raw structures or browse arrays (PNG, JPEG, WEBP up to 15MB each)</p>
                </div>

                {/* Simulated Core Pipeline Active Upload State Tracker */}
                <div className="p-3 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800 rounded-md space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-medium text-neutral-400">
                        <div className="flex items-center gap-2"><ImageIcon className="h-3.5 w-3.5 text-neutral-500" /> <span>studio_blazer_hd_back.png</span></div>
                        <span className="font-mono">74% Buffered</span>
                    </div>
                    <Progress value={74} className="h-1 bg-neutral-200 dark:bg-neutral-800" />
                </div>

                {/* Dynamic Grid Layout Array Container */}
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                    {images.map((img) => (
                        <div key={img.id} className={cn("group relative aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden border transition-all shadow-2xs", img.isFeatured ? "border-neutral-950 dark:border-white ring-1 ring-neutral-950 dark:ring-white" : "border-neutral-200/80 dark:border-neutral-800")}>
                            <img src={img.url} alt={img.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102" />

                            {/* Action Overlay Strip */}
                            <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                                <div className="flex justify-end">
                                    <button type="button" onClick={() => onRemove(img.id)} className="p-1 bg-white/90 rounded-md text-neutral-500 hover:text-rose-600 shadow-xs transition-colors backdrop-blur-xs">
                                        <X className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[9px] font-mono text-white truncate px-1">{img.name}</span>
                                    {!img.isFeatured ? (
                                        <Button size="sm" variant="secondary" className="h-6 text-[10px] font-bold uppercase tracking-wider rounded-sm w-full py-0" onClick={() => onSetFeatured(img.id)}>Set Hero</Button>
                                    ) : (
                                        <Badge className="text-[9px] font-bold uppercase tracking-wider rounded-sm bg-white text-neutral-950 justify-center h-5">Hero Node</Badge>
                                    )}
                                </div>
                            </div>

                            {/* Static Top Flag for Featured Asset */}
                            {img.isFeatured && (
                                <div className="absolute top-2 left-2 pointer-events-none">
                                    <Badge className="text-[9px] font-bold uppercase tracking-wider rounded-xs px-1.5 py-0 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-sm border border-white/20">Primary</Badge>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </CardContent>
        </Card>
    );
}

function PricingInventory() {
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs">
            <CardHeader className="p-6 pb-4 border-b border-neutral-100 dark:border-neutral-800/60">
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Financial Ledger & Warehouse Logistical Parameters</CardTitle>
                <CardDescription className="text-xs">Establish fiscal margin targets and warehouse unit-tracking parameters.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-100 dark:divide-neutral-800/80">

                {/* Fiscal Columns Pricing Section */}
                <div className="space-y-4 md:pr-4">
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
                <div className="space-y-4 pt-6 md:pt-0 md:pl-8">
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
                </div>

            </CardContent>
        </Card>
    );
}

interface VariantsProps {
    variants: ProductVariantOption[];
    setVariants: React.Dispatch<React.SetStateAction<ProductVariantOption[]>>;
}

function ProductVariants({ variants, setVariants }: VariantsProps) {
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
                {variants.map((variant) => (
                    <div key={variant.id} className="p-4 border border-neutral-200/60 dark:border-neutral-800/60 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/40 relative group animate-in fade-in duration-200">
                        <button type="button" onClick={() => setVariants(variants.filter(v => v.id !== variant.id))} className="absolute top-3 right-3 p-1 text-neutral-400 hover:text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity">
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
                                    {variant.values.map((v, i) => (
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

function ShippingInformation() {
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

interface AttributesProps {
    attributes: CustomAttribute[];
    setAttributes: React.Dispatch<React.SetStateAction<CustomAttribute[]>>;
}

function ProductAttributes({ attributes, setAttributes }: AttributesProps) {
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
                {attributes.map((attr) => (
                    <div key={attr.id} className="flex gap-4 items-center animate-in fade-in duration-200">
                        <Input
                            placeholder="Specification Parameter Key (e.g., Fabric)"
                            value={attr.key}
                            onChange={(e) => setAttributes(attributes.map(a => a.id === attr.id ? { ...a, key: e.target.value } : a))}
                            className="h-9 text-xs font-semibold"
                        />
                        <Input
                            placeholder="Data Target Mapping Value (e.g., 100% Cotton)"
                            value={attr.value}
                            onChange={(e) => setAttributes(attributes.map(a => a.id === attr.id ? { ...a, value: e.target.value } : a))}
                            className="h-9 text-xs"
                        />
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-neutral-400 hover:text-rose-600 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 rounded-md shrink-0" onClick={() => setAttributes(attributes.filter(a => a.id !== attr.id))}>
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

interface SEOProps {
    title: string;
    desc: string;
    onTitleChange: (val: string) => void;
    onDescChange: (val: string) => void;
}

function ProductSEO({ title, desc, onTitleChange, onDescChange }: SEOProps) {
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

function AdvancedAccordion() {
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

interface PublishProps {
    publishDate: Date | undefined;
    setPublishDate: (d: Date | undefined) => void;
}

function PublishSettings({ publishDate, setPublishDate }: PublishProps) {
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/40 shadow-2xs">
            <CardHeader className="p-5 pb-3 border-b border-neutral-100 dark:border-neutral-800/60">
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-neutral-950 dark:text-white flex items-center gap-2"><Settings2 className="h-4 w-4 text-neutral-400" /> Channel Deployment</CardTitle>
            </CardHeader>
            <CardContent className="p-5 space-y-4">

                {/* Channel Visibility Matrix */}
                <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Storefront Visibility Matrix</Label>
                    <Select defaultValue="public">
                        <SelectTrigger className="h-9">
                            <SelectValue placeholder="Select visibility" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="public">Global Public Distribution</SelectItem>
                            <SelectItem value="private">Private (Restricted Token Link)</SelectItem>
                            <SelectItem value="hidden">Hidden from Internal Discovery</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Listing Core Status State Pipeline */}
                <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Lifecycle State Pipeline</Label>
                    <Select defaultValue="active">
                        <SelectTrigger className="h-9">
                            <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="active">Active Storefront Index</SelectItem>
                            <SelectItem value="draft">Draft Isolation Buffer</SelectItem>
                            <SelectItem value="scheduled">Scheduled Queue Release</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Popover Date-picker Structure wrapper */}
                <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Release Execution Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" size="sm" className="w-full justify-start text-left font-normal h-9 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">
                                <CalendarIcon className="mr-2 h-4 w-4 text-neutral-400" />
                                {publishDate ? publishDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : <span>Pick release timeline</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 z-50 bg-white dark:bg-neutral-950 border rounded-lg shadow-md" align="start">
                            <Calendar mode="single" selected={publishDate} onSelect={setPublishDate} />
                        </PopoverContent>
                    </Popover>
                </div>

                <Separator className="bg-neutral-100 dark:bg-neutral-800/60 my-2" />

                {/* Additional Sidebar Platform Toggles */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                        <Label htmlFor="sw-feat" className="font-bold text-neutral-900 dark:text-white tracking-tight cursor-pointer flex items-center gap-1.5">Elevate to Featured Node <TooltipTrigger asChild><Info className="h-3 w-3 text-neutral-400" /></TooltipTrigger></Label>
                        <TooltipContent className="text-xs bg-neutral-900 text-white p-2 rounded">Places item inside prime storefront collection carousels.</TooltipContent>
                        <Switch id="sw-feat" defaultChecked className="cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between text-xs">
                        <Label htmlFor="sw-reviews" className="font-bold text-neutral-900 dark:text-white tracking-tight cursor-pointer">Allow Customer Rating Reviews</Label>
                        <Switch id="sw-reviews" defaultChecked className="cursor-pointer" />
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}

function CategorySection() {
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

function ProductStatistics() {
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/40 shadow-2xs">
            <CardHeader className="p-5 pb-2">
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 flex items-center gap-2"><BarChart3 className="h-3.5 w-3.5" /> Channel Analytics Engine</CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-0 space-y-3">
                <div className="flex items-center justify-between p-2.5 border border-neutral-100 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/60 rounded-md text-xs font-medium">
                    <span className="text-neutral-400">Index Views (30d)</span>
                    <span className="font-mono font-bold text-neutral-950 dark:text-white">0</span>
                </div>
                <div className="flex items-center justify-between p-2.5 border border-neutral-100 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/60 rounded-md text-xs font-medium">
                    <span className="text-neutral-400">Conversion Gross Velocity</span>
                    <span className="font-mono font-bold text-neutral-950 dark:text-white">0%</span>
                </div>
                <div className="flex items-center justify-between p-2.5 border border-neutral-100 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/60 rounded-md text-xs font-medium">
                    <span className="text-neutral-400">Wishlist Track Retainers</span>
                    <span className="font-mono font-bold text-neutral-950 dark:text-white">0</span>
                </div>
                <div className="p-2.5 bg-neutral-50 dark:bg-neutral-900 border rounded-md text-[10px] text-neutral-400 font-medium leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-neutral-400 shrink-0 mt-0.5" />
                    <span>Analytics data telemetry updates continuously following system propagation across channel routers.</span>
                </div>
            </CardContent>
        </Card>
    );
}

function ActionButtons() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
                <MoveUp className="h-3.5 w-3.5 stroke-[2]" />
                <span>Last system update: <span className="font-mono font-bold text-neutral-700 dark:text-neutral-300">Just Now</span></span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <Button variant="ghost" size="sm" className="h-9 text-xs font-semibold text-neutral-500 hover:text-neutral-950 dark:hover:text-white px-4">
                    Cancel Configuration
                </Button>
                <Button variant="outline" size="sm" className="h-9 text-xs font-semibold bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-2xs">
                    Save Internal Draft
                </Button>
                <Button size="sm" className="h-9 text-xs font-bold uppercase tracking-wider px-5 bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950 hover:opacity-90 transition-opacity shadow-sm">
                    Publish Dynamic Manifest
                </Button>
            </div>
        </div>
    );
}

// ==========================================
// TAILWIND CONDITION SYNTACTIC MERGE HELPER (CN)
// ==========================================
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}