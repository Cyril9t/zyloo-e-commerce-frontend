import { ArrowLeft, Eye, Save, SaveAll } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { PATHS } from "../../../../routes/paths";
import { Link } from "react-router-dom";

export default function PageHeader() {
    return (
        <div className="w-full flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <Link to={PATHS.admin.products}>
                    <Button variant="ghost" size="icon" className="h-9 w-9 border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-900 shadow-2xs">
                        <ArrowLeft className="h-4 w-4 text-neutral-500" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-xl font-bold tracking-tight   flex items-center gap-2">
                        Add New Product
                    </h1>
                    <p className="hidden sm:block text-xs opacity-70 font-medium">Instantiate a novel commercial inventory entry across system channels.</p>
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