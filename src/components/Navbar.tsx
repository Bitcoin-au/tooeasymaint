import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          
          <span className="font-display text-xl font-bold text-primary">Too Easy Maintenance</span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {["services", "contact"].map((id) =>
          <button key={id} onClick={() => scrollTo(id)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors capitalize">
              {id}
            </button>
          )}
          <Button size="sm" onClick={() => scrollTo("contact")}>Get a Quote</Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open &&
      <div className="md:hidden bg-background border-b px-4 pb-4 space-y-3">
          {["services", "contact"].map((id) =>
        <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left py-2 text-muted-foreground hover:text-foreground capitalize">
              {id}
            </button>
        )}
          <Button className="w-full" onClick={() => scrollTo("contact")}>Get a Quote</Button>
        </div>
      }
    </nav>);

};

export default Navbar;