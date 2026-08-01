import { Cuboid, Heart, Home, Menu, Plane, PlugZap, Search, Settings, ShoppingCartIcon, SparklesIcon, SportShoe, User2Icon, LogOut } from "lucide-react"
import { data, Link, replace, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../../../components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "../../../../components/ui/dropdown-menu";
import { ThemeToggle } from "../../../../components/theme/toggle-theme";
import Logo from "../../../../components/common/Logo";
import SearchBar from "../../../../components/common/searchBar";
import NavbarLinks from "../../../../components/Layout/NavbarLinks";
import { PATHS } from "../../../../routes/paths";
import { useAuth } from "../../../../context/AuhProvider";
import { logout } from "../../../../lib/auth/auth";
import { toast } from "sonner";

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

const states = [
    {
        link: PATHS.customer.wishlist,
        icons: <Heart className="!h-5 !w-5" />,
        title: "Wishlist"
    },
    {
        link: PATHS.customer.cart,
        icons: <ShoppingCartIcon className="!h-5 !w-5" />,
        title: "Cart"
    },
    {
        link: "",
        icons: <User2Icon className="!h-5 !w-5" />,
        title: "My account"
    },
]



export default function Navbar() {

    const { user: me, setUser } = useAuth();
    const { trigger } = logout();

    const redirect = me?.role === "ADMIN";

    const path = redirect ? PATHS?.admin?.dashboard : PATHS?.customer?.profile as string

    const navigate = useNavigate()

    const LogOuts = async () => {
        try {
            const SignOut = trigger()
            toast.promise(SignOut, {
                success: (data) => data.Message,
                loading: "Processing...",
                error: "Operation Failed Please Try again"
            })
            const res = await SignOut
            console.log(res);
            setUser(null);
            navigate(PATHS.auth.login, { replace: true })

        } catch (error) {
            console.log(error)
            toast.error("Internal Error")
        }
    }
    const user = [
        {
            icons: <User2Icon />,
            link: path,
            title: "My Account",
            action: ""

        },
        {
            icons: <Cuboid />,
            link: PATHS.customer.orders,
            title: "Orders",
            action: ""
        },
        {
            icons: <Settings />,
            link: "",
            title: "Settings",
            action: ""
        },
    ]
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
                                                    <Link to={u.link} key={u.title}>
                                                        <DropdownMenuItem
                                                            className="p-3 px-4"

                                                        >
                                                            {u.icons}
                                                            {u.title}
                                                        </DropdownMenuItem>



                                                    </Link>

                                                ))}
                                                <DropdownMenuItem
                                                    className="p-3 px-4"
                                                    onClick={LogOuts}
                                                >
                                                    <LogOut />

                                                    Sign Out

                                                </DropdownMenuItem>
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