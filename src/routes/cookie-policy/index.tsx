import { APP_NAME, PUBLIC_URL } from "@/constants"
import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  Cookie,
  Mail,
  MessageSquare,
  Shield,
  FileText,
  HelpCircle,
} from "lucide-react"

export const Route = createFileRoute("/cookie-policy/")({
  component: CookiePolicy,
})

function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 text-foreground md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <header className="mb-12 border-b border-border pb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black tracking-widest text-primary uppercase">
            <Cookie className="h-3 w-3" />
            {APP_NAME} Legal
          </div>
          <h1 className="mb-4 text-3xl font-black tracking-tight uppercase md:text-5xl">
            Cookie Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Effective Date: March 21, 2026
          </p>
        </header>

        <section className="space-y-12 leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="flex items-center gap-3 text-xl font-bold tracking-tight text-primary">
              <span className="h-px w-8 bg-primary/30"></span>
              01. Our Commitment
            </h2>
            <p className="text-muted-foreground">
              At <strong>{APP_NAME}</strong>, we are dedicated to maximizing
              reach and multiplying impact. To provide our 100,000+ users and
              local partners with exactly what they need, we use cookies to
              ensure our systems and creative solutions function seamlessly.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="flex items-center gap-3 text-xl font-bold tracking-tight text-primary">
              <span className="h-px w-8 bg-primary/30"></span>
              02. How We Use Cookies
            </h2>
            <p className="text-muted-foreground">
              Our official site (
              <span className="font-medium text-primary">{PUBLIC_URL}</span>)
              uses cookies to:
            </p>
            <ul className="grid gap-4 text-sm md:grid-cols-3">
              {[
                {
                  title: "System Integrity",
                  desc: "Ensuring our ERP, POS, and 24/7 support portals remain secure.",
                },
                {
                  title: "Performance Analytics",
                  desc: "Optimizing SEO and Digital Marketing strategies via user navigation.",
                },
                {
                  title: "Multimedia Delivery",
                  desc: "Ensuring high-end video and production content loads efficiently.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-1 rounded-lg border border-border bg-muted/40 p-4 transition-colors hover:bg-muted/60"
                >
                  <strong className="text-xs tracking-widest text-foreground uppercase">
                    {item.title}
                  </strong>
                  <span className="text-[11px] leading-tight text-muted-foreground">
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Box */}
          <div className="rounded-2xl border border-border p-5">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold tracking-tight uppercase">
              <MessageSquare className="h-5 w-5" />
              Need Support?
            </h2>
            <p className="mb-6 text-sm opacity-90">
              Our 24/7 technical support is here to help you get exactly what
              you need.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-tighter uppercase opacity-70">
                  Direct Email
                </span>
                <a
                  href="mailto:lisafreelance007@gmail.com"
                  className="flex items-center gap-2 font-medium transition-opacity hover:opacity-70"
                >
                  <Mail className="h-4 w-4" />
                  lisafreelance007@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-tighter uppercase opacity-70">
                  Communication
                </span>
                <p className="font-medium italic">
                  Viber • Telegram • Line App
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Hub Navigation Grid - Matching Service Terms */}
        <div className="mt-20 border-t border-border pt-12">
          <p className="mb-6 text-center text-[10px] font-black tracking-[0.3em] text-muted-foreground/50 uppercase">
            Legal Documentation Hub
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              to="/privacy-policy"
              className="group flex items-center justify-between rounded-xl border border-border p-5 transition-all hover:bg-muted"
            >
              <span className="flex items-center gap-2 text-[10px] font-black tracking-widest text-primary uppercase">
                <Shield className="h-3 w-3" /> Privacy
              </span>
              <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </Link>
            <Link
              to="/service-terms"
              className="group flex items-center justify-between rounded-xl border border-border p-5 transition-all hover:bg-muted"
            >
              <span className="flex items-center gap-2 text-[10px] font-black tracking-widest text-primary uppercase">
                <FileText className="h-3 w-3" /> Service Terms
              </span>
              <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </Link>
            <Link
              to="/faq"
              className="group flex items-center justify-between rounded-xl border border-border p-5 transition-all hover:bg-muted"
            >
              <span className="flex items-center gap-2 text-[10px] font-black tracking-widest text-primary uppercase">
                <HelpCircle className="h-3 w-3" /> Help Center
              </span>
              <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Footer Navigation */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border pt-10 md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-[10px] font-black tracking-[0.2em] text-primary/40 uppercase">
              {APP_NAME} © 2026 | Philippines
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] font-bold text-muted-foreground/60 uppercase md:justify-start">
              <span>Zalven (CEO)</span>
              <span>Rojan & Jerbee (CTO)</span>
            </div>
          </div>

          <button
            onClick={() => window.history.back()}
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-bold tracking-widest text-primary-foreground uppercase transition-all hover:bg-primary/90 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
          >
            <ArrowLeft className="h-3 w-3" />
            Return
          </button>
        </footer>
      </div>
    </div>
  )
}
