import { use, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { PATHS } from "../../../routes/paths";
import { registerSchema } from "../../../lib/schema/validate";
import { authReg } from "../../../lib/auth/auth";
import type { registerData } from "../../../lib/schema/validate";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner";



export default function RegisterForm() {

    const { handleSubmit, register, formState: { errors } } = useForm<registerData>({
        resolver: zodResolver(registerSchema)
    })
    const { trigger, isMutating, error } = authReg()
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate()
    const submit = async (data: registerData) => {

        try {
            const registration = trigger(data)

            toast.promise(registration, {
                success: (data) => data.Message,
                loading: "Processing...",
                error: (data) => data.Message
            })

            const user = await registration

            if (user.Message === "Registration successful") return navigate(PATHS.auth.login, { "replace": true })

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit(submit)} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="firstName">
                        First Name
                    </Label>

                    <div className="flex flex-col">
                        <Input
                            id="firstName"
                            placeholder="John"
                            {...register("firstName")}
                        />

                        <small className="text-destructive">{errors.firstName?.message}</small>
                    </div>

                </div>

                <div className="space-y-2">
                    <Label htmlFor="lastName">
                        Last Name
                    </Label>
                    <div className="flex flex-col">
                        <Input
                            id="firstName"
                            placeholder="Deo"
                            {...register("lastName")}
                        />

                        <small className="text-destructive">{errors.lastName?.message}</small>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">
                    Email
                </Label>

                <div className="flex flex-col">
                    <Input
                        id="firstName"
                        placeholder="zyloo@gmail.com"
                        {...register("email")}
                    />

                    <small className="text-destructive">{errors.email?.message}</small>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">
                    Password
                </Label>

                <div className="relative">
                    <div className="flex flex-col">
                        <Input
                            id="firstName"
                            placeholder="••••••••"
                            {...register("password")}
                        />

                        <small className="text-destructive">{errors.password?.message}</small>
                    </div>

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