import { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { SectionContainer } from "@/components/section-container";
import { GlowSphere } from "@/components/glow-sphere";
import Link from "next/link";
import {
  CheckCircle,
  ShieldCheck,
  Lock,
  FileText,
  Activity,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance & Trust - Matmon Technology",
  description:
    "Security by Design. Adherence to Kenya Data Protection Act (2019) and national certifications.",
};

export default function Compliance() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <SectionContainer className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden text-center">
        <GlowSphere
          color="red"
          size="xl"
          className="-top-40 -left-40 opacity-10"
        />
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6 inline-block border-b-2 border-primary pb-1">
            Compliance & Trust
          </p>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent uppercase text-balance">
            SECURITY BY
            <br />
            DESIGN.
          </h1>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
            We build digital and physical infrastructure that respects local
            laws and prioritizes the security of African citizens and
            enterprises.
          </p>
        </div>
      </SectionContainer>

      {/* Data Protection */}
      <SectionContainer className="py-32 border-y border-white/5 bg-white/[0.01]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase mb-8 leading-[1.1]">
              Data Protection Act (2019)
            </h2>
            <div className="space-y-6 text-muted-foreground font-medium mb-10">
              <p>
                As a registered Data Controller and Processor in Kenya, Matmon
                Technology strictly adheres to the Kenya Data Protection Act
                (2019). We implement rigorous data minimization and purpose
                limitation protocols across all our platforms.
              </p>
            </div>
            <ul className="space-y-6">
              {[
                "Explicit consent mechanisms built into UDP",
                "Localized data processing in Kisumu SEZ",
                "Right to erasure enforced within 72 hours",
                "Comprehensive audit trails for ODPC compliance",
              ].map((item) => (
                <li key={item} className="flex gap-4 items-start">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5 shadow-glow-red/20" />
                  <span className="text-sm font-bold text-white/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card aspect-square max-h-[400px] flex items-center justify-center relative overflow-hidden group">
            <GlowSphere
              color="red"
              size="lg"
              className="opacity-10 group-hover:opacity-20 transition-opacity duration-500"
            />
            <Lock className="h-24 w-24 text-primary drop-shadow-[0_0_20px_rgba(255,30,30,0.5)]" />
          </div>
        </div>
      </SectionContainer>

      {/* Data Sovereignty (Ethics) */}
      <SectionContainer className="py-32 relative overflow-hidden">
        <GlowSphere
          color="blue"
          size="lg"
          className="bottom-0 left-1/2 -translate-x-1/2 opacity-10"
        />
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-8 leading-[1.1]">
            DATA SOVEREIGNTY
          </h2>
          <div className="glass-card p-12 border-secondary/20 relative">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest">
              Our Ethical Stand
            </div>
            <p className="text-lg text-white leading-relaxed font-medium italic">
              "Kenyan data belongs on Kenyan soil."
            </p>
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
              We believe that true technological independence for Africa begins
              with infrastructure independence. By keeping our servers local, we
              protect our clients from foreign jurisdiction overreach and
              empower the regional economy.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Certifications Grid */}
      <SectionContainer className="py-32 pb-48 border-t border-white/5 bg-white/[0.01]">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">
            REGULATORY ALIGNMENT
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
            Meeting the highest standards for the built environment.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "NCA",
              link: "https://www.nca.go.ke/",
              subtitle: "National Construction Authority",
              icon: (
                <img
                  src="/compliance/nca-logo.png"
                  alt="NCA"
                  className="h-10 w-26 rounded-md mb-6 bg-white"
                />
              ),
              desc: "Adhering to strict engineering and building codes for our data centers and smart build projects.",
            },
            {
              title: "NEMA",
              link: "https://nema.go.ke/",
              subtitle: "National Environment Management Authority",
              icon: (
                <img
                  src="/compliance/nema-and-GoK.png"
                  alt="NEMA"
                  className="h-10 w-26 rounded-md mb-6"
                />
              ),
              desc: "Committed to sustainable building practices, minimizing carbon footprint through additive manufacturing.",
            },
            {
              title: "EPRA",
              link: "https://www.epra.go.ke/",
              subtitle: "Energy and Petroleum Regulatory Authority",
              icon: (
               <img src="/compliance/EPRA-WEB-LOGO.jpg" alt="EPRA" className="h-10 w-26 rounded-md mb-6" />
              ),
              desc: "Optimizing energy consumption across our digital infrastructure and real estate portfolio.",
            },
          ].map((cert) => (
            <div
              key={cert.title}
              className="glass-card p-10 text-center group hover:border-white/30 transition-colors"
            >
              {cert.icon}
              <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <h3 className="text-3xl font-black tracking-tighter mb-2">
                  {cert.title}
                </h3>
                <ExternalLink className="h-6 w-6 text-primary" />
              </Link>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6">
                {cert.subtitle}
              </p>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}
