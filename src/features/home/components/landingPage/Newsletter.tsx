import { useEffect, useState } from 'react';
import { Mail, Sparkles, ArrowRight } from 'lucide-react';
import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import CursorRingField from '../../../../components/originkit/ui/cursor-ring-field';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isDark, setIsDark] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription logic here
        console.log('Subscribing email:', email);
        setEmail('');
    };


    // Detect Tailwind Dark Mode dynamically
    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);


    return (
        <section className=" py-6 md:py-8 lg:py-12 px-2 sm:px-4 md:px-8 lg:px-10 mx-auto w-full mb-16 md:mb-20 lg:mb-24">

            <Card className="relative overflow-hidden bg-[#00000000] border border-border  rounded-xl md:rounded-2xl p-6 sm:p-10 md:p-12 lg:p-16 shadow-lg">
                {/* <div className='absolute top-0 bottom-0 right-0 left-0  w-full h-full'>
                    <CursorRingField colors={!isDark ? ["#000000"] : ["oklch(0.145 0 0)", "oklch(0.145 0 0)"]} background={isDark ? 'oklch(0.145 0 0)' : 'oklch(1 0 0)'} />
                </div> */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* Left Side: Value Proposition */}
                    <div className="lg:col-span-7 space-y-6 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Exclusive Member Perks</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground leading-[1.15]">
                            Stay in the Loop.<br />
                            <span className="text-muted-foreground">
                                Elevate Your Style.
                            </span>
                        </h2>

                        <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
                            Be the first to discover new collections, exclusive capsule drops, and curated style inspiration. Enjoy <span className="font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4">10% off</span> your first order when you join today.
                        </p>
                    </div>

                    {/* Right Side: Actionable Interactive Form */}
                    <div className="lg:col-span-5 w-full">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Unified Premium Form Field Wrapper */}
                            <div className="flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-2xl bg-background border border-border focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all duration-300 shadow-sm">
                                <div className="flex items-center w-full pl-3 gap-2">
                                    <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="w-full h-11 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none border-0 focus:ring-0"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full sm:w-auto h-11 px-6 rounded-xl font-medium tracking-wide shadow-md transition-transform duration-200 active:scale-95 whitespace-nowrap group"
                                >
                                    Subscribe
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                </Button>
                            </div>

                            {/* Minimalist Trust & Disclaimer text */}
                            <p className="text-xs text-muted-foreground text-center sm:text-left leading-normal px-2">
                                By subscribing, you agree to our <span className="underline cursor-pointer hover:text-foreground transition-colors">Privacy Policy</span>. No spam, ever. Unsubscribe with one click.
                            </p>
                        </form>
                    </div>

                </div>
            </Card>
        </section>
    );
}