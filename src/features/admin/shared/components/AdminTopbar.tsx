import { Bell, Search } from "lucide-react";

import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export default function AdminTopbar() {
    return (
        <header className="flex h-16 items-center justify-between border-b px-6">
            <div className="relative w-80">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                    placeholder="Search..."
                    className="pl-10"
                />
            </div>

            <Button
                variant="ghost"
                size="icon"
            >
                <Bell className="h-5 w-5" />
            </Button>
        </header>
    );
}