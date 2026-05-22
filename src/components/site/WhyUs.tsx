import { ShieldCheck, Clock, IndianRupee, Hammer, Users, BadgeCheck } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const points = [
  { icon: BadgeCheck, title: "10+ Years Experience", desc: "A decade of trusted interior work across Andhra Pradesh." },
  { icon: ShieldCheck, title: "Premium Materials", desc: "ISI-certified PVC, branded hardware & moisture-resistant boards." },
  { icon: Clock, title: "On-Time Delivery", desc: "Promised timelines, honoured. No endless waiting." },
  { icon: IndianRupee, title: "Transparent Pricing", desc: "Detailed quotes upfront — no surprise costs later." },
  { icon: Hammer, title: "In-House Craftsmen", desc: "Our own skilled team — never outsourced, always accountable." },
  { icon: Users, title: "500+ Happy Families", desc: "Trusted by homeowners across Srikalahasti & Tirupati." },
];

export function WhyUs() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[var(--color-cream)]">
      <div ref={ref} className="fade-in-up max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Why Sujatha Interiors</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-balance">
            The difference is in the details.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {points.map((p) => (
            <div key={p.title} className="flex gap-4">
              <div className="shrink-0 size-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <p.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-display text-lg mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
