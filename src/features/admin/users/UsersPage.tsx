import PageHeader from "../../../features/admin/shared/components/PageHeader";

import UserTable from "./components/UserTable";

export default function UsersPage() {
    return (
        <section className="space-y-6">
            <PageHeader
                title="Users"
                description="Manage all registered users."
            />

            <UserTable />
        </section>
    );
}