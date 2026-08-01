import { Edit2 } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function ProfileHeader({ title, description }: { title: string; description: string }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-neutral-200/60 dark:border-neutral-800/60">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
                <p className="text-sm text-foreground/60 mt-1">{description}</p>
            </div>
            <Button variant="outline" className="transition-colors">
                <Edit2 className="h-4 w-4 mr-2 text-neutral-400" />
                Quick Actions
            </Button>
        </div>
    );
}