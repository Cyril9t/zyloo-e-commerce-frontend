import { Toaster } from "sonner"
import AppRouter from "../routes/AppRouter"

function App() {
  return (
    <div>
      <Toaster position="top-right" richColors />
      <AppRouter />
    </div>
  )
}

export default App
