import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div ref={ref} className="fade-in-up max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2 space-y-7">
            <div>
              <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Get in touch</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-balance">
                Let's design your dream home.
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Tell us about your space — we'll get back within 24 hours with a free consultation.
              </p>
            </div>
            <div className="space-y-4">
              <Info icon={Phone} label="Call us" value="+91 90000 00000" href="tel:+919000000000" />
              <Info icon={Mail} label="Email" value="hello@sujathainteriors.com" href="mailto:hello@sujathainteriors.com" />
              <Info icon={MapPin} label="Visit our studio" value="Srikalahasti, Andhra Pradesh — 517644" />
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 bg-[var(--color-cream)] rounded-2xl p-6 sm:p-9 border border-border space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name"><Input required placeholder="Lakshmi Devi" /></Field>
              <Field label="Phone"><Input required type="tel" placeholder="+91 90000 00000" /></Field>
            </div>
            <Field label="Email"><Input type="email" placeholder="you@example.com" /></Field>
            <Field label="Service interested in">
              <select className="w-full h-10 rounded-md border border-input bg-white px-3 text-sm">
                <option>Modular Kitchen</option>
                <option>Wardrobes</option>
                <option>PVC Interiors</option>
                <option>Full Home Interior</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Tell us about your project">
              <Textarea rows={4} placeholder="Size of home, rooms to design, timeline…" />
            </Field>
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              {sent ? "Thank you! We'll be in touch." : (<>Send Enquiry <Send className="size-4" /></>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground/80 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function Info({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-medium text-foreground mt-0.5">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80 transition">{inner}</a> : inner;
}
