import { Heart, Leaf, Mail, Send, MapPin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-full">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold"> Arieli Diniz</h3>
                <p className="text-sm text-background/80">Psicóloga Clínica</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Oferecendo cuidado humanizado e terapia personalizada para seu crescimento 
              e bem-estar emocional, sempre com foco na sua jornada única.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#inicio" className="text-background/80 hover:text-background transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-background/80 hover:text-background transition-colors">
                Sobre Mim
              </a>
              <a href="#metodologia" className="text-background/80 hover:text-background transition-colors">
                Metodologia
              </a>
              <a href="#depoimentos" className="text-background/80 hover:text-background transition-colors">
                Depoimentos
              </a>
              <a href="#agendamento" className="text-background/80 hover:text-background transition-colors">
                Agendamento
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Send className="h-4 w-4 text-primary" />
                <span className="text-background/80">(85) 991399670</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80">psiarieli@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-background/80">
                  <p>Fortaleza - Ceará</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Instagram className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-background/80">
                  <p>@arielipsico</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/80 text-sm">
              © 2024 Arieli Diniz - Psicóloga Clínica. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-2 text-background/80 text-sm">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>e dedicação ao seu bem-estar</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-background/60">
              CRP: 11/19318 - Psicóloga registrada no Conselho Regional de Psicologia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};