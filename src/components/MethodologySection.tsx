import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Video, MapPin, Clock } from "lucide-react";

export const MethodologySection = () => {
  const methodologies = [
    {
      title: "Abordagem",
      description: "A abordagem terapêutica é a linha teórica que o profissional segue em sua prática clínica. A terapia psicanalítica é uma abordagem que tem como objetivo compreender o ser humano a partir da investigação de seus processos inconscientes.",
      benefits: ["Escuta especializada", "Associação livre", "Investigação do inconsciente"]
    },
    {
      title: "A Terapia",
      description: " No atendimento online, as sessões acontecem por vídeo chamada, em plataforma segura (Google Meet). O paciente recebe um link no horário agendado e acessa de qualquer lugar. Para uma boa experiência, recomenda-se o uso de fones de ouvido, estar em ambiente reservado e contar com internet estável.",
      description2: "Já no atendimento presencial, o encontro acontece diretamente no consultório. Basta comparecer no horário combinado e se permitir viver o processo com abertura e compromisso. Em ambos os formatos, o objetivo é oferecer um espaço ético, acolhedor e seguro para o cuidado psicológico.",
      benefits: ["Desenvolvimento pessoal", "Autoestima", "Realização pessoal"]
    }
  ];

  const services = [
    {
      icon: Users,
      title: "Atendimento Individual",
      description: "Sessões personalizadas focadas em suas necessidades específicas"
    },
    {
      icon: Video,
      title: "Terapia Online",
      description: "Flexibilidade para atendimento no conforto da sua casa"
    },
    {
      icon: Clock,
      title: "Horários Flexíveis",
      description: "Adaptação aos seus horários e necessidades"
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Metodologia e Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           Meu trabalho é voltado para oferecer um espaço de escuta e acolhimento, ajudando você a compreender melhor seus sentimentos, sua história e seus desafios, para que possa viver de forma mais leve e consciente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {methodologies.map((method, index) => (
            <Card key={index} className="border-0 shadow-soft bg-card hover:shadow-nature transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {method.description}
                </p>
                {
                  method.description2 && <p className="text-muted-foreground mb-6 leading-relaxed">{method.description2}</p>
                }
                <div className="space-y-3">
                  {method.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-soft rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Como Posso Te Ajudar
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos diferentes modalidades de atendimento para garantir que você 
              receba o cuidado mais adequado às suas necessidades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ display: "flex", justifyContent: "center" }}>
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-3">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Especialidades Principais
              </h3>
              <div className="space-y-4">
                {[
                  "Ansiedade e transtornos de humor",
                  "Depressão e sintomas depressivos",
                  "Estresse e síndrome de burnout",
                  "Relacionamentos e questões familiares",
                  "Autoestima e desenvolvimento pessoal",
                  "Transições de vida e mudanças"
                ].map((specialty, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-warm-cream p-8 rounded-xl">
              <h4 className="font-serif text-xl font-bold text-foreground mb-4">
                Primeira Consulta
              </h4>
              <p className="text-muted-foreground mb-6">
                Na primeira sessão, faremos uma avaliação completa para entender 
                suas necessidades e criar um plano terapêutico personalizado.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duração:</span>
                  <span className="font-medium text-foreground">50 minutos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Modalidade:</span>
                  <span className="font-medium text-foreground">Presencial ou Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};