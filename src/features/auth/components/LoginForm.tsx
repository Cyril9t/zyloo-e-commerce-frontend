import { useState } from "react";
import { Eye, EyeOff, } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Separator } from "../../../components/ui/separator";
import type { loginData } from "../../../lib/schema/validate";
import { loginSchema } from "../../../lib/schema/validate";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { authLogin } from "../../../lib/auth/auth";
import { PATHS } from "../../../routes/paths";
import { toast } from "sonner";
import { useAuth } from "../../../context/AuhProvider";

export default function LoginForm() {
    const { setUser } = useAuth();
    const { trigger } = authLogin()
    const [showPassword, setShowPassword] = useState(false);

    const { handleSubmit, register, formState: { errors } } = useForm<loginData>({
        resolver: zodResolver(loginSchema)
    });

    const navigate = useNavigate()

    const submit = async (data: loginData) => {
        try {
            const login = trigger(data)
            toast.promise(login, {
                success: (data) => data.Message,
                loading: "Processing...",
                error: "Operation failed"
            })
            const user = await login
            setUser(user.userInfo);
            if (user.userInfo.role === "ADMIN") {
                navigate(PATHS.admin.dashboard, { replace: true });
            } else {
                navigate(PATHS.customer.home, { replace: true });
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="space-y-3">
            {/* Email */}

            <div className="space-y-1">
                <Label htmlFor="email">
                    Email
                </Label>

                <div className="flex flex-col">
                    <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        {...register("email")}
                    />
                    <small className="text-destructive">{errors.email?.message}</small>
                </div>

            </div>

            {/* Password */}

            <div className="space-y-1">
                <Label htmlFor="password">
                    Password
                </Label>

                <div className="relative">
                    <div className="flex flex-col">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            {...register("password")}
                        />

                        <small className="text-destructive">{errors.password?.message}</small>
                    </div>


                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                            setShowPassword(!showPassword)
                        }
                        className="absolute right-1 top-1 h-8 w-8"
                    >
                        {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                        ) : (
                            <Eye className="h-4 w-4" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Remember + Forgot */}

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />

                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>

                <Link
                    to={PATHS.auth.forgotPassword}
                    className="text-sm text-primary hover:underline"
                >
                    Forgot Password?
                </Link>
            </div>

            {/* Login */}

            <Button
                type="submit"
                className="w-full"
                size="lg"
            >
                Sign In
            </Button>

            <div className="relative">
                <Separator />

                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-sm text-muted-foreground">
                    OR
                </span>
            </div>

            {/* Social */}

            <div className="grid gap-3">
                <Button
                    variant="outline"
                    type="button"
                >
                    Continue with Google
                </Button>


            </div>

            {/* Register */}

            <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                    to={PATHS.auth.register}
                    className="font-medium text-primary hover:underline"
                >
                    Create one
                </Link>
            </p>
        </form>
    );
}