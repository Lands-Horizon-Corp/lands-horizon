import { APP_NAME } from "@/constants"
import { createFileRoute, Link } from "@tanstack/react-router"
import { Check, ArrowLeft, Shield, Cookie, HelpCircle } from "lucide-react"

export const Route = createFileRoute("/service-terms/")({
  component: ServiceTerms,
})

function ServiceTerms() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 text-foreground md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <header className="mb-12 border-b border-border pb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black tracking-widest text-primary uppercase">
            {APP_NAME} Service Agreement
          </div>
          <h1 className="mb-4 text-3xl leading-tight font-black tracking-tight uppercase md:text-5xl">
            Service Terms & <br />
            Conditions
          </h1>
          <p className="text-sm text-muted-foreground">
            Official Version | Effective: May 1, 2026
          </p>
        </header>

        <section className="space-y-12 leading-relaxed">
          {/* 1. Systems & Solutions Scope */}
          <div>
            <h2 className="mb-6 flex items-center gap-3 text-xl font-bold tracking-tight text-primary">
              <span className="h-px w-8 bg-primary/30"></span>
              01. Scope of Digital Solutions
            </h2>
            <p className="mb-6 text-muted-foreground">
              {APP_NAME} provides thoughtfully built systems designed to
              maximize reach and multiply impact. Our service ecosystem
              includes:
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  title: "Banking & Cooperatives",
                  desc: "Core banking modules, member portals, and specialized ledger systems.",
                },
                {
                  title: "Enterprise ERP & POS",
                  desc: "Integrated inventory, accounting, and real-time sales tracking.",
                },
                {
                  title: "Multimedia Production",
                  desc: "Professional photography, videography, and art direction.",
                },
                {
                  title: "Digital Management",
                  desc: "Full-scale social media management and SEO strategies.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-lg border border-border bg-muted/30 p-5 transition-colors hover:bg-muted/50"
                >
                  <h3 className="mb-1 text-xs font-black tracking-widest text-secondary uppercase">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Contractual Commitments */}
          <div>
            <h2 className="mb-4 flex items-center gap-3 text-xl font-bold tracking-tight text-primary">
              <span className="h-px w-8 bg-primary/30"></span>
              02. Engagement & Contracts
            </h2>
            <p className="text-muted-foreground">
              We offer both{" "}
              <strong>Annual and Monthly service agreements</strong>. All system
              deployments include strategy, planning, and scheduling to ensure
              an "Exact-Fit" solution. Contracts are legally binding and include
              clauses for confidentiality and system maintenance.
            </p>
          </div>

          {/* 3. Technical Support & Training */}
          <div className="rounded-2xl border border-border p-8">
            <h2 className="mb-4 text-xl font-bold tracking-tight uppercase">
              03. Support & Training
            </h2>
            <p className="mb-6 text-sm opacity-90">
              As a systems-driven partner, we prioritize your operational
              uptime:
            </p>
            <ul className="space-y-4">
              {[
                {
                  label: "24/7 Technical Support",
                  detail:
                    "Round-the-clock assistance for all critical systems.",
                },
                {
                  label: "Staff Onboarding",
                  detail:
                    "Hands-on training for ERP, POS, and Banking modules.",
                },
                {
                  label: "Consultancy",
                  detail:
                    "Regular strategy reviews to align systems with growth.",
                },
              ].map((item) => (
                <li key={item.label} className="g flex text-sm">
                  <Check className="h-4 w-4 shrink-0 text-secondary-foreground" />
                  <div>
                    <strong className="block leading-none">{item.label}</strong>
                    <span className="text-[11px] tracking-tighter uppercase opacity-70">
                      {item.detail}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Compliance & Payments */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-lg font-bold tracking-tight text-primary uppercase">
                04. Compliance
              </h2>
              <p className="text-sm text-muted-foreground">
                We assist with BIR Accreditation and local permit requirements
                (DTI, Barangay). We ensure your digital transition is compliant
                with Philippine laws.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-bold tracking-tight text-primary uppercase">
                05. Payments
              </h2>
              <div className="flex flex-wrap gap-2">
                {["GCash", "Maya", "Wise", "Bank Transfer", "CIMB"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border bg-muted/50 px-2 py-1 text-[10px] font-bold text-muted-foreground uppercase"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
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

        {/* Footer */}
        <footer className="mt-16 text-center md:text-left">
          <div className="flex flex-col items-center justify-between gap-8 border-t border-border pt-10 md:flex-row">
            <div className="space-y-2">
              <p className="text-[10px] font-black tracking-[0.2em] text-primary/40 uppercase">
                Executive Leadership
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-bold text-muted-foreground uppercase">
                <span>Zalven (CEO)</span>
                <span>Rojan & Jerbee (CTO)</span>
                <span>Nelie (COO)</span>
              </div>
            </div>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-secondary uppercase transition-all hover:gap-4"
            >
              <ArrowLeft className="h-3 w-3" /> Back
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
