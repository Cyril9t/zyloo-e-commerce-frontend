
import { ArrowUpRight } from "lucide-react";

import {
    Camera,
    Globe,
    PlayCircle,
} from "lucide-react";




export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-200">
            <div className="mx-auto max-w-7xl px-4 pt-6 pb-8 md:pt-14">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16 border-b border-zinc-100 dark:border-zinc-900">

                    {/* Brand Presentation Column */}
                    <div className="md:col-span-5 space-y-5">
                        <h2 className="text-2xl font-black tracking-widest text-zinc-900 dark:text-zinc-50 uppercase">
                            ZYLOO
                        </h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
                            Redefining modern luxury through minimalist design, intentional aesthetics, and conscious, sustainable craftsmanship.
                        </p>
                        {/* Social Links Container */}
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" aria-label="Instagram" className="p-2 -ml-2 rounded-full border border-zinc-200/60 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all">
                                <Camera className="h-4 w-4" />
                            </a>
                            <a href="#" aria-label="YouTube" className="p-2 rounded-full border border-zinc-200/60 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all">
                                <PlayCircle className="h-4 w-4" />
                            </a>
                            <a href="#" aria-label="Global Store" className="p-2 rounded-full border border-zinc-200/60 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all">
                                <Globe className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Matrix Columns */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">

                        {/* Column: Shop */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                                Shop
                            </h3>
                            <ul className="space-y-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                <li>
                                    <a href="#" className="relative py-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all hover:text-zinc-950 dark:hover:text-zinc-50">New Arrivals</a>
                                </li>
                                <li>
                                    <a href="#" className="relative py-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all hover:text-zinc-950 dark:hover:text-zinc-50">Collections</a>
                                </li>
                                <li>
                                    <a href="#" className="relative py-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all hover:text-zinc-950 dark:hover:text-zinc-50">Best Sellers</a>
                                </li>
                                <li>
                                    <a href="#" className="relative py-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all hover:text-zinc-950 dark:hover:text-zinc-50">Sustainability</a>
                                </li>
                            </ul>
                        </div>

                        {/* Column: Services */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                                Services
                            </h3>
                            <ul className="space-y-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                <li>
                                    <a href="#" className="relative py-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all hover:text-zinc-950 dark:hover:text-zinc-50">Track Order</a>
                                </li>
                                <li>
                                    <a href="#" className="relative py-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all hover:text-zinc-950 dark:hover:text-zinc-50">Shipping & Returns</a>
                                </li>
                                <li>
                                    <a href="#" className="relative py-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all hover:text-zinc-950 dark:hover:text-zinc-50">Contact Support</a>
                                </li>
                                <li>
                                    <a href="#" className="relative py-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all hover:text-zinc-950 dark:hover:text-zinc-50">Privacy Desk</a>
                                </li>
                            </ul>
                        </div>

                        {/* Column: Corporate Hub */}
                        <div className="col-span-2 sm:col-span-1 space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                                Concierge
                            </h3>
                            <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400 space-y-3">
                                <a href="mailto:concierge@zyloo.com" className="inline-flex items-center gap-0.5 group hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">
                                    concierge@zyloo.com
                                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-current transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                                <p className="text-xs text-zinc-500 dark:text-zinc-500 font-normal leading-relaxed">
                                    123 Design District<br />
                                    Lagos, Nigeria
                                </p>
                                <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                                    +234 906 211 4253
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Metadata Bar */}
                <div className="pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-500">
                    <p>© {currentYear} ZYLOO International. All architecture reserved.</p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors">Terms of Use</a>
                        <a href="#" className="hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors">Cookies Configuration</a>
                        <a href="#" className="hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors">Accessibility Blueprint</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}