import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().max(20).optional(),
  suburb: z.string().trim().max(100).optional(),
  service: z.string().optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value || undefined,
      suburb: (form.elements.namedItem("suburb") as HTMLInputElement).value || undefined,
      service: service || undefined,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
          body: JSON.stringify(result.data),
        }
      );

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || "Failed to send message");
      }

      form.reset();
      setService("");
      setShowSuccess(true);
    } catch (err) {
      console.error("Send error:", err);
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again or call us directly.";
      toast({
        title: "Failed to send",
        description: `${message} If it keeps happening, please call 0498 815 402 or email tooeasymaintenance1@gmail.com.`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader className="items-center">
          <CheckCircle className="w-16 h-16 text-primary mb-2" />
          <DialogTitle className="text-2xl">Message Sent!</DialogTitle>
          <DialogDescription className="text-base">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <Button onClick={() => setShowSuccess(false)} className="mt-4">Close</Button>
      </DialogContent>
    </Dialog>
    <section id="contact" className="py-20 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Quote</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Need help with mowing, painting, pressure washing, repairs, or general
            property maintenance? Send through your details below or give us a call.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Input name="name" placeholder="Your Name" required className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input name="email" type="email" placeholder="Email Address" required className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>
            <Input name="phone" type="tel" placeholder="Phone Number" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
            <Input name="suburb" placeholder="Suburb" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
            <Select value={service} onValueChange={setService}>
              <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                <SelectValue placeholder="Select a Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lawn-mowing">Lawn Mowing</SelectItem>
                <SelectItem value="painting">Painting</SelectItem>
                <SelectItem value="pressure-washing">Pressure Washing</SelectItem>
                <SelectItem value="odd-jobs-maintenance">Odd Jobs & Maintenance</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <div>
              <Textarea name="message" placeholder="Tell us about your project..." rows={4} required className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" size="lg" className="w-full text-lg py-6" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-lg">Call Us</p>
                <a className="text-primary-foreground/70 hover:text-primary transition-colors" href="tel:0498815402">0498 815 402</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-lg">Email</p>
                <a href="mailto:tooeasymaintenance1@gmail.com" className="text-primary-foreground/70 hover:text-primary transition-colors">tooeasymaintenance1@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-lg">Serving</p>
                <p className="text-primary-foreground/70">Sunshine Coast, QLD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;
