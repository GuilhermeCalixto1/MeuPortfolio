import { useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Preencha todos os campos", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Email inválido", variant: "destructive" });
      return;
    }
    toast({ title: "Mensagem enviada!", description: "Entrarei em contato em breve." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Entre em <span className="gradient-text">Contato</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Seu nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="glass border-border/50"
            />
            <Input
              type="email"
              placeholder="Seu email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="glass border-border/50"
            />
            <Textarea
              placeholder="Sua mensagem"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              className="glass border-border/50"
            />
            <Button type="submit" className="w-full glow">
              <Send size={16} />
              Enviar mensagem
            </Button>
          </form>

          <div className="flex flex-col justify-center space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Estou à disposição para uma entrevista e muito motivado para
              contribuir com a equipe. Manda uma mensagem que respondo o mais
              rápido possível!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:guicalixto123@hotmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={20} className="text-primary" />
                guicalixto123@hotmail.com
              </a>
              <a
                href="https://github.com/GuilhermeCalixto1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} className="text-primary" />
                github.com/GuilhermeCalixto1
              </a>
              <a
                href="https://www.linkedin.com/in/guilhermecalixto1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={20} className="text-primary" />
                linkedin.com/in/guilhermecalixto1
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
