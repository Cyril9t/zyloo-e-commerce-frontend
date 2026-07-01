import {
    Laptop,
    Shirt,
    Sofa,
    Smartphone,
    Watch,
    Gamepad2,
} from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";

const categories = [
    { name: "Electronics", icon: Laptop },
    { name: "Fashion", icon: Shirt },
    { name: "Furniture", icon: Sofa },
    { name: "Phones", icon: Smartphone },
    { name: "Accessories", icon: Watch },
    { name: "Gaming", icon: Gamepad2 },
];

export default function CategoriesSection() {
    return (
        <section className="container-page px-10 py-10">
            <div className="mb-10">
                <h2 className="text-3xl font-bold">Shop by Category</h2>
                <p className="mt-2 text-muted-foreground">
                    Browse products by your favorite categories.
                </p>
            </div>

            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <Card
                            key={category.name}
                            className="cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                            <CardContent className="flex flex-col items-center justify-center gap-4 py-3">
                                <Icon className="h-10 w-10" />
                                <p className="font-medium">{category.name}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}