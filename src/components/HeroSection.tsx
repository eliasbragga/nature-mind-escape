import { Button } from "@/components/ui/button";
import { Calendar, Heart, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import draArieli from "@/assets/arieli-psic.jpg";

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Cuidando da sua{" "}
              <span className="text-primary">saúde mental</span> com carinho
            </h1>
            
            <p className="text-lg md:text-xl  mb-8 max-w-2xl text-gray-800">
              Oferecendo um espaço seguro e acolhedor para seu crescimento pessoal. 
              Terapia humanizada que respeita seu tempo e suas necessidades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#agendamento">
                <Button variant="nature" size="lg" className="font-semibold px-8 py-3">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold text-foreground text-gray-800">500+</span>
                </div>
                <p className="text-sm text-gray-800">Pessoas atendidas</p>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-nature border-4 border-warm-cream">
                <img 
                  src={draArieli} 
                  alt="Dra. Arieli Diniz Ferreira - Psicóloga" 
                  className="w-full h-full "
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-sage-green/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};