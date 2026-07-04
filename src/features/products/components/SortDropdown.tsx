import { ArrowUpDown } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function SortDropdown() {
    return (
        <Button variant="outline" size="sm" className="h-9 gap-2 text-xs font-medium shadow-xs">
            <ArrowUpDown className="h-3.5 w-3.5 text-muted-foreground" />
            Sort By
        </Button>
    );
}