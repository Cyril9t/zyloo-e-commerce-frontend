import { Card, CardContent } from "../../../../components/ui/card";

interface StatCardProps {
    title: string;
    value: string;
    change: string;
}

export default function StatCard({
    title,
    value,
    change,
}: StatCardProps) {
    return (
        <Card>
            <CardContent className="space-y-2 p-6">
                <p className="text-sm text-muted-foreground">
                    {title}
                </p>

                <h2 className="text-3xl font-bold">
                    {value}
                </h2>

                <p className="text-sm text-green-600">
                    {change} this month
                </p>
            </CardContent>
        </Card>
    );
}