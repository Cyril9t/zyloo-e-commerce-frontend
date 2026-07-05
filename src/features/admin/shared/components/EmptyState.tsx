import { Inbox } from "lucide-react";

interface EmptyStateProps {
    title: string;
    description: string;
}

export default function EmptyState({
    title,
    description,
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
            <Inbox className="mb-4 h-12 w-12 text-muted-foreground" />

            <h2 className="text-xl font-semibold">
                {title}
            </h2>

            <p className="mt-2 max-w-md text-muted-foreground">
                {description}
            </p>
        </div>
    );
}