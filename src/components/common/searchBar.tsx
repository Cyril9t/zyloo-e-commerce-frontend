import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import { Button } from "../ui/button";
interface SearchBarProps {
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    navigateToProducts?: boolean;
}

export default function SearchBar({
    placeholder = "Search products...",
    className,
    value,
    onChange,
    navigateToProducts = false,
}: SearchBarProps) {
    const [search, setSearch] = useState(value ?? "");
    const navigate = useNavigate();
    const inputValue = value ?? search;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!navigateToProducts) return;

        const query = inputValue.trim();
        navigate(query ? `${PATHS.customer.products}?search=${encodeURIComponent(query)}` : PATHS.customer.products);
    };

    const handleChange = (nextValue: string) => {
        if (value === undefined) setSearch(nextValue);
        onChange?.(nextValue);
    };

    return (
        <form onSubmit={handleSubmit} className={cn("relative w-full max-w-lg", className)}>


            <Input
                type="search"
                placeholder={placeholder}
                className="pl-15"
                value={inputValue}
                onChange={(event) => handleChange(event.target.value)}

            />

            <Button variant={"outline"} className="absolute left-0 top-1/2  -translate-y-1/2 text-muted-foreground" >
                <Search />
            </Button>
        </form>
    );
}