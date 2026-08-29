import { Store, Home, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { PATHS } from "../../routes/paths";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
const navItems = [
    { id: "store", label: "Store", icon: Store, link: PATHS.customer.products },
    { id: "home", label: "Home", icon: Home, link: PATHS.customer.home },
    { id: "cart", label: "Cart", icon: ShoppingCart, link: PATHS.customer.cart },
];

export function FloatingDock() {
    const [activeTab, setActiveTab] = useState("home");
    const { cartCount } = useAuth()
    return (
        <motion.nav
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "keyframes", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex w-50 justify-center gap-2 p-2 rounded-full border border-ring bg-background backdrop-blur-xl shadow-2xl shadow-black/40"
        >
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                    <Link to={item.link} key={item.id}>


                        <motion.div

                            onClick={() => setActiveTab(item.id)}
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 1.50, y: -2 }}
                            transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            className={`relative flex items-center justify-center p-3   rounded-full transition-colors duration-200 ${isActive
                                ? " bg-white/10 scale-120"
                                : "text-slate-600  hover:bg-white/5"
                                }`}
                        >
                            <Icon className="w-6 h-6 stroke-[1.75]" />
                            {item.label === "Cart" ? <span className="absolute bottom-6 left-6 bg-sidebar-primary rounded-full text-background dark:text-white h-4 w-4 text-center text-[10px] font-bold ">{cartCount}</span> : ""}

                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-foreground shadow-[0_0_8px_#818cf8]"
                                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                />
                            )}
                        </motion.div>
                    </Link>
                );
            })}
        </motion.nav>
    );
}