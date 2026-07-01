import Logo from "../../../../components/common/Logo";
import { } from "lucide-react";

const shopLinks = [
    "Shop",
    "Categories",
    "Deals",
    "New Arrivals",
];

const supportLinks = [
    "Help Center",
    "Contact Us",
    "FAQs",
    "Privacy Policy",
];

export default function Footer() {
    return (
        <footer className="mt-20 border-t bg-muted/30">
            <div className="container-page py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <Logo />

                        <p className="text-sm text-muted-foreground">
                            Premium shopping experience with quality products and exceptional service.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold">Shop</h3>

                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {shopLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-foreground">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold">Support</h3>

                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {supportLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-foreground">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold">Follow Us</h3>

                        <div className="flex gap-3">
                            {/* <FaceBookApp className="h-5 w-5 cursor-pointer hover:text-primary" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-primary" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-primary" />
              <Github className="h-5 w-5 cursor-pointer hover:text-primary" /> */}
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Zyloo. All rights reserved.
                </div>
            </div>
        </footer>
    );
}