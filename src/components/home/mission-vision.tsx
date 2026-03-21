import { Workflow, Eye } from "lucide-react"

export function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20 md:px-8 md:py-32"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-24">
        {/* Left Content */}
        <div className="space-y-10 md:space-y-16 lg:col-span-7">
          {/* Header */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-accent md:w-12" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase md:text-xs">
                Our Core Purpose
              </span>
            </div>
            <h2 className="font-headline text-4xl leading-[1.1] font-extrabold tracking-tighter text-secondary md:text-6xl lg:text-7xl">
              Driven by{" "}
              <span className="text-on-surface-variant">Precision</span>, Guided
              by <span className="font-light italic">Values.</span>
            </h2>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10">
            {/* Mission */}
            <div className="group">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-4xl font-black text-accent/20 transition-colors group-hover:text-accent/40">
                  01
                </span>
                <div className="border-outline-variant/20 flex h-10 w-10 items-center justify-center rounded-full border">
                  <Workflow className="h-5 w-5 text-accent" />
                </div>
              </div>
              <h4 className="mb-3 text-[10px] font-bold tracking-widest text-secondary uppercase md:mb-4 md:text-xs">
                The Mission
              </h4>
              <p className="text-on-surface-variant body text-sm leading-relaxed font-light">
                To empower over 100,000+ local enterprises with high-fidelity
                systems and bespoke creative narratives meticulously stitched
                for their unique trajectory.
              </p>
            </div>

            {/* Vision */}
            <div className="group">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-4xl font-black text-accent/20 transition-colors group-hover:text-accent/40">
                  02
                </span>
                <div className="border-outline-variant/20 flex h-10 w-10 items-center justify-center rounded-full border">
                  <Eye className="h-5 w-5 text-accent" />
                </div>
              </div>
              <h4 className="mb-3 text-[10px] font-bold tracking-widest text-secondary uppercase md:mb-4 md:text-xs">
                The Vision
              </h4>
              <p className="text-on-surface-variant body text-sm leading-relaxed font-light">
                To be the global benchmark for systems-driven partnerships,
                where technical excellence and artistic vision converge to
                define the future of digital presence.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="group relative lg:col-span-5">
          <div className="from-primary-container/20 absolute -inset-4 rounded-[2rem] bg-linear-to-tr to-accent/5 opacity-60 blur-2xl transition-opacity group-hover:opacity-100" />
          <div className="border-outline-variant/10 relative aspect-4/5 overflow-hidden rounded-[1.5rem] border shadow-2xl">
            <img
              alt="Precision Architecture"
              className="h-full w-full object-cover brightness-50 grayscale transition-transform duration-700 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80" />

            {/* Impact Card */}
            <div className="glass-header absolute right-6 bottom-6 left-6 rounded-2xl border border-accent/20 p-6 md:right-8 md:bottom-8 md:left-8 md:p-8">
              <div className="flex flex-col gap-1">
                <p className="mb-1 text-[8px] font-black tracking-[0.3em] text-accent uppercase md:text-[10px]">
                  Impact Record
                </p>
                <p className="headline text-2xl font-black text-secondary md:text-3xl">
                  100,000+
                </p>
                <p className="text-on-surface-variant/80 text-[10px] font-medium md:text-xs">
                  Lives Transformed Through Design
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Corner */}
          <svg
            className="absolute -top-4 -right-4 h-16 w-16 text-accent/30 md:-top-6 md:-right-6 md:h-24 md:w-24"
            viewBox="0 0 100 100"
          >
            <path
              d="M0,0 L100,0 L100,100"
              fill="none"
              stroke="currentColor"
              strokeDasharray="6 4"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
