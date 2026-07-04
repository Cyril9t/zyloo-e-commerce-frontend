import { useState } from "react";
import { Eye, EyeOff, } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Separator } from "../../../components/ui/separator";

import { PATHS } from "../../../routes/paths";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form className="space-y-6">
            {/* Email */}

            <div className="space-y-2">
                <Label htmlFor="email">
                    Email
                </Label>

                <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                />
            </div>

            {/* Password */}

            <div className="space-y-2">
                <Label htmlFor="password">
                    Password
                </Label>

                <div className="relative">
                    <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                    />

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

                <Button
                    variant="outline"
                    type="button"
                >

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