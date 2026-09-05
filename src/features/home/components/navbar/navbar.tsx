import { Cuboid, Heart, Menu, Settings, ShoppingCartIcon, User2Icon, LogOut } from "lucide-react"
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../../../components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "../../../../components/ui/dropdown-menu";
import { ThemeToggle } from "../../../../components/theme/toggle-theme";
import Logo from "../../../../components/common/Logo";
import SearchBar from "../../../../components/common/searchBar";
import NavbarLinks from "../../../../components/Layout/NavbarLinks";
import { PATHS } from "../../../../routes/paths";
import { useAuth } from "../../../../context/AuthProvider";
import { logout } from "../../../../lib/auth/auth";
import { toast } from "sonner";
import { FloatingDock } from "../../../../components/Layout/framer";

const MobileStates = [
    {
        link: PATHS.customer.wishlist,
        icons: <Heart className="h-5! w-5!" />,
        title: "Wishlist"
    },
    {
        link: PATHS.customer.orders,
        icons: <Cuboid />,
        title: "Orders"

    },
    {
        link: PATHS.customer.profile,
        icons: <User2Icon className="h-5! w-5!" />,
        title: "Account"
    },
]

const states = [
    {
        link: PATHS.customer.wishlist,
        icons: <Heart className="h-5! w-5!" />,
        title: "Wishlist"
    },
    {
        link: PATHS.customer.cart,
        icons: <ShoppingCartIcon className="h-5! w-5!" />,
        title: "Cart"

    },
    {
        link: PATHS.customer.profile,
        icons: <User2Icon className="h-5! w-5!" />,
        title: "My account"
    },
]



export default function Navbar() {

    const { user: me, setUser, cartCount } = useAuth();
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
            await SignOut

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
                <div className="fixed w-full top-0  z-70 flex h-18 items-center justify-between border-b bg-background/40 px-4 backdrop-blur-lg ">
                    <Logo />

                    <SearchBar navigateToProducts />

                    <NavbarLinks />


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

                                            <Link to={item.link} key={item.title}>

                                                <DropdownMenuItem

                                                    className="p-3 px-4 "
                                                >
                                                    {item.icons}
                                                    {item.title}
                                                </DropdownMenuItem>
                                            </Link>
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
                                                    <User2Icon className="h-5! w-5!" />
                                                </Button>
                                            </DropdownMenuTrigger>

                                            <DropdownMenuContent className="w-full p-4">
                                                {user.map((u) => (
                                                    <Link to={u.link} key={u.title}>
                                                        <DropdownMenuItem


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
                                        <Button variant="ghost" size="icon-lg" className="relative">
                                            {item.icons}
                                            {item.title === "Cart" ? <span className="absolute h-5  w-5 text-[10px] font-extrabold text-center place-content-center bg-sidebar-primary text-white rounded-full top-0 left-5 ">
                                                {cartCount}
                                            </span> : ""}
                                        </Button>
                                    )}
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>
            </header>

            <div className="block md:hidden">
                <header className=" flex h-16 items-center justify-between border-b bg-background px-4 font-bold backdrop-blur-md">

                    <div >
                        <Logo />
                    </div>

                    <div className="flex gap-3">
                        <ThemeToggle />

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    <Menu />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {MobileStates.map((item) => (
                                    <Link to={item.link} key={item.title}>
                                        <DropdownMenuItem
                                            className="p-3 px-3"
                                        >
                                            {item.icons}
                                            {item.title}
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
                    </div>
                </header>
                <FloatingDock />
            </div>
        </div>
    )
}