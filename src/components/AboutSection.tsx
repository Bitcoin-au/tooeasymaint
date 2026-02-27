import { Shield, Clock, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Too Easy Maintenance</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            We're a family-owned business with over 10 years of experience keeping homes and
            gardens in top shape across the Sunshine Coast. No job is too big or too small –
            we treat every home like our own.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: Shield, label: "Fully Insured", desc: "Peace of mind on every job" },
            { icon: Clock, label: "10+ Years", desc: "Experienced & dependable" },
            { icon: Heart, label: "Family Owned", desc: "We care about your home" },
          ].map((item) => (
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
