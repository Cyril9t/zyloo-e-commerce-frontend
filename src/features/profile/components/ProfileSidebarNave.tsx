import { CreditCard, MapPin, ShieldCheck, User } from "lucide-react";
import { cn } from "../../../utils/cn";

export default function ProfileSidebarNav({ activeSection, onSectionChange }: { activeSection: string; onSectionChange: (sec: string) => void }) {
    const navItems = [
        { id: "profile", label: "Profile Metadata", icon: User },
        { id: "addresses", label: "Address Book", icon: MapPin },
        { id: "payments", label: "Payment Wallet", icon: CreditCard },
        { id: "security", label: "Access Security", icon: ShieldCheck }
    ];

    return (
        <nav className="flex flex-row  overflow-x-auto pb-2 gap-1 scrollbar-none border-b lg:border-none border-neutral-200">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => onSectionChange(item.id)}
                        className={cn(
                            "flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap tracking-wide transition-all duration-200 text-left cursor-pointer",
                            isActive
                                ? "bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-950 shadow-sm"
                                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/60"
                        )}
                    >
                        <Icon className={cn("h-6 w-6 shrink-0", isActive ? "text-current" : "text-foreground")} />
                        <span>{item.label}</span>
                    </button>
                );
            })}
        </nav>
    );
}
