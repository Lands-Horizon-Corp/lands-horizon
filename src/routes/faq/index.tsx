import { createFileRoute, Link } from "@tanstack/react-router"
import { useState } from "react"
import {
  ArrowLeft,
  Shield,
  FileText,
  Cookie,
  CheckCircle2,
  Plus,
  CreditCard,
} from "lucide-react"

export const Route = createFileRoute("/faq/")({
  component: FAQPage,
})

function FAQPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 text-foreground md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-16 border-b border-border pb-10 text-center md:text-left">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-[10px] font-black tracking-[0.3em] text-primary uppercase">
            Help Center
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-primary uppercase md:text-6xl">
            Frequently Asked <br className="hidden md:block" /> Questions
          </h1>
          <p className="max-w-2xl text-lg font-medium text-muted-foreground">
            Everything you need to know about Project Lisa's systems, creative
            services, and 24/7 technical support.
          </p>
        </header>

        <div className="space-y-16">
          {/* Section 1: Systems & Software */}
          <section>
            <h2 className="mb-8 flex items-center gap-4 text-xs font-black tracking-[0.4em] text-secondary uppercase">
              <span className="h-px w-8 bg-secondary"></span>
              Core Systems & Software
            </h2>
            <div className="grid gap-4">
              <FAQItem
                question="What specific systems do you offer?"
                answer="We provide a comprehensive suite of enterprise-grade software including Core Banking Systems, Cooperative Management Platforms, and a robust ERP (Enterprise Resource Planning) suite that integrates POS, CRM, and full-scale Accounting modules."
              />
              <FAQItem
                question="Are your systems BIR-ready?"
                answer="Yes. Our systems are built for the Philippine market, supporting BIR accreditation and compliance requirements for POS and accounting records to ensure your business remains legally protected."
              />
            </div>
          </section>

          {/* New Section: Payments & Banking Support */}
          <section>
            <h2 className="mb-8 flex items-center gap-4 text-xs font-black tracking-[0.4em] text-secondary uppercase">
              <span className="h-px w-8 bg-secondary"></span>
              Payments & Banking
            </h2>
            <div className="grid gap-6">
              <FAQItem
                question="Which payment channels do you support?"
                answer="We accept payments via major digital wallets and banks in the Philippines, including GCash, Maya, Wise, and direct Bank Transfers. For corporate accounts, we also accept Cheque payments."
              />

              {/* Payment Partners Visual Grid */}
              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <h3 className="mb-6 flex items-center gap-2 text-sm font-bold tracking-widest text-primary uppercase">
                  <CreditCard className="h-4 w-4" />
                  Authorized Channels
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    "GCash",
                    "Maya",
                    "Wise",
                    "Bank Transfer",
                    "CIMB",
                    "GoTyme",
                    "Cheque",
                    "BPI/BDO",
                  ].map((bank) => (
                    <div
                      key={bank}
                      className="flex items-center gap-2 rounded-lg border border-border bg-background p-3"
                    >
                      <CheckCircle2 className="h-3 w-3 text-secondary" />
                      <span className="text-[10px] font-bold tracking-tighter uppercase">
                        {bank}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <FAQItem
                question="Do you support Cooperative banking?"
                answer="Yes. Our eCOOP SUITE is specifically designed for local cooperatives, providing tools for member portals, loan management, and automated general ledger tracking that syncs with your chosen bank partners."
              />
            </div>
          </section>

          {/* Section 3: Multimedia & Creative */}
          <section>
            <h2 className="mb-8 flex items-center gap-4 text-xs font-black tracking-[0.4em] text-secondary uppercase">
              <span className="h-px w-8 bg-secondary"></span>
              Multimedia & Support
            </h2>
            <div className="grid gap-4">
              <FAQItem
                question="What multimedia services do you provide?"
                answer="We offer professional Photography, high-end Videography, and full Social Media Management. Our team handles everything from visual storytelling to art direction to elevate your brand."
              />
              <FAQItem
                question="Is technical support really 24/7?"
                answer="Yes. We understand that POS and Banking systems are critical. Our after-sales technical support is available 24/7 via Viber, Telegram, and Line App to ensure your operations never stop."
              />
            </div>
          </section>
        </div>

        {/* Legal Hub Navigation Grid - Consistency across all legal pages */}
        <div className="mt-24 border-t border-border pt-12">
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
              to="/cookie-policy"
              className="group flex items-center justify-between rounded-xl border border-border p-5 transition-all hover:bg-muted"
            >
              <span className="flex items-center gap-2 text-[10px] font-black tracking-widest text-primary uppercase">
                <Cookie className="h-3 w-3" /> Cookie Policy
              </span>
              <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Call to Action Footer */}
        <footer className="mt-16 rounded-3xl p-8 text-center md:p-12">
          <h3 className="mb-4 text-2xl font-black tracking-tight uppercase md:text-3xl">
            Still have questions?
          </h3>
          <p className="mb-8 text-sm italic opacity-90">
            Connect with us on Viber, Telegram, or Line App for immediate
            assistance from our Tech Lead.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:lisafreelance007@gmail.com"
              className="rounded-full bg-background px-8 py-3 text-[10px] font-black tracking-widest text-foreground uppercase transition-transform hover:scale-105"
            >
              Email Support
            </a>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 rounded-full border border-secondary-foreground/30 px-8 py-3 text-[10px] font-black tracking-widest uppercase transition-colors hover:bg-secondary-foreground/10"
            >
              <ArrowLeft className="h-3 w-3" /> Back
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
        isOpen
          ? "border-primary bg-primary/5 ring-1 ring-primary/20"
          : "border-border bg-muted/10 hover:border-primary/50"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between gap-4">
        <h3
          className={`text-sm font-bold tracking-tight md:text-base ${
            isOpen ? "text-primary" : "text-foreground"
          }`}
        >
          {question}
        </h3>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-45 text-primary" : "text-muted-foreground"
          }`}
        >
          <Plus className="h-5 w-5" />
        </span>
      </div>
      {isOpen && (
        <div className="animate-in duration-300 fade-in slide-in-from-top-2">
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}
