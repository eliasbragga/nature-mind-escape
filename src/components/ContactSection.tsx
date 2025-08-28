import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    title: "Contato via site Nature Mind Escape"
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    "service_7h53ktj",
    "template_0l3i6t6",
    formData,
    "XP-yE942nAtv3sJJt"
  )
  .then(() => {
    toast.success("Mensagem enviada! Entrarei em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "", title: "Contato via site Nature Mind Escape" });
  })
  .catch(() => {
    toast.error("Erro ao enviar mensagem. Tente novamente.");
  });
};

  const sendToWpp = () => {
    const numero = "85991399670";
    const mensagem = "Olá, quero agendar uma sessão de atendimento psicológico.";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="agendamento" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agende sua Consulta
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estou aqui para te acompanhar em sua jornada de crescimento e bem-estar. 
            Entre em contato e vamos conversar sobre como posso te ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-soft bg-card">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Seu telefone/WhatsApp"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Conte um pouco sobre o que te traz aqui e como posso te ajudar..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="border-border/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="nature"
                  className="w-full font-semibold py-3"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-0 shadow-soft bg-card p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Telefone & WhatsApp</h4>
                    <p className="text-muted-foreground">(85) 991399670 (wpp)</p>
                    <p className="text-sm text-muted-foreground">Disponível de segunda a sexta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-card p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">E-mail</h4>
                    <p className="text-muted-foreground">psiarieli@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Resposta em até 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-card p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Horários de Atendimento</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Segunda a Sábado</p>
                      <strong>somente com hora marcada</strong>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-nature rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pronto para Transformar sua Vida?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Dê o primeiro passo em direção ao seu bem-estar. Agende uma consulta 
            e descubra como posso te ajudar a alcançar uma vida mais plena e feliz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="font-semibold px-8 py-3"
              onClick={sendToWpp}
            >
              <Send className="mr-2 h-5 w-5" />
              Agendar Primeira Consulta (wpp)
            </Button>
            <Button 
              size="lg" 
              onClick={() => window.location.href = "tel:+5585985694442"}
              className="font-semibold px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};