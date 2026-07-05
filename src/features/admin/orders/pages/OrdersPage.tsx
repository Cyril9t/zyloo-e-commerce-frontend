import PageHeader from "../../../../features/admin/shared/components/PageHeader";

import OrderTable from "../components/OrderTable";

export default function OrdersPage() {
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