
import {
    Image as ImageIcon,

    Calendar as CalendarIcon,
    BarChart3,
    CheckCircle2,


} from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card";


export default function ProductStatistics() {
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