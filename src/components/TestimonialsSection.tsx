import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Flower2 } from "lucide-react";
import { useState } from "react";

export const TestimonialsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleArticle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const articles = [
    {
      title: "O que esperar da terapia – Entenda como funciona o processo terapêutico e seus possíveis benefícios",
      content: (
        <>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A terapia é um espaço de escuta e acolhimento, onde você pode falar livremente sobre suas experiências, sentimentos e conflitos. Ao longo do processo, é possível desenvolver maior autoconhecimento, compreender padrões de comportamento e encontrar novas formas de lidar com os desafios da vida. A cada encontro, abre-se a oportunidade de elaborar questões internas e construir caminhos mais conscientes e saudáveis.
          </p>
        </>
      ),
    },
    {
      title: "A importância da escuta na Psicanálise",
      content: (
        <>
          <p className="text-muted-foreground leading-relaxed mb-4">
          Na Psicanálise, a escuta ocupa um lugar central. O processo terapêutico se constrói a partir da possibilidade de o paciente falar livremente sobre suas vivências, enquanto o analista escuta de forma atenta, acolhedora e sem julgamentos. Essa escuta diferenciada permite que conteúdos inconscientes venham à tona, possibilitando a elaboração de sentimentos e conflitos que, muitas vezes, não encontram espaço no cotidiano. Ao se sentir ouvido, o paciente pode entrar em contato com suas próprias emoções de maneira mais profunda, ressignificando experiências e ampliando sua compreensão de si mesmo.
          </p>
        </>
      ),
    },
    {
      title: "Autoconhecimento e transformação pessoal – De que forma olhar para a própria história pode abrir novos caminhos.",
      content: (
        <>
          <p className="text-muted-foreground leading-relaxed mb-4">
            O processo de autoconhecimento envolve revisitar a própria história e reconhecer como experiências passadas influenciam sentimentos, escolhas e formas de se relacionar. Ao falar sobre si em um espaço terapêutico, torna-se possível perceber padrões de repetição, compreender dores antigas e dar novos significados a situações que antes pareciam sem saída.
          </p>
          <h4 className="font-semibold text-primary mb-2">Relações e conflitos</h4>
          <p className="text-muted-foreground leading-relaxed">
            Nas relações afetivas, familiares ou de trabalho, muitas vezes repetimos situações de conflito sem perceber. A psicoterapia oferece um espaço seguro para reconhecer essas repetições e compreender de onde elas vêm. Ao trazer à consciência sentimentos e dinâmicas ocultas, a pessoa ganha mais clareza sobre suas escolhas e pode construir formas mais saudáveis de se relacionar. Dessa forma, os conflitos deixam de ser apenas fonte de sofrimento e passam a ser oportunidades de transformação e crescimento pessoal.
          </p>
        </>
      ),
    },
    {
      title: "Relações e conflitos",
      content: (
        <>
          <p className="text-muted-foreground leading-relaxed mb-4">
          Nas relações afetivas, familiares ou de trabalho, muitas vezes repetimos situações de conflito sem perceber. A psicoterapia oferece um espaço seguro para reconhecer essas repetições e compreender de onde elas vêm. Ao trazer à consciência sentimentos e dinâmicas ocultas, a pessoa ganha mais clareza sobre suas escolhas e pode construir formas mais saudáveis de se relacionar. Dessa forma, os conflitos deixam de ser apenas fonte de sofrimento e passam a ser oportunidades de transformação e crescimento pessoal.
          </p>
        </>
      ),
    },
  ];
  
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
      text: "As sessões online foram perfeitas para minha rotina. A Arieli consegue criar um ambiente acolhedor mesmo à distância.",
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

        <div className="grid md:grid-cols-4 lg:grid-cols-3 gap-8 mb-12">
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

        </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <div
          key={index}
          className="col-span-1 lg:col-span-3 border-0 shadow-xl bg-gradient-to-br from-primary/10 via-card/80 to-card/90 backdrop-blur-md transition-all duration-300"
        >
          <div
            className="flex items-center p-6 cursor-pointer"
            onClick={() => toggleArticle(index)}
          >
            <Flower2 className="h-10 w-10 text-primary/40 mr-3" />
            <h3 className="text-xl font-semibold text-primary">{article.title}</h3>
          </div>

          {openIndex === index && (
            <div className="p-6 border-t border-primary/20 transition-all duration-300">
              {article.content}
            </div>
          )}
        </div>
      ))}
    </div>

        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 text-center" >
          <div className="grid md:grid-cols-4 gap-8" style={{display: "flex", justifyContent: "center"}}>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Pessoas atendidas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};