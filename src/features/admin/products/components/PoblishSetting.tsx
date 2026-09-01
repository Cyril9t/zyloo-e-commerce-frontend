
import {

    Settings2,
    Calendar as CalendarIcon,
    Info
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";

import { Label } from "../../../../components/ui/label";

import { Button } from "../../../../components/ui/button";

import { Separator } from "../../../../components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Switch } from "../../../../components/ui/switch";


import { Popover, PopoverContent, PopoverTrigger } from "../../../../components/ui/popover";


import { TooltipContent, TooltipTrigger } from "../../../../components/ui/tooltip";
import { Calendar } from "../../../../components/ui/calendar";




interface PublishProps {
    publishDate: Date | undefined;
    setPublishDate: (d: Date | undefined) => void;
}

export default function PublishSettings({ publishDate, setPublishDate }: PublishProps) {
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