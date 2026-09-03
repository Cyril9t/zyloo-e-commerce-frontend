import { Camera } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { Card, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import type { UserProfileData } from "../pages/ProfilePage";
import { useAuth } from "../../../context/AuthProvider";
import ECommercePageLoader from "../../../components/common/UniversalLoadingState";
export default function ProfileOverview({ profile }: { profile: UserProfileData }) {
    const { user, isMutating } = useAuth()

    if (isMutating) return <ECommercePageLoader variant="default" fullScreen={false} />
    return (
        <Card className=" bg-background border border-muted-foreground  shadow-xs  overflow-hidden">
            <CardContent className="p-6 text-center flex flex-col items-center">

                {/* Immersive Avatar Container */}
                <div className="relative group cursor-pointer mb-4">

                    <div className="absolute bottom-0 right-1 p-2 bg-foreground rounded-full text-background border border-background shadow-sm transition-opacity opacity-90 group-hover:opacity-100">
                        <Camera className="h-3.5 w-3.5" />
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-foreground tracking-tight">{user?.firstName} {user?.lastName}</h2>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">{user?.email}</p>

                <Badge variant="secondary" className="mt-3 bg-border text-foreground  p-2 text-[11px] font-semibold tracking-wide uppercase border border-border ">
                    Platinum Elite
                </Badge>




                <div className="grid justify-self-center grid-cols-3 w-full gap-2 mt-6 pt-5 border-t border-foreground ">
                    <div className="text-center">
                        <span className="block text-sm font-bold tracking-tight text-foreground">12</span>
                        <span className="text-[12px] text-foreground/65 font-medium uppercase tracking-wider">Orders</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-sm font-bold tracking-tight text-foreground">8</span>
                        <span className="text-[12px] text-foreground/65 font-medium uppercase tracking-wider">Saved</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-sm font-bold tracking-tight text-foreground">4</span>
                        <span className="text-[12px] text-foreground/65 font-medium uppercase tracking-wider">Reviews</span>
                    </div>

                </div>

                {/* Structural Metadata Block */}
                <div className="w-full text-left  border border-muted-foreground rounded-lg p-3 mt-8 space-y-5 text-xs">
                    <div className="flex justify-between"><span className="text-foreground/80 font-medium">Phone:</span> <span className="text-neutral-700 dark:text-neutral-300 font-medium">{profile.phone}</span></div>
                    <div className="flex justify-between"><span className="text-foreground/80 font-medium">Joined:</span> <span className="text-neutral-700 dark:text-neutral-300 font-medium">{profile.memberSince}</span></div>
                </div>

            </CardContent>
        </Card>
    );
}