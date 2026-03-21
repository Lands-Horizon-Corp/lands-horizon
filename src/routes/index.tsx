import { createFileRoute } from "@tanstack/react-router"
import Home from "@/components/home/page"
import { APP_NAME } from "@/constants"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Project Lisa | ${APP_NAME}` },
      {
        name: "description",
        content:
          "Bridging System Architecture & Creative Vision. High-performance software engineering and premium multimedia solutions for 100,000+ local partners.",
      },
      {
        property: "og:title",
        content: "Project Lisa — Engineering & Creative Multimedia",
      },
      {
        property: "og:description",
        content:
          "From robust backend systems to high-end Photoshop compositions and cinematic production. We build exactly what you need to scale.",
      },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:url", content: "https://project-lisa.cloud" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "System Development, Multimedia Production, Photoshop, ERP, POS, Creative Agency Philippines",
      },
    ],
  }),
  component: App,
})

function App() {
  return <Home />
}
