import PageHeader from "../../shared/components/PageHeader";

import OrderTable from "../components/OrderTable";

export default function AdminOrdersPage() {
    return (
        <section className="space-y-6">
            <PageHeader
                title="Orders"
                description="Manage customer orders."
            />
            <OrderTable />
        </section>
    );
}