import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Quote</h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Ready to get started? Fill out the form below or give us a call.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input placeholder="Your Name" required className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
            <Input type="email" placeholder="Email Address" required className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
            <Input type="tel" placeholder="Phone Number" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
            <Select>
              <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                <SelectValue placeholder="Select a Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lawn">Lawn Mowing</SelectItem>
                <SelectItem value="painting">Painting</SelectItem>
                <SelectItem value="odd-jobs">Odd Jobs</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Tell us about your project..." rows={4} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
            <Button asChild size="lg" className="w-full text-lg py-6">
              <a href="">Send Message</a>
            </Button>
          </form>
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-lg">Call Us</p>
                <a className="text-primary-foreground/70 hover:text-primary transition-colors" href="tel:0498815402">0498 815 402    </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-lg">Email</p>
                <a href="mailto:info@tooeasymaintenance.com.au" className="text-primary-foreground/70 hover:text-primary transition-colors">tooeasymaintenance1@gmail.com </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-lg">Serving</p>
                <p className="text-primary-foreground/70">The Sunshine Coast Area, QLD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ContactSection;