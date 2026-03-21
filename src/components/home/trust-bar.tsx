export function TrustBar() {
  return (
    <section className="relative overflow-hidden px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="border-outline-variant/10 grid grid-cols-2 items-center justify-between gap-y-10 border-y py-10 md:grid-cols-4 md:gap-8">
          {/* Global Users */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="headline text-2xl font-black text-secondary md:text-3xl">
              100K<span className="text-accent">+</span>
            </span>
            <span className="text-on-surface-variant/60 text-[9px] font-bold tracking-[0.2em] uppercase md:text-[10px]">
              Global Users Served
            </span>
          </div>

          <div className="bg-outline-variant/20 hidden h-12 w-px justify-self-center md:block" />

          {/* Strategic Partners */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="headline text-2xl font-black text-secondary md:text-3xl">
              100<span className="text-accent">+</span>
            </span>
            <span className="text-on-surface-variant/60 text-[9px] font-bold tracking-[0.2em] uppercase md:text-[10px]">
              Strategic Partners
            </span>
          </div>

          <div className="bg-outline-variant/20 hidden h-12 w-px justify-self-center md:block" />

          {/* System Reliability */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="headline text-2xl font-black text-secondary md:text-3xl">
              99.9<span className="text-accent">%</span>
            </span>
            <span className="text-on-surface-variant/60 text-[9px] font-bold tracking-[0.2em] uppercase md:text-[10px]">
              System Reliability
            </span>
          </div>

          <div className="bg-outline-variant/20 hidden h-12 w-px justify-self-center md:block" />

          {/* Concierge */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="headline text-2xl font-black text-secondary md:text-3xl">
              24<span className="text-accent">/</span>7
            </span>
            <span className="text-on-surface-variant/60 text-[9px] font-bold tracking-[0.2em] uppercase md:text-[10px]">
              Priority Concierge
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
