import React from "react";

import { Eye, EyeOff, Globe } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import Navbar from "../landingPage/navbar/navbar";
export default function LoginPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const year = new Date(Date.now()).toLocaleString("en-US", { year: "numeric" })
    return (

        <div>
            <Navbar />
            <div className="relative w-full h-screen grid lg:grid-cols-2 overflow-hidden">


                <div className="relative hidden lg:flex flex-col justify-between p-8 bg-cover bg-center h-full"
                    style={{ backgroundImage: `url(/bg2.jpg)` }}>

                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative z-10 font-bold text-2xl tracking-widest">ZYLOO</div>

                    <div className="relative z-10 text-xs  tracking-wider">
                        © {year} ZYLOO PREMIUM. ALL RIGHTS RESERVED.
                    </div>
                </div>


                <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 bg-background backdrop-blur-md lg:bg-bg-background h-full overflow-y-auto">


                    <div className="flex justify-between items-center lg:justify-end gap-6 text-xs text-neutral-500 tracking-wide">
                        <span className="lg:hidden font-bold text-xl  tracking-widest">ZYLOO</span>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-black transition-colors">Help</a>
                            <a href="#" className="hover:text-black transition-colors">Privacy</a>
                        </div>
                    </div>


                    <div className="mx-auto w-full max-w-[400px] space-y-6 xl:space-y-8 my-auto py-4">
                        <div className="space-y-2 text-center lg:text-left">
                            <h1 className="text-3xl font-light tracking-tight ">Welcome Back</h1>
                            <p className="text-sm opacity-50">Sign in to your premium account</p>
                        </div>

                        <form className="space-y-4 xl:space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-xs font-medium uppercase tracking-wider ">
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@aether.com"
                                    className="h-11 rounded-md border-border "
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="password" className="text-xs font-medium uppercase tracking-wider ">
                                        Password
                                    </Label>
                                    <a href="#" className="text-xs opacity-40 hover:text-black transition-colors">
                                        Forgot?
                                    </a>
                                </div>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        className="h-11 rounded-md border-border pr-10"
                                        placeholder="***********"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </div>

                            <Button type="submit" className="w-full h-11 bg-black text-white hover:bg-neutral-800 transition-all rounded-md font-normal tracking-wide mt-2">
                                Sign In
                            </Button>
                        </form>


                        <div className="relative flex items-center py-1">
                            <Separator className="bg-foreground" />
                            <span className="absolute left-1/2 -translate-x-1/2 bg-foreground px-3 text-[10px] font-medium uppercase tracking-widest text-background rounded">
                                Or continue with
                            </span>
                        </div>


                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="h-11 rounded-md border-neutral-200 font-normal hover:bg-neutral-50">
                                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                                    <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.96 1 12 1 7.35 1 3.4 3.65 1.5 7.5l3.6 2.8C6.01 7.05 8.78 5.04 12 5.04z" />
                                    <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.43h6.44c-.28 1.47-1.11 2.71-2.36 3.55l3.64 2.83c2.13-1.97 3.41-4.87 3.41-8.47z" />
                                    <path fill="#FBBC05" d="M5.1 14.7c-.24-.72-.38-1.49-.38-2.3s.14-1.58.38-2.3L1.5 7.3C.54 9.22 0 11.35 0 13.6s.54 4.38 1.5 6.3l3.6-2.82z" />
                                    <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.64-2.83c-1.01.67-2.3 1.08-4.32 1.08-3.22 0-5.99-2.01-6.9-4.96l-3.6 2.82C3.4 20.35 7.35 23 12 23z" />
                                </svg>
                                Google
                            </Button>
                            <Button variant="outline" className="h-11 rounded-md border-neutral-200 font-normal hover:bg-neutral-50">
                                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.63.72-1.18 1.86-1.03 2.97 1.12.09 2.27-.58 2.97-1.4z" />
                                </svg>
                                Apple
                            </Button>
                        </div>

                        <p className="text-center text-sm text-foreground font-light">
                            New to ZYLOO?{" "}
                            <a href="/register" className="font-normal text-foreground underline underline-offset-4 hover:text-neutral-700">
                                Create an account
                            </a>
                        </p>
                    </div>


                    <div className="flex justify-between items-center text-[11px] text-neutral-400 tracking-wider pt-2">
                        <span className="lg:block hidden">© 2026 ZYLOO PREMIUM. ALL RIGHTS RESERVED.</span>
                        <span className="lg:hidden block" />
                        <div className="flex items-center gap-1.5 cursor-pointer hover:text-black transition-colors">
                            <Globe size={12} />
                            <span>ENGLISH (US)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}