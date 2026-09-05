import { useEffect, useState } from "react";
import {
    Search,
    Download,
    SlidersHorizontal,
    UserPlus, Trash2
} from "lucide-react";

import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";


import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";

import { totalUsers } from "../../../../lib/actions";
import ECommercePageLoader from "../../../../components/common/UniversalLoadingState";
import ConfirmDialog from "../../shared/components/ConfirmDialog";
import api from "../../../../lib/api";
import { toast } from "sonner";

export default function UsersPages() {
    const { trigger, isMutating } = totalUsers()

    const [users, setUsers] = useState([])

    useEffect(() => {
        const users = async () => {
            try {
                const AllUser = await trigger()
                const data = await AllUser

                setUsers(data?.users)
            } catch (error) {
                console.log(error)
            }
        }
        users();
    }, [])


    const handleDelete = async (id: string) => {
        try {


            const deleteUser = await api.delete(`/users/deleteUser/${id}`)
            const data = await deleteUser.data
            toast.success(data.Message)

        } catch (error: any) {
            console.log(error?.response?.data?.Message)
            toast.error(error?.response?.data?.Message)
        }
    }

    if (isMutating) {
        return <ECommercePageLoader variant="grid" fullScreen={true} />
    }

    return (
        <div className="w-full min-h-screen  ">
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
                        <Button variant="outline" size="sm" className="h-9 text-xs font-semibold border ">
                            <Download className="h-3.5 w-3.5 mr-1.5 text- -400" /> Export CSV
                        </Button>
                        <Button size="sm" className="h-9 text-xs font-bold uppercase tracking-wider px-4  -950 dark: -50 text-white dark:text- -950 hover:opacity-90 transition-opacity shadow-sm">
                            <UserPlus className="h-3.5 w-3.5 mr-1.5" /> Add User
                        </Button>
                    </div>
                </div>

                {/* Filter and Search Bar */}
                <Card className="border border-border">
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
                <Card className="border border-border">
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead className=" -50 dark: -900/80 border-b border- -200/60 dark:border- -800/60 text- -400 font-bold uppercase tracking-wider">
                                    <tr>
                                        <th className="py-3 px-4">User</th>
                                        <th className="py-3 px-4 ">Actions</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide- -100 dark:divide- -800/60">
                                    {users?.map((user: any) => {

                                        return (
                                            <tr key={user.id}>
                                                <td className="py-3.5 px-4">
                                                    <div className="flex items-center gap-3">
                                                        <Avatar className="h-8 w-8">
                                                            <AvatarFallback className="text-[10px] font-bold">
                                                                {user?.firstName[0] ?? ".."}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="min-w-0">
                                                            <div className="text-[16px]">
                                                                {user.firstName} {user.lastName}
                                                            </div>
                                                            <div className="text-[16px]">
                                                                {user.email}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="py-3.5 px-4">
                                                    <ConfirmDialog
                                                        title="Delete Product"
                                                        description="This action cannot be undone."
                                                        onConfirm={() => { handleDelete(user.id) }}
                                                        trigger={
                                                            <Button
                                                                variant="destructive"
                                                                size="icon"
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        }
                                                    />
                                                </td>
                                            </tr>

                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}

