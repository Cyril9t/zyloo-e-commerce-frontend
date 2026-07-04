import AuthHeader from "../components/AuthHeader";
import AuthLayoutCard from "../components/AuthLayoutCard";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
    return (
        <AuthLayoutCard>
            <AuthHeader
                title="Forgot Password?"
                subtitle="Enter your email address and we'll send you a password reset link."
            />

            <ForgotPasswordForm />
        </AuthLayoutCard>
    );
}