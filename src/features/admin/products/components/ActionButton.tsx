
import {
    MoveUp,
} from "lucide-react";

import { Button } from "../../../../components/ui/button";
export default function ActionButtons() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
                <MoveUp className="h-3.5 w-3.5 stroke-2" />
                <span>Last system update: <span className="font-mono font-bold text-neutral-700 dark:text-neutral-300">Just Now</span></span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <Button variant="ghost" size="sm" className="h-9 text-xs font-semibold text-neutral-500 hover:text-neutral-950 dark:hover:text-white px-4">
                    Cancel Configuration
                </Button>
                {/* <Button variant="outline" size="sm" className="h-9 text-xs font-semibold bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-2xs">
                    Save Internal Draft
                </Button> */}
                {/* <Button size="sm" className="h-9 text-xs font-bold uppercase tracking-wider px-5 bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950 hover:opacity-90 transition-opacity shadow-sm">
                    Publish Dynamic Manifest
                </Button> */}
            </div>
        </div>
    );
}