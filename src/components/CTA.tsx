import { Button } from "@/components/ui/button";
import { Clock, Gift, Shield } from "lucide-react";

const CTA = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6285880473634?text=Halo,%20saya%20tertarik%20dengan%20promo%20terbatas%20Collagel.%20Bisa%20tolong%20berikan%20informasi%20lengkapnya?", "_blank");
  };

  return (
    <section className="py-20 bg-hero-gradient text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-primary-foreground"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full border-2 border-primary-foreground"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 rounded-full border-2 border-primary-foreground"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 rounded-full border-2 border-primary-foreground"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Jangan Tunggu Lagi!
              <br />
              <span className="text-accent">Transformasi Dimulai Hari Ini</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Dapatkan kulit sehat, sendi kuat, dan rambut indah dengan 
              Collagel - minuman jeli kolagen halal terbaik. Promo terbatas!
            </p>
          </div>

          {/* Urgency Elements */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Promo Terbatas</h3>
              <p className="text-sm text-primary-foreground/80">
                Hanya untuk 100 pembeli pertama bulan ini
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Gift className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Bonus Eksklusif</h3>
              <p className="text-sm text-primary-foreground/80">
                Gratis konsultasi + panduan hidup sehat
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Garansi Uang Kembali</h3>
              <p className="text-sm text-primary-foreground/80">
                100% uang kembali jika tidak puas
              </p>
            </div>
          </div>

          {/* Price Highlight */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="text-lg text-primary-foreground/80">Harga Normal</div>
              <div className="text-2xl line-through text-primary-foreground/60">Rp 250.000</div>
              <div className="text-5xl font-bold text-accent">Rp 199.000</div>
              <div className="text-lg text-accent font-semibold">Hemat Rp 51.000!</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-6 rounded-2xl shadow-glow hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              PESAN SEKARANG - GRATIS ONGKIR!
            </Button>
            <p className="text-sm text-primary-foreground/70">
              💬 Chat WhatsApp • 🚚 Gratis Ongkir • 💳 Pembayaran Mudah
            </p>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 text-sm text-primary-foreground/70">
            <div className="text-center">
              <div className="font-bold text-2xl text-accent">1000+</div>
              <div>Pelanggan Puas</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="font-bold text-2xl text-accent">4.9/5</div>
              <div>Rating Produk</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="font-bold text-2xl text-accent">95%</div>
              <div>Repeat Order</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;