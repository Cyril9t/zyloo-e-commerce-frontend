import { CreditCard, Landmark, Wallet } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card";
import {
    RadioGroup,
    RadioGroupItem,
} from "../../../components/ui/radio-group";
import { Label } from "../../../components/ui/label";

const paymentMethods = [
    {
        id: "card",
        title: "Credit / Debit Card",
        icon: CreditCard,
    },
    {
        id: "bank",
        title: "Bank Transfer",
        icon: Landmark,
    },
    {
        id: "wallet",
        title: "Digital Wallet",
        icon: Wallet,
    },
];

export default function PaymentMethod() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Payment Method</CardTitle>
            </CardHeader>

            <CardContent>
                <RadioGroup defaultValue="card" className="space-y-4">
                    {paymentMethods.map(({ id, title, icon: Icon }) => (
                        <Label
                            key={id}
                            htmlFor={id}
                            className="flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-colors hover:bg-muted"
                        >
                            <div className="flex items-center gap-3">
                                <Icon className="h-5 w-5 text-primary" />
                                <span>{title}</span>
                            </div>

                            <RadioGroupItem id={id} value={id} />
                        </Label>
                    ))}
                </RadioGroup>
            </CardContent>
        </Card>
    );
}