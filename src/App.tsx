import { LandingPage } from "./components/landingPage/landingPage"
import LoginPage from "./components/auth/Login"
import RegisterPage from "./components/auth/register"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <Routes>s
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
