import AccountMenu from "../components/AccountMenu";
import AddressCard from "../components/AddressCard";
import ProfileAvatar from "../components/ProfileAvatar";
import ProfileInfo from "../components/ProfileInfo";
import { useAuth } from "../../../context/AuhProvider";

export default function ProfilePage() {
    const { user } = useAuth()

    if (!user) return alert("LOGIN")

    return (
        <section className="container-page py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    My Profile
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Manage your personal information and account settings.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
                {/* Left Sidebar */}

                <div className="space-y-6">
                    <ProfileAvatar />
                    <AccountMenu />
                </div>

                {/* Right Content */}

                <div className="space-y-6">
                    <ProfileInfo />
                    <AddressCard />
                </div>
            </div>
        </section>
    );
}