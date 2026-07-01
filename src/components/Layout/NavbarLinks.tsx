import { NavLink } from "react-router-dom";
import { PATHS } from "../../routes/paths";

const links = [
    { label: "Home", to: PATHS.customer.home },
    { label: "Shop", to: PATHS.customer.products },
    { label: "Categories", to: "#" },
    { label: "Deals", to: "#" },
];

export default function NavbarLinks() {
    return (
        <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
                <NavLink
                    key={link.label}
                    to={link.to}
                    className={({ isActive }) =>
                        [
                            "text-sm font-medium transition-colors",
                            isActive
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground",
                        ].join(" ")
                    }
                >
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
}