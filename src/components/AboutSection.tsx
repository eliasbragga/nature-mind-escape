import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Compass, Shield } from "lucide-react";
import logo from "@/assets/logo.png";
import foto1 from "@/assets/foto1.jpeg";
import foto2 from "@/assets/foto2.jpeg";
import foto3 from "@/assets/foto3.jpeg";
import foto6 from "@/assets/foto6.jpeg";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Me chamo Arieli Diniz Ferreira, psicóloga clínica formada pelo Centro Universitário Sete de Setembro com especialização 
            em psicologia clínica: ênfase em psicanálise. Acredito que cada pessoa tem potencial para crescer e se transformar, 
            precisando apenas de um espaço seguro e acolhedor para florescer.
          </p>
         <div className=" overflow-hidden border-primary" style={{width: "300px", height: "200px", borderRadius: "100%", margin: "20px auto 0"}}>
                <img 
                  src={logo} 
                  alt="Dra. Arieli Diniz Ferreira - Psicóloga" 
                  className="w-full h-full object-cover"
                />
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 border-0 shadow-soft bg-card/60 backdrop-blur-sm hover:shadow-nature transition-all duration-300">
            <CardContent className="p-0">
              <div className="bg-gradient-nature p-3 rounded-full w-fit mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Abordagem Científica</h3>
              <p className="text-sm text-muted-foreground">
                Psicanálise, método baseado no inconsciente e na associação livre.
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
                Acredito no poder transformador da natureza e da cultura. Em minhas viagens e experiências, descobri diferentes formas de compreender a saúde mental e os mistérios da psique, que vão muito além da visão ocidental sobre saúde, doença e cura. Essas vivências ampliaram minha prática terapêutica, permitindo reconhecer cada sujeito em sua singularidade e complexidade.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A natureza e a pluralidade cultural me lembram constantemente que todo ser humano é parte de algo maior. Essa consciência guia minha prática terapêutica, que busca não apenas tratar, mas transformar. Isso me permite oferecer um cuidado integral, que integra ciência, sociedade, cultura, psicologia e, acima de tudo, pessoas. Com uma visão ampla do mundo e atenta ao universo pessoal de cada indivíduo, meu propósito é acolher, compreender e transformar.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-sage-green/20 p-2 rounded-xl text-center" style={{height: 'fit-content'}}>
                <img className="rounded-xl" src={foto1} />
              </div>
              <div className="bg-sky-blue/30 p-2 rounded-xl text-center" style={{height: 'fit-content'}}>
                 <img className="rounded-xl" src={foto2} />
              </div>
              <div className="bg-accent/30 p-2 rounded-xl text-center" style={{height: 'fit-content'}}>
                 <img className="rounded-xl" src={foto3} />
              </div>
              <div className="bg-accent/30 p-2 rounded-xl text-center" style={{height: 'fit-content'}}>
                <img className="rounded-xl" src={foto6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};