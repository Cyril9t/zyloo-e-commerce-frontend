import AuthHeader from "../components/AuthHeader";
import AuthLayoutCard from "../components/AuthLayoutCard";
import ResetPasswordForm from "../components/ResetPasswordForm";

export default function ResetPasswordPage() {
    return (
        <AuthLayoutCard>
            <AuthHeader
                title="Reset Password"
                subtitle="Choose a new password for your account."
            />

            <ResetPasswordForm />
        </AuthLayoutCard>
    );
}