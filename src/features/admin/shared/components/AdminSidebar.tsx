import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    Tags,
    Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import Logo from "../../../../components/common/Logo"

const links = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/admin",
    },
    {
        title: "Products",
        icon: Package,
        href: "/admin/products",
    },
    {
        title: "Orders",
        icon: ShoppingCart,
        href: "/admin/orders",
    },
    {
        title: "Users",
        icon: Users,
        href: "/admin/users",
    },
    {
        title: "Categories",
        icon: Tags,
        href: "/admin/categories",
    },
    {
        title: "Settings",
        icon: Settings,
        href: "/admin/settings",
    },
];

export default function AdminSidebar() {
    return (
        <aside className="flex h-screen w-64 flex-col border-r bg-background">
            <div className="border-b p-6">
                <Logo />
            </div>

            <nav className="flex-1 space-y-2 p-4">
                {links.map((link) => {
                    const Icon = link.icon;

                    return (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            end={link.href === "/admin"}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-4 py-3 transition ${isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-muted"
                                }`
                            }
                        >
                            <Icon className="h-5 w-5" />

                            {link.title}
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
}