import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Sparkles } from "lucide-react";
import heroImage from "@/assets/Collagel_new2.png";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6285880473634?text=Halo,%20saya%20tertarik%20dengan%20produk%20Collagel%20dan%20ingin%20tahu%20lebih%20lanjut", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>

      <div className="container grid lg:grid-cols-2 gap-10 items-center py-10">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30">
                <Shield className="h-3 w-3 mr-1" />
                BPOM Certified
              </Badge>
              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30">
                <Award className="h-3 w-3 mr-1" />
                Halal MUI
              </Badge>
              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30">
                <Sparkles className="h-3 w-3 mr-1" />
                Premium Quality
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Collagel
              </span>
              <br />
              <span className="text-3xl text-foreground">
                Minuman Jeli Sehat & Halal
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Minuman kolagen (<span className="italic">Hydrolyzed Halal Fish Collagen</span>) yang telah tersertifikasi BPOM dan Halal MUI,
              aman dikonsumsi harian untuk <span className="font-bold text-primary">kesehatan kulit, persendian, rambut dan kecantikan dari dalam</span>.
              Terutama efektif untuk pemulihan paska operasi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-hero-gradient hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            >
              Pesan Sekarang - Gratis Konsultasi
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/5"
            >
              Chat WhatsApp
            </Button> */}
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-muted-foreground">
            <div className="text-center">
              <div className="font-bold text-2xl text-primary">1000+</div>
              <div>Pelanggan Puas</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="font-bold text-2xl text-primary">100%</div>
              <div>Halal & Aman</div>
            </div>
            {/* <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="font-bold text-2xl text-primary">30 Hari</div>
              <div>Garansi Hasil</div>
            </div> */}
          </div>
        </div>

        {/* Right Content - Product Image */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-glow">
            <img
              src={heroImage}
              alt="Collagel - Minuman Jeli Sehat dan Halal"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
          </div>

          {/* Floating Elements */}
          {/* <div className="absolute -top-4 -right-4 bg-accent rounded-full p-4 shadow-soft animate-pulse">
            <Sparkles className="h-6 w-6 text-accent-foreground" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-primary rounded-full p-4 shadow-soft">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;