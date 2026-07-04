import AuthHeader from "../components/AuthHeader";
import AuthLayoutCard from "../components/AuthLayoutCard";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
    return (
        <AuthLayoutCard>
            <AuthHeader
                title="Create Your Account"
                subtitle="Join Zyloo and start shopping today."
            />

            <RegisterForm />
        </AuthLayoutCard>
    );
}