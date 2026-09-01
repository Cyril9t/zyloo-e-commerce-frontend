import { Bell, } from "lucide-react";
import { SidebarTrigger } from "../../../../components/ui/sidebar";
import { Button } from "../../../../components/ui/button";
import SearchBar from "../../../../components/common/searchBar";
import { ThemeToggle } from "../../../../components/theme/toggle-theme";
export default function AdminTopbar() {
    return (
        <header className="flex h-16 items-center justify-between border-b px-6">
            <div className="">
                <SidebarTrigger />
            </div>
            <div className="grow justify-end flex gap-2 w-full">

                <SearchBar />

                <Button
                    variant="ghost"
                    size="icon"
                >
                    <Bell className="h-5 w-5" />
                </Button>
                <ThemeToggle />
            </div>
        </header>
    );
}