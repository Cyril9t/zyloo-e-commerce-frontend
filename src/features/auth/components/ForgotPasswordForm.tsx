
import { Link } from "react-router-dom";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

import { PATHS } from "../../../routes/paths";

export default function ForgotPasswordForm() {
    return (
        <form className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="email">
                    Email Address
                </Label>

                <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                />
            </div>

            <Button
                type="submit"
                className="w-full"
                size="lg"
            >
                Send Reset Link
            </Button>

            <p className="text-center text-sm text-muted-foreground">
                Remember your password?{" "}
                <Link
                    to={PATHS.auth.login}
                    className="font-medium text-primary hover:underline"
                >
                    Back to Login
                </Link>
            </p>
        </form>
    );
}