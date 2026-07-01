import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

interface SearchBarProps {
    placeholder?: string;
    className?: string;
}

export default function SearchBar({
    placeholder = "Search products...",
    className,
}: SearchBarProps) {
    return (
        <div className={cn("relative w-full max-w-lg", className)}>
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
                type="search"
                placeholder={placeholder}
                className="pl-10"
            />
        </div>
    );
}