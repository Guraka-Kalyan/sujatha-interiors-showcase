import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Sofa, ChefHat, Layers, Star, Sparkle } from "lucide-react";
import livingImg from "@/assets/project-living-room.png";
import kitchenImg from "@/assets/project-kitchen.png";
import wardrobeImg from "@/assets/project-wardrobe-wood.png";

const SLIDES = [
  {
    id: "living",
    category: "Living Rooms",
    tagline: "Elegant PVC wall panels & modern false ceilings",
    titleStart: "Beautiful interiors, ",
    titleHighlight: "crafted for your home.",
    description: "Premium PVC wall panels, modular ceilings, and luxury lighting designs designed with care, built to last, and delivered on time.",
    image: livingImg,
    subtitle: "Modern Luxury PVC Wall Panelling",
    icon: Sofa,
    statNumber: "500+",
    statLabel: "Happy Homes",
    accentGlow: "from-amber-500/20 via-primary/5 to-transparent",
    pillText: "Srikalahasti's Trusted PVC Specialists",
  },
  {
    id: "kitchen",
    category: "Modular Kitchens",
    tagline: "Smart, space-saving layouts with acrylic finishes",
    titleStart: "Exquisite kitchens, ",
    titleHighlight: "designed for modern life.",
    description: "Highly durable PVC modular kitchens featuring acrylic styling, silent soft-close cabinets, and customized luxury pantry spaces.",
    image: kitchenImg,
    subtitle: "Premium Acrylic Modular Kitchen",
    icon: ChefHat,
    statNumber: "10+ Years",
    statLabel: "Of Design Trust",
    accentGlow: "from-amber-500/10 via-primary/10 to-transparent",
    pillText: "Smart Modular Kitchen Experts",
  },
  {
    id: "wardrobe",
    category: "Luxury Wardrobes",
    tagline: "High-gloss finishes & custom storage sliding systems",
    titleStart: "Bespoke wardrobes, ",
    titleHighlight: "built to inspire you.",
    description: "Custom built-in sliding wardrobes, integrated premium dressers, and high-gloss PVC finishes optimized for spacious storage.",
    image: wardrobeImg,
    subtitle: "Luxury Wooden Finish Wardrobes",
    icon: Layers,
    statNumber: "100%",
    statLabel: "On-time Delivery",
    accentGlow: "from-amber-500/15 via-primary/5 to-transparent",
    pillText: "Bespoke Storage & Wardrobes",
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = SLIDES[activeIndex];

  return (
    <section id="home" className="relative pt-24 lg:pt-32 pb-16 overflow-hidden bg-gradient-to-b from-secondary/50 via-background to-background">
      {/* Premium Ambient Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 via-gold-soft/5 to-transparent rounded-full blur-3xl -z-20 pointer-events-none" />
      <div className="absolute top-[20%] left-[-100px] w-[350px] h-[350px] bg-primary/3 rounded-full blur-3xl -z-20 pointer-events-none" />
      
      {/* Decorative Golden Dots Grid */}
      <div className="absolute top-12 left-6 w-32 h-32 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:16px_16px] opacity-15 -z-10" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column - Content (5 cols desktop) */}
        <div className="lg:col-span-5 space-y-7 z-10">
          
          {/* Shimmer Pill Badge */}
          <div key={`pill-${activeIndex}`} className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm backdrop-blur-md hover:bg-primary/10 transition-colors animate-fade-in">
            <Sparkles className="size-3.5 text-primary animate-pulse" />
            <span>{slide.pillText}</span>
          </div>

          {/* Dynamic Typographic Headline */}
          <div key={`title-${activeIndex}`} className="space-y-4 animate-fade-in">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.08] text-balance font-bold text-foreground">
              {slide.titleStart}
              <span className="block bg-gradient-to-r from-primary via-primary to-amber-600 bg-clip-text text-transparent italic font-normal pt-1">
                {slide.titleHighlight}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-sans">
              {slide.description}
            </p>
          </div>

          {/* Luxury CTA Group */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/95 text-primary-foreground shadow-[var(--shadow-gold)] font-medium tracking-wide group transition-all duration-300 transform hover:-translate-y-0.5">
              <a href="#contact" className="flex items-center gap-2">
                Book Free Consultation 
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-secondary/80 font-medium tracking-wide hover:border-primary transition-all duration-300 transform hover:-translate-y-0.5">
              <a href="#portfolio">See Our Work</a>
            </Button>
          </div>

          {/* Premium Custom Interactive Card Navigation Grid (Replaces old static statistics) */}
          <div className="pt-6 space-y-3">
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Explore Our Capabilities
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {SLIDES.map((s, idx) => {
                const Icon = s.icon;
                const isActive = idx === activeIndex;
                return (
                  <div 
                    key={s.id}
                    onClick={() => {
                      setActiveIndex(idx);
                      setIsPaused(true); // Stop auto-rotation when user clicks
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={`cursor-pointer relative p-3 rounded-xl border text-left transition-all duration-300 select-none group ${
                      isActive 
                        ? "bg-white dark:bg-black/60 border-primary/60 shadow-[0_10px_20px_rgba(200,151,58,0.12)] scale-[1.03] -translate-y-1 z-10" 
                        : "bg-white/40 dark:bg-black/10 border-border/60 hover:bg-white/80 hover:border-primary/30 hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="flex items-center gap-2 justify-between">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                        {s.category}
                      </span>
                      <Icon className={`size-3.5 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-primary" : "text-muted-foreground/60"}`} />
                    </div>
                    
                    <div className="mt-1.5 font-display text-lg font-bold text-foreground leading-none">{s.statNumber}</div>
                    <div className="text-[9px] text-muted-foreground uppercase tracking-widest mt-0.5 font-medium">{s.statLabel}</div>
                    
                    {/* Active progress tracking timeline under card */}
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-border/20 rounded-b-xl overflow-hidden">
                      {isActive && (
                        <div 
                          className="h-full bg-primary"
                          style={{
                            animation: isPaused ? "none" : "progress 6s linear forwards",
                            width: isPaused ? "100%" : "0%",
                          }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column - Architectural Arched Window Showcase (7 cols desktop) */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative">
          
          {/* Gold architectural light aura behind frame */}
          <div className={`absolute w-[80%] h-[80%] bg-gradient-to-tr ${slide.accentGlow} rounded-t-[180px] blur-3xl -z-10 transition-all duration-700`} />

          {/* Master Arched Showcase Container */}
          <div 
            className="relative w-full max-w-[430px] aspect-[4/5] z-10 group/showcase"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            {/* Elegant Double Gold Gilded Architectural Arch Frame */}
            <div className="relative w-full h-full rounded-t-[200px] rounded-b-3xl border border-primary/25 p-2 bg-background/30 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-[1.015]">
              <div className="relative w-full h-full rounded-t-[190px] rounded-b-2xl border-2 border-primary/45 p-2.5 bg-background/50">
                <div className="relative w-full h-full rounded-t-[178px] rounded-b-xl overflow-hidden border border-primary/20 bg-muted">
                  
                  {/* Dynamic Image with Scale Transition */}
                  <img 
                    key={slide.image}
                    src={slide.image} 
                    alt={slide.subtitle} 
                    className="w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover/showcase:scale-105 animate-fade-in" 
                  />
                  
                  {/* Luxury Semi-Transparent Backdrop Info Tag inside the Image */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 text-white pt-20">
                    <span className="text-[9px] uppercase tracking-widest text-primary font-bold">{slide.category}</span>
                    <h3 className="font-display text-lg sm:text-xl font-bold mt-1 text-white/95">{slide.subtitle}</h3>
                    <p className="text-white/70 text-xs mt-1 leading-normal font-sans line-clamp-2">{slide.tagline}</p>
                  </div>

                </div>
              </div>
            </div>

            {/* Floating Luxury rating Badge with continuous slow floating animation */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 dark:bg-black/90 rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.12)] border border-primary/25 max-w-[210px] backdrop-blur-md transition-transform duration-300 hover:scale-105 z-20 animate-float">
              <div className="flex items-center gap-1 text-primary text-xl font-bold font-display">
                <Star className="size-5 fill-primary text-primary" />
                <span>4.9</span>
                <span className="text-xs text-muted-foreground font-sans font-normal ml-1">/ 5 Rating</span>
              </div>
              <div className="text-[10px] text-muted-foreground leading-normal font-sans font-medium mt-1">
                Average customer rating from 200+ satisfied clients across AP.
              </div>
            </div>

            {/* Floating Quality Certificate Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full size-16 shadow-[var(--shadow-gold)] flex flex-col items-center justify-center border-2 border-white/20 transition-all duration-300 hover:rotate-12 hover:scale-110 cursor-pointer z-20">
              <span className="text-[10px] font-bold tracking-widest leading-none">100%</span>
              <span className="text-[8px] font-bold uppercase tracking-tighter mt-0.5">Genuine</span>
              <Sparkle className="size-3.5 text-primary-foreground/80 mt-1 fill-white" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
