import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sari Dewi",
      age: "34 tahun",
      location: "Jakarta",
      rating: 5,
      text: "Setelah 1 bulan konsumsi rutin, kulit wajah saya terasa lebih kencang dan glow-nya natural banget! Yang paling saya suka, produknya halal dan sudah BPOM. Recommended!",
      results: "Kulit lebih kencang dalam 4 minggu"
    },
    {
      name: "Ahmad Rizki",
      age: "42 tahun", 
      location: "Bandung",
      rating: 5,
      text: "Sebagai atlet yang sering cedera lutut, produk ini membantu banget untuk recovery. Nyeri sendi berkurang drastis setelah 3 minggu konsumsi. Alhamdulillah halal juga.",
      results: "Nyeri sendi berkurang 80%"
    },
    {
      name: "Fatimah Zahra",
      age: "28 tahun",
      location: "Surabaya", 
      rating: 5,
      text: "Rambut rontok saya berkurang signifikan! Dulu rontok hingga 100 helai per hari, sekarang cuma 20-30 helai. Kuku juga jadi lebih kuat dan cepat panjang.",
      results: "Rambut rontok turun 70%"
    },
    {
      name: "Dr. Maya Santi",
      age: "45 tahun",
      location: "Medan",
      rating: 5,
      text: "Sebagai dokter, saya sangat hati-hati memilih suplemen. Setelah riset dan coba sendiri, produk ini benar-benar berkualitas. Pasien saya juga banyak yang cocok.",
      results: "Rekomendasi dari dokter"
    },
    {
      name: "Ibu Aminah",
      age: "58 tahun", 
      location: "Yogyakarta",
      rating: 5,
      text: "Di usia saya, kolagen sangat penting. Alhamdulillah ada produk halal seperti ini. Kulit tidak sekendor dulu, sendi lutut juga lebih enak untuk jalan.",
      results: "Mobilitas meningkat di usia 58"
    },
    {
      name: "Rina Kusuma",
      age: "31 tahun",
      location: "Makassar",
      rating: 5,
      text: "Post operasi caesar, dokter sarankan konsumsi kolagen untuk recovery. Pilih produk ini karena halal. Bekas operasi cepat memudar dan stamina cepat pulih!",
      results: "Recovery post-operasi lebih cepat"
    }
  ];

  return (
    <section id="testimoni" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Kata Mereka yang Telah</span>
            <br />
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Merasakan Manfaatnya
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ribuan pelanggan telah merasakan transformasi nyata dengan 
            Hydrolyzed Halal Fish Collagen kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.age} • {testimonial.location}
                    </p>
                  </div>
                  <Quote className="h-8 w-8 text-primary/30 flex-shrink-0" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Results Badge */}
                <div className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-medium">
                  ✨ {testimonial.results}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-glass backdrop-blur-glass rounded-2xl border border-primary/20 shadow-soft">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Rating Pelanggan</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Testimoni Positif</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Repeat Order</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;