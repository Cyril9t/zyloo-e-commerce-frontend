
import { AuthHeader, AuthLayoutCard } from "../components";
import VerifyPasswordOTP from "../components/VerifyOtpForPassword";

function VerifyEmailForPassword() {
    return (
        <AuthLayoutCard>

            <AuthHeader title="Verify OTP" subtitle="A 6 digit code has been sent to your email" />
            <VerifyPasswordOTP />
        </AuthLayoutCard>
    );
}

export default VerifyEmailForPassword;