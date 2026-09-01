import * as React from "react";
import {
    Search,
    Download,
    Eye,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight,
    SlidersHorizontal,
    UserPlus,

    Shield,
    Mail,
    Lock
} from "lucide-react";

// ==========================================
// SHADCN/UI PRIMITIVES (Mocked Paths)
// ==========================================
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../../../../components/ui/dropdown-menu";

// ==========================================
// CORE STATE TYPES
// ==========================================
interface UserRecord {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: "Admin" | "Customer" | "Support";
    status: "Active" | "Inactive" | "Blocked";
    totalOrders: number;
    totalSpent: string;
    joinedDate: string;
}

// ==========================================
// MAIN USERS PAGE COMPONENT
// ==========================================
export default function UsersPages() {
    const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);

    const users: UserRecord[] = [
        {
            id: "USR-001",
            name: "Sarah Jenkins",
            email: "sarah.j@example.com",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
            role: "Customer",
            status: "Active",
            totalOrders: 12,
            totalSpent: "$1,450.00",
            joinedDate: "Jan 12, 2026"
        },
        {
            id: "USR-002",
            name: "Marcus Chen",
            email: "m.chen@example.com",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
            role: "Admin",
            status: "Active",
            totalOrders: 45,
            totalSpent: "$5,820.50",
            joinedDate: "Nov 03, 2025"
        },
        {
            id: "USR-003",
            name: "Emma Watson",
            email: "emma.w@example.com",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
            role: "Customer",
            status: "Active",
            totalOrders: 3,
            totalSpent: "$412.00",
            joinedDate: "Feb 18, 2026"
        },
        {
            id: "USR-004",
            name: "David Miller",
            email: "d.miller@example.com",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
            role: "Support",
            status: "Inactive",
            totalOrders: 0,
            totalSpent: "$0.00",
            joinedDate: "Mar 01, 2026"
        },
        {
            id: "USR-005",
            name: "Elena Rostova",
            email: "elena.r@example.com",
            avatar: "",
            role: "Customer",
            status: "Blocked",
            totalOrders: 1,
            totalSpent: "$650.00",
            joinedDate: "Dec 14, 2025"
        }
    ];

    const toggleSelectAll = () => {
        if (selectedUsers.length === users.length) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(users.map((u) => u.id));
        }
    };

    const toggleSelectOne = (id: string) => {
        setSelectedUsers((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="w-full min-h-screen    antialiased ">
            <main className="max-w-350 mx-auto space-y-6">

                {/* Header & Main Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight ">
                            Users Directory
                        </h1>
                        <p className="text-xs text- -400 font-medium mt-0.5">
                            Manage accounts, access roles, and customer purchase histories.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-9 text-xs font-semibold bg-white dark: -900 border- -200 dark:border- -800 shadow-2xs">
                            <Download className="h-3.5 w-3.5 mr-1.5 text- -400" /> Export CSV
                        </Button>
                        <Button size="sm" className="h-9 text-xs font-bold uppercase tracking-wider px-4  -950 dark: -50 text-white dark:text- -950 hover:opacity-90 transition-opacity shadow-sm">
                            <UserPlus className="h-3.5 w-3.5 mr-1.5" /> Add User
                        </Button>
                    </div>
                </div>

                {/* Filter and Search Bar */}
                <Card className="border border- -200/60 dark:border- -800/60 bg-white dark: -900/20 shadow-2xs">
                    <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between gap-3">

                        {/* Search Input */}
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text- -400" />
                            <Input
                                placeholder="Search by name, email, or user ID..."
                                className="pl-8 h-9 text-xs  -50 dark: -900 border- -200/80 dark:border- -800"
                            />
                        </div>

                        {/* Dropdown Filters */}
                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <Select defaultValue="all-roles">
                                <SelectTrigger className="h-9 text-xs bg-white dark: -900 border- -200 dark:border- -800 w-full md:w-32">
                                    <SelectValue placeholder="Role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all-roles">All Roles</SelectItem>
                                    <SelectItem value="admin">Admin</SelectItem>
                                    <SelectItem value="support">Support</SelectItem>
                                    <SelectItem value="customer">Customer</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select defaultValue="all-status">
                                <SelectTrigger className="h-9 text-xs bg-white dark: -900 border- -200 dark:border- -800 w-full md:w-32">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all-status">All Status</SelectItem>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="inactive">Inactive</SelectItem>
                                    <SelectItem value="blocked">Blocked</SelectItem>
                                </SelectContent>
                            </Select>

                            <Button variant="outline" size="icon" className="h-9 w-9 shrink-0 border- -200 dark:border- -800 text- -500">
                                <SlidersHorizontal className="h-3.5 w-3.5" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Users Table */}
                <Card className="border border- -200/60 dark:border- -800/60 bg-white dark: -900/20 shadow-2xs">
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead className=" -50 dark: -900/80 border-b border- -200/60 dark:border- -800/60 text- -400 font-bold uppercase tracking-wider">
                                    <tr>
                                        <th className="py-3 px-4 w-10 text-center">
                                            <Checkbox
                                                checked={selectedUsers.length === users.length && users.length > 0}
                                                onCheckedChange={toggleSelectAll}
                                            />
                                        </th>
                                        <th className="py-3 px-4">User</th>
                                        <th className="py-3 px-4">Role</th>
                                        <th className="py-3 px-4">Status</th>
                                        <th className="py-3 px-4">Orders</th>
                                        <th className="py-3 px-4">Joined</th>
                                        <th className="py-3 px-4 text-right">Total Spent</th>
                                        <th className="py-3 px-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide- -100 dark:divide- -800/60">
                                    {users.map((user) => {
                                        const isSelected = selectedUsers.includes(user.id);
                                        const initials = user.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("");

                                        return (
                                            <tr
                                                key={user.id}
                                                className={`hover: -50/50 dark:hover: -900/40 transition-colors ${isSelected ? " -50/80 dark: -900/60" : ""
                                                    }`}
                                            >
                                                <td className="py-3.5 px-4 text-center">
                                                    <Checkbox
                                                        checked={isSelected}
                                                        onCheckedChange={() => toggleSelectOne(user.id)}
                                                    />
                                                </td>
                                                <td className="py-3.5 px-4">
                                                    <div className="flex items-center gap-3">
                                                        <Avatar className="h-8 w-8">
                                                            <AvatarImage src={user.avatar} />
                                                            <AvatarFallback className="text-[10px] font-bold">
                                                                {initials}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="min-w-0">
                                                            <div className="font-semibold text- -900 dark:text- -100 truncate">
                                                                {user.name}
                                                            </div>
                                                            <div className="text-[11px] text- -400 truncate">
                                                                {user.email}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-3.5 px-4">
                                                    <RoleBadge role={user.role} />
                                                </td>
                                                <td className="py-3.5 px-4">
                                                    <UserStatusBadge status={user.status} />
                                                </td>
                                                <td className="py-3.5 px-4 font-mono font-medium text- -600 dark:text- -300">
                                                    {user.totalOrders}
                                                </td>
                                                <td className="py-3.5 px-4 text- -500 font-medium whitespace-nowrap">
                                                    {user.joinedDate}
                                                </td>
                                                <td className="py-3.5 px-4 text-right font-mono font-bold text- -950 dark:text-white">
                                                    {user.totalSpent}
                                                </td>
                                                <td className="py-3.5 px-4 text-right">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="icon" className="h-7 w-7 text- -400 hover:text- -950 dark:hover:text-white">
                                                                <MoreHorizontal className="h-3.5 w-3.5" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end" className="w-40">
                                                            <DropdownMenuItem className="text-xs">
                                                                <Eye className="h-3.5 w-3.5 mr-2 text- -400" /> View Profile
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem className="text-xs">
                                                                <Mail className="h-3.5 w-3.5 mr-2 text- -400" /> Email User
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem className="text-xs">
                                                                <Shield className="h-3.5 w-3.5 mr-2 text- -400" /> Edit Role
                                                            </DropdownMenuItem>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem className="text-xs text-rose-600">
                                                                <Lock className="h-3.5 w-3.5 mr-2 text-rose-500" /> Suspend Account
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Footer */}
                        <div className="p-4 border-t border- -100 dark:border- -800/60 flex items-center justify-between text-xs text- -500">
                            <div>
                                Showing <span className="font-semibold text- -900 dark:text-white">1-5</span> of <span className="font-semibold text- -900 dark:text-white">128</span> users
                            </div>
                            <div className="flex items-center gap-1">
                                <Button variant="outline" size="icon" className="h-8 w-8 text- -400 border- -200 dark:border- -800" disabled>
                                    <ChevronLeft className="h-3.5 w-3.5" />
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 w-8 text-xs font-semibold  -950 text-white dark:bg-white dark:text- -950 border-transparent">
                                    1
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 w-8 text-xs font-semibold border- -200 dark:border- -800">
                                    2
                                </Button>
                                <Button variant="outline" size="icon" className="h-8 w-8 text- -500 border- -200 dark:border- -800">
                                    <ChevronRight className="h-3.5 w-3.5" />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </main>
        </div>
    );
}

// ==========================================
// BADGE HELPER COMPONENTS
// ==========================================
function RoleBadge({ role }: { role: UserRecord["role"] }) {
    switch (role) {
        case "Admin":
            return (
                <Badge variant="secondary" className="bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-400 border-purple-200/60 dark:border-purple-800 text-[10px] font-bold uppercase tracking-wider">
                    Admin
                </Badge>
            );
        case "Support":
            return (
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 border-blue-200/60 dark:border-blue-800 text-[10px] font-bold uppercase tracking-wider">
                    Support
                </Badge>
            );
        case "Customer":
            return (
                <Badge variant="secondary" className=" -100 text- -600 dark: -800 dark:text- -400 border- -200 dark:border- -700 text-[10px] font-bold uppercase tracking-wider">
                    Customer
                </Badge>
            );
    }
}

function UserStatusBadge({ status }: { status: UserRecord["status"] }) {
    switch (status) {
        case "Active":
            return (
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                    Active
                </Badge>
            );
        case "Inactive":
            return (
                <Badge variant="secondary" className="bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400 border-amber-200/60 dark:border-amber-800 text-[10px] font-bold uppercase tracking-wider">
                    Inactive
                </Badge>
            );
        case "Blocked":
            return (
                <Badge variant="secondary" className="bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400 border-rose-200/60 dark:border-rose-800 text-[10px] font-bold uppercase tracking-wider">
                    Blocked
                </Badge>
            );
    }
}