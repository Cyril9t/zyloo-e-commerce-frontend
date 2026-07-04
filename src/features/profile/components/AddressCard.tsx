import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";

export default function AddressCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Shipping Address</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
                <p>123 Main Street</p>
                <p>Lagos, Nigeria</p>
                <p>100001</p>
            </CardContent>
        </Card>
    );
}