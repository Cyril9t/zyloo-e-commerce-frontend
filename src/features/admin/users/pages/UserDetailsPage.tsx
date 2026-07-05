import { Card, CardContent } from "../../../../components/ui/card";

import PageHeader from "../../../../features/admin/shared/components/PageHeader";

export default function UserDetailsPage() {
    return (
        <section className="space-y-6">
            <PageHeader
                title="User Details"
                description="View user information."
            />

            <Card>
                <CardContent className="space-y-4 p-6">
                    <p>
                        <strong>Name:</strong> John Doe
                    </p>

                    <p>
                        <strong>Email:</strong> john@example.com
                    </p>

                    <p>
                        <strong>Role:</strong> Customer
                    </p>

                    <p>
                        <strong>Status:</strong> Active
                    </p>
                </CardContent>
            </Card>
        </section>
    );
}