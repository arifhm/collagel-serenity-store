import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import CollagelLogo from "@/assets/Collagel_logo.png";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6285880473634?text=Halo,%20saya%20tertarik%20dengan%20produk%20Collagel", "_blank");
  };

  const navLinks = [
    { to: "/#produk", label: "Produk" },
    { to: "/#manfaat", label: "Manfaat" },
    { to: "/#testimoni", label: "Testimoni" },
    { to: "/kemitraan", label: "Kemitraan" },
    { to: "/tentang", label: "Tentang" },
  ];

  const NavLink = ({ to, label, className = "", onClick = undefined }) => {
    const location = useLocation();
    const linkClasses = cn("text-foreground hover:text-primary transition-smooth", className);

    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = to.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      if (onClick) {
        onClick();
      }
    };

    if (to.startsWith('/') && to.includes('#')) {
      if (location.pathname === '/') {
        return <a href={to} className={linkClasses} onClick={handleScroll}>{label}</a>;
      } else {
        return <Link to={to} className={linkClasses}>{label}</Link>;
      }
    }

    return <Link to={to} className={linkClasses} onClick={onClick}>{label}</Link>;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-glass backdrop-blur-glass">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={CollagelLogo} alt="Collagel Logo" className="h-8" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          {/* <Button
            variant="outline"
            className="hidden sm:flex bg-[#128c7e] hover:bg-[#1ebe5d] text-white"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Konsultasi
          </Button> */}
          <Button
            onClick={handleWhatsAppClick}
            className="bg-hero-gradient hover:shadow-glow transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Pesan Sekarang
          </Button>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <NavLink key={link.label} {...link} className="text-lg" />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;