import { Metadata } from 'next';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionContainer } from '@/components/section-container';
import { CTAButtonPair } from '@/components/cta-button-pair';
import { GlowSphere } from '@/components/glow-sphere';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Matmon Technology - Sovereign Data Center',
  description: 'Learn about Matmon Technology, Kenya\'s sovereign data center operator and our mission to empower African businesses.',
};

export default function About() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <SectionContainer className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        <GlowSphere color="blue" size="lg" className="-top-20 -right-20 opacity-10" />
        <div className="max-w-4xl">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">Who We Are</p>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            POWERING AFRICAN
            <br />
            SOVEREIGNTY
          </h1>
          <p className="text-xl text-muted-foreground/80 max-w-2xl leading-relaxed font-medium">
            Matmon Technology is Kenya&apos;s first sovereign data center operator, committed to bringing world-class infrastructure to East Africa while keeping data under African control.
          </p>
        </div>
      </SectionContainer>

      {/* Story */}
      <SectionContainer className="relative">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter mb-8 uppercase leading-[1.1]">Our Story</h2>
            <div className="space-y-6 text-muted-foreground font-medium underline-offset-4">
              <p>
                Matmon Africa isn't just a construction company; we are a technology group that treats buildings as hardware and data as the operating system. 
              </p>
              <p>
                Based in Kisumu, we are filling the gap in Kenya’s digital landscape by providing the storage, security, and smart-build capabilities required for the next decade of urban growth.
              </p>
              <p>
                We believe that Africa has the talent, resources, and market to build world-class digital infrastructure locally. We're not importing solutions—we're building them.
              </p>
            </div>
          </div>
          <div className="glass-card aspect-video overflow-hidden group">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-secondary/10 flex items-center justify-center relative">
              <GlowSphere color="red" size="md" className="opacity-20" />
              <img src="/site01.jpg" alt="Hero" className="w-full h-full object-cover rounded-md" />
              <div className="text-center absolute inset-x-0 bottom-4">
                <p className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-primary transition-colors">Operations Site: Kisumu</p>
              </div>  
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Mission & Values */}
      <SectionContainer className="py-32">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="glass-card p-12">
            <h3 className="text-2xl font-black tracking-tighter uppercase mb-6 text-primary">Our Mission</h3>
            <p className="text-muted-foreground font-medium leading-relaxed">
              To empower African businesses with sovereign, compliant, high-performance data infrastructure that enables them to innovate without constraints and own their digital future.
            </p>
          </div>
          <div className="glass-card p-12">
            <h3 className="text-2xl font-black tracking-tighter uppercase mb-6 text-secondary">Our Values</h3>
            <ul className="space-y-6">
              {[
                { label: 'Sovereignty', desc: 'African data stays in Africa, under African control.' },
                { label: 'Compliance', desc: 'Built for African regulations, not retrofitted.' },
                { label: 'Excellence', desc: 'World-class infrastructure, African standards.' },
              ].map((v) => (
                <li key={v.label} className="flex flex-col gap-1">
                  <span className="text-xs font-black uppercase tracking-widest text-white">{v.label}</span>
                  <p className="text-sm text-muted-foreground font-medium">{v.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Team */}
      <SectionContainer className="pb-40 relative overflow-hidden">
        <GlowSphere color="blue" size="lg" className="bottom-0 left-0 opacity-10" />
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">Leadership Team</h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
            Diverse experience across cloud infrastructure, compliance, and African markets
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { name: 'Collins Omondi', role: 'Chief Technology Officer' },
            { name: 'Magic Onyango', role: 'Role' },
            { name: 'Oscar Otieno', role: 'Role' },
          ].map((member) => (
            <div key={member.name} className="glass-card p-10 text-center group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-8 border border-white/5 group-hover:scale-110 transition-transform"></div>
              <h3 className="font-black tracking-tighter text-xl uppercase mb-2">{member.name}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}

