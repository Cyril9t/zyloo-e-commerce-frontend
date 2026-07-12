// components/visual-pickers.tsx
import { Check } from "lucide-react";
import { cn } from "../../../lib/utils"; // standard shadcn utility

interface ColorPickerProps {
    selected: string[];
    onChange: (colors: string[]) => void;
}

export function ColorPicker({ selected, onChange }: ColorPickerProps) {
    const colors = [
        { name: "Black", hex: "#000000" },
        { name: "White", hex: "#FFFFFF", border: true },
        { name: "Slate", hex: "#64748B" },
        { name: "Crimson", hex: "#DC2626" },
        { name: "Royal Blue", hex: "#2563EB" },
        { name: "Olive", hex: "#65A30D" },
    ];

    const toggle = (color: string) => {
        onChange(selected.includes(color) ? selected.filter((c) => c !== color) : [...selected, color]);
    };

    return (
        <div className="flex flex-wrap gap-3 py-2">
            {colors.map((c) => {
                const isSelected = selected.includes(c.name);
                return (
                    <button
                        key={c.name}
                        type="button"
                        onClick={() => toggle(c.name)}
                        className={cn(
                            "relative h-7 w-7 rounded-full transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                            c.border && "border border-border"
                        )}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                    >
                        {isSelected && (
                            <Check
                                className={cn(
                                    "absolute inset-0 m-auto h-4 w-4",
                                    c.name === "White" ? "text-black" : "text-white"
                                )}
                            />
                        )}
                    </button>
                );
            })}
        </div>
    );
}

interface SizePickerProps {
    selected: string[];
    onChange: (sizes: string[]) => void;
}

export function SizePicker({ selected, onChange }: SizePickerProps) {
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

    const toggle = (size: string) => {
        onChange(selected.includes(size) ? selected.filter((s) => s !== size) : [...selected, size]);
    };

    return (
        <div className="grid grid-cols-4 gap-2 py-2">
            {sizes.map((size) => {
                const isSelected = selected.includes(size);
                return (
                    <button
                        key={size}
                        type="button"
                        onClick={() => toggle(size)}
                        className={cn(
                            "h-10 border rounded-md text-xs font-medium uppercase tracking-wider transition-all duration-200",
                            isSelected
                                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                                : "border-input bg-background hover:bg-accent hover:text-accent-foreground"
                        )}
                    >
                        {size}
                    </button>
                );
            })}
        </div>
    );
}