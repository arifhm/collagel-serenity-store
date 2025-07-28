import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Award } from "lucide-react";

const Product = () => {
  const handleWhatsAppClick = (packageType: string) => {
    const message = `Halo, saya tertarik dengan ${packageType} Collagel. Bisa tolong berikan informasi lebih lanjut dan harga terbaiknya?`;
    window.open(`https://wa.me/6285880473634?text=${encodeURIComponent(message)}`, "_blank");
  };

  const variants = ["Original", "Strawberry", "Jahe", "Mint", "Jeruk"];

  const packages = [
    {
      name: "Size 100ml",
      price: "Rp 20.000",
      features: [
        "Collagel 100ml",
        "Tersedia 5 Varian Rasa",
        "Konsultasi WhatsApp Gratis",
        "Gratis Ongkir Minimal 10 botol"
      ],
      popular: false
    },
    {
      name: "Size 150ml",
      price: "Rp 25.000",
      features: [
        "Collagel 150ml",
        "Tersedia 5 Varian Rasa",
        "Konsultasi WhatsApp Gratis",
        "Gratis Ongkir Minimal 8 botol"
      ],
      popular: true
    },
    {
      name: "Size 300ml",
      price: "Rp 45.000",
      features: [
        "Collagel 300ml",
        "Tersedia 5 Varian Rasa",
        "Konsultasi Pribadi dengan Ahli",
        "Gratis Ongkir Minimal 5 botol"
      ],
      popular: false
    }
  ];

  const partnershipPackages = [
    {
      name: "Collagel LC15",
      size: "500ml",
      price: "Rp 200.000",
      features: [
        "Collagel LC15 500ml",
        "Khusus Mitra & Reseller",
        "Margin Keuntungan Tinggi",
        "Support Marketing Material"
      ]
    },
    {
      name: "Collagel LC15",
      size: "1 Liter",
      price: "Rp 400.000",
      features: [
        "Collagel LC15 1 Liter",
        "Khusus Mitra & Reseller",
        "Margin Keuntungan Maksimal",
        "Support Marketing Material"
      ]
    }
  ];

  return (
    <section id="produk" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Pilih Ukuran</span>
            <br />
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Collagel Terbaik
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tersedia dalam 3 ukuran dengan 5 varian rasa pilihan. 
            Semua produk bergaransi kualitas dan konsultasi gratis.
          </p>
          
          {/* Varian Rasa */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Varian Rasa Tersedia:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {variants.map((variant, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                  {variant}
                </Badge>
              ))}
            </div>
          </div>
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
                    <p className="text-muted-foreground">Berbagai varian rasa</p>
                  </div>

                   {/* Pricing */}
                   <div className="space-y-2">
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
                     Pesan Sekarang
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

        {/* Partnership Section */}
        <div className="mt-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-foreground">Program</span>
              <br />
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Kemitraan & Reseller
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bergabunglah dengan program kemitraan kami dan dapatkan keuntungan berlipat
            </p>
          </div>

          {/* Benefits & Requirements */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Benefit Mitra</h3>
              <div className="space-y-3">
                {[
                  "Margin keuntungan hingga 40%",
                  "Support marketing material lengkap",
                  "Training produk dan penjualan",
                  "Sistem dropship tanpa stok",
                  "Dukungan tim marketing profesional"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Syarat Kemitraan</h3>
              <div className="space-y-3">
                {[
                  "Berusia minimal 18 tahun",
                  "Memiliki smartphone dan koneksi internet",
                  "Komitmen untuk aktif berjualan",
                  "Modal awal minimum Rp 200.000",
                  "Siap mengikuti training dan panduan"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Partnership Packages */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {partnershipPackages.map((pkg, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                      <p className="text-muted-foreground">{pkg.size}</p>
                    </div>

                    <div className="text-3xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                      {pkg.price}
                    </div>

                    <div className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      onClick={() => handleWhatsAppClick(`Kemitraan ${pkg.name} ${pkg.size}`)}
                      className="w-full py-4 bg-hero-gradient hover:shadow-glow"
                    >
                      Daftar Mitra
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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