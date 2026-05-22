import { Star, Quote } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const reviews = [
  { name: "Lakshmi Devi", place: "Srikalahasti", text: "Absolutely loved our new modular kitchen! The team was professional, finished on time, and the finish quality is outstanding." },
  { name: "Ramesh Kumar", place: "Tirupati", text: "We got our entire 2BHK done with Sujatha Interiors. Transparent pricing, no hidden charges, and beautiful work." },
  { name: "Padmaja S.", place: "Renigunta", text: "Our PVC wardrobes look premium and feel sturdy. Very happy with the design suggestions they gave us." },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[var(--color-cream)]">
      <div ref={ref} className="fade-in-up max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Kind words</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-balance">
            Loved by families across AP.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-7 border border-border shadow-[var(--shadow-card)]">
              <Quote className="size-7 text-primary/30 mb-4" />
              <div className="flex gap-0.5 mb-3 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-5">"{r.text}"</p>
              <div>
                <div className="font-medium">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.place}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
