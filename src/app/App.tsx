import { Toaster } from "sonner"
import AppRouter from "../routes/AppRouter"
import { AuthProvider } from "../context/AuhProvider"
import { TotalUsersContext } from "../context/userContext"

function App() {
  return (


    <AuthProvider>


      <Toaster position="top-right" richColors />
      <AppRouter />

    </AuthProvider>


  )
}

export default App
