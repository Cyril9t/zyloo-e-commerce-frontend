import { NavLink } from "react-router-dom";
import { PATHS } from "../../routes/paths";

const links = [
    { label: "Home", to: PATHS.customer.home },
    { label: "Shop", to: PATHS.customer.products },
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
                            " font-medium transition-colors",
                            isActive
                                ? "text-foreground/60 tracking-widest"
                                : "p-3 px-4  hover:text-muted-foreground",
                        ].join(" ")
                    }
                >
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
}