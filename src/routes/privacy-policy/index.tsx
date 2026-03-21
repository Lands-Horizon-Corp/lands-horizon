import { APP_NAME } from "@/constants"
import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowLeft, Shield, Cookie, FileText, HelpCircle } from "lucide-react"

export const Route = createFileRoute("/privacy-policy/")({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 text-foreground md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <header className="mb-12 border-b border-border pb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-[10px] font-black tracking-widest text-secondary uppercase">
            <Shield className="h-3 w-3" />
            {APP_NAME} Data Protection
          </div>
          <h1 className="mb-4 text-3xl font-black tracking-tight uppercase md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last Updated: March 21, 2026
          </p>
        </header>

        <section className="space-y-12 leading-relaxed">
          {/* 1. Introduction */}
          <div>
            <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
              01. Our Privacy Mission
            </h2>
            <p className="text-muted-foreground">
              At <strong>{APP_NAME}</strong>, our mission is to provide local
              clients with exactly what they need through thoughtfully built
              systems. We ensure that your data, and the data of your 100,000+
              users, remains secure, private, and under your control.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div>
            <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
              02. Data Collection & Systems
            </h2>
            <p className="mb-4 text-muted-foreground">
              When you utilize our ERP, CRM, or POS solutions, we collect
              information necessary to drive your business success:
            </p>
            <ul className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
              {[
                {
                  label: "Business Data",
                  desc: "Info required for BIR compliance and DTI permits.",
                },
                {
                  label: "System Logs",
                  desc: "Technical data to ensure 24/7 after-sales support.",
                },
                {
                  label: "Media Assets",
                  desc: "Content managed via Multimedia Production services.",
                },
                {
                  label: "Communication",
                  desc: "Details provided via Viber, Telegram, or Line apps.",
                },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col gap-1 rounded-lg border border-border bg-muted/40 p-4"
                >
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                    {item.label}
                  </span>
                  <span className="text-muted-foreground">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Data Usage */}
          <div>
            <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
              03. How We Use Your Information
            </h2>
            <div className="space-y-4 border-l-2 border-border pl-6 text-sm text-muted-foreground">
              <p>
                <strong>Service Fulfillment:</strong> Managing your 1-year or
                monthly contracts and system access.
              </p>
              <p>
                <strong>Technical Support:</strong> Allowing our CTO team (Rojan
                & Jerbee) to resolve system errors in real-time.
              </p>
              <p>
                <strong>Strategy & Planning:</strong> Using analytics to improve
                your SEO and Digital Marketing performance.
              </p>
            </div>
          </div>

          {/* 4. Data Security */}
          <div className="rounded-2xl border border-border p-5">
            <h2 className="mb-4 text-xl font-bold tracking-tight uppercase">
              04. Security Protocols
            </h2>
            <p className="text-sm opacity-90">
              We employ high-end encryption and secure cloud-native architecture
              to protect against unauthorized access. We do not sell your data
              to third-party advertisers.
            </p>
          </div>

          {/* 5. Contact */}
          <div>
            <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
              05. Exercise Your Rights
            </h2>
            <p className="mb-6 text-muted-foreground">
              For any privacy-related concerns, please reach out via:
            </p>
            <div className="flex flex-col gap-2 text-sm font-black tracking-tight text-foreground uppercase">
              <span>EMAIL: lisafreelance007@gmail.com</span>
              <span className="text-secondary italic">
                SOCIAL: @lisatechsupp
              </span>
            </div>
          </div>
        </section>

        {/* Legal Hub Navigation */}
        <div className="mt-20 border-t border-border pt-12">
          <p className="mb-6 text-center text-[10px] font-black tracking-[0.3em] text-muted-foreground/50 uppercase">
            Legal Documentation Hub
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
              to="/cookie-policy"
              className="group flex items-center justify-between rounded-xl border border-border p-5 transition-all hover:bg-muted"
            >
              <span className="flex items-center gap-2 text-[10px] font-black tracking-widest text-primary uppercase">
                <Cookie className="h-3 w-3" /> Cookies
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
          <p className="text-center text-[10px] font-black tracking-[0.3em] text-muted-foreground/40 uppercase md:text-left">
            {APP_NAME} © 2026 | Philippines
          </p>
          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 text-xs font-black tracking-widest text-secondary uppercase transition-all hover:gap-4"
          >
            <ArrowLeft className="h-3 w-3" /> Back to Dashboard
          </button>
        </footer>
      </div>
    </div>
  )
}
