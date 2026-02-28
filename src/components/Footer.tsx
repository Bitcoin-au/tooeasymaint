import logo from "@/assets/logo.png";

const Footer = () =>
  <footer className="bg-foreground text-primary-foreground/60 text-center py-6 text-sm border-t border-primary-foreground/10 space-y-3 flex flex-col items-center">
    <img src={logo} alt="Too Easy Maintenance logo" className="h-16 w-16 object-contain" />
    <p>© {new Date().getFullYear()} Too Easy Maintenance. All rights reserved. Sunshine Coast, QLD.</p>
  </footer>;

export default Footer;
