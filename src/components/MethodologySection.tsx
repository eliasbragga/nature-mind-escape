import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Video, MapPin, Clock } from "lucide-react";

export const MethodologySection = () => {
  const methodologies = [
    {
      title: "Terapia Cognitivo-Comportamental (TCC)",
      description: "Abordagem focada na identificação e modificação de padrões de pensamento e comportamento.",
      benefits: ["Resultados práticos", "Técnicas validadas", "Foco no presente"]
    },
    {
      title: "Terapia Humanística",
      description: "Centrada na pessoa, promovendo autoconhecimento e crescimento pessoal.",
      benefits: ["Desenvolvimento pessoal", "Autoestima", "Realização pessoal"]
    },
    {
      title: "Mindfulness e Natureza",
      description: "Integração de técnicas de atenção plena com elementos da natureza.",
      benefits: ["Redução do stress", "Conexão interior", "Bem-estar integral"]
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
      icon: MapPin,
      title: "Consultório Presencial",
      description: "Ambiente acolhedor em contato com a natureza"
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
            Combino diferentes abordagens terapêuticas para criar um tratamento personalizado 
            que atenda às suas necessidades únicas de crescimento e bem-estar.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <span className="font-medium text-foreground">90 minutos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Modalidade:</span>
                  <span className="font-medium text-foreground">Presencial ou Online</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Valor:</span>
                  <span className="font-medium text-primary">R$ 180,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};