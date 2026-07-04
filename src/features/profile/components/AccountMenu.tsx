import {
    User,
    Package,
    MapPin,
    LogOut,
} from "lucide-react";

import { Button } from "../../../components/ui/button";

export default function AccountMenu() {
    return (
        <div className="rounded-2xl border p-4">
            <div className="flex flex-col gap-2">
                <Button variant="ghost" className="justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                </Button>

                <Button variant="ghost" className="justify-start">
                    <Package className="mr-2 h-4 w-4" />
                    Orders
                </Button>

                <Button variant="ghost" className="justify-start">
                    <MapPin className="mr-2 h-4 w-4" />
                    Addresses
                </Button>

                <Button
                    variant="destructive"
                    className="mt-4"
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </div>
        </div>
    );
}