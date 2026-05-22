import { useReveal } from "@/hooks/use-reveal";
// REPLACE: Portfolio image 1 - Modular Kitchen
import kitchen from "@/assets/project-kitchen.png";
// REPLACE: Portfolio image 2 - Grey Wardrobe
import wardrobeGrey from "@/assets/project-wardrobe-grey.png";
// REPLACE: Portfolio image 3 - Wooden Wardrobe
import wardrobeWood from "@/assets/project-wardrobe-wood.png";
// REPLACE: Portfolio image 4 - Living Room
import livingRoom from "@/assets/project-living-room.png";

const projects = [
  { img: kitchen, title: "Modern Modular Kitchen", tag: "Kitchen", location: "Srikalahasti" },
  { img: wardrobeGrey, title: "Sliding Wardrobe in Slate Grey", tag: "Wardrobe", location: "Tirupati" },
  { img: wardrobeWood, title: "Warm Wood Hinged Wardrobe", tag: "Wardrobe", location: "Renigunta" },
  { img: livingRoom, title: "Complete Living Room Makeover", tag: "Living Room", location: "Srikalahasti" },
];

export function Portfolio() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-background">
      <div ref={ref} className="fade-in-up max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Our work</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-balance">
              Real homes. Real craftsmanship.
            </h2>
          </div>
          <a href="#contact" className="text-primary font-medium hover:underline">Start your project →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl bg-secondary aspect-[4/3]">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="inline-block text-xs uppercase tracking-widest bg-primary px-2.5 py-1 rounded mb-2">{p.tag}</span>
                <h3 className="font-display text-xl sm:text-2xl">{p.title}</h3>
                <p className="text-sm text-white/80 mt-1">{p.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
