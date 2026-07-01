import { Mail } from "lucide-react";

import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';




function Newsletter() {
    return (




        <section className="py-6 md:py-2 px-10  mx-auto w-full mb-20">
            <Card className="relative overflow-hidden border  bg-gradient-to-b from-zinc-50 dark:from-zinc-900 dark:to-zinc-950 rounded-[0.5rem] md:p-16 lg:p-16 shadow-xl shadow-zinc-200/30 dark:shadow-none">

                {/* Modern Designer Background Accents */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] pointer-events-none" />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-1xl pointer-events-none" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/5 rounded-full blur-1xl pointer-events-none" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* Left Side: Value Proposition */}
                    <div className="lg:col-span-7 space-y-6 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/10">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Exclusive Member Perks</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15]">
                            Stay in the Loop.<br />
                            <span className="bg-gradient-to-r from-zinc-500 to-zinc-800 dark:from-zinc-400 dark:to-zinc-100 bg-clip-text text-transparent">
                                Elevate Your Style.
                            </span>
                        </h2>

                        <p className="text-base md:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                            Be the first to discover new collections, exclusive capsule drops, and curated style inspiration. Enjoy <span className="font-semibold text-zinc-900 dark:text-zinc-100 underline decoration-primary decoration-2 underline-offset-4">10% off</span> your first order when you join today.
                        </p>
                    </div>

                    {/* Right Side: Actionable Interactive Form */}
                    <div className="lg:col-span-5 w-full">
                        <form className="space-y-4">
                            {/* Unified Premium Form Field Wrapper */}
                            <div className="flex flex-col sm:flex-row items-center gap-2 p-0.6 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all duration-300 shadow-sm">
                                <div className="flex items-center w-full pl-3 gap-2">
                                    <Mail className="h-5 w-5 text-zinc-400 flex-shrink-0" />
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email address"
                                        className="w-full h-11 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 outline-none border-0 focus:ring-0"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full sm:w-auto h-10 px-6 rounded-xl font-medium tracking-wide shadow-md transition-transform duration-200 active:scale-95 whitespace-nowrap group"
                                >
                                    Subscribe
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                </Button>
                            </div>

                            {/* Minimalist Trust & Disclaimer text */}
                            <p className="text-xs text-zinc-500 dark:text-zinc-500 text-center sm:text-left leading-normal px-2">
                                By subscribing, you agree to our <span className="underline cursor-pointer hover:text-zinc-700 dark:hover:text-zinc-300">Privacy Policy</span>. No spam, ever. Unsubscribe with one click.
                            </p>
                        </form>
                    </div>

                </div>
            </Card>
        </section>
    );
}

export default Newsletter;