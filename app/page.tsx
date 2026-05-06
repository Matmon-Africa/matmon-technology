import { LayoutWrapper } from "@/components/layout-wrapper";
import { SectionContainer } from "@/components/section-container";
import { Button } from "@/components/ui/button";
import { GlowSphere } from "@/components/glow-sphere";
import Link from "next/link";
import Image from "next/image";
import { Server, HardHat, LineChart, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <SectionContainer className="relative pt-32 pb-40 lg:pt-48 lg:pb-64 overflow-hidden text-center">
        <GlowSphere
          color="red"
          size="xl"
          className="-top-20 -left-20 opacity-20"
        />
        <GlowSphere
          color="blue"
          size="lg"
          className="bottom-0 -right-20 opacity-10"
        />

        {/* Abstract Background Sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-40 pointer-events-none">
          <img
            src="/hero-sphere.png"
            alt="Hero Sphere"
            className="w-full h-auto animate-float"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] sm:leading-none tracking-tighter mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent uppercase text-balance">
            Building the Data Infrastructure Layer for Africa's Built
            Environment
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            From sovereign cloud hosting in Kisumu to AI-driven smart
            construction, we are digitizing the physical world.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 rounded-full text-sm uppercase tracking-widest shadow-glow-red/20 transition-all hover:scale-105"
            >
              <Link href="/contact">Partner With Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="glass border-white/10 hover:bg-white/5 text-white font-bold h-14 px-10 rounded-full text-sm uppercase tracking-widest transition-all"
            >
              <Link href="/infrastructure">Explore Infrastructure</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* The Three Pillars Section */}
      <SectionContainer className="py-32 bg-white/[0.01] border-y border-white/5 relative">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">
            Our Core Pillars
          </p>
          <h2 className="text-3xl sm:text-6xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-8 uppercase">
            THE OPERATING SYSTEM FOR THE BUILT ENVIRONMENT
          </h2>
          <p className="text-muted-foreground leading-relaxed font-medium">
            Matmon Technology is the engine room of Matmon Africa. We integrate
            data collection, automation, and predictive analytics into every
            stage of development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Pillar 1: Data Center */}
          <div className="glass-card p-10 group relative border-white/5 hover:border-primary/50 transition-colors">
            <GlowSphere
              color="red"
              size="sm"
              className="top-0 right-0 opacity-0 group-hover:opacity-20 transition-opacity"
            />
            <div className="h-16 w-16 rounded-full glass flex items-center justify-center mb-8 border-primary/20 shadow-glow-red/10 group-hover:scale-110 transition-transform">
              <Server className="h-8 w-8 text-primary drop-shadow-[0_0_10px_rgba(255,30,30,0.5)]" />
            </div>
            <h3 className="text-2xl font-black tracking-tighter mb-4 uppercase text-white">
              Data Center
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-sm font-medium">
              Enterprise Data Centers & Sovereign Cloud. Providing low-latency
              local hosting, secure storage, and Proxmox virtualization from our
              Kisumu edge.
            </p>
            <Link
              href="/infrastructure"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:text-white transition-colors"
            >
              View Infrastructure <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Pillar 2: Smart Build */}
          <div className="glass-card p-10 group relative border-white/5 hover:border-secondary/50 transition-colors">
            <GlowSphere
              color="blue"
              size="sm"
              className="top-0 right-0 opacity-0 group-hover:opacity-20 transition-opacity"
            />
            <div className="h-16 w-16 rounded-full glass flex items-center justify-center mb-8 border-secondary/20 shadow-glow-blue/10 group-hover:scale-110 transition-transform">
              <HardHat className="h-8 w-8 text-secondary drop-shadow-[0_0_10px_rgba(0,112,255,0.5)]" />
            </div>
            <h3 className="text-2xl font-black tracking-tighter mb-4 uppercase text-white">
              Smart Build
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-sm font-medium">
              3D Construction Printing & Robotics. Compressing building delivery
              timelines by 40% through advanced additive manufacturing and 5D
              BIM integration.
            </p>
            <Link
              href="/construction"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-secondary hover:text-white transition-colors"
            >
              Explore Tech <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Pillar 3: Urban Intelligence */}
          <div className="glass-card p-10 group relative border-white/5 hover:border-white/50 transition-colors">
            <GlowSphere
              color="blue"
              size="sm"
              className="top-0 right-0 opacity-0 group-hover:opacity-20 transition-opacity"
            />
            <div className="h-16 w-16 rounded-full glass flex items-center justify-center mb-8 border-white/20 shadow-glow-blue/10 group-hover:scale-110 transition-transform">
              <LineChart className="h-8 w-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </div>
            <h3 className="text-2xl font-black tracking-tighter mb-4 uppercase text-white">
              Urban Intelligence
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-sm font-medium">
              Predictive Analytics for Real Estate. Turning urban chaos into
              actionable insights via our proprietary Urban Data Platform (UDP).
            </p>
            <Link
              href="/intelligence"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-primary transition-colors"
            >
              See Platform <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionContainer>

      {/* Short About Section / Lead In */}
      <SectionContainer className="py-32 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-8 uppercase">
              NOT JUST A CONSTRUCTION COMPANY
            </h2>
            <div className="space-y-6 text-muted-foreground font-medium">
              <p>
                We are a technology group that treats buildings as hardware and
                data as the operating system. Based in Kisumu, we are filling
                the gap in Kenya{"’"}s digital landscape.
              </p>
            </div>
            <Button
              asChild
              className="mt-10 glass border-white/10 hover:bg-white/5 text-white font-bold h-12 px-8 rounded-full text-xs uppercase tracking-widest"
            >
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
          <div className="relative order-2 lg:order-1">
            <img
              src="/infra-sphere.jpg"
              alt="Data center infrastructure"
              className="w-full h-auto max-w-lg mx-auto drop-shadow-[0_0_50px_rgba(0,112,255,0.3)]"
            />
          </div>
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}
