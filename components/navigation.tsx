"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/infrastructure", label: "Infrastructure" },
    { href: "/construction", label: "Construction" },
    { href: "/intelligence", label: "Intelligence" },
    { href: "/compliance", label: "Compliance" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-5xl">
      <nav className="glass rounded-full px-4 sm:px-6 h-14 flex items-center justify-between shadow-glow-blue/10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-base sm:text-lg group"
        >
          <Image
            src="/logos/matmon-tech-text.svg"
            alt="MATMON TECHNOLOGY"
            className="h-6 w-auto sm:h-8"
            width={200}
            height={32}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-foreground/70 transition-all hover:text-white hover:text-glow-blue"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-white text-black hover:bg-white/90 font-bold rounded-full px-6 h-9 text-xs uppercase tracking-widest"
          >
            <Link href="/contact">Partner With Us</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-white group"
            >
              <Menu className="h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="glass border-none h-[100dvh] pt-32 px-8 flex flex-col"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-8 bg-primary hover:bg-primary/90 text-white w-full max-w-xs font-bold rounded-full h-12"
              >
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
