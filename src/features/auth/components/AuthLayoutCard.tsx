import type { ReactNode } from "react";
import Navbar from "../../home/components/navbar/navbar";
import { Card, CardContent } from "../../../components/ui/card";

interface AuthLayoutCardProps {
    children: ReactNode;
}

export default function AuthLayoutCard({
    children,
}: AuthLayoutCardProps) {
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center  px-4 py-6 mt-2 md:mt-21">
                <Card className="w-full max-w-md shadow-lg">
                    <CardContent className="space-y-4 p-8">
                        {children}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}