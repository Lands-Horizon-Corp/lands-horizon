import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="glass-header border-outline-variant/10 fixed top-0 z-100 w-full border-b">
      <div className="mx-auto flex max-w-360 items-center justify-between px-4 py-4 md:px-12 md:py-5">
        {/* Logo */}
        <div className="group flex cursor-pointer items-center gap-2">
          <div className="flex h-8 w-8 transform items-center justify-center rounded bg-accent font-black text-accent-foreground transition-transform group-hover:rotate-12">
            L
          </div>
          <span className="headline text-lg font-extrabold tracking-tighter text-secondary md:text-xl">
            Project Lisa
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex lg:gap-12">
          <a
            href="#mission-vision"
            className="text-on-surface-variant/80 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-accent"
          >
            Mission
          </a>
          <a
            href="#why-us"
            className="text-on-surface-variant/80 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-accent"
          >
            Why Us
          </a>
          <a
            href="#services"
            className="text-on-surface-variant/80 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-accent"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-on-surface-variant/80 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-accent"
          >
            Contact
          </a>
        </div>

        {/* Desktop CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="#contact"
            className="bg-surface-container-highest border-outline-variant/30 hidden rounded-lg border px-4 py-2.5 text-[10px] font-black tracking-widest text-secondary uppercase transition-all duration-300 hover:border-accent/60 sm:inline-flex md:px-6"
          >
            Work With Us
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hover:bg-surface-variant rounded-full p-2 text-secondary transition-colors md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 flex flex-col space-y-8 bg-background px-8 pt-24 pb-12 md:hidden">
          <a
            href="#mission-vision"
            onClick={() => setMobileMenuOpen(false)}
            className="border-outline-variant/10 border-b pb-4 text-2xl font-bold text-secondary"
          >
            Mission
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="border-outline-variant/10 border-b pb-4 text-2xl font-bold text-secondary"
          >
            Why Us
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="border-outline-variant/10 border-b pb-4 text-2xl font-bold text-secondary"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="border-outline-variant/10 border-b pb-4 text-2xl font-bold text-secondary"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 w-full rounded-xl bg-accent py-4 text-center font-black tracking-widest text-accent-foreground uppercase"
          >
            Work With Us
          </a>
        </div>
      )}
    </nav>
  )
}
