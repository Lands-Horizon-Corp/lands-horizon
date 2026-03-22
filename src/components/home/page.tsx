"use client"

import { useState } from "react"
import { motion, type Variants } from "framer-motion"
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
import { APP_NAME, EMAIL, LOGO } from "@/constants"

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

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
              <img src={LOGO} alt="Logo" />
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
              className="bg-surface-container-highest border-outline-variant/30 hidden rounded-lg border px-4 py-2.5 text-[10px] font-black tracking-widest text-secondary uppercase transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(var(--primary-rgb,233,196,0),0.3)] sm:inline-flex md:px-6"
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
                  className="group border-outline-variant/10 bg-surface-container/60 hover:bg-surface-container flex items-center justify-between rounded-xl border px-5 py-4 text-base font-bold text-secondary transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:shadow-[0_0_20px_rgba(var(--primary-rgb,233,196,0),0.15)] active:scale-[0.98]"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="opacity-40 transition-all group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-8">
              <a
                href="#contact"
                onClick={toggleMenu}
                className="text-on-primary block w-full rounded-xl bg-primary py-4 text-center font-black tracking-widest uppercase shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary-rgb,233,196,0),0.4)] active:scale-95"
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

          <motion.div
            className="relative z-10 max-w-6xl space-y-6 text-center md:space-y-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-primary-container/30 mb-4 inline-flex items-center gap-3 rounded-full border border-primary/20 px-4 py-1.5 text-[8px] font-black tracking-[0.3em] text-primary uppercase md:text-[10px]"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_10px_currentColor]"></span>
              Built with Trust
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="animate-blur-shake font-headline text-4xl leading-[1.1] font-extrabold tracking-tighter text-secondary sm:text-6xl md:text-[90px] md:leading-[0.9] lg:text-[110px]"
            >
              Maximizing <span className="font-light italic">Reach.</span>
              <br />
              <span className="text-gradient-gold drop-shadow-[0_0_15px_rgba(233,196,0,0.3)]">
                Multiplying Impact.
              </span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="relative mx-auto h-4 w-full max-w-50 overflow-hidden md:h-6 md:max-w-md"
            >
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
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-on-surface-variant mx-auto max-w-3xl px-4 text-base leading-relaxed font-light tracking-wide md:text-2xl"
            >
              Bridging the gap between corporate structural integrity and
              bespoke digital storytelling for elite finance and tech sectors.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col justify-center gap-4 px-4 pt-6 sm:flex-row md:gap-6 md:pt-10"
            >
              <a
                className="group text-on-primary relative overflow-hidden rounded-xl bg-primary px-8 py-4 font-bold tracking-tight transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary-rgb,233,196,0),0.4)] active:scale-95 md:px-10 md:py-5"
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
                className="bg-surface-container-high border-outline-variant/20 text-on-surface hover:bg-surface-variant rounded-xl border px-8 py-4 text-center font-bold transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] md:px-10 md:py-5"
                href="#mission-vision"
              >
                Our Story
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Trust Bar */}
        <motion.section
          className="relative overflow-hidden px-4 py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="mx-auto max-w-7xl">
            <div className="border-outline-variant/10 divide-outline-variant/10 flex flex-col items-center justify-between gap-8 divide-y py-10 md:flex-row md:gap-0 md:divide-x md:divide-y-0">
              {[
                { number: "100K", symbol: "+", label: "Global Users Served" },
                { number: "100", symbol: "+", label: "Strategic Partners" },
                { number: "99.9", symbol: "%", label: "System Reliability" },
                { number: "24", symbol: "/7", label: "Priority Concierge" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex w-full flex-col items-center py-4 text-center md:w-auto md:flex-1 md:px-6 md:py-0"
                >
                  <span className="font-headline text-2xl font-black text-secondary md:text-3xl">
                    {stat.number}
                    <span className="text-primary drop-shadow-[0_0_8px_currentColor]">
                      {stat.symbol}
                    </span>
                  </span>
                  <span className="text-on-surface-variant/60 mt-2 text-[9px] font-bold tracking-[0.2em] uppercase md:text-[10px]">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision Section */}
        <section
          className="mx-auto max-w-7xl scroll-mt-20 overflow-hidden px-6 py-20 md:px-8 md:py-32"
          id="mission-vision"
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-24">
            <motion.div
              className="space-y-10 md:space-y-16 lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-primary shadow-[0_0_8px_currentColor] md:w-12"></span>
                  <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase md:text-xs">
                    Our Core Purpose
                  </span>
                </div>
                <h2 className="font-headline text-4xl leading-[1.1] font-extrabold tracking-tighter text-secondary md:text-6xl lg:text-7xl">
                  Driven by{" "}
                  <span className="text-on-surface-variant">Precision</span>,
                  Guided by{" "}
                  <span className="text-gradient-gold font-light italic drop-shadow-[0_0_10px_rgba(233,196,0,0.2)]">
                    Values.
                  </span>
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10">
                <div className="group">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-4xl font-black text-primary/20 transition-colors group-hover:text-primary/40 group-hover:drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]">
                      01
                    </span>
                    <div className="border-outline-variant/20 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
                      <Zap
                        size={18}
                        className="text-primary transition-transform group-hover:scale-110"
                      />
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
                    <span className="text-4xl font-black text-primary/20 transition-colors group-hover:text-primary/40 group-hover:drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]">
                      02
                    </span>
                    <div className="border-outline-variant/20 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
                      <TrendingUp
                        size={18}
                        className="text-primary transition-transform group-hover:scale-110"
                      />
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
            </motion.div>

            <motion.div
              className="group relative lg:col-span-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
            >
              <div className="from-primary-container/40 absolute -inset-4 rounded-4xl bg-linear-to-tr to-primary/10 opacity-60 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-3xl"></div>
              <div className="border-outline-variant/10 relative aspect-4/5 overflow-hidden rounded-3xl border shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] md:aspect-4/5">
                <img
                  src="meeting.jpg"
                  className="absolute top-0 left-0 -z-10 h-full mask-[linear-gradient(to_top_right,black,transparent)] object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80"></div>
                <div className="glass-header absolute right-6 bottom-6 left-6 rounded-2xl border border-primary/20 p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md md:right-8 md:bottom-8 md:left-8 md:p-8">
                  <div className="flex flex-col gap-1">
                    <p className="mb-1 text-[8px] font-black tracking-[0.3em] text-primary uppercase drop-shadow-[0_0_5px_rgba(var(--primary-rgb),0.5)] md:text-[10px]">
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
                className="absolute -top-4 -right-4 h-16 w-16 text-primary/30 transition-all duration-500 group-hover:text-primary/60 group-hover:drop-shadow-[0_0_10px_currentColor] md:-top-6 md:-right-6 md:h-24 md:w-24"
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
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="bg-surface-container-lowest/30 relative scroll-mt-20 overflow-hidden py-20 md:py-32"
          id="services"
        >
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
            <motion.div
              className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-20 lg:flex-row lg:items-end"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
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
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Large Card 1 */}
              <motion.div
                variants={fadeInUp}
                className="group bg-surface-container border-outline-variant/10 card-reveal hover:bg-surface-container/80 relative z-10 overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:z-20 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_rgba(var(--primary-rgb,233,196,0),0.3)] md:col-span-7 md:p-10"
              >
                <img
                  src="computer.jpg"
                  className="absolute top-0 left-0 -z-10 mask-[linear-gradient(to_top_right,black,transparent)] opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                />
                <div className="absolute inset-0 -z-10 bg-radial-[at_100%_0%] from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between md:mb-12">
                    <div className="bg-primary-container flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb,233,196,0),0.4)] md:h-16 md:w-16">
                      <TrendingUp
                        size={28}
                        className="text-primary transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-on-surface-variant/5 text-4xl font-black transition-colors duration-500 group-hover:text-primary/10 group-hover:drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.2)] md:text-6xl">
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
                    <span className="bg-surface-variant border-outline-variant/20 rounded-full border px-3 py-1.5 text-[8px] font-bold tracking-widest text-secondary uppercase transition-colors duration-300 group-hover:border-primary/30 md:px-4 md:text-[10px]">
                      FinTech
                    </span>
                    <span className="bg-surface-variant border-outline-variant/20 rounded-full border px-3 py-1.5 text-[8px] font-bold tracking-widest text-secondary uppercase transition-colors duration-300 group-hover:border-primary/30 md:px-4 md:text-[10px]">
                      Secure Infra
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Large Card 2 */}
              <motion.div
                variants={fadeInUp}
                className="group bg-surface-container border-outline-variant/10 card-reveal hover:bg-surface-container/80 relative z-10 overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:z-20 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_rgba(var(--primary-rgb,233,196,0),0.3)] md:col-span-5 md:p-10"
              >
                <img
                  src="multimedia.jpg"
                  className="absolute top-0 left-0 -z-10 h-full w-full mask-[linear-gradient(to_top_right,black,transparent)] object-cover object-top opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                />
                <div className="absolute inset-0 -z-10 bg-radial-[at_100%_0%] from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between md:mb-12">
                    <div className="bg-surface-container-highest border-outline-variant/20 flex h-14 w-14 items-center justify-center rounded-xl border transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] md:h-16 md:w-16">
                      <CameraIcon
                        size={28}
                        className="text-secondary transition-transform duration-300 group-hover:scale-110 group-hover:text-primary"
                      />
                    </div>
                    <span className="text-on-surface-variant/5 text-4xl font-black transition-colors duration-500 group-hover:text-primary/10 group-hover:drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.2)] md:text-6xl">
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
                    <span className="bg-surface-variant border-outline-variant/20 rounded-full border px-3 py-1.5 text-[8px] font-bold tracking-widest text-secondary uppercase transition-colors duration-300 group-hover:border-primary/30 md:px-4 md:text-[10px]">
                      Cinematics
                    </span>
                    <span className="bg-surface-variant border-outline-variant/20 rounded-full border px-3 py-1.5 text-[8px] font-bold tracking-widest text-secondary uppercase transition-colors duration-300 group-hover:border-primary/30 md:px-4 md:text-[10px]">
                      Post-Pro
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Three Small Cards */}
              <motion.div
                variants={fadeInUp}
                className="bg-surface-container/50 border-outline-variant/10 group hover:bg-surface-container relative z-10 rounded-2xl border p-6 transition-all duration-300 hover:z-20 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(var(--primary-rgb,233,196,0),0.25)] md:col-span-4 md:p-8"
              >
                <Search
                  size={32}
                  className="mb-6 block scale-110 text-primary transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_12px_currentColor] md:scale-125"
                />
                <h4 className="mb-3 text-lg font-bold text-secondary">
                  SEO &amp; SEM Authority
                </h4>
                <p className="text-on-surface-variant/80 text-sm leading-relaxed font-light">
                  Algorithmic precision to ensure your brand remains at the
                  pinnacle of digital visibility.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-surface-container/50 border-outline-variant/10 group hover:bg-surface-container relative z-10 rounded-2xl border p-6 transition-all duration-300 hover:z-20 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(var(--primary-rgb,233,196,0),0.25)] md:col-span-4 md:p-8"
              >
                <Globe
                  size={32}
                  className="mb-6 block scale-110 text-primary transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_12px_currentColor] md:scale-125"
                />
                <h4 className="mb-3 text-lg font-bold text-secondary">
                  Omnichannel Strategy
                </h4>
                <p className="text-on-surface-variant/80 text-sm leading-relaxed font-light">
                  Cohesive narrative unification across all digital touchpoints
                  and customer journeys.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-surface-container/50 border-outline-variant/10 group hover:bg-surface-container relative z-10 rounded-2xl border p-6 transition-all duration-300 hover:z-20 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(var(--primary-rgb,233,196,0),0.25)] md:col-span-4 md:p-8"
              >
                <Zap
                  size={32}
                  className="mb-6 block scale-110 text-primary transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_12px_currentColor] md:scale-125"
                />
                <h4 className="mb-3 text-lg font-bold text-secondary">
                  24/7 Concierge Support
                </h4>
                <p className="text-on-surface-variant/80 text-sm leading-relaxed font-light">
                  Elite technical stewardship providing round-the-clock
                  maintenance and proactive optimization.
                </p>
              </motion.div>
            </motion.div>
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
            <motion.div
              className="mb-16 space-y-4 text-center md:mb-24 md:space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
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
            </motion.div>

            <motion.div
              className="border-outline-variant/10 bg-surface-container-low grid grid-cols-1 gap-0 overflow-hidden rounded-3xl border shadow-xl md:grid-cols-3 md:rounded-[2.5rem]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="border-outline-variant/10 hover:bg-primary-container/10 group border-b p-8 transition-colors md:border-r md:border-b-0 md:p-12"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb,233,196,0),0.3)] md:mb-10">
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
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="border-outline-variant/10 hover:bg-primary-container/10 group border-b p-8 transition-colors md:border-r md:border-b-0 md:p-12"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb,233,196,0),0.3)] md:mb-10">
                  <Code size={24} />
                </div>
                <h4 className="mb-4 text-lg leading-tight font-extrabold text-secondary md:text-xl">
                  Unrivaled Technical Integrity
                </h4>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed font-light">
                  High-speed architecture and robust stability. We engineer for
                  peak performance under extreme operational pressure.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="hover:bg-primary-container/10 group p-8 transition-colors md:p-12"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb,233,196,0),0.3)] md:mb-10">
                  <RefreshCw size={24} />
                </div>
                <h4 className="mb-4 text-lg leading-tight font-extrabold text-secondary md:text-xl">
                  Partnership Lifecycle
                </h4>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed font-light">
                  Beyond the launch, we provide continuous optimization ensuring
                  your technology stack evolves ahead of market demands.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className="scroll-mt-20 overflow-hidden py-20 md:py-32"
          id="testimonials"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <motion.div
              className="mb-16 max-w-2xl space-y-4 md:mb-24 md:space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
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
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {[
                { initials: "MT", name: "Melvin Thomas", age: "34" },
                { initials: "SS", name: "Sreenath.S", age: "26" },
                { initials: "MD", name: "Marvin D'z", age: "46" },
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-surface-container-high border-outline-variant/10 group flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(var(--primary-rgb,233,196,0),0.15)] md:p-10"
                >
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-primary text-primary transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_currentColor]"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-on-surface mb-8 text-base leading-relaxed font-light md:text-lg">
                    "High standard and excellent quality of work. They helped my
                    business grow in digital."
                  </p>
                  <div className="mt-auto flex items-center gap-4">
                    <div className="bg-surface-variant flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-primary transition-colors duration-300 group-hover:bg-primary/20 md:h-12 md:w-12">
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 md:px-8 md:py-32"
          id="contact"
        >
          <div className="border-outline-variant/10 bordershadow-2xl relative grid grid-cols-1 overflow-hidden rounded-3xl md:rounded-4xl lg:grid-cols-2">
            <div className="pointer-events-none absolute inset-0"></div>

            <motion.div
              className="bg-surface-container-low/40 relative z-10 space-y-10 p-8 backdrop-blur-sm md:space-y-12 md:p-12 lg:p-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
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
                  <div className="group-hover:text-on-primary flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] md:h-12 md:w-12">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold tracking-widest text-primary uppercase md:text-[10px]">
                      Email Our Atelier
                    </span>
                    <span className="text-sm font-medium break-all text-secondary md:text-base">
                      {EMAIL}
                    </span>
                  </div>
                </div>
                <div className="group flex items-center gap-4 md:gap-6">
                  <div className="group-hover:text-on-primary flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] md:h-12 md:w-12">
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
            </motion.div>

            <motion.div
              className="border-outline-variant/10 relative z-10 border-t p-8 md:p-12 lg:border-t-0 lg:border-l lg:p-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
            >
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
                      className="bg-surface-container-lowest/30 border-outline-variant/20 placeholder:text-on-surface-variant/30 w-full rounded-xl border px-4 py-3 text-secondary transition-all outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(var(--primary-rgb,233,196,0),0.15)] focus:ring-1 focus:ring-primary/20 md:px-6 md:py-4"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-on-surface-variant/70 text-[8px] font-black tracking-[0.2em] uppercase md:text-[10px]">
                      Enterprise Email
                    </label>
                    <input
                      className="bg-surface-container-lowest/30 border-outline-variant/20 placeholder:text-on-surface-variant/30 w-full rounded-xl border px-4 py-3 text-secondary transition-all outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(var(--primary-rgb,233,196,0),0.15)] focus:ring-1 focus:ring-primary/20 md:px-6 md:py-4"
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
                    className="bg-surface-container-lowest/30 border-outline-variant/20 placeholder:text-on-surface-variant/30 w-full rounded-xl border px-4 py-3 text-secondary transition-all outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(var(--primary-rgb,233,196,0),0.15)] focus:ring-1 focus:ring-primary/20 md:px-6 md:py-4"
                    placeholder="How can we help?"
                    type="text"
                  />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label className="text-on-surface-variant/70 text-[8px] font-black tracking-[0.2em] uppercase md:text-[10px]">
                    Brief Vision Message
                  </label>
                  <textarea
                    className="bg-surface-container-lowest/30 border-outline-variant/20 placeholder:text-on-surface-variant/30 h-32 w-full resize-none rounded-xl border px-4 py-3 text-secondary transition-all outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(var(--primary-rgb,233,196,0),0.15)] focus:ring-1 focus:ring-primary/20 md:h-40 md:px-6 md:py-4"
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>
                <button className="group text-on-primary luminous-glow flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary-rgb,233,196,0),0.4)] active:scale-95 md:py-5">
                  <span>Send Inquiry</span>
                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <motion.footer
          className="bg-surface-container-lowest text-on-surface border-outline-variant/10 font-body relative w-full overflow-hidden border-t px-6 pt-20 pb-12 md:px-10 md:pt-32 md:pb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-16 grid grid-cols-1 gap-12 md:mb-24 md:grid-cols-12 md:gap-16">
              {/* Brand Section */}
              <div className="space-y-6 md:col-span-5 md:space-y-10">
                <div className="flex items-center gap-2">
                  <div className="text-on-primary flex h-10 w-10 items-center justify-center rounded bg-primary font-black">
                    <img src={LOGO} alt="Logo" />
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
                    className="flex h-10 w-10 items-center justify-center transition-all duration-300 hover:scale-110 hover:text-primary hover:drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
                    href="#"
                  >
                    <img src="/bir.png" alt="BIR" />
                  </a>
                  <a
                    className="flex h-10 w-10 items-center justify-center transition-all duration-300 hover:scale-110 hover:text-primary hover:drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
                    href="#"
                  >
                    <img src="/dti.png" alt="DTI" />
                  </a>
                  <a
                    className="flex h-5 w-15 items-center justify-center transition-all duration-300 hover:scale-110 hover:text-primary hover:drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
                    href="#"
                  >
                    <img src="/sec.png" alt="SEC" />
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
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary hover:drop-shadow-[0_0_5px_currentColor]"
                        href="#mission-vision"
                      >
                        Our Narrative
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary hover:drop-shadow-[0_0_5px_currentColor]"
                        href="#why-us"
                      >
                        The Edge
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary hover:drop-shadow-[0_0_5px_currentColor]"
                        href="#services"
                      >
                        The Suite
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary hover:drop-shadow-[0_0_5px_currentColor]"
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
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary hover:drop-shadow-[0_0_5px_currentColor]"
                        href="#"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary hover:drop-shadow-[0_0_5px_currentColor]"
                        href="#"
                      >
                        Upwork Elite
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary hover:drop-shadow-[0_0_5px_currentColor]"
                        href="#"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary hover:drop-shadow-[0_0_5px_currentColor]"
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
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary hover:drop-shadow-[0_0_5px_currentColor]"
                        href="/privacy-policy"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary hover:drop-shadow-[0_0_5px_currentColor]"
                        href="/service-terms"
                      >
                        Service Terms
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary hover:drop-shadow-[0_0_5px_currentColor]"
                        href="/cookie-policy"
                      >
                        Cookie Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-on-surface-variant/60 transition-colors hover:text-secondary hover:drop-shadow-[0_0_5px_currentColor]"
                        href="/faq"
                      >
                        FAQ
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
        </motion.footer>
      </main>
    </>
  )
}
