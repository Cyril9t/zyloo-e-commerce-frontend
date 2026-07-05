import { Eye } from "lucide-react";

import { Button } from "../../../../components/ui/button";
import DataTable from "../../../../features/admin/shared/components/DataTable";
import OrderStatusBadge from "./OrderStatusBadge";

import { adminOrders } from "../../../../mock/adminOrders";

export default function OrderTable() {
    return (
        <DataTable>
            <table className="w-full">
                <thead className="bg-muted">
                    <tr>
                        <th className="p-4 text-left">Order</th>
                        <th className="p-4 text-left">Customer</th>
                        <th className="p-4 text-left">Date</th>
                        <th className="p-4 text-left">Total</th>
                        <th className="p-4 text-left">Status</th>
                        <th className="p-4 text-right">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {adminOrders.map((order) => (
                        <tr
                            key={order.id}
                            className="border-t"
                        >
                            <td className="p-4">{order.id}</td>

                            <td className="p-4">
                                {order.customer}
                            </td>

                            <td className="p-4">
                                {order.date}
                            </td>

                            <td className="p-4">
                                ${order.total}
                            </td>

                            <td className="p-4">
                                <OrderStatusBadge
                                    status={order.status}
                                />
                            </td>

                            <td className="p-4 text-right">
                                <Button
                                    variant="outline"
                                    size="icon"
                                >
                                    <Eye className="h-4 w-4" />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </DataTable>
    );
}