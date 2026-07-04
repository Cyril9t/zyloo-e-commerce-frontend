import { Minus, Plus } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function QuantitySelector() {
    return (
        <div className="flex w-fit items-center rounded-lg border">
            <Button
                variant="ghost"
                size="icon"
                className="rounded-none rounded-l-lg"
            >
                <Minus className="h-4 w-4" />
            </Button>

            <span className="flex h-10 min-w-12 items-center justify-center border-x font-medium">
                1
            </span>

            <Button
                variant="ghost"
                size="icon"
                className="rounded-none rounded-r-lg"
            >
                <Plus className="h-4 w-4" />
            </Button>
        </div>
    );
}