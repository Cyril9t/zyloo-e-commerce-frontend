import { Cuboid, Heart, Home, LogOut, Menu, Plane, PlugZap, Search, Settings, ShoppingCartIcon, SparklesIcon, SportShoe, User2Icon, X } from "lucide-react"
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../../../components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "../../../../components/ui/dropdown-menu";
import { ThemeToggle } from "../../../../components/theme/toggle-theme";
import Logo from "../../../../components/common/Logo";
import SearchBar from "../../../../components/common/searchBar";
import NavbarLinks from "../../../../components/Layout/NavbarLinks";
const states = [
    {
        link: "*",
        icons: <Heart className="!h-5 !w-5" />,
        title: "Whish List"
    },
    {
        link: "*",
        icons: <ShoppingCartIcon className="!h-5 !w-5" />,
        title: "Cart"
    },
    {
        link: "*",
        icons: <User2Icon className="!h-5 !w-5" />,
        title: "My account"
    },
]
const MobileStates = [
    {
        link: "*",
        icons: <Plane className="justify-self-center " />,
        title: "New Arrivals",
    },
    {
        link: "*",
        icons: <PlugZap className="justify-self-center" />,
        title: "Electronics",
    },
    {
        link: "*",
        icons: <SparklesIcon className="justify-self-center " />,
        title: "Fashion"
    },
    {
        link: "*",
        icons: <SportShoe className="justify-self-center" />,
        title: "Sport"
    },
    {
        link: "*",
        icons: <Home className="justify-self-center " />,
        title: "Home"
    },
]

const user = [
    {
        icons: <User2Icon />,
        link: "/*",
        title: "My Account"
    },
    {
        icons: <Cuboid />,
        link: "/*",
        title: "Orders"
    },
    {
        icons: <Settings />,
        link: "/*",
        title: "Settings"
    },
    {
        icons: <LogOut />,
        link: "/*",
        title: "Sign Out"
    },
]

export default function Navba() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    return (
        <div>

            <header className="hidden md:block">
                <div className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-(--color-background) px-4 backdrop-blur-md">
                    <Logo />

                    <SearchBar />

                    <NavbarLinks />
                    {/* Actions */}

                    <div>
                        {/* Tablet */}
                        <div className="block lg:hidden">
                            <div className="flex gap-4">
                                <ThemeToggle />

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">
                                            <Menu />
                                        </Button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent className="mr-7 w-full p-3">
                                        {states.map((item) => (
                                            <DropdownMenuItem
                                                key={item.title}
                                                className="p-3 px-4"
                                            >
                                                {item.icons}
                                                {item.title}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>


                        <div className="hidden lg:flex items-center gap-2">
                            <ThemeToggle />

                            {states.map((item) => (
                                <Link key={item.title} to={item.link}>
                                    {item.title === "My account" ? (
                                        <DropdownMenu >
                                            <DropdownMenuTrigger asChild >
                                                <Button variant="ghost" size="icon-lg">
                                                    <User2Icon className="!h-5 !w-5" />
                                                </Button>
                                            </DropdownMenuTrigger>

                                            <DropdownMenuContent className="w-full p-4">
                                                {user.map((u) => (
                                                    <DropdownMenuItem
                                                        key={u.title}
                                                        className="p-3 px-4"
                                                    >
                                                        {u.icons}
                                                        {u.title}
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    ) : (
                                        <Button variant="ghost" size="icon-lg">
                                            {item.icons}
                                        </Button>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <div className="block md:hidden">
                <header className="flex h-16 items-center justify-between border-b bg-(--color-background) px-4 font-bold backdrop-blur-md">
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2 rounded-lg border px-2 py-1"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xl font-medium text-primary-foreground">
                            Z
                        </div>

                        <p className="text-xl font-medium">Zyloo</p>
                    </Button>

                    <div className="flex gap-3">
                        <ThemeToggle />

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    <Menu />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent>
                                {states.map((item) => (
                                    <DropdownMenuItem
                                        key={item.title}
                                        className="p-3 px-3"
                                    >
                                        {item.icons}
                                        {item.title}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                {/* Bottom Navigation */}
                <div className="fixed bottom-0 z-30 flex w-full justify-between border-t bg-(--color-background) p-3 backdrop-blur-md">
                    {MobileStates.map((item) => (
                        <Button
                            key={item.title}
                            variant="ghost"
                            className="flex flex-col"
                        >
                            {item.icons}
                            <p className="text-[10px] font-bold">{item.title}</p>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}