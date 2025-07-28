import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Award } from "lucide-react";

const Product = () => {
  const handleWhatsAppClick = (packageType: string) => {
    const message = `Halo, saya tertarik dengan paket ${packageType} Hydrolyzed Halal Fish Collagen. Bisa tolong berikan informasi lebih lanjut dan harga terbaiknya?`;
    window.open(`https://wa.me/6285880473634?text=${encodeURIComponent(message)}`, "_blank");
  };

  const packages = [
    {
      name: "Paket Pemula",
      duration: "1 Bulan",
      originalPrice: "Rp 399.000",
      price: "Rp 299.000",
      savings: "Hemat Rp 100.000",
      features: [
        "1 Botol Collagen Premium (30 sachet)",
        "Panduan Konsumsi Lengkap",
        "Konsultasi WhatsApp Gratis",
        "Garansi Uang Kembali"
      ],
      popular: false
    },
    {
      name: "Paket Optimal",
      duration: "3 Bulan",
      originalPrice: "Rp 1.197.000",
      price: "Rp 799.000",
      savings: "Hemat Rp 398.000",
      features: [
        "3 Botol Collagen Premium (90 sachet)",
        "BONUS: E-book Panduan Hidup Sehat",
        "Konsultasi Pribadi dengan Ahli",
        "Tracking Progress Mingguan",
        "Garansi Hasil atau Uang Kembali"
      ],
      popular: true
    },
    {
      name: "Paket Transformasi",
      duration: "6 Bulan",
      originalPrice: "Rp 2.394.000",
      price: "Rp 1.399.000",
      savings: "Hemat Rp 995.000",
      features: [
        "6 Botol Collagen Premium (180 sachet)",
        "BONUS: Vitamin C + Zinc Supplement",
        "Program Diet & Olahraga Personal",
        "Konsultasi Video Call Bulanan",
        "Certificate of Transformation",
        "Garansi Seumur Hidup untuk Produk"
      ],
      popular: false
    }
  ];

  return (
    <section id="produk" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Pilih Paket</span>
            <br />
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Terbaik untuk Anda
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dapatkan hasil maksimal dengan paket yang disesuaikan kebutuhan dan budget Anda. 
            Semua paket dilengkapi garansi dan konsultasi gratis.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-glow ${
                pkg.popular 
                  ? 'border-primary shadow-glow scale-105 bg-gradient-to-b from-primary/5 to-transparent' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-accent-gradient text-accent-foreground text-center py-2 font-semibold">
                    <Star className="inline h-4 w-4 mr-1" />
                    PALING POPULER
                  </div>
                </div>
              )}
              
              <CardContent className={`p-8 ${pkg.popular ? 'pt-16' : ''}`}>
                <div className="text-center space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                    <p className="text-muted-foreground">{pkg.duration}</p>
                    <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                      {pkg.savings}
                    </Badge>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground line-through">
                      {pkg.originalPrice}
                    </div>
                    <div className="text-4xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                      {pkg.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      *Harga dapat berubah sewaktu-waktu
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <div className="text-left space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={() => handleWhatsAppClick(pkg.name)}
                    className={`w-full py-6 text-lg transition-all duration-300 ${
                      pkg.popular 
                        ? 'bg-hero-gradient hover:shadow-glow' 
                        : 'bg-hero-gradient hover:shadow-glow'
                    }`}
                  >
                    Pesan {pkg.name}
                  </Button>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center space-x-4 pt-4">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Shield className="h-4 w-4 text-accent" />
                      <span>BPOM</span>
                    </div>
                    <div className="w-px h-4 bg-border"></div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Award className="h-4 w-4 text-accent" />
                      <span>Halal MUI</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-glass backdrop-blur-glass rounded-2xl border border-primary/20 shadow-soft">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Masih Ragu?</h3>
              <p className="text-muted-foreground max-w-md">
                Chat langsung dengan tim ahli kami untuk konsultasi gratis dan dapatkan rekomendasi terbaik
              </p>
              <Button 
                onClick={() => handleWhatsAppClick("Konsultasi")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Konsultasi Gratis Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;