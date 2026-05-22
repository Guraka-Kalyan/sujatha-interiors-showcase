import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
// REPLACE: Hero background image
import heroImg from "@/assets/hero-interior.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-24 lg:pt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-foreground/70 border border-border">
            <Sparkles className="size-3.5 text-primary" />
            Srikalahasti's trusted interior experts
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Beautiful interiors,
            <span className="block text-primary italic">crafted for your home.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            PVC interiors, modular kitchens & wardrobes — designed with care, built to last,
            and delivered on time across Andhra Pradesh.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-gold)]">
              <a href="#contact">Book Free Consultation <ArrowRight className="size-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-foreground/20">
              <a href="#portfolio">See Our Work</a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 text-sm">
            <Stat n="500+" l="Happy Homes" />
            <Stat n="10+" l="Years Experience" />
            <Stat n="100%" l="On-time Delivery" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl -z-10" />
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] aspect-[4/5]">
            <img src={heroImg} alt="Premium modern interior by Sujatha Interiors" className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-[var(--shadow-card)] border border-border max-w-[220px]">
            <div className="text-2xl font-display text-primary">★ 4.9</div>
            <div className="text-xs text-muted-foreground">Average customer rating from 200+ reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl text-foreground">{n}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wide">{l}</div>
    </div>
  );
}
