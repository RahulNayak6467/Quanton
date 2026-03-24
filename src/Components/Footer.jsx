import { CircleDollarSign } from "lucide-react";
function Footer() {
  return (
    <footer className="border-t border-border py-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-6">
          {/* Brand */}
          <div className="max-w-xs w-full">
            <div className="flex items-center gap-2 mb-3">
              <div className=" rounded-full bg-accent flex items-center justify-center  font-bold text-sm">
                <CircleDollarSign
                  size={32}
                  className="bg-bg-page fill-accent"
                />
              </div>
              <span className="text-text-primary font-semibold text-lg">
                Quanton
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Real-time stock tracking, smart alerts, and market insights for
              the serious investor.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 w-full lg:w-auto">
            <div>
              <h4 className="text-text-primary font-semibold mb-4">Product</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#features"
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-text-primary font-semibold mb-4">Company</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-text-primary font-semibold mb-4">Legal</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-text-disabled text-sm">
            © 2025 Quanton. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="text-text-secondary hover:text-text-primary transition-colors text-sm"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-text-primary transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-text-primary transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
