
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

import { PATHS } from "../../../routes/paths";
import api from "../../../lib/api";
import { useState } from "react";
import { toast } from "sonner";

export default function ForgotPasswordForm() {

    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const sendOTP = async () => {
        if (!email) return toast.warning("Email required")
        setLoading(true)
        console.log(email)
        localStorage.setItem("email", email)
        try {
            const resp = await api.post("/auth/forgotPassword", { email })
            const data = await resp.data.Message
            toast.success(data)
            console.log(data);
            setLoading(false)
            navigate(PATHS.auth.verifyEmail)
        } catch (error: any) {

            console.log(error?.response?.data?.Message)
            console.log(error)
            toast.error(error?.response?.data?.Message)
            setLoading(false)
        }
    }

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="email">
                    Email Address
                </Label>

                <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <Button
                type="submit"
                className="w-full"
                size="lg"
                onClick={sendOTP}
                disabled={loading}
            >
                Send OTP
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
        </div>
    );
}