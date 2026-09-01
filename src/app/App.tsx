import { Toaster } from "sonner"
import AppRouter from "../routes/AppRouter"
import { AuthProvider } from "../context/AuthProvider"

function App() {
  return (


    <AuthProvider>


      <Toaster position="top-right" richColors />
      <AppRouter />

    </AuthProvider>


  )
}

export default App
