import { profile } from "../../../mock/profile";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";

export default function ProfileAvatar() {
    return (
        <div className="flex flex-col items-center gap-4 rounded-2xl border p-8">
            <Avatar className="h-32 w-32">
                <AvatarImage
                    src={profile.avatar}
                    alt={profile.firstName}
                />

                <AvatarFallback>
                    {profile.firstName[0]}
                    {profile.lastName[0]}
                </AvatarFallback>
            </Avatar>

            <div className="text-center">
                <h2 className="text-2xl font-bold">
                    {profile.firstName} {profile.lastName}
                </h2>

                <p className="text-muted-foreground">
                    {profile.email}
                </p>
            </div>
        </div>
    );
}