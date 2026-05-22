import { Instagram, Facebook, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-cream)] border-t border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-xl font-bold mb-2">
            Sujatha <span className="text-primary">Interiors</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Premium PVC interiors, modular kitchens & wardrobes — crafted with love in Srikalahasti.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#portfolio" className="hover:text-primary">Portfolio</a></li>
            <li><a href="#why-us" className="hover:text-primary">Why Us</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Connect</h4>
          <div className="flex gap-3 mb-4">
            <a href="#" aria-label="Instagram" className="size-9 rounded-full bg-white border border-border flex items-center justify-center hover:text-primary hover:border-primary/40 transition">
              <Instagram className="size-4" />
            </a>
            <a href="#" aria-label="Facebook" className="size-9 rounded-full bg-white border border-border flex items-center justify-center hover:text-primary hover:border-primary/40 transition">
              <Facebook className="size-4" />
            </a>
            <a href="tel:+919000000000" aria-label="Call" className="size-9 rounded-full bg-white border border-border flex items-center justify-center hover:text-primary hover:border-primary/40 transition">
              <Phone className="size-4" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">Srikalahasti, AP — 517644</p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sujatha Interiors. All rights reserved.
      </div>
    </footer>
  );
}
