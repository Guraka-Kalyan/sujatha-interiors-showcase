import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { n: "01", t: "Consultation", d: "Share your space, ideas & budget — free of cost." },
  { n: "02", t: "Design", d: "We create 3D designs tailored to your home and lifestyle." },
  { n: "03", t: "Production", d: "Our team builds your interiors with premium materials." },
  { n: "04", t: "Installation", d: "Quick, clean installation — and a home you'll love." },
];

export function Process() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div ref={ref} className="fade-in-up max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">How it works</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-balance">
            Simple, transparent, stress-free.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative p-7 rounded-2xl border border-border bg-[var(--color-cream)]">
              <div className="font-display text-5xl text-primary/30 mb-3">{s.n}</div>
              <h3 className="font-display text-xl mb-2">{s.t}</h3>
              <p className="text-muted-foreground text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
