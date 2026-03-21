import { Wallet, Video, Palette, Code } from "lucide-react"

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-surface-container-lowest/30 relative scroll-mt-20 overflow-hidden py-20 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-20 lg:flex-row lg:items-end">
          <div className="max-w-2xl space-y-4 md:space-y-6">
            <h2 className="font-headline text-3xl font-extrabold tracking-tighter text-secondary md:text-6xl">
              The Services Suite
            </h2>
            <p className="text-on-surface-variant/80 body text-base leading-relaxed font-light md:text-lg">
              Every solution is hand-stitched with a focus on high-speed
              architecture and cinematic brand representation.
            </p>
          </div>
          <div className="flex items-center gap-4 border-b border-accent/30 pb-2 text-[10px] font-bold tracking-[0.4em] text-accent uppercase md:text-xs">
            01 // Ecosystem Offerings
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Large Card 1: System Provider */}
          <div className="group bg-surface-container border-outline-variant/10 card-reveal relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:border-accent/40 md:col-span-7 md:p-10">
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-8 flex items-start justify-between md:mb-12">
                <div className="bg-primary-container flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 md:h-16 md:w-16">
                  <Wallet className="h-8 w-8 text-accent" />
                </div>
                <span className="text-on-surface-variant/5 text-4xl font-black md:text-6xl">
                  01
                </span>
              </div>
              <h3 className="headline mb-4 text-2xl font-bold text-secondary md:text-3xl">
                System Provider
              </h3>
              <p className="text-on-surface-variant body mb-8 max-w-lg text-sm leading-relaxed md:text-base">
                Institutional-grade financial architecture meets fluid UI. We
                build integrated currency handling systems with circuit-trace
                reliability for high-volume transactions.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 md:gap-3">
                <span className="bg-surface-variant border-outline-variant/20 rounded-full border px-3 py-1.5 text-[8px] font-bold tracking-widest text-secondary uppercase md:px-4 md:text-[10px]">
                  FinTech
                </span>
                <span className="bg-surface-variant border-outline-variant/20 rounded-full border px-3 py-1.5 text-[8px] font-bold tracking-widest text-secondary uppercase md:px-4 md:text-[10px]">
                  Secure Infra
                </span>
              </div>
            </div>
          </div>

          {/* Large Card 2: Multimedia */}
          <div className="group bg-surface-container border-outline-variant/10 card-reveal relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:border-accent/40 md:col-span-5 md:p-10">
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-8 flex items-start justify-between md:mb-12">
                <div className="bg-surface-container-highest border-outline-variant/20 flex h-14 w-14 items-center justify-center rounded-xl border md:h-16 md:w-16">
                  <Video className="h-8 w-8 text-secondary" />
                </div>
                <span className="text-on-surface-variant/5 text-4xl font-black md:text-6xl">
                  02
                </span>
              </div>
              <h3 className="headline mb-4 text-2xl font-bold text-secondary md:text-3xl">
                Multimedia
              </h3>
              <p className="text-on-surface-variant body mb-8 text-sm leading-relaxed md:text-base">
                Cinematic storytelling engineered for conversion. High-speed
                creative execution from conceptual pre-vis to premium
                post-production.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 md:gap-3">
                <span className="bg-surface-variant border-outline-variant/20 rounded-full border px-3 py-1.5 text-[8px] font-bold tracking-widest text-secondary uppercase md:px-4 md:text-[10px]">
                  Cinematics
                </span>
                <span className="bg-surface-variant border-outline-variant/20 rounded-full border px-3 py-1.5 text-[8px] font-bold tracking-widest text-secondary uppercase md:px-4 md:text-[10px]">
                  Production
                </span>
              </div>
            </div>
          </div>

          {/* Small Card 1: Design */}
          <div className="group bg-surface-container border-outline-variant/10 card-reveal relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:border-accent/40 md:col-span-4 md:p-10">
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-8 flex items-start justify-between md:mb-12">
                <div className="bg-surface-container-highest border-outline-variant/20 flex h-14 w-14 items-center justify-center rounded-xl border md:h-16 md:w-16">
                  <Palette className="h-8 w-8 text-accent" />
                </div>
                <span className="text-on-surface-variant/5 text-4xl font-black md:text-6xl">
                  03
                </span>
              </div>
              <h3 className="headline mb-4 text-2xl font-bold text-secondary md:text-3xl">
                Design Excellence
              </h3>
              <p className="text-on-surface-variant body text-sm leading-relaxed md:text-base">
                Bespoke brand identities and user experiences crafted for
                discerning audiences who demand precision.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 md:gap-3">
                <span className="bg-surface-variant border-outline-variant/20 rounded-full border px-3 py-1.5 text-[8px] font-bold tracking-widest text-secondary uppercase md:px-4 md:text-[10px]">
                  UX/UI
                </span>
              </div>
            </div>
          </div>

          {/* Small Card 2: Development */}
          <div className="group bg-surface-container border-outline-variant/10 card-reveal relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:border-accent/40 md:col-span-8 md:p-10">
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-8 flex items-start justify-between md:mb-12">
                <div className="bg-surface-container-highest border-outline-variant/20 flex h-14 w-14 items-center justify-center rounded-xl border md:h-16 md:w-16">
                  <Code className="h-8 w-8 text-secondary" />
                </div>
                <span className="text-on-surface-variant/5 text-4xl font-black md:text-6xl">
                  04
                </span>
              </div>
              <h3 className="headline mb-4 text-2xl font-bold text-secondary md:text-3xl">
                Engineering & Infrastructure
              </h3>
              <p className="text-on-surface-variant body max-w-2xl text-sm leading-relaxed md:text-base">
                Scalable, secure, and performant systems built on industry best
                practices. From real-time data pipelines to distributed
                architectures.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 md:gap-3">
                <span className="bg-surface-variant border-outline-variant/20 rounded-full border px-3 py-1.5 text-[8px] font-bold tracking-widest text-secondary uppercase md:px-4 md:text-[10px]">
                  Backend
                </span>
                <span className="bg-surface-variant border-outline-variant/20 rounded-full border px-3 py-1.5 text-[8px] font-bold tracking-widest text-secondary uppercase md:px-4 md:text-[10px]">
                  DevOps
                </span>
                <span className="bg-surface-variant border-outline-variant/20 rounded-full border px-3 py-1.5 text-[8px] font-bold tracking-widest text-secondary uppercase md:px-4 md:text-[10px]">
                  Cloud Native
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
