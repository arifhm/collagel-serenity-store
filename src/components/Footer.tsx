import { Button } from "@/components/ui/button";
import CollagelLogo from "@/assets/Collagel_logo.png";
import { MessageCircle, Phone, Mail, MapPin, Shield, Award } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6285880473634", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+6285880473634", "_blank");
  };

  return (
    <footer id="tentang" className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <img src={CollagelLogo} alt="Collagel Logo" className="h-10" />
              <p className="text-primary-foreground/80 leading-relaxed max-w-md">
                Distributor resmi Collagel - minuman kolagen halal berkualitas tinggi
                yang tersertifikasi BPOM & Halal MUI untuk kesehatan dan kecantikan optimal.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Hubungi Kami Sekarang</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleWhatsAppClick}
                  variant="secondary"
                  className="bg-[#128c7e] hover:bg-[#1ebe5d] text-white"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                {/* <Button 
                  onClick={handleCallClick}
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Telepon
                </Button> */}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="space-y-6">
            <h4 className="font-semibold text-lg">Navigasi</h4>
            <nav className="space-y-3">
              <a href="#produk" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Produk
              </a>
              <a href="#manfaat" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Manfaat
              </a>
              <a href="#testimoni" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Testimoni
              </a>
              <a href="#tentang" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Tentang Kami
              </a>
            </nav>
          </div> */}

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MessageCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">WhatsApp</p>
                  <p className="font-medium">+62 858-8047-3634</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">Email</p>
                  <p className="font-medium">info@collagel.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">Alamat</p>
                  <p className="font-medium">Jl. Medan Merdeka Barat, RT.2/RW.3, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-accent" />
                <span className="font-medium">BPOM Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-accent" />
                <span className="font-medium">Halal MUI</span>
              </div>
            </div>
            <div className="text-primary-foreground/60 text-sm">
              © 2025 Collagel Distributor Jakarta. Semua hak dilindungi.
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/60 text-xs leading-relaxed">
            <strong>Disclaimer:</strong> Hasil dapat bervariasi untuk setiap individu.
            Produk ini bukan pengganti obat dan tidak dimaksudkan untuk mendiagnosis,
            mengobati, menyembuhkan, atau mencegah penyakit apapun. Konsultasikan dengan
            dokter sebelum menggunakan jika Anda memiliki kondisi medis khusus.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;