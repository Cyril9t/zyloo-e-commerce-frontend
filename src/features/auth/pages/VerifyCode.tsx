
import { AuthHeader, AuthLayoutCard } from "../components";
import VerifyCode from "../components/verifyCode";

function VeryToken() {
    return (
        <AuthLayoutCard>

            <AuthHeader title="Verify OTP" subtitle="A 6 digit code has been sent to your email" />
            <VerifyCode />
        </AuthLayoutCard>
    );
}

export default VeryToken;