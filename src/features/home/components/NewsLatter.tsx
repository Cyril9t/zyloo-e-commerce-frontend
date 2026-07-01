import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

export default function Newsletter() {
    return (
        <section className="container-page py-20">
            <div className="rounded-3xl border bg-card p-8 lg:p-12">
                <div className="mx-auto max-w-2xl text-center space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold">
                            Stay Updated
                        </h2>

                        <p className="mt-2 text-muted-foreground">
                            Subscribe to receive exclusive offers, product updates, and the latest news.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="h-12"
                        />

                        <Button size="lg">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}