import { Button } from "../../../components/ui/button";

export default function VerifyEmailForm() {
    return (
        <div className="space-y-6 text-center">
            <p className="text-muted-foreground">
                We've sent a verification link to your email address.
                Please check your inbox and click the link to verify
                your account.
            </p>

            <Button className="w-full">
                Resend Verification Email
            </Button>
        </div>
    );
}