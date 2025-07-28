import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6285880473634?text=Halo,%20saya%20memiliki%20pertanyaan%20tentang%20produk%20Hydrolyzed%20Halal%20Fish%20Collagen", "_blank");
  };

  const faqs = [
    {
      question: "Apakah produk ini benar-benar halal dan aman?",
      answer: "Ya, 100% halal dan aman. Produk kami telah tersertifikasi Halal MUI dan BPOM, menggunakan ikan halal sebagai sumber kolagen, diproduksi dengan standar internasional dan telah melalui uji klinis keamanan."
    },
    {
      question: "Berapa lama hasil mulai terlihat?",
      answer: "Sebagian besar pelanggan mulai merasakan perbedaan dalam 2-3 minggu konsumsi rutin. Untuk hasil optimal pada kulit, sendi, dan rambut, disarankan konsumsi minimal 1-3 bulan secara kontinyu."
    },
    {
      question: "Bagaimana cara konsumsi yang benar?",
      answer: "Konsumsi 1 sachet per hari, larutkan dalam 150ml air dingin atau suhu ruang. Sebaiknya diminum pada pagi hari sebelum makan atau malam hari sebelum tidur untuk penyerapan optimal."
    },
    {
      question: "Apakah ada efek samping?",
      answer: "Produk ini sangat aman dengan efek samping minimal. Beberapa orang mungkin mengalami reaksi alergi ringan jika sensitif terhadap ikan. Konsultasikan dengan dokter jika Anda memiliki kondisi medis khusus."
    },
    {
      question: "Siapa saja yang bisa mengonsumsi produk ini?",
      answer: "Cocok untuk dewasa usia 20+ tahun, terutama yang ingin menjaga kesehatan kulit, sendi, dan rambut. Tidak disarankan untuk ibu hamil, menyusui, dan anak-anak kecuali atas anjuran dokter."
    },
    {
      question: "Apakah bisa dikonsumsi bersamaan dengan obat lain?",
      answer: "Umumnya aman dikonsumsi bersamaan dengan vitamin dan suplemen lain. Namun, jika Anda sedang mengonsumsi obat rutin, sebaiknya konsultasikan dengan dokter terlebih dahulu."
    },
    {
      question: "Bagaimana cara penyimpanan yang benar?",
      answer: "Simpan di tempat sejuk, kering, terhindar dari sinar matahari langsung. Setelah dibuka, sebaiknya dikonsumsi dalam 24 jam untuk menjaga kualitas dan kesegaran produk."
    },
    {
      question: "Apakah ada garansi jika tidak cocok?",
      answer: "Ya, kami memberikan garansi uang kembali 100% jika Anda tidak puas dalam 30 hari pertama pembelian (dengan syarat dan ketentuan yang berlaku)."
    }
  ];

  return (
    <section className="py-20">
      <div className="container max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Pertanyaan yang</span>
            <br />
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Sering Ditanyakan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum seputar produk kami
          </p>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-primary/20 rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-glass backdrop-blur-glass rounded-2xl border border-primary/20 shadow-soft">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Masih Ada Pertanyaan?</h3>
              <p className="text-muted-foreground max-w-md">
                Tim customer service kami siap membantu Anda 24/7 melalui WhatsApp
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-hero-gradient hover:shadow-glow transition-all duration-300"
              >
                Tanya Langsung di WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;