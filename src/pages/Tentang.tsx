import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import heroImage2 from "@/assets/Collagel_new1.png";

const TentangPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Tentang Kami
            </h1>
            <p className="text-lg text-gray-600 text-bold  max-w-3xl mx-auto">
              Mengenal lebih dekat Collagel dan komitmen kami untuk kesehatan dan kecantikan Anda.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img
                src={heroImage2}
                alt="Collagel - Minuman Jeli Sehat dan Halal"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto p-8 mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Collagel Minuman Jeli Yang Sehat dan Halal</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Distributor Collagel Jakarta</strong> adalah unit distribusi resmi dari Collagel yang berkomitmen menyediakan produk kolagen halal berkualitas tinggi berbasis <span className="italic">Hydrolyzed Collagen</span> yang telah bersertifikat BPOM dan Halal MUI. Berdiri dengan semangat menghadirkan gaya hidup sehat dan halal, kami menjadi pionir dalam mendistribusikan produk minuman kolagen yang tidak hanya mendukung kesehatan kulit, tetapi juga memperkuat sendi dan menjaga vitalitas tubuh.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Didukung oleh riset dan inovasi, Collagel hadir sebagai solusi alami bagi masyarakat Indonesia yang menginginkan suplemen kolagen yang aman, halal, dan efektif. Produk kami diformulasikan dari kolagen ikan air tawar yang kaya akan protein.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kami percaya bahwa menjaga kesehatan dan kecantikan tidak perlu mengorbankan prinsip halal dan kenyamanan konsumen. Oleh karena itu, seluruh produk Collagel dirancang dengan standar kualitas tinggi, tanpa bahan sintetis berbahaya, bebas dari kandungan haram, dan telah melalui uji laboratorium serta proses sertifikasi resmi.
            </p>
          </div>

          <div className="bg-white max-w-5xl mx-auto p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Kenapa Harus Memilih Collagel?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Minuman kolagen tinggi protein – Sendi kuat, kulit sehat, dan rambut indah
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-xl">Tersertifikasi BPOM & Halal MUI</p>
                  <p>Kami memastikan setiap tetes Collagel aman, legal, dan sesuai dengan syariat.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-xl"><span className="italic">Hydrolyzed Halal Fish Collagen</span> Berkualitas Tinggi</p>
                  <p>Diekstrak dari Ikan Air Tawar kaya Protein dalam yang kaya manfaat, lebih mudah diserap tubuh, dan tanpa bau amis.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-xl">Manfaat Ganda: Kecantikan & Kesehatan</p>
                  <p>Tidak hanya memperbaiki elastisitas kulit dan mengurangi kerutan, Collagel juga memperkuat sendi, tulang, dan jaringan ikat.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TentangPage;
