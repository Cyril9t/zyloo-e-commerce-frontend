import { Link } from "react-router-dom";
import { Store } from "lucide-react";
import { cn } from "../../lib/utils";

interface LogoProps {
    showText?: boolean;
    className?: string;
}

export default function Logo({
    showText = true,
    className,
}: LogoProps) {
    return (
        <Link
            to="/"
            className={cn(
                "flex items-center gap-2 transition-opacity hover:opacity-80",
                className
            )}
            aria-label="Go to homepage"
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Store className="h-5 w-5" />
            </div>

            {showText && (
                <div className="flex flex-col leading-none">
                    <span className="text-lg font-bold tracking-tight">
                        Zyloo
                    </span>

                    <span className="text-xs text-muted-foreground">
                        Premium Store
                    </span>
                </div>
            )}
        </Link>
    );
}