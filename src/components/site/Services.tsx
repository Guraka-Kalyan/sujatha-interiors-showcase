import { ChefHat, Shirt, Layers, Sofa, DoorOpen, Lightbulb } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  { icon: ChefHat, title: "Modular Kitchens", desc: "Smart, durable kitchens tailored to your space — from L-shaped to island layouts." },
  { icon: Shirt, title: "Wardrobes", desc: "Sliding, hinged & walk-in wardrobes in premium finishes that maximize storage." },
  { icon: Layers, title: "PVC Interiors", desc: "Water-resistant, termite-proof PVC interiors — perfect for our climate." },
  { icon: Sofa, title: "Living Room Design", desc: "TV units, wall panels & complete living room makeovers for any budget." },
  { icon: DoorOpen, title: "Bedroom Interiors", desc: "Cozy, functional bedrooms with custom beds, storage & dressing units." },
  { icon: Lightbulb, title: "False Ceiling & Lighting", desc: "Elegant POP & gypsum ceilings paired with mood lighting design." },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="py-20 lg:py-28 bg-[var(--color-cream)]">
      <div ref={ref} className="fade-in-up max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">What we do</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-balance">
            Complete home interiors, under one roof.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            From the first sketch to the final handover — we design, build, and install every detail of your home.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-white rounded-2xl p-7 border border-border hover:border-primary/40 hover:shadow-[var(--shadow-card)] transition-all">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="size-6" />
              </div>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
