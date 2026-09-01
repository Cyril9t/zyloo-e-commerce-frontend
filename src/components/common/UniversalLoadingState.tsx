
import { Skeleton } from "../../components/ui/skeleton";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export type LoaderVariant = "grid" | "detail" | "checkout" | "list" | "default";

interface PageLoaderProps {
    variant?: LoaderVariant;
    /** If true, fills the entire viewport with navbar and container padding */
    fullScreen?: boolean;
}


export default function ECommercePageLoader({
    variant = "grid",
    fullScreen = true,
}: PageLoaderProps) {
    return (
        <div
            className={`w-full bg-neutral-50/60 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 antialiased ${fullScreen ? "min-h-screen" : "min-h-125"
                }`}
        >
            {/* Standard Header Skeleton */}
            {fullScreen && <HeaderSkeleton />}

            {/* Main Page Container */}
            <main className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse space-y-8">
                {/* Variant Layout Switcher */}
                {variant === "grid" && <CatalogGridSkeleton />}
                {variant === "detail" && <ProductDetailSkeleton />}
                {variant === "checkout" && <CheckoutCartSkeleton />}
                {variant === "list" && <OrderListSkeleton />}
                {variant === "default" && <DefaultGeneralSkeleton />}
            </main>
        </div>
    );
}

function CatalogGridSkeleton() {
    return (
        <div className="space-y-6">
            {/* Hero / Filter Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                    <Skeleton className="h-7 w-48 bg-neutral-200/80 dark:bg-neutral-800" />
                    <Skeleton className="h-3.5 w-72 bg-neutral-200/80 dark:bg-neutral-800" />
                </div>
                <div className="flex items-center gap-2">
                    <Skeleton className="h-9 w-28 bg-neutral-200/80 dark:bg-neutral-800 rounded-md" />
                    <Skeleton className="h-9 w-24 bg-neutral-200/80 dark:bg-neutral-800 rounded-md" />
                </div>
            </div>

            <Separator className="bg-neutral-200/60 dark:bg-neutral-800/60" />

            {/* Responsive Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <Card
                        key={item}
                        className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 overflow-hidden shadow-2xs"
                    >
                        <Skeleton className="h-56 w-full bg-neutral-200/80 dark:bg-neutral-800 rounded-none" />
                        <CardContent className="p-4 space-y-3">
                            <Skeleton className="h-3 w-16 bg-neutral-200/80 dark:bg-neutral-800" />
                            <Skeleton className="h-4 w-4/5 bg-neutral-200/80 dark:bg-neutral-800" />
                            <div className="flex justify-between items-center pt-2">
                                <Skeleton className="h-4 w-16 bg-neutral-200/80 dark:bg-neutral-800" />
                                <Skeleton className="h-8 w-20 rounded-md bg-neutral-200/80 dark:bg-neutral-800" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}


function ProductDetailSkeleton() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Gallery Left (7/12) */}
            <div className="lg:col-span-7 space-y-4">
                <Skeleton className="aspect-4/3 sm:aspect-16/10 w-full rounded-xl bg-neutral-200/80 dark:bg-neutral-800" />
                <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                        <Skeleton
                            key={i}
                            className="aspect-square rounded-lg bg-neutral-200/80 dark:bg-neutral-800"
                        />
                    ))}
                </div>
            </div>

            {/* Buy Box Right (5/12) */}
            <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                    <Skeleton className="h-3 w-24 bg-neutral-200/80 dark:bg-neutral-800" />
                    <Skeleton className="h-7 w-3/4 bg-neutral-200/80 dark:bg-neutral-800" />
                    <Skeleton className="h-5 w-28 bg-neutral-200/80 dark:bg-neutral-800 pt-1" />
                </div>

                <Separator className="bg-neutral-200/60 dark:bg-neutral-800/60" />

                <div className="space-y-3">
                    <Skeleton className="h-3 w-20 bg-neutral-200/80 dark:bg-neutral-800" />
                    <div className="flex gap-2">
                        {[1, 2, 3, 4].map((i) => (
                            <Skeleton
                                key={i}
                                className="h-9 w-12 rounded-md bg-neutral-200/80 dark:bg-neutral-800"
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-3 pt-4">
                    <Skeleton className="h-11 w-full rounded-full bg-neutral-200/80 dark:bg-neutral-800" />
                    <Skeleton className="h-11 w-full rounded-full bg-neutral-200/80 dark:bg-neutral-800" />
                </div>
            </div>
        </div>
    );
}

function CheckoutCartSkeleton() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Steps Left (7/12) */}
            <div className="lg:col-span-7 space-y-6">
                <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20">
                    <CardHeader className="p-6 border-b border-neutral-100 dark:border-neutral-800/60">
                        <Skeleton className="h-4 w-36 bg-neutral-200/80 dark:bg-neutral-800" />
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Skeleton className="h-9 w-full bg-neutral-200/80 dark:bg-neutral-800 rounded-md" />
                            <Skeleton className="h-9 w-full bg-neutral-200/80 dark:bg-neutral-800 rounded-md" />
                        </div>
                        <Skeleton className="h-9 w-full bg-neutral-200/80 dark:bg-neutral-800 rounded-md" />
                        <Skeleton className="h-9 w-full bg-neutral-200/80 dark:bg-neutral-800 rounded-md" />
                    </CardContent>
                </Card>
            </div>

            {/* Order Summary Right (5/12) */}
            <div className="lg:col-span-5 space-y-6">
                <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20">
                    <CardHeader className="p-6 border-b border-neutral-100 dark:border-neutral-800/60">
                        <Skeleton className="h-4 w-32 bg-neutral-200/80 dark:bg-neutral-800" />
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex items-center gap-3">
                                <Skeleton className="h-12 w-12 rounded-md bg-neutral-200/80 dark:bg-neutral-800 shrink-0" />
                                <div className="flex-1 space-y-1">
                                    <Skeleton className="h-3 w-32 bg-neutral-200/80 dark:bg-neutral-800" />
                                    <Skeleton className="h-2.5 w-20 bg-neutral-200/80 dark:bg-neutral-800" />
                                </div>
                                <Skeleton className="h-3.5 w-12 bg-neutral-200/80 dark:bg-neutral-800" />
                            </div>
                        ))}
                        <Separator className="bg-neutral-100 dark:bg-neutral-800/60 my-2" />
                        <Skeleton className="h-10 w-full rounded-md bg-neutral-200/80 dark:bg-neutral-800" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}


function OrderListSkeleton() {
    return (
        <div className="space-y-4">
            {[1, 2, 3].map((i) => (
                <Card
                    key={i}
                    className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 shadow-2xs"
                >
                    <div className="p-4 bg-neutral-50/50 dark:bg-neutral-900/40 border-b border-neutral-100 dark:border-neutral-800/60 flex justify-between items-center">
                        <Skeleton className="h-3.5 w-32 bg-neutral-200/80 dark:bg-neutral-800" />
                        <Skeleton className="h-5 w-20 rounded-full bg-neutral-200/80 dark:bg-neutral-800" />
                    </div>
                    <CardContent className="p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-12 w-12 rounded-md bg-neutral-200/80 dark:bg-neutral-800" />
                            <div className="space-y-1.5">
                                <Skeleton className="h-3.5 w-40 bg-neutral-200/80 dark:bg-neutral-800" />
                                <Skeleton className="h-3 w-20 bg-neutral-200/80 dark:bg-neutral-800" />
                            </div>
                        </div>
                        <Skeleton className="h-8 w-24 rounded-md bg-neutral-200/80 dark:bg-neutral-800" />
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

function DefaultGeneralSkeleton() {
    return (
        <div className="space-y-6">
            <Skeleton className="h-8 w-64 bg-neutral-200/80 dark:bg-neutral-800" />
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 p-6 space-y-4">
                <Skeleton className="h-4 w-full bg-neutral-200/80 dark:bg-neutral-800" />
                <Skeleton className="h-4 w-5/6 bg-neutral-200/80 dark:bg-neutral-800" />
                <Skeleton className="h-4 w-2/3 bg-neutral-200/80 dark:bg-neutral-800" />
            </Card>
        </div>
    );
}

function HeaderSkeleton() {
    return (
        <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-800/60">
            <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Skeleton className="h-8 w-8 rounded-lg bg-neutral-200/80 dark:bg-neutral-800" />
                    <Skeleton className="h-4 w-28 bg-neutral-200/80 dark:bg-neutral-800" />
                </div>
                <div className="flex items-center gap-3">
                    <Skeleton className="h-8 w-8 rounded-full bg-neutral-200/80 dark:bg-neutral-800" />
                    <Skeleton className="h-8 w-20 rounded-md bg-neutral-200/80 dark:bg-neutral-800" />
                </div>
            </div>
        </header>
    );
}