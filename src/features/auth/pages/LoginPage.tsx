import AuthHeader from "../components/AuthHeader";
import AuthLayoutCard from "../components/AuthLayoutCard";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    return (
        <AuthLayoutCard>
            <AuthHeader
                title="Welcome Back"
                subtitle="Sign in to continue shopping on Zyloo."
            />

            <LoginForm />
        </AuthLayoutCard>
    );
}