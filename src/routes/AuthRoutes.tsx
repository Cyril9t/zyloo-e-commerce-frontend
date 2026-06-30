import { Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import ForgotPasswordPage from "../features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "../features/auth/pages/ResetPasswordPage";

export default function AuthRoutes() {
    return (
        <>
            <Routes>
                <Route path={PATHS.auth.login} element={<LoginPage />} />
                <Route path={PATHS.auth.register} element={<RegisterPage />} />
                <Route path={PATHS.auth.forgotPassword} element={<ForgotPasswordPage />} />
                <Route path={PATHS.auth.resetPassword} element={<ResetPasswordPage />} />
            </Routes>
        </>
    )
}