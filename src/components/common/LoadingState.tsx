import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Skeleton } from "../../components/ui/skeleton";
import { Separator } from "../../components/ui/separator";

export default function OrderPageSkeleton() {
    return (
        <div className="w-full min-h-screen bg-neutral-50/60 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 antialiased">

            {/* Header Skeleton */}
            <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-800/60">
                <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-8 w-8 rounded-lg bg-neutral-200/80 dark:bg-neutral-800" />
                        <Skeleton className="h-4 w-28 bg-neutral-200/80 dark:bg-neutral-800" />
                    </div>
                    <Skeleton className="h-8 w-24 rounded-md bg-neutral-200/80 dark:bg-neutral-800" />
                </div>
            </header>

            {/* Main Skeleton Container */}
            <main className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-pulse">

                {/* Hero Status Banner Skeleton */}
                <div className="bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-10 w-10 rounded-full bg-neutral-200/80 dark:bg-neutral-800 shrink-0" />
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-5 w-48 bg-neutral-200/80 dark:bg-neutral-800" />
                                <Skeleton className="h-5 w-20 rounded-full bg-neutral-200/80 dark:bg-neutral-800" />
                            </div>
                            <Skeleton className="h-3 w-64 bg-neutral-200/80 dark:bg-neutral-800" />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <Skeleton className="h-3 w-20 bg-neutral-200/80 dark:bg-neutral-800" />
                        <Skeleton className="h-4 w-32 bg-neutral-200/80 dark:bg-neutral-800" />
                    </div>
                </div>

                {/* 12-Column Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Timeline & Items (7/12) */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* Fulfillment Tracker Skeleton */}
                        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20">
                            <CardHeader className="p-4 sm:p-6 pb-2 flex flex-row items-center justify-between">
                                <Skeleton className="h-3 w-32 bg-neutral-200/80 dark:bg-neutral-800" />
                                <Skeleton className="h-3 w-28 bg-neutral-200/80 dark:bg-neutral-800" />
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 pt-4">
                                <div className="grid grid-cols-4 gap-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="flex flex-col items-center space-y-2">
                                            <Skeleton className="h-7 w-7 rounded-full bg-neutral-200/80 dark:bg-neutral-800" />
                                            <Skeleton className="h-3 w-16 bg-neutral-200/80 dark:bg-neutral-800" />
                                            <Skeleton className="h-2.5 w-12 bg-neutral-200/80 dark:bg-neutral-800" />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Line Items List Skeleton */}
                        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20">
                            <CardHeader className="p-4 sm:p-6 pb-4 border-b border-neutral-100 dark:border-neutral-800/60">
                                <Skeleton className="h-3 w-28 bg-neutral-200/80 dark:bg-neutral-800" />
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 space-y-4 divide-y divide-neutral-100 dark:divide-neutral-800/60">
                                {[1, 2].map((i) => (
                                    <div key={i} className="pt-4 first:pt-0 flex items-center gap-4">
                                        <Skeleton className="h-16 w-16 rounded-md bg-neutral-200/80 dark:bg-neutral-800 shrink-0" />
                                        <div className="flex-1 space-y-2 min-w-0">
                                            <Skeleton className="h-3.5 w-40 bg-neutral-200/80 dark:bg-neutral-800" />
                                            <Skeleton className="h-3 w-24 bg-neutral-200/80 dark:bg-neutral-800" />
                                            <Skeleton className="h-3 w-32 bg-neutral-200/80 dark:bg-neutral-800" />
                                        </div>
                                        <Skeleton className="h-4 w-16 bg-neutral-200/80 dark:bg-neutral-800 shrink-0" />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                    </div>


                    <div className="lg:col-span-5 space-y-6">


                        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20">
                            <CardHeader className="p-4 sm:p-6 pb-4 border-b border-neutral-100 dark:border-neutral-800/60">
                                <Skeleton className="h-3 w-32 bg-neutral-200/80 dark:bg-neutral-800" />
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 space-y-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <Skeleton className="h-3 w-20 bg-neutral-200/80 dark:bg-neutral-800" />
                                        <Skeleton className="h-3 w-12 bg-neutral-200/80 dark:bg-neutral-800" />
                                    </div>
                                ))}
                                <Separator className="my-2 bg-neutral-100 dark:bg-neutral-800/60" />
                                <div className="flex justify-between items-center pt-1">
                                    <Skeleton className="h-4 w-24 bg-neutral-200/80 dark:bg-neutral-800" />
                                    <Skeleton className="h-5 w-20 bg-neutral-200/80 dark:bg-neutral-800" />
                                </div>
                            </CardContent>
                        </Card>


                        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20">
                            <CardContent className="p-4 sm:p-6 space-y-5">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="space-y-2">
                                        <Skeleton className="h-3 w-28 bg-neutral-200/80 dark:bg-neutral-800" />
                                        <Skeleton className="h-3.5 w-48 bg-neutral-200/80 dark:bg-neutral-800" />
                                        <Skeleton className="h-3 w-36 bg-neutral-200/80 dark:bg-neutral-800" />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                    </div>

                </div>

            </main>
        </div>
    );
}