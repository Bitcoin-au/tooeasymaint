import { Clock3, Heart } from "lucide-react";

const highlights = [
  { icon: Heart, label: "Family Owned", desc: "Friendly local service you can rely on." },
  { icon: Clock3, label: "Experienced", desc: "Hands-on experience across a range of maintenance work." },
];


const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why choose Too Easy Maintenance?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Too Easy Maintenance is a family-owned Sunshine Coast business focused on
            practical, dependable work. Whether it's a regular mowing job, a painting
            refresh, pressure washing, or general property maintenance, the goal is simple:
            make it easier to keep your home looking its best.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
          {highlights.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-1 font-display">{item.label}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
