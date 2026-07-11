import {
    User,
    Package,
    MapPin,
    LogOut,
} from "lucide-react";

import { logout } from "../../../lib/auth/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";
import { PATHS } from "../../../routes/paths";
import { useAuth } from "../../../context/AuhProvider";

export default function AccountMenu() {
    const { trigger, error } = logout();
    const { setUser } = useAuth()
    const navigate = useNavigate();

    const logOut = async () => {
        try {
            const loggedOut = trigger()
            toast.promise(loggedOut, {
                success: (data) => data.Message,
                loading: "Processing..."
            })
            const details = await loggedOut
            if (details.Message === "Logged out Successfully") {
                setUser(null)
                return navigate(PATHS.auth.login, { replace: true })
            }
        } catch (error) {
            console.log(error)
            toast.error("Operation Failed")
        }
    }

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
                    onClick={logOut}
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </div>
        </div>
    );
}