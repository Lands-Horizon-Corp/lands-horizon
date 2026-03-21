import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 md:px-6">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,20,82,0.15)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 h-64 w-full bg-linear-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl space-y-6 text-center md:space-y-10">
        {/* Badge */}
        <div className="bg-primary-container/30 mb-4 inline-flex items-center gap-3 rounded-full border border-primary/20 px-4 py-1.5 text-[8px] font-black tracking-[0.3em] text-primary uppercase md:text-[10px]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          The Multimedia Atelier
        </div>

        {/* Heading */}
        <h1 className="headline text-4xl leading-[1.1] font-extrabold tracking-tighter text-secondary sm:text-6xl md:text-[90px] md:leading-[0.9] lg:text-[110px]">
          Maximizing <span className="font-light italic">Reach.</span>
          <br />
          <span className="text-gradient-gold">Multiplying Impact.</span>
        </h1>

        {/* Decorative line */}
        <div className="relative mx-auto h-4 w-full max-w-50 overflow-hidden md:h-6 md:max-w-md">
          <svg
            className="text-outline-variant/40 h-full w-full"
            viewBox="0 0 400 20"
          >
            <path
              className="golden-stitch"
              d="M0,10 Q100,0 200,10 T400,10"
              fill="none"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Subtitle */}
        <p className="text-on-surface-variant body mx-auto max-w-3xl px-4 text-base leading-relaxed font-light tracking-wide md:text-2xl">
          Bridging the gap between corporate structural integrity and bespoke
          digital storytelling for elite finance and tech sectors.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 px-4 pt-6 sm:flex-row md:gap-6 md:pt-10">
          <a
            href="#services"
            className="group relative overflow-hidden rounded-xl bg-accent px-8 py-4 font-bold tracking-tight text-accent-foreground transition-all hover:scale-105 active:scale-95 md:px-10 md:py-5"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              View Ecosystem
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#mission-vision"
            className="bg-surface-container-high border-outline-variant/20 text-on-surface hover:bg-surface-variant rounded-xl border px-8 py-4 text-center font-bold transition-colors md:px-10 md:py-5"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  )
}
