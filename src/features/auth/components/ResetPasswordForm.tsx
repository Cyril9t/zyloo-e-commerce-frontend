import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import instance from "../../../lib/api";

import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../routes/paths";

export default function ResetPasswordForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState({
        newPassword: "",
        confirmPassword: ""
    })

    const [isLoading, setIsLoading] = useState(false)


    const handleChange = (e: any) => {
        const { name, value } = e.target
        setPassword((prev) => ({ ...prev, [name]: value }))
    }
    const navigate = useNavigate()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (!password.confirmPassword || !password.newPassword) return toast.warning("All fields are required")
        if (password.confirmPassword !== password.newPassword) return toast.warning("Passwords not matched")

        setIsLoading(true)

        const email = localStorage.getItem("email")
        try {
            const resp = await instance.post("/auth/reset-password", { email, password: password.newPassword })
            const data = await resp.data.Message
            toast.success(data)
            if (data === "Email required") return
            navigate(PATHS.auth.login, { replace: true })
            localStorage.removeItem("email")
            setIsLoading(false)
        } catch (error: any) {
            setIsLoading(false);

            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="password">
                    New Password
                </Label>

                <div className="relative">
                    <Input
                        id="password"
                        name="newPassword"
                        value={password.newPassword}
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        onChange={handleChange}
                    />

                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowPassword(prev => !prev)}
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
                        name="confirmPassword"
                        value={password.confirmPassword}
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        onChange={handleChange}
                    />

                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowConfirmPassword(prev => !prev)}
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

            <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isLoading}
            >
                Reset Password
            </Button>
        </form >
    );
}