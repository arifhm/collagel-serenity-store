import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const PartnershipPage = () => {
  const handleWhatsAppClick = (packageName: string) => {
    const message = `Halo, saya tertarik untuk bergabung dengan program kemitraan ${packageName}. Mohon informasinya.`;
    window.open(`https://wa.me/628158086146?text=${encodeURIComponent(message)}`, "_blank");
  };

  const productPackages = [
    {
      name: "Collagel LC15",
      size: "500ml",
      price: "Rp 200.000",
      benefits: [
        "Collagel LC15 500ml",
        "Khusus Mitra & Reseller",
        "Margin Keuntungan Tinggi",
        "Support Marketing Material",
      ],
      buttonText: "Daftar Mitra",
    },
    {
      name: "Collagel LC15",
      size: "1 Liter",
      price: "Rp 400.000",
      benefits: [
        "Collagel LC15 1 Liter",
        "Khusus Mitra & Reseller",
        "Margin Keuntungan Maksimal",
        "Support Marketing Material",
      ],
      buttonText: "Daftar Mitra",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 text-lg py-2 px-4 rounded-full bg-primary text-primary-foreground">
              Program Kemitraan
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Tumbuh Bersama Collagel
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bergabunglah dengan jaringan kami dan raih kesuksesan finansial sambil menyebarkan manfaat kesehatan.
            </p>
          </div>

          <div className="mt-10 mb-20 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className='rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 bg-white border border-gray-200'>
              <h3 className="text-2xl font-bold mb-6 text-left text-gray-800">Benefit Mitra</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Margin keuntungan hingga 40%</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Support marketing material lengkap</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Training produk dan penjualan</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Sistem dropship tanpa stok</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Dukungan tim marketing profesional</span></li>
              </ul>
            </div>

            <div className='rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 bg-white border border-gray-200'>
              <h3 className="text-2xl font-bold mb-6 text-left text-gray-800">Syarat Kemitraan</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Berusia minimal 18 tahun</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Memiliki smartphone dan koneksi internet</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Komitmen untuk aktif berjualan</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Modal awal minimum Rp 200.000</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Siap mengikuti training dan panduan</span></li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-20 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Paket Produk Kemitraan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pilih paket produk yang paling sesuai untuk memulai bisnis Anda bersama Collagel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
            {productPackages.map((pkg) => (
              <div
                key={pkg.name + pkg.size}
                className={`rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 bg-white border border-gray-200`}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{pkg.name}</h3>
                <p className="text-xl text-gray-500 mb-4">{pkg.size}</p>
                <p className="text-3xl font-bold text-primary mb-6">{pkg.price}</p>
                <ul className="space-y-3 text-left mb-8">
                  {pkg.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleWhatsAppClick(`${pkg.name} ${pkg.size}`)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-lg"
                >
                  {pkg.buttonText}
                </Button>
              </div>
            ))}
          </div>


        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PartnershipPage;
