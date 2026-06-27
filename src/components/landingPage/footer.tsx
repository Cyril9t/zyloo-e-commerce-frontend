import {
    Camera,
    Globe,
    PlayCircle,
} from "lucide-react";

const year = new Date().getFullYear();
export default function Footer() {
    return (

        <footer className="border-t dark:bg-card bg-accent">
            <div className="mx-auto max-w-[86%] px-6 py-16 lg:px-8">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h2 className="text-4xl  font-bold tracking-tight">
                            ZYLOO
                        </h2>

                        <p className="mt-5 max-w-sm leading-7 text-muted-foreground">
                            Redefining modern luxury through minimalist design and conscious
                            craftsmanship.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <Globe className="h-5 w-5 cursor-pointer transition hover:opacity-70" />
                            <Camera className="h-5 w-5 cursor-pointer transition hover:opacity-70" />
                            <PlayCircle className="h-5 w-5 cursor-pointer transition hover:opacity-70" />
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="mb-5 text-base font-semibold">
                            Shop
                        </h3>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="cursor-pointer transition hover:text-foreground">
                                New Arrivals
                            </li>

                            <li className="cursor-pointer transition hover:text-foreground">
                                Collections
                            </li>

                            <li className="cursor-pointer transition hover:text-foreground">
                                Best Sellers
                            </li>

                            <li className="cursor-pointer transition hover:text-foreground">
                                Sustainability
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-5 text-base font-semibold">
                            Services
                        </h3>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="cursor-pointer transition hover:text-foreground">
                                Track Order
                            </li>

                            <li className="cursor-pointer transition hover:text-foreground">
                                Shipping & Returns
                            </li>

                            <li className="cursor-pointer transition hover:text-foreground">
                                Contact Us
                            </li>

                            <li className="cursor-pointer transition hover:text-foreground">
                                Privacy Policy
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-base font-semibold">
                            Contact
                        </h3>

                        <div className="space-y-3 text-sm text-muted-foreground">
                            <p>concierge@zyloo.com</p>
                            <p>+234 906 211 4253</p>

                            <div className="pt-2">
                                <p>123 Design District</p>
                                <p>Lagos, Nigeria</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground md:flex-row">
                    <p>
                        © {year} ZYLOO. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="transition hover:text-foreground"
                        >
                            Terms
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-foreground"
                        >
                            Cookies
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-foreground"
                        >
                            Accessibility
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}