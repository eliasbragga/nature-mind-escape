import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "João Pedro",
      age: "35 anos", 
      text: "Procurei ajuda durante um momento difícil no meu casamento. As sessões me deram clareza e ferramentas para melhorar minha comunicação e relacionamento.",
      rating: 5,
      issue: "Relacionamentos"
    },
    {
      name: "Mariana Santos",
      age: "42 anos",
      text: "Depois de anos lutando contra a depressão, finalmente encontrei esperança. O tratamento com a Dra. Arieli me devolveu a alegria de viver.",
      rating: 5,
      issue: "Depressão"
    },
    {
      name: "Carlos Eduardo",
      age: "29 anos",
      text: "O burnout estava acabando comigo. Graças ao acompanhamento especializado, consegui recuperar meu equilíbrio.",
      rating: 5,
      issue: "Burnout"
    },
    {
      name: "Lucia Fernandes",
      age: "38 anos",
      text: "As sessões online foram perfeitas para minha rotina. A Dra. Arieli consegue criar um ambiente acolhedor mesmo à distância.",
      rating: 5,
      issue: "Autoestima"
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Meus Pacientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Histórias reais de transformação e crescimento. Cada jornada é única, 
            mas o resultado é sempre o mesmo: uma vida mais plena e feliz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft bg-card/80 backdrop-blur-sm hover:shadow-nature transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border/50 pt-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {testimonial.issue}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        <Card className="col-span-1 lg:col-span-3 border-0 shadow-xl bg-gradient-to-br from-primary/10 via-card/80 to-card/90 backdrop-blur-md transition-all duration-300 h-full">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Quote className="h-10 w-10 text-primary/40 mr-3" />
            </div>

            <h3 className="text-xl font-semibold text-primary mb-4">
              Depoimento em destaque
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-8 italic">
              Olá, me chamo Karolayne e gostaria de compartilhar um pouco da minha
              experiência com a terapia. Procurei ajuda em um momento difícil, quando
              não estava bem emocionalmente. No começo, confesso que fiquei muito
              nervosa, sem saber como seria esse processo, mas logo percebi que a
              terapia não é algo ruim e, muito menos, 'coisa de pessoas doidas', como
              infelizmente muitos ainda acreditam.
              <br />
              <br />
              A terapia tem o poder de transformar vidas. Ela nos ajuda a enxergar
              nossos desafios de outra forma, a encontrar caminhos e a desenvolver
              forças que, muitas vezes, nem sabíamos que tínhamos. Não me arrependo
              nem por um instante de ter buscado ajuda; foi, sem dúvida, a melhor
              decisão que já tomei para mim mesma.
              <br />
              <br />
              A psicóloga Arieli tem um papel fundamental nessa transformação. Ela é
              uma profissional incrível, atenciosa e dedicada, sempre disposta a
              ajudar, inclusive fora das sessões. O atendimento dela é cheio de
              respeito, acolhimento e, principalmente, ausência de julgamentos, o que
              me faz sentir totalmente segura e confiante. Com ela, as sessões são
              leves, muitas vezes repletas de sorrisos, mas também de reflexões
              profundas que me ajudaram a lidar melhor com meus problemas e a crescer
              como pessoa.
              <br />
              <br />
              Por isso, só tenho uma coisa a dizer: procurem ajuda! Não tenham medo de
              cuidar da saúde emocional. E, se tiverem a oportunidade, recomendo de
              coração a psicóloga Arieli. Essa decisão pode mudar a sua vida assim
              como mudou a minha.
            </p>

            <div className="border-t border-border/50 pt-4 flex justify-between items-center">
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                Psicoterapia
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                — Karolayne
              </span>
            </div>
          </CardContent>
        </Card>

        </div>

        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 text-center" >
          <div className="grid md:grid-cols-4 gap-8" style={{display: "flex", justifyContent: "center"}}>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Pessoas atendidas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Avaliação média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};