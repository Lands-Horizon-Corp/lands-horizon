"use client"

import { useState } from "react"
import {
  Menu,
  ChevronRight,
  Mail,
  Globe,
  Send,
  ArrowUpRight,
  BarChart3,
  Zap,
  RefreshCw,
  Search,
  TrendingUp,
  Code,
  Star,
  CameraIcon,
} from "lucide-react"
import { APP_NAME, LOGO } from "@/constants"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((data) => !data)
  }
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="glass-header border-outline-variant/10 fixed top-0 z-100 w-full border-b">
        <div className="relative z-20 mx-auto flex max-w-360 items-center justify-between px-4 py-4 md:px-12 md:py-5">
          <div className="group flex cursor-pointer items-center gap-2">
            <div className="text-on-primary flex h-8 w-8 transform items-center justify-center rounded bg-primary font-black transition-transform group-hover:rotate-12">
              <img src={LOGO} />
            </div>
            <span className="font-headline text-lg font-extrabold tracking-tighter text-secondary md:text-xl">
              {APP_NAME}
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex lg:gap-12">
            <a
              className="text-on-surface-variant/80 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-primary"
              href="#mission-vision"
            >
              Mission
            </a>
            <a
              className="text-on-surface-variant/80 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-primary"
              href="#why-us"
            >
              Why Us
            </a>
            <a
              className="text-on-surface-variant/80 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-primary"
              href="#services"
            >
              Services
            </a>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <a
              className="bg-surface-container-highest border-outline-variant/30 hidden rounded-lg border px-4 py-2.5 text-[10px] font-black tracking-widest text-secondary uppercase transition-all duration-300 hover:border-primary/60 sm:inline-flex md:px-6"
              href="#contact"
            >
              Work With Us
            </a>
            <button
              className="hover:bg-surface-variant rounded-full p-2 text-secondary transition-colors md:hidden"
              id="menu-toggle"
              onClick={toggleMenu}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 h-screen md:hidden ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={toggleMenu}
          />

          {/* Menu Panel */}
          <div
            className={`border-outline-variant/10 absolute top-0 right-0 flex h-full w-[85%] max-w-sm transform flex-col border-l bg-background/95 px-6 pt-24 pb-10 backdrop-blur-xl transition-all duration-500 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Links */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Mission", href: "#mission-vision" },
                { label: "Why Us", href: "#why-us" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={toggleMenu}
                  className="group border-outline-variant/10 bg-surface-container/60 hover:bg-surface-container flex items-center justify-between rounded-xl border px-5 py-4 text-base font-bold text-secondary transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 active:scale-[0.98]"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-8">
              <a
                href="#contact"
                onClick={toggleMenu}
                className="text-on-primary block w-full rounded-xl bg-primary py-4 text-center font-black tracking-widest uppercase shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 md:px-6">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/anime.jpg')] bg-cover bg-center opacity-[0.08] mix-blend-luminosity"></div>
            <div className="absolute inset-2 bg-[radial-gradient(circle_at_center,rgba(46,20,82,0.15)_0%,transparent_70%)]"></div>

            {/* Animated Grid Background */}
            <div className="absolute inset-0">
              <svg
                className="absolute inset-0 h-full w-full opacity-[0.15]"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 60 0 L 0 0 0 60"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#grid)"
                  filter="url(#glow)"
                />
              </svg>
            </div>

            <div className="absolute bottom-0 left-0 h-64 w-full bg-linear-to-t from-background to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-6xl space-y-6 text-center md:space-y-10">
            <div className="bg-primary-container/30 mb-4 inline-flex items-center gap-3 rounded-full border border-primary/20 px-4 py-1.5 text-[8px] font-black tracking-[0.3em] text-primary uppercase md:text-[10px]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary"></span>
              Built with Trust
            </div>
            <h1 className="font-headline text-4xl leading-[1.1] font-extrabold tracking-tighter text-secondary sm:text-6xl md:text-[90px] md:leading-[0.9] lg:text-[110px]">
              Maximizing <span className="font-light italic">Reach.</span>
              <br />
              <span className="text-gradient-gold">Multiplying Impact.</span>
            </h1>
            <div className="relative mx-auto h-4 w-full max-w-50 overflow-hidden md:h-6 md:max-w-md">
              <svg
                className="h-full w-full text-primary/40"
                viewBox="0 0 400 20"
              >
                <path
                  className="golden-stitch"
                  d="M0,10 Q100,0 200,10 T400,10"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="4 2"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>
            <p className="text-on-surface-variant mx-auto max-w-3xl px-4 text-base leading-relaxed font-light tracking-wide md:text-2xl">
              Bridging the gap between corporate structural integrity and
              bespoke digital storytelling for elite finance and tech sectors.
            </p>
            <div className="flex flex-col justify-center gap-4 px-4 pt-6 sm:flex-row md:gap-6 md:pt-10">
              <a
                className="group text-on-primary relative overflow-hidden rounded-xl bg-primary px-8 py-4 font-bold tracking-tight transition-all hover:scale-105 active:scale-95 md:px-10 md:py-5"
                href="#services"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  View Ecosystem
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </a>
              <a
                className="bg-surface-container-high border-outline-variant/20 text-on-surface hover:bg-surface-variant rounded-xl border px-8 py-4 text-center font-bold transition-colors md:px-10 md:py-5"
                href="#mission-vision"
              >
                Our Story
              </a>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="relative overflow-hidden px-4 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="border-outline-variant/10 divide-outline-variant/10 flex flex-col items-center justify-between gap-8 divide-y py-10 md:flex-row md:gap-0 md:divide-x md:divide-y-0">
              <div className="flex w-full flex-col items-center py-4 text-center md:w-auto md:flex-1 md:px-6 md:py-0">
                <span className="font-headline text-2xl font-black text-secondary md:text-3xl">
                  100K<span className="text-primary">+</span>
                </span>
                <span className="text-on-surface-variant/60 mt-2 text-[9px] font-bold tracking-[0.2em] uppercase md:text-[10px]">
                  Global Users Served
                </span>
              </div>
              <div className="flex w-full flex-col items-center py-4 text-center md:w-auto md:flex-1 md:px-6 md:py-0">
                <span className="font-headline text-2xl font-black text-secondary md:text-3xl">
                  100<span className="text-primary">+</span>
                </span>
                <span className="text-on-surface-variant/60 mt-2 text-[9px] font-bold tracking-[0.2em] uppercase md:text-[10px]">
                  Strategic Partners
                </span>
              </div>
              <div className="flex w-full flex-col items-center py-4 text-center md:w-auto md:flex-1 md:px-6 md:py-0">
                <span className="font-headline text-2xl font-black text-secondary md:text-3xl">
                  99.9<span className="text-primary">%</span>
                </span>
                <span className="text-on-surface-variant/60 mt-2 text-[9px] font-bold tracking-[0.2em] uppercase md:text-[10px]">
                  System Reliability
                </span>
              </div>
              <div className="flex w-full flex-col items-center py-4 text-center md:w-auto md:flex-1 md:px-6 md:py-0">
                <span className="font-headline text-2xl font-black text-secondary md:text-3xl">
                  24<span className="text-primary">/</span>7
                </span>
                <span className="text-on-surface-variant/60 mt-2 text-[9px] font-bold tracking-[0.2em] uppercase md:text-[10px]">
                  Priority Concierge
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section
          className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20 md:px-8 md:py-32"
          id="mission-vision"
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-24">
            <div className="space-y-10 md:space-y-16 lg:col-span-7">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-primary md:w-12"></span>
                  <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase md:text-xs">
                    Our Core Purpose
                  </span>
                </div>
                <h2 className="font-headline text-4xl leading-[1.1] font-extrabold tracking-tighter text-secondary md:text-6xl lg:text-7xl">
                  Driven by{" "}
                  <span className="text-on-surface-variant">Precision</span>,
                  Guided by <span className="font-light italic">Values.</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10">
                <div className="group">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-4xl font-black text-primary/20 transition-colors group-hover:text-primary/40">
                      01
                    </span>
                    <div className="border-outline-variant/20 flex h-10 w-10 items-center justify-center rounded-full border">
                      <Zap size={18} className="text-primary" />
                    </div>
                  </div>
                  <h4 className="mb-3 text-[10px] font-bold tracking-widest text-secondary uppercase md:mb-4 md:text-xs">
                    The Mission
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                    To empower over 100,000+ local enterprises with
                    high-fidelity systems and bespoke creative narratives
                    meticulously stitched for their unique trajectory.
                  </p>
                </div>
                <div className="group">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-4xl font-black text-primary/20 transition-colors group-hover:text-primary/40">
                      02
                    </span>
                    <div className="border-outline-variant/20 flex h-10 w-10 items-center justify-center rounded-full border">
                      <TrendingUp size={18} className="text-primary" />
                    </div>
                  </div>
                  <h4 className="mb-3 text-[10px] font-bold tracking-widest text-secondary uppercase md:mb-4 md:text-xs">
                    The Vision
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                    To be the global benchmark for systems-driven partnerships,
                    where technical excellence and artistic vision converge to
                    define the future of digital presence.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative lg:col-span-5">
              <div className="from-primary-container/20 absolute -inset-4 rounded-4xl bg-linear-to-tr to-primary/5 opacity-60 blur-2xl transition-opacity group-hover:opacity-100"></div>
              <div className="border-outline-variant/10 relative aspect-4/5 overflow-hidden rounded-3xl border shadow-2xl md:aspect-4/5">
                <img
                  src="meeting.jpg"
                  className="absolute top-0 left-0 -z-10 h-full mask-[linear-gradient(to_top_right,black,transparent)] object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80"></div>
                <div className="glass-header absolute right-6 bottom-6 left-6 rounded-2xl border border-primary/20 p-6 md:right-8 md:bottom-8 md:left-8 md:p-8">
                  <div className="flex flex-col gap-1">
                    <p className="mb-1 text-[8px] font-black tracking-[0.3em] text-primary uppercase md:text-[10px]">
                      Impact Record
                    </p>
                    <p className="font-headline text-2xl font-black text-secondary md:text-3xl">
                      100,000+
                    </p>
                    <p className="text-on-surface-variant/80 text-[10px] font-medium md:text-xs">
                      Lives Transformed Through Design
                    </p>
                  </div>
                </div>
              </div>
              <svg
                className="absolute -top-4 -right-4 h-16 w-16 text-primary/30 md:-top-6 md:-right-6 md:h-24 md:w-24"
                viewBox="0 0 100 100"
              >
                <path
                  d="M0,0 L100,0 L100,100"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="6 4"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="bg-surface-container-lowest/30 relative scroll-mt-20 overflow-hidden py-20 md:py-32"
          id="services"
        >
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-20 lg:flex-row lg:items-end">
              <div className="max-w-2xl space-y-4 md:space-y-6">
                <h2 className="font-headline text-3xl font-extrabold tracking-tighter text-secondary md:text-6xl">
                  The Services Suite
                </h2>
                <p className="text-on-surface-variant/80 text-base leading-relaxed font-light md:text-lg">
                  Every solution is hand-stitched with a focus on high-speed
                  architecture and cinematic brand representation.
                </p>
              </div>
              <div className="flex items-center gap-4 border-b border-primary/30 pb-2 text-[10px] font-bold tracking-[0.4em] text-primary uppercase md:text-xs">
                01 // Ecosystem Offerings
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              {/* Large Card 1 */}
              <div className="group bg-surface-container border-outline-variant/10 card-reveal relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:border-primary/40 md:col-span-7 md:p-10">
                <img
                  src="computer.jpg"
                  className="absolute top-0 left-0 -z-10 mask-[linear-gradient(to_top_right,black,transparent)] opacity-20"
                />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between md:mb-12">
                    <div className="bg-primary-container flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 md:h-16 md:w-16">
                      <TrendingUp size={28} className="text-primary" />
                    </div>
                    <span className="text-on-surface-variant/5 text-4xl font-black md:text-6xl">
                      01
                    </span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-secondary md:text-3xl">
                    System Provider
                  </h3>

                  <p className="text-on-surface-variant mb-8 max-w-lg text-sm leading-relaxed md:text-base">
                    Institutional-grade financial architecture meets fluid UI.
                    We build integrated currency handling systems with
                    circuit-trace reliability for high-volume transactions.
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

              {/* Large Card 2 */}
              <div className="group bg-surface-container border-outline-variant/10 card-reveal relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:border-primary/40 md:col-span-5 md:p-10">
                <img
                  src="multimedia.jpg"
                  className="absolute top-0 left-0 -z-10 mask-[linear-gradient(to_top_right,black,transparent)] opacity-20"
                />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between md:mb-12">
                    <div className="bg-surface-container-highest border-outline-variant/20 flex h-14 w-14 items-center justify-center rounded-xl border md:h-16 md:w-16">
                      <CameraIcon size={28} className="text-secondary" />
                    </div>
                    <span className="text-on-surface-variant/5 text-4xl font-black md:text-6xl">
                      02
                    </span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-secondary md:text-3xl">
                    Multimedia
                  </h3>
                  <p className="text-on-surface-variant mb-8 text-sm leading-relaxed md:text-base">
                    Cinematic storytelling engineered for conversion. High-speed
                    creative execution from conceptual pre-vis to premium
                    post-production.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 md:gap-3">
                    <span className="bg-surface-variant border-outline-variant/20 rounded-full border px-3 py-1.5 text-[8px] font-bold tracking-widest text-secondary uppercase md:px-4 md:text-[10px]">
                      Cinematics
                    </span>
                    <span className="bg-surface-variant border-outline-variant/20 rounded-full border px-3 py-1.5 text-[8px] font-bold tracking-widest text-secondary uppercase md:px-4 md:text-[10px]">
                      Post-Pro
                    </span>
                  </div>
                </div>
              </div>

              {/* Three Small Cards */}
              <div className="bg-surface-container/50 border-outline-variant/10 group hover:bg-surface-container rounded-2xl border p-6 transition-all duration-300 md:col-span-4 md:p-8 md:hover:-translate-y-2">
                <Search
                  size={32}
                  className="mb-6 block scale-110 text-primary md:scale-125"
                />
                <h4 className="mb-3 text-lg font-bold text-secondary">
                  SEO &amp; SEM Authority
                </h4>
                <p className="text-on-surface-variant/80 text-sm leading-relaxed font-light">
                  Algorithmic precision to ensure your brand remains at the
                  pinnacle of digital visibility.
                </p>
              </div>
              <div className="bg-surface-container/50 border-outline-variant/10 group hover:bg-surface-container rounded-2xl border p-6 transition-all duration-300 md:col-span-4 md:p-8 md:hover:-translate-y-2">
                <Globe
                  size={32}
                  className="mb-6 block scale-110 text-primary md:scale-125"
                />
                <h4 className="mb-3 text-lg font-bold text-secondary">
                  Omnichannel Strategy
                </h4>
                <p className="text-on-surface-variant/80 text-sm leading-relaxed font-light">
                  Cohesive narrative unification across all digital touchpoints
                  and customer journeys.
                </p>
              </div>
              <div className="bg-surface-container/50 border-outline-variant/10 group hover:bg-surface-container rounded-2xl border p-6 transition-all duration-300 md:col-span-4 md:p-8 md:hover:-translate-y-2">
                <Zap
                  size={32}
                  className="mb-6 block scale-110 text-primary md:scale-125"
                />
                <h4 className="mb-3 text-lg font-bold text-secondary">
                  24/7 Concierge Support
                </h4>
                <p className="text-on-surface-variant/80 text-sm leading-relaxed font-light">
                  Elite technical stewardship providing round-the-clock
                  maintenance and proactive optimization.
                </p>
              </div>
            </div>
          </div>
          {/* Animated Background Line */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden opacity-20">
            <svg
              className="h-8 w-full md:h-12"
              preserveAspectRatio="none"
              viewBox="0 0 400 24"
            >
              <path
                className="golden-stitch"
                d="M0,12 L400,12"
                fill="none"
                stroke="#e9c400"
                strokeDasharray="10 5"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          className="bg-surface-container-lowest/20 relative scroll-mt-20 px-6 py-20 md:px-8 md:py-32"
          id="why-us"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 space-y-4 text-center md:mb-24 md:space-y-6">
              <div className="flex items-center justify-center gap-4">
                <span className="bg-outline-variant/30 h-px w-6 md:w-8"></span>
                <span className="text-[8px] font-black tracking-[0.5em] text-primary uppercase md:text-[10px]">
                  The Advantage
                </span>
                <span className="bg-outline-variant/30 h-px w-6 md:w-8"></span>
              </div>
              <h2 className="font-headline text-3xl font-extrabold tracking-tighter text-secondary md:text-6xl">
                Why {APP_NAME}?
              </h2>
            </div>
            <div className="border-outline-variant/10 bg-surface-container-low grid grid-cols-1 gap-0 overflow-hidden rounded-3xl border shadow-xl md:grid-cols-3 md:rounded-[2.5rem]">
              <div className="border-outline-variant/10 hover:bg-primary-container/10 group border-b p-8 transition-colors md:border-r md:border-b-0 md:p-12">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 text-primary transition-transform group-hover:scale-110 md:mb-10">
                  <BarChart3 size={24} />
                </div>
                <h4 className="mb-4 text-lg leading-tight font-extrabold text-secondary md:text-xl">
                  Strategic Market Authority
                </h4>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed font-light">
                  We don't just deploy tools; we build digital reputations. Our
                  data-driven intelligence ensures your brand commands
                  attention.
                </p>
              </div>
              <div className="border-outline-variant/10 hover:bg-primary-container/10 group border-b p-8 transition-colors md:border-r md:border-b-0 md:p-12">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 text-primary transition-transform group-hover:scale-110 md:mb-10">
                  <Code size={24} />
                </div>
                <h4 className="mb-4 text-lg leading-tight font-extrabold text-secondary md:text-xl">
                  Unrivaled Technical Integrity
                </h4>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed font-light">
                  High-speed architecture and robust stability. We engineer for
                  peak performance under extreme operational pressure.
                </p>
              </div>
              <div className="hover:bg-primary-container/10 group p-8 transition-colors md:p-12">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 text-primary transition-transform group-hover:scale-110 md:mb-10">
                  <RefreshCw size={24} />
                </div>
                <h4 className="mb-4 text-lg leading-tight font-extrabold text-secondary md:text-xl">
                  Partnership Lifecycle
                </h4>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed font-light">
                  Beyond the launch, we provide continuous optimization ensuring
                  your technology stack evolves ahead of market demands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className="scroll-mt-20 overflow-hidden py-20 md:py-32"
          id="testimonials"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-16 max-w-2xl space-y-4 md:mb-24 md:space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-primary md:w-12"></span>
                <span className="font-bold tracking-[0.4em] text-primary uppercase md:text-xs">
                  Client Voices
                </span>
              </div>
              <h2 className="font-headline text-3xl font-extrabold tracking-tighter text-secondary md:text-6xl">
                What our awesome customers say
              </h2>
              <p className="text-on-surface-variant/80 text-base leading-relaxed font-light md:text-lg">
                Our team has a successful track record of helping brands scale
                profitably based on high-performing strategies.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {[
                { initials: "MT", name: "Melvin Thomas", age: "34" },
                { initials: "SS", name: "Sreenath.S", age: "26" },
                { initials: "MD", name: "Marvin D'z", age: "46" },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-high border-outline-variant/10 flex flex-col rounded-2xl border p-8 md:p-10"
                >
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-on-surface mb-8 text-base leading-relaxed font-light md:text-lg">
                    "High standard and excellent quality of work. They helped my
                    business grow in digital."
                  </p>
                  <div className="mt-auto flex items-center gap-4">
                    <div className="bg-surface-variant flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-primary md:h-12 md:w-12">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-secondary md:text-sm">
                        {testimonial.name}, {testimonial.age}
                      </h5>
                      <p className="text-on-surface-variant/50 text-[8px] tracking-widest uppercase md:text-[10px]">
                        Verified Client
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 md:px-8 md:py-32"
          id="contact"
        >
          <div className="border-outline-variant/10 bordershadow-2xl relative grid grid-cols-1 overflow-hidden rounded-3xl md:rounded-4xl lg:grid-cols-2">
            <div className="pointer-events-none absolute inset-0"></div>
            <div className="bg-surface-container-low/40 relative z-10 space-y-10 p-8 backdrop-blur-sm md:space-y-12 md:p-12 lg:p-20">
              <div className="space-y-4 md:space-y-6">
                <h2 className="font-headline text-3xl leading-tight font-extrabold tracking-tighter text-secondary md:text-5xl">
                  Start Your
                  <br className="hidden md:block" />
                  Journey.
                </h2>
                <p className="text-on-surface-variant/90 text-base leading-relaxed font-light md:text-lg">
                  Every partnership starts with a single stitch. Let's weave
                  your vision into an extraordinary digital reality.
                </p>
              </div>
              <div className="space-y-6 md:space-y-8">
                <div className="group flex items-center gap-4 md:gap-6">
                  <div className="group-hover:text-on-primary flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary transition-all group-hover:bg-primary md:h-12 md:w-12">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold tracking-widest text-primary uppercase md:text-[10px]">
                      Email Our Atelier
                    </span>
                    <span className="text-sm font-medium break-all text-secondary md:text-base">
                      lisafreelance007@gmail.com
                    </span>
                  </div>
                </div>
                <div className="group flex items-center gap-4 md:gap-6">
                  <div className="group-hover:text-on-primary flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary transition-all group-hover:bg-primary md:h-12 md:w-12">
                    <Globe size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold tracking-widest text-primary uppercase md:text-[10px]">
                      Contact + Philippines
                    </span>
                    <span className="text-sm font-medium text-secondary md:text-base">
                      +63 09266100073
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-outline-variant/10 relative z-10 border-t p-8 md:p-12 lg:border-t-0 lg:border-l lg:p-20">
              <form
                className="space-y-6 md:space-y-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-on-surface-variant/70 text-[8px] font-black tracking-[0.2em] uppercase md:text-[10px]">
                      Legal Name
                    </label>
                    <input
                      className="bg-surface-container-lowest/30 border-outline-variant/20 placeholder:text-on-surface-variant/30 w-full rounded-xl border text-secondary transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 md:px-6 md:py-4"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-on-surface-variant/70 text-[8px] font-black tracking-[0.2em] uppercase md:text-[10px]">
                      Enterprise Email
                    </label>
                    <input
                      className="bg-surface-container-lowest/30 border-outline-variant/20 placeholder:text-on-surface-variant/30 w-full rounded-xl border px-4 py-3 text-secondary transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 md:px-6 md:py-4"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label className="text-on-surface-variant/70 text-[8px] font-black tracking-[0.2em] uppercase md:text-[10px]">
                    Engagement Subject
                  </label>
                  <input
                    className="bg-surface-container-lowest/30 border-outline-variant/20 placeholder:text-on-surface-variant/30 w-full rounded-xl border px-4 py-3 text-secondary transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 md:px-6 md:py-4"
                    placeholder="How can we help?"
                    type="text"
                  />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label className="text-on-surface-variant/70 text-[8px] font-black tracking-[0.2em] uppercase md:text-[10px]">
                    Brief Vision Message
                  </label>
                  <textarea
                    className="bg-surface-container-lowest/30 border-outline-variant/20 placeholder:text-on-surface-variant/30 h-32 w-full resize-none rounded-xl border px-4 py-3 text-secondary transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 md:h-40 md:px-6 md:py-4"
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>
                <button className="text-on-primary luminous-glow flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 md:py-5">
                  <span>Send Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-surface-container-lowest text-on-surface border-outline-variant/10 font-body relative w-full overflow-hidden border-t px-6 pt-20 pb-12 md:px-10 md:pt-32 md:pb-16">
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-16 grid grid-cols-1 gap-12 md:mb-24 md:grid-cols-12 md:gap-16">
              {/* Brand Section */}
              <div className="space-y-6 md:col-span-5 md:space-y-10">
                <div className="flex items-center gap-2">
                  <div className="text-on-primary flex h-10 w-10 items-center justify-center rounded bg-primary font-black">
                    <img src={LOGO} />
                  </div>
                  <span className="text-xl font-black tracking-tighter text-secondary uppercase md:text-2xl">
                    {APP_NAME}
                  </span>
                </div>
                <p className="text-on-surface-variant/60 max-w-sm text-sm leading-relaxed font-light md:text-base">
                  The premier multimedia studio where elite corporate finance
                  meets bespoke digital storytelling through premium ecosystems.
                </p>
                <div className="flex items-center justify-start gap-4 md:gap-6">
                  <a
                    className="flex h-10 w-10 items-center justify-center transition-all duration-300 hover:text-primary"
                    href="#"
                  >
                    <img src="/bir.png" />
                  </a>
                  <a
                    className="flex h-10 w-10 items-center justify-center transition-all duration-300 hover:text-primary"
                    href="#"
                  >
                    <img src="/dti.png" />
                  </a>
                  <a
                    className="flex h-5 w-15 items-center justify-center transition-all duration-300 hover:text-primary"
                    href="#"
                  >
                    <img src="/sec.png" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 md:col-span-7 md:gap-12 lg:grid-cols-3">
                <div className="space-y-4 md:space-y-6">
                  <h5 className="text-[9px] font-black tracking-[0.3em] text-primary uppercase md:text-[10px]">
                    Discovery
                  </h5>
                  <ul className="space-y-3 text-xs font-medium md:space-y-4 md:text-sm">
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary"
                        href="#mission-vision"
                      >
                        Our Narrative
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary"
                        href="#why-us"
                      >
                        The Edge
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary"
                        href="#services"
                      >
                        The Suite
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary"
                        href="#contact"
                      >
                        Concierge
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <h5 className="text-[9px] font-black tracking-[0.3em] text-primary uppercase md:text-[10px]">
                    Network
                  </h5>
                  <ul className="space-y-3 text-xs font-medium md:space-y-4 md:text-sm">
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary"
                        href="#"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary"
                        href="#"
                      >
                        Upwork Elite
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary"
                        href="#"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary"
                        href="#"
                      >
                        Behance
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2 space-y-4 md:space-y-6 lg:col-span-1">
                  <h5 className="text-[9px] font-black tracking-[0.3em] text-primary uppercase md:text-[10px]">
                    Legal
                  </h5>
                  <ul className="space-y-3 text-xs font-medium md:space-y-4 md:text-sm">
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary"
                        href="#"
                      >
                        Privacy Protocol
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary"
                        href="#"
                      >
                        Service Terms
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary"
                        href="#"
                      >
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="border-outline-variant/10 flex flex-col items-center justify-between gap-6 border-t pt-8 text-center md:flex-row md:pt-12 md:text-left">
              <p className="text-on-surface-variant/50 text-[11px] font-medium tracking-widest uppercase md:text-xs">
                © 2024 {APP_NAME}. All rights reserved.
              </p>
              <p className="text-on-surface-variant/50 text-[11px] font-medium md:text-xs">
                Crafted with precision for the elite.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
