
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Globe } from "lucide-react";

export default function RegisterPage() {
    return (

        <div className="relative w-full h-screen grid lg:grid-cols-2 bg-[#f4f4f4] overflow-hidden">


            <div className="relative hidden lg:flex flex-col justify-between p-8 bg-cover bg-center text-white h-full"
                style={{ backgroundImage: "url('/bg2.jpg')" }}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10 font-bold text-2xl tracking-widest">AETHER</div>
                <div className="relative z-10 text-xs text-neutral-300 tracking-wider">
                    © 2026 AETHER PREMIUM. ALL RIGHTS RESERVED.
                </div>
            </div>


            <div className="flex flex-col justify-between p-5 sm:p-10 lg:p-12 xl:p-16 bg-white/80 backdrop-blur-md lg:bg-white h-full overflow-y-auto">


                <div className="flex justify-between items-center lg:justify-end gap-6 text-xs text-neutral-500 tracking-wide">
                    <span className="lg:hidden font-bold text-xl text-black tracking-widest">AETHER</span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-black transition-colors">Help</a>
                        <a href="#" className="hover:text-black transition-colors">Privacy</a>
                    </div>
                </div>


                <div className="mx-auto w-full max-w-[400px] space-y-4 xl:space-y-6 my-auto py-2">
                    <div className="space-y-1 text-center lg:text-left">
                        <h1 className="text-2xl xl:text-3xl font-light tracking-tight text-neutral-900">Create Account</h1>
                        <p className="text-xs xl:text-sm text-neutral-500 font-light">Join Aether to access premium features</p>
                    </div>


                    <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="h-10 xl:h-11 rounded-md border-neutral-200 font-normal hover:bg-neutral-50 text-xs xl:text-sm">
                            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                                <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.96 1 12 1 7.35 1 3.4 3.65 1.5 7.5l3.6 2.8C6.01 7.05 8.78 5.04 12 5.04z" />
                            </svg>
                            Google
                        </Button>
                        <Button variant="outline" className="h-10 xl:h-11 rounded-md border-neutral-200 font-normal hover:bg-neutral-50 text-xs xl:text-sm">
                            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39z" />
                            </svg>
                            Apple
                        </Button>
                    </div>

                    <div className="relative flex items-center py-1">
                        <Separator className="bg-neutral-200" />
                        <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-[10px] font-medium uppercase tracking-widest text-neutral-400">
                            Or sign up with email
                        </span>
                    </div>

                    <form className="space-y-3 xl:space-y-4">
                        <div className="grid grid-cols-2 gap-3 xl:gap-4">
                            <div className="space-y-1.5">
                                <Label htmlFor="firstName" className="text-[11px] font-medium uppercase tracking-wider text-neutral-600">First Name</Label>
                                <Input id="firstName" placeholder="Alex" className="h-10 xl:h-11 rounded-md border-neutral-200 bg-neutral-50/50" />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="lastName" className="text-[11px] font-medium uppercase tracking-wider text-neutral-600">Last Name</Label>
                                <Input id="lastName" placeholder="Smith" className="h-10 xl:h-11 rounded-md border-neutral-200 bg-neutral-50/50" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="email" className="text-[11px] font-medium uppercase tracking-wider text-neutral-600">Email Address</Label>
                            <Input id="email" type="email" placeholder="name@aether.com" className="h-10 xl:h-11 rounded-md border-neutral-200 bg-neutral-50/50" />
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="password" className="text-[11px] font-medium uppercase tracking-wider text-neutral-600">Password</Label>
                            <Input id="password" type="password" placeholder="••••••••" className="h-10 xl:h-11 rounded-md border-neutral-200 bg-neutral-50/50" />
                        </div>


                        <div className="flex items-start space-x-2 pt-1">
                            <Checkbox id="terms" className="border-neutral-300 mt-0.5 data-[state=checked]:bg-black data-[state=checked]:border-black" />
                            <label htmlFor="terms" className="text-[11px] font-light text-neutral-500 leading-tight">
                                I agree to the{" "}
                                <a href="#" className="underline text-black">Terms of Service</a> and{" "}
                                <a href="#" className="underline text-black">Privacy Policy</a>.
                            </label>
                        </div>

                        <Button type="submit" className="w-full h-10 xl:h-11 bg-black text-white hover:bg-neutral-800 transition-all rounded-md font-normal tracking-wide mt-2">
                            Create Account
                        </Button>
                    </form>

                    <p className="text-center text-xs xl:text-sm text-neutral-500 font-light">
                        Already have an account?{" "}
                        <a href="/login" className="font-normal text-black underline underline-offset-4 hover:text-neutral-700">
                            Sign In
                        </a>
                    </p>
                </div>


                <div className="flex justify-between items-center text-[11px] text-neutral-400 tracking-wider pt-2">
                    <span className="lg:block hidden">© 2026 AETHER PREMIUM. ALL RIGHTS RESERVED.</span>
                    <span className="lg:hidden block" />
                    <div className="flex items-center gap-1.5 cursor-pointer hover:text-black transition-colors">
                        <Globe size={12} />
                        <span>ENGLISH (US)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}