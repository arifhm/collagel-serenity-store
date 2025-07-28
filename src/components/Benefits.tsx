import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Zap, Shield, Users, Clock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Kulit Lebih Kencang & Bercahaya",
      description: "Meningkatkan elastisitas kulit, mengurangi kerutan, dan memberikan glow alami dari dalam"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Sendi & Tulang Lebih Kuat",
      description: "Memperkuat struktur tulang rawan, mengurangi nyeri sendi, dan meningkatkan mobilitas"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rambut & Kuku Sehat",
      description: "Menstimulasi pertumbuhan rambut yang kuat, berkilau, dan kuku yang tidak mudah patah"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Penyembuhan Lebih Cepat",
      description: "Mempercepat regenerasi sel dan penyembuhan luka, ideal untuk recovery pasca operasi"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Cocok Untuk Semua Usia",
      description: "Formula aman untuk dewasa hingga lansia, mendukung kesehatan sepanjang hidup"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Hasil Terlihat 2-4 Minggu",
      description: "Penyerapan optimal dengan teknologi hydrolyzed untuk hasil yang cepat terasa"
    }
  ];

  return (
    <section id="manfaat" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Manfaat Luar Biasa
            </span>
            <br />
            untuk Tubuh Anda
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rasakan transformasi nyata dalam kesehatan dan kecantikan Anda dengan 
            Collagel - minuman jeli kolagen halal berkualitas premium
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hero-gradient text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-glass backdrop-blur-glass rounded-2xl border border-primary/20 shadow-soft">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <Shield className="h-8 w-8 text-accent" />
                <span className="text-2xl font-bold">100% Halal & BPOM</span>
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <p className="text-muted-foreground">
                Diproduksi dengan standar internasional dan telah tersertifikasi resmi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;