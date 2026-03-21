import { createFileRoute } from "@tanstack/react-router"
import { ThemeProvider } from "@/components/theme-provider"
import Home from "@/components/home/page"
import { APP_NAME } from "@/constants"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Project Lisa | ${APP_NAME}` },
      {
        name: "description",
        content:
          "Maximizing Reach. Multiplying Impact. Trusted systems-driven partner for 100,000+ local clients in the Philippines.",
      },
      {
        property: "og:title",
        content: "Project Lisa - Professional System Development",
      },
      {
        property: "og:description",
        content:
          "Thoughtfully built systems and creative solutions designed for exactly what you need.",
      },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:url", content: "https://project-lisa.cloud" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
})

function App() {
  return <Home />
}
