import { Card, CardContent } from "../../../components/ui/card";

export default function FilterSidebar() {
    return (
        <Card className="shadow-xs border-border/60">
            <CardContent className="p-5 divide-y divide-border/60 space-y-5">
                {/* Section Header */}
                <div className="pb-1">
                    <h2 className="text-sm font-semibold tracking-wide text-foreground">
                        Filters
                    </h2>
                </div>

                {/* Category Group */}
                <div className="pt-4 space-y-3">
                    <h3 className="text-xs font-medium text-foreground uppercase tracking-wider">
                        Categories
                    </h3>
                    <p className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">All Products</p>
                    {/* Map extra category links or checkboxes here */}
                </div>

                {/* Price Range Group */}
                <div className="pt-4 space-y-3">
                    <h3 className="text-xs font-medium text-foreground uppercase tracking-wider">
                        Price Range
                    </h3>
                    <div className="text-xs text-muted-foreground">
                        {/* Perfect spot to throw a custom Slider UI item */}
                        Placeholder for slider
                    </div>
                </div>

                {/* Ratings Group */}
                <div className="pt-4 space-y-3">
                    <h3 className="text-xs font-medium text-foreground uppercase tracking-wider">
                        Ratings
                    </h3>
                    <p className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">4 Stars & Up</p>
                </div>
            </CardContent>
        </Card>
    );
}