
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,

    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,

} from "../../../../components/ui/sidebar";
import { Link } from "react-router-dom";
import { LayoutDashboard, Package, Settings, ShoppingCart, SquareArrowRightEnterIcon, Tags, User, User2 } from "lucide-react";
import type { ComponentType } from "react";

import { PATHS } from "../../../../routes/paths";
import Logo from "../../../../components/common/Logo";
export interface ItemsTypes {
    title: string;
    url: string;
    icon: ComponentType<{ className?: string }>;
}





const items = [
    {
        title: "Dashboard",
        url: PATHS.admin.dashboard,
        icon: LayoutDashboard as any,
    },
    {
        title: "Products",
        url: PATHS.admin.products,
        icon: Package as any,
    },
    {
        title: "Orders",
        url: PATHS.admin.orders,
        icon: ShoppingCart as any,
    },
    {
        title: "Users",
        url: PATHS.admin.users,
        icon: User2 as any,
    },
    {
        title: "Categories",
        url: PATHS.admin.categories,
        icon: Tags as any,

    }, {

        title: "Settings",
        url: PATHS.admin.settings,
        icon: Settings
    }
];

export default function AdminSidebar() {

    return (
        <Sidebar collapsible="icon"  >

            <SidebarHeader>
                <SidebarMenu className="py-4">
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <div className="p-7">
                                <Logo />
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="">
                <SidebarGroup>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            className="text-[17px] hover:bg-muted data-[active=true]:bg-foreground data-[active=true]:text-primary data-[active=true]:font-bold transition-all"
                                        >

                                            <Link to={item.url}>
                                                <Icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>


                </SidebarGroup>

                <SidebarFooter className="mt-auto">
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu className="border-t-2 w-full py-5 ">
                                <SidebarMenuItem>
                                    <Link to={PATHS.customer.profile}>
                                        <SidebarMenuButton className="hover:bg-muted/20 cursor-pointer">
                                            <div className="flex gap-2 ">
                                                <div>
                                                    <User />
                                                </div>
                                                <div>Profile</div>
                                            </div>
                                        </SidebarMenuButton>
                                    </Link>
                                </SidebarMenuItem>

                                <SidebarMenuItem>

                                    <SidebarMenuButton
                                        // onClick={handleLogout}
                                        className="hover:bg-muted/20 cursor-pointer"
                                    >

                                        <div className="flex gap-2">
                                            <SquareArrowRightEnterIcon size={20} />
                                            <p>Logout</p>
                                        </div>
                                    </SidebarMenuButton>

                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarFooter>
            </SidebarContent>
        </Sidebar>
    );
}
