import { createFileRoute } from "@tanstack/react-router"
import { ThemeProvider } from "@/components/theme-provider"
import Home from "@/components/home/page"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  )
}
