import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

import { PATHS } from "../../../routes/paths";

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="firstName">
                        First Name
                    </Label>

                    <Input
                        id="firstName"
                        placeholder="John"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="lastName">
                        Last Name
                    </Label>

                    <Input
                        id="lastName"
                        placeholder="Doe"
                    />
                </div>
            </div>

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
                        onClick={() => setShowPassword((prev) => !prev)}
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

            <div className="space-y-2">
                <Label htmlFor="confirmPassword">
                    Confirm Password
                </Label>

                <div className="relative">
                    <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                    />

                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                            setShowConfirmPassword((prev) => !prev)
                        }
                        className="absolute right-1 top-1 h-8 w-8"
                    >
                        {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                        ) : (
                            <Eye className="h-4 w-4" />
                        )}
                    </Button>
                </div>
            </div>

            <div className="flex items-start gap-3">
                <Checkbox id="terms" />

                <Label
                    htmlFor="terms"
                    className="leading-6"
                >
                    I agree to the Terms & Conditions and Privacy
                    Policy.
                </Label>
            </div>

            <Button
                type="submit"
                className="w-full"
                size="lg"
            >
                Create Account
            </Button>

            <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                    to={PATHS.auth.login}
                    className="font-medium text-primary hover:underline"
                >
                    Sign In
                </Link>
            </p>
        </form>
    );
}