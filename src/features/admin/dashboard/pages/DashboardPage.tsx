import {
    dashboardStats,
    recentOrders,
} from "../../../../mock/adminDashboard";

import StatCard from "../../shared/components/StatCard";

export default function DashboardPage() {
    return (
        <section className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>

                <p className="text-muted-foreground">
                    Welcome back, Admin 👋
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {dashboardStats.map((stat) => (
                    <StatCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                    />
                ))}
            </div>

            <div className="rounded-xl border p-6">
                <h2 className="mb-6 text-xl font-semibold">
                    Recent Orders
                </h2>

                <div className="space-y-4">
                    {recentOrders.map((order) => (
                        <div
                            key={order.id}
                            className="flex items-center justify-between rounded-lg border p-4"
                        >
                            <div>
                                <p className="font-semibold">
                                    {order.id}
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    {order.customer}
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="font-semibold">
                                    ${order.total}
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    {order.status}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}