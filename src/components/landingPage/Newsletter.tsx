import { Mail } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

function Newsletter() {
    return (

        <div className="">
            <section className="pt-30 mb-30">
                <div className="w-full">
                    <Card className="bg-muted mx-auto max-w-[86%]  border-0 rounded-3xl p-8 md:p-12">
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-sm">
                                <Mail className="h-8 w-8" />
                            </div>

                            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                                Stay in the Loop
                            </h2>

                            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
                                Be the first to discover new collections, exclusive offers, and
                                curated style inspiration. Enjoy <span className="font-semibold">10% off</span> your first order when you subscribe.
                            </p>

                            <form className="flex flex-col gap-3 sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="h-14 flex-1 rounded-xl border border-border bg-background px-5 outline-none transition focus:border-primary"
                                />

                                <Button
                                    size="lg"
                                    className="h-14 px-8 whitespace-nowrap"
                                >
                                    Subscribe
                                </Button>
                            </form>

                            <p className="mt-6 text-sm text-muted-foreground">
                                By subscribing, you agree to our Privacy Policy and consent to
                                receiving marketing emails. You can unsubscribe at any time.
                            </p>
                        </div>
                    </Card>
                </div>
            </section>
        </div>);
}

export default Newsletter;