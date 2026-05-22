import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Sujatha <span className="text-primary">Interiors</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919000000000" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary">
            <Phone className="size-4" /> +91 90000 00000
          </a>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#contact">Get Free Quote</a>
          </Button>
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-5 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-primary">
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>Get Free Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
