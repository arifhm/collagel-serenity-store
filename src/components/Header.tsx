import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6285880473634?text=Halo,%20saya%20tertarik%20dengan%20produk%20Collagel", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-glass backdrop-blur-glass">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-hero-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">C</span>
          </div>
          <span className="font-bold text-xl text-primary">Collagel</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#produk" className="text-foreground hover:text-primary transition-smooth">Produk</a>
          <a href="#manfaat" className="text-foreground hover:text-primary transition-smooth">Manfaat</a>
          <a href="#testimoni" className="text-foreground hover:text-primary transition-smooth">Testimoni</a>
          <a href="#tentang" className="text-foreground hover:text-primary transition-smooth">Tentang</a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden sm:flex"
            onClick={handleWhatsAppClick}
          >
            <Phone className="h-4 w-4 mr-2" />
            Konsultasi
          </Button>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-hero-gradient hover:shadow-glow transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Pesan Sekarang
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;