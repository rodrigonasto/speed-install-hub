import heroImage from "@/assets/hero-nfs.jpg";
import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";
import { Download, Zap, CheckCircle, Shield, Gift, RefreshCw, X, Play, ArrowDown } from "lucide-react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO — direto ao ponto para tráfego frio */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Need for Speed Underground" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>
        <div className="relative z-10 container text-center px-4 py-16">
          <div className="inline-block bg-neon-green/10 border border-neon-green/30 px-4 py-1.5 rounded-full mb-6">
            <span className="text-neon-green font-semibold text-sm">🎮 100% Gratuito</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-glow mb-5 text-primary">
            Need for Speed Underground
            <span className="block text-foreground text-lg sm:text-xl md:text-2xl mt-3 font-body font-normal">
              Baixe agora e jogue no seu PC em minutos
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Download gratuito + tutorial de instalação passo a passo. Sem cadastro, sem complicação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("download")}
              className="inline-flex items-center gap-3 bg-neon-gradient px-8 py-4 rounded-xl font-display font-bold text-primary-foreground text-base sm:text-lg box-glow-strong hover:scale-105 transition-transform duration-200 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5" />
              Baixar jogo grátis
            </button>
            <button
              onClick={() => scrollToSection("tutorial")}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              <Play className="w-4 h-4" />
              Ver tutorial de instalação
            </button>
          </div>
          <p className="mt-6 text-muted-foreground text-xs flex items-center justify-center gap-1.5">
            <Shield className="w-3.5 h-3.5" /> Download seguro • Sem vírus • Funciona no Windows 7/8/10/11
          </p>
        </div>
        <button
          onClick={() => scrollToSection("tutorial")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary animate-bounce"
          aria-label="Rolar"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </section>

      {/* PROVA VISUAL — screenshots logo cedo para gerar desejo */}
      <section className="py-14 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <img src={screenshot1} alt="Gameplay NFS Underground" className="rounded-xl neon-border box-glow w-full" />
            <img src={screenshot2} alt="Customização NFS Underground" className="rounded-xl neon-border box-glow w-full" />
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            Reviva o clássico das corridas de rua direto no seu PC
          </p>
        </div>
      </section>

      {/* VIDEO TUTORIAL */}
      <section id="tutorial" className="py-16 px-4 bg-card-gradient">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary text-glow mb-3">
            Tutorial de instalação
          </h2>
          <p className="text-muted-foreground mb-8">
            Veja como instalar o jogo passo a passo no vídeo abaixo.
          </p>
          <div className="aspect-video rounded-xl overflow-hidden neon-border box-glow bg-muted mb-8">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <p className="font-display text-sm">Insira o vídeo do YouTube aqui</p>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("download")}
            className="inline-flex items-center gap-3 bg-neon-gradient px-8 py-4 rounded-xl font-display font-bold text-primary-foreground box-glow hover:scale-105 transition-transform duration-200"
          >
            <Download className="w-5 h-5" />
            Ir para o download
          </button>
        </div>
      </section>

      {/* DOWNLOAD GRATUITO */}
      <section id="download" className="py-16 px-4">
        <div className="container max-w-xl mx-auto text-center">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary text-glow mb-3">
            Download gratuito
          </h2>
          <p className="text-foreground/80 mb-8">
            Clique no botão abaixo para baixar o Need for Speed Underground.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-neon-gradient px-12 py-5 rounded-xl font-display font-black text-primary-foreground text-lg sm:text-xl box-glow-strong hover:scale-105 transition-transform duration-200 animate-pulse-neon"
          >
            <Download className="w-7 h-7" />
            Baixar agora
          </a>
          <p className="mt-4 text-muted-foreground text-xs flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" /> Download seguro e gratuito.
          </p>
        </div>
      </section>

      {/* PROBLEMA + COMPARAÇÃO */}
      <section className="py-16 px-4 bg-card-gradient">
        <div className="container max-w-2xl mx-auto">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-center text-neon-magenta text-glow-magenta mb-4">
            Quer evitar instalação manual?
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-lg mx-auto">
            A instalação manual funciona, mas exige vários passos. Compare as duas opções:
          </p>

          {/* TABELA DE COMPARAÇÃO */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto">
            {/* Header */}
            <div className="rounded-t-xl bg-muted/50 p-4 text-center border border-border">
              <span className="font-display text-sm font-bold text-muted-foreground">Manual</span>
            </div>
            <div className="rounded-t-xl bg-primary/10 p-4 text-center border border-primary/30 box-glow">
              <span className="font-display text-sm font-bold text-primary">Automático</span>
            </div>

            {/* Rows */}
            {[
              { manual: "Instalação demorada", auto: "Instalação 1 clique" },
              { manual: "Configuração manual", auto: "Jogo pronto" },
              { manual: "Apenas 1 jogo", auto: "Pack completo" },
            ].map(({ manual, auto }, i) => (
              <>
                <div key={`m-${i}`} className="bg-muted/20 border border-border p-4 flex items-center gap-2 text-sm last:rounded-b-xl">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span className="text-muted-foreground">{manual}</span>
                </div>
                <div key={`a-${i}`} className="bg-primary/5 border border-primary/20 p-4 flex items-center gap-2 text-sm last:rounded-b-xl">
                  <CheckCircle className="w-4 h-4 text-neon-green flex-shrink-0" />
                  <span className="text-foreground">{auto}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA PREMIUM */}
      <section className="py-16 px-4">
        <div className="container max-w-md mx-auto">
          <div className="rounded-2xl neon-border box-glow-strong p-8 sm:p-10 bg-muted/20 backdrop-blur text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-neon-gradient" />
            <div className="inline-block bg-neon-gradient px-4 py-1 rounded-full font-display text-xs font-bold text-primary-foreground mb-6 uppercase tracking-wider">
              Mais vendido
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-primary text-glow mb-2">
              Versão Automática
            </h2>
            <p className="text-muted-foreground text-sm mb-8">Tudo pronto para jogar, sem dor de cabeça</p>
            <ul className="text-left space-y-3 mb-8">
              {[
                { icon: Zap, text: "Instalação automática em 1 clique" },
                { icon: CheckCircle, text: "Jogo configurado e pronto" },
                { icon: Shield, text: "Sem erros ou arquivos faltando" },
                { icon: Gift, text: "Pack com jogos clássicos inclusos" },
                { icon: RefreshCw, text: "Atualizações futuras grátis" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-foreground/90 text-sm">
                  <Icon className="w-4 h-4 text-neon-green flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="mb-2">
              <span className="text-muted-foreground text-sm line-through mr-2">R$47</span>
              <span className="font-display text-4xl font-black text-primary text-glow">R$27</span>
            </div>
            <p className="text-muted-foreground text-xs mb-6">Pagamento único • Acesso imediato</p>
            <a
              href="#"
              className="block w-full bg-neon-gradient py-4 rounded-xl font-display font-bold text-primary-foreground text-base hover:scale-[1.02] transition-transform duration-200 box-glow-strong"
            >
              Desbloquear agora por R$27
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-card-gradient">
        <div className="container max-w-2xl mx-auto">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-primary text-glow text-center mb-10">
            Dúvidas frequentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "O download é gratuito?",
                a: "Sim, você pode baixar o jogo gratuitamente e instalar seguindo o tutorial.",
              },
              {
                q: "Preciso pagar para jogar?",
                a: "Não. O pagamento é apenas para quem quiser a instalação automática e o pack de jogos extras.",
              },
              {
                q: "O instalador automático é seguro?",
                a: "Sim, ele apenas automatiza o processo de instalação para você não precisar fazer nada manualmente.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl bg-muted/20 neon-border p-5">
                <h3 className="font-display text-xs sm:text-sm font-bold text-primary mb-2">{q}</h3>
                <p className="text-foreground/70 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground text-xs">
            Página criada para facilitar o acesso ao jogo e ajudar jogadores a instalarem sem dificuldades.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
