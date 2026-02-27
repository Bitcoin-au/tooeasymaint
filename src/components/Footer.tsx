import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/60 text-center py-6 text-sm border-t border-primary-foreground/10 space-y-3">
    <img src={logo} alt="Too Easy Maintenance logo" className="h-12 w-12 rounded-full mx-auto" />
    <p>© {new Date().getFullYear()} Too Easy Maintenance. All rights reserved. Sunshine Coast, QLD.</p>
  </footer>
);

export default Footer;
