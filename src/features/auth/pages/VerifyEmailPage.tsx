import AuthHeader from "../components/AuthHeader";
import AuthLayoutCard from "../components/AuthLayoutCard";
import VerifyEmailForm from "../components/VerifyEmailForm";

export default function VerifyEmailPage() {
    return (
        <AuthLayoutCard>
            <AuthHeader
                title="Verify Your Email"
                subtitle="One more step before you can start shopping."
            />

            <VerifyEmailForm />
        </AuthLayoutCard>
    );
}