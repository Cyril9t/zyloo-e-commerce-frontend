import { LandingPage } from "./components/landingPage/landingPage"
import LoginPage from "./components/auth/Login"
import RegisterPage from "./components/auth/register"
import { Route, Routes } from "react-router-dom"
import { Toaster } from "sonner";

function App() {

  return (
    <div>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App
