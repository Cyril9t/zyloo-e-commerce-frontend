import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

export default function BillingForm() {
    return (
        <div className="space-y-6 rounded-2xl border p-6">
            <div>
                <h2 className="text-2xl font-semibold">
                    Billing Information
                </h2>

                <p className="text-sm text-muted-foreground">
                    Enter your shipping and billing details.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                        id="address"
                        placeholder="123 Main Street"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Lagos" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" placeholder="100001" />
                </div>
            </div>
        </div>
    );
}