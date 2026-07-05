import PageHeader from "../../../../features/admin/shared/components/PageHeader";

import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

export default function OrderDetailsPage() {
    return (
        <section className="space-y-6">
            <PageHeader
                title="Order Details"
                description="View and manage customer order."
            />

            <Card>
                <CardContent className="space-y-6 p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <h3 className="font-semibold">
                                Customer
                            </h3>

                            <p>John Doe</p>
                            <p>john@example.com</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                Shipping Address
                            </h3>

                            <p>123 Main Street</p>
                            <p>Lagos, Nigeria</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold">
                            Ordered Items
                        </h3>

                        <div className="rounded-lg border p-4">
                            Wireless Headphones × 2
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button>
                            Mark as Delivered
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}