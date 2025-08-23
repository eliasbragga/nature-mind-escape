import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Compass, Shield } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sou psicóloga clínica formada pela USP com especialização em Terapia Cognitivo-Comportamental. 
            Acredito que cada pessoa tem o potencial para crescer e se transformar, precisando apenas de um espaço 
            seguro e acolhedor para florescer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center p-6 border-0 shadow-soft bg-card/60 backdrop-blur-sm hover:shadow-nature transition-all duration-300">
            <CardContent className="p-0">
              <div className="bg-gradient-nature p-3 rounded-full w-fit mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Abordagem Científica</h3>
              <p className="text-sm text-muted-foreground">
                Métodos baseados em evidências científicas para resultados efetivos
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-soft bg-card/60 backdrop-blur-sm hover:shadow-nature transition-all duration-300">
            <CardContent className="p-0">
              <div className="bg-gradient-nature p-3 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Cuidado Humanizado</h3>
              <p className="text-sm text-muted-foreground">
                Atendimento personalizado respeitando sua individualidade
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-soft bg-card/60 backdrop-blur-sm hover:shadow-nature transition-all duration-300">
            <CardContent className="p-0">
              <div className="bg-gradient-nature p-3 rounded-full w-fit mx-auto mb-4">
                <Compass className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Orientação Clara</h3>
              <p className="text-sm text-muted-foreground">
                Direcionamento prático para superar desafios e alcançar objetivos
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-soft bg-card/60 backdrop-blur-sm hover:shadow-nature transition-all duration-300">
            <CardContent className="p-0">
              <div className="bg-gradient-nature p-3 rounded-full w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Ambiente Seguro</h3>
              <p className="text-sm text-muted-foreground">
                Espaço confidencial e acolhedor para sua jornada de crescimento
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-soft border border-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Minha Paixão pela Natureza e Viagens
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Acredito que a natureza tem um poder transformador único. Em minhas viagens pelo mundo, 
                descobri como diferentes culturas abordam o bem-estar mental, enriquecendo minha prática 
                terapêutica com perspectivas diversas e holísticas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Essa conexão com a natureza e a diversidade cultural me permite oferecer um atendimento 
                mais completo, integrando técnicas tradicionais com abordagens inovadoras para seu 
                crescimento pessoal.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sage-green/20 p-6 rounded-xl text-center">
                <div className="text-2xl font-bold text-primary mb-2">15</div>
                <div className="text-sm text-muted-foreground">Países visitados</div>
              </div>
              <div className="bg-sky-blue/30 p-6 rounded-xl text-center">
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Trilhas percorridas</div>
              </div>
              <div className="bg-accent/30 p-6 rounded-xl text-center">
                <div className="text-2xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Especializações</div>
              </div>
              <div className="bg-warm-cream p-6 rounded-xl text-center">
                <div className="text-2xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Disponibilidade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};