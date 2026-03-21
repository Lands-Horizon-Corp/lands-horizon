export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-surface-container-lowest/50 border-outline-variant/10 border-t px-6 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-accent font-black text-accent-foreground">
                L
              </div>
              <span className="headline text-lg font-extrabold text-secondary">
                Project Lisa
              </span>
            </div>
            <p className="text-on-surface-variant/80 body text-sm">
              The Multimedia Atelier for discerning enterprises.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-secondary uppercase">
              Services
            </h4>
            <ul className="text-on-surface-variant/80 space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-accent"
                >
                  System Provider
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-accent"
                >
                  Multimedia
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-accent"
                >
                  Design Excellence
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-accent"
                >
                  Engineering
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-secondary uppercase">
              Company
            </h4>
            <ul className="text-on-surface-variant/80 space-y-2 text-sm">
              <li>
                <a
                  href="#mission-vision"
                  className="transition-colors hover:text-accent"
                >
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-secondary uppercase">
              Legal
            </h4>
            <ul className="text-on-surface-variant/80 space-y-2 text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-outline-variant/10 mb-12 border-t pt-12">
          <div className="mb-6 max-w-2xl">
            <h3 className="font-headline mb-4 text-3xl font-bold text-secondary md:text-4xl">
              Ready to transform your digital presence?
            </h3>
            <p className="text-on-surface-variant/80 body text-base md:text-lg">
              Let's craft something extraordinary together. Connect with our
              team today.
            </p>
          </div>
          <a
            href="mailto:hello@projectlisa.com"
            className="inline-flex rounded-xl bg-accent px-8 py-4 font-bold text-accent-foreground transition-transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-outline-variant/10 text-on-surface-variant/60 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm md:flex-row">
          <p>© 2024 Project Lisa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-accent">
              Twitter
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
