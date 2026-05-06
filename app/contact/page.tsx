"use client";

import { useState } from "react";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { SectionContainer } from "@/components/section-container";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { GlowSphere } from "@/components/glow-sphere";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "infrastructure",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        interest: "infrastructure",
        message: "",
      });
    }, 1000);
  };

  return (
    <LayoutWrapper>
      {/* Hero */}
      <SectionContainer className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        <GlowSphere
          color="blue"
          size="xl"
          className="-top-40 -left-40 opacity-10"
        />
        <div className="max-w-4xl">
          <p className="text-xs font-black text-secondary uppercase tracking-[0.3em] mb-6 inline-block border-b-2 border-secondary pb-1">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent uppercase">
            LET&apos;S
            <br />
            TALK
          </h1>
          <p className="text-xl text-muted-foreground/80 max-w-2xl leading-relaxed font-medium">
            Have questions about Matmon? Ready to get started? Interested in a
            partnership? We&apos;d love to hear from you.
          </p>
        </div>
      </SectionContainer>

      {/* Contact Form & Info */}
      <SectionContainer className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-12 relative overflow-hidden">
              <GlowSphere
                color="red"
                size="md"
                className="-bottom-20 -right-20 opacity-10"
              />
              <h2 className="text-3xl font-black tracking-tighter mb-10 text-white uppercase">
                Request Infrastructure Audit
              </h2>

              {submitted ? (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 rounded-full glass border-primary/50 flex items-center justify-center mx-auto mb-8 shadow-glow-red">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter mb-4 text-white uppercase">
                    Message Sent
                  </h3>
                  <p className="text-muted-foreground mb-10 max-w-sm mx-auto font-medium">
                    We&apos;ve received your request. A specialist will be in
                    touch within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="border-white/10 hover:bg-white/5 text-xs font-black uppercase tracking-widest px-8"
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[10px] font-black uppercase tracking-widest text-muted-foreground"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/[0.03] border-white/5 focus:border-primary/50 focus:bg-white/[0.05] rounded-none px-4 py-4 text-sm font-bold text-white transition-all outline-none"
                      placeholder="ENTER NAME"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-[10px] font-black uppercase tracking-widest text-muted-foreground"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border-white/5 focus:border-primary/50 focus:bg-white/[0.05] rounded-none px-4 py-4 text-sm font-bold text-white transition-all outline-none"
                      placeholder="ENTER COMPANY"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[10px] font-black uppercase tracking-widest text-muted-foreground"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/[0.03] border-white/5 focus:border-primary/50 focus:bg-white/[0.05] rounded-none px-4 py-4 text-sm font-bold text-white transition-all outline-none"
                      placeholder="NAME@PLATFORM.COM"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-[10px] font-black uppercase tracking-widest text-muted-foreground"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border-white/5 focus:border-primary/50 focus:bg-white/[0.05] rounded-none px-4 py-4 text-sm font-bold text-white transition-all outline-none"
                      placeholder="+254"
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label
                      htmlFor="interest"
                      className="text-[10px] font-black uppercase tracking-widest text-muted-foreground"
                    >
                      Service Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border-white/5 focus:border-primary/50 focus:bg-white/[0.05] rounded-none px-4 py-4 text-sm font-bold text-white transition-all outline-none appearance-none"
                    >
                      <option value="infrastructure" className="bg-black">
                        INFRASTRUCTURE AUDIT
                      </option>
                      <option value="construction" className="bg-black">
                        SMART BUILD INQUIRY
                      </option>
                      <option value="intelligence" className="bg-black">
                        URBAN INTELLIGENCE DEMO
                      </option>
                      <option value="partnership" className="bg-black">
                        GENERAL PARTNERSHIP
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-[10px] font-black uppercase tracking-widest text-muted-foreground"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-white/[0.03] border-white/5 focus:border-primary/50 focus:bg-white/[0.05] rounded-none px-4 py-4 text-sm font-bold text-white transition-all outline-none resize-none"
                      placeholder="TELL US ABOUT YOUR INFRASTRUCTURE NEEDS..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="sm:col-span-2 w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest py-8 rounded-none group"
                  >
                    {loading ? (
                      "TRANSMITTING..."
                    ) : (
                      <span className="flex items-center gap-3">
                        Execute Request{" "}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">
                Operations Hub
              </h3>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xl font-black text-white uppercase tracking-tighter">
                    Kisumu Center
                  </p>
                  <p className="text-sm text-muted-foreground font-medium mt-1">
                    Data Center 1<br />
                    Kisumu, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary mb-6">
                Digital Access
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-secondary shrink-0" />
                  <div>
                    <p className="text-xs font-black text-white uppercase">
                      Inquiry
                    </p>
                    <a
                      href="mailto:dev@matmonafrica.com"
                      className="text-sm text-muted-foreground hover:text-white transition-colors font-medium"
                    >
                      dev@matmonafrica.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-secondary shrink-0" />
                  <div>
                    <p className="text-xs font-black text-white uppercase">
                      Support
                    </p>
                    <a
                      href="tel:+254"
                      className="text-sm text-muted-foreground hover:text-white transition-colors font-medium"
                    >
                      +254729931532
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 border-white/5">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-white mb-6">
                Live Status
              </h3>
              <dl className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <dt className="font-black text-muted-foreground uppercase">
                    Network
                  </dt>
                  <dd className="font-black text-secondary uppercase animate-pulse">
                    Online
                  </dd>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <dt className="font-black text-muted-foreground uppercase">
                    Support
                  </dt>
                  <dd className="font-black text-white uppercase">
                    24/7 ACTIVE
                  </dd>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <dt className="font-black text-muted-foreground uppercase">
                    Timezone
                  </dt>
                  <dd className="font-black text-white uppercase">UTC +3</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ */}
      <SectionContainer className="py-32 pb-48">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">
            TRANSPARENCY
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
            Frequently Asked Questions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              q: "How quickly can we get started?",
              a: "For colocation (Phase 0), you can be operational within 48 hours of signing an agreement. We handle all hardware setup and integration.",
            },
            {
              q: "What is the minimum commitment?",
              a: "Colocation starts with a single cabinet for 12 months. Pricing is flexible based on your needs. Contact us to discuss options.",
            },
            {
              q: "Is my data really staying in Kenya?",
              a: "Yes. By default, all data remains in Kenya. Cross-border transfers require explicit written consent and proper DPA documentation.",
            },
            {
              q: "What happens if I need more capacity?",
              a: "We can provision additional resources within days. There are no penalties for scaling up or down your infrastructure with advance notice.",
            },
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-10 bg-white/[0.02]">
              <h3 className="font-black text-lg text-white uppercase tracking-tighter mb-4">
                {item.q}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}
