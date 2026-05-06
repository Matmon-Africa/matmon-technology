import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-2xl mb-6"
            >
              <Image
                src="/logos/matmon-tech-full.svg"
                alt="MATMON TECHNOLOGY"
                className="h-8 w-auto"
                width={200}
                height={32}
              />
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Building the Data Infrastructure Layer for Africa’s Built
              Environment. From sovereign cloud hosting in Kisumu to AI-driven
              smart construction.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Ecosystem
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/infrastructure"
                  className="hover:text-primary transition-colors"
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/construction"
                  className="hover:text-primary transition-colors"
                >
                  Smart Build
                </Link>
              </li>
              <li>
                <Link
                  href="/intelligence"
                  className="hover:text-primary transition-colors"
                >
                  Urban Intelligence
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Resources
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li>
                <Link
                  href="/compliance"
                  className="hover:text-primary transition-colors"
                >
                  Compliance
                </Link>
              </li>
              {/* <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a> 
              </li>
                */}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Community
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="text-sm text-muted-foreground font-medium hover:text-primary transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <p className="text-xs text-muted-foreground">
            © 2026 Matmon Technology (Kenya). All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:dev@matmonafrica.com"
              className="h-10 w-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="tel:+254729931532"
              className="h-10 w-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <MapPin className="h-4 w-4" />
            </a>
          </div>
          <div className="flex gap-6 text-xs text-muted-foreground font-medium">
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
