import { MessageCircle, Sparkles } from 'lucide-react';

const Hero = () => {
  const whatsappNumber = "573043295611";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría recibir información sobre sus servicios de sanación espiritual.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative element */}
          <div className="flex justify-center mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
              <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
            </div>
          </div>

          {/* Main heading */}
          <h1 
            className="font-cinzel text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-foreground">Equilibrio y </span>
            <span className="shimmer-text">Sanación</span>
            <br />
            <span className="text-foreground">para el </span>
            <span className="text-gradient-gold">Alma</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="font-cormorant text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            Descubre el camino hacia tu paz interior a través de 
            <span className="text-primary"> rituales ancestrales</span> y 
            <span className="text-primary"> sanación energética</span>
          </p>

          {/* Decorative symbols */}
          <div 
            className="flex justify-center gap-6 mb-10 text-primary/60 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="text-2xl animate-float" style={{ animationDelay: '0s' }}>☽</span>
            <span className="text-2xl animate-float" style={{ animationDelay: '0.5s' }}>✧</span>
            <span className="text-2xl animate-float" style={{ animationDelay: '1s' }}>☀</span>
            <span className="text-2xl animate-float" style={{ animationDelay: '1.5s' }}>✧</span>
            <span className="text-2xl animate-float" style={{ animationDelay: '2s' }}>☾</span>
          </div>

          {/* CTA Button */}
          <div 
            className="animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-whatsapp text-lg px-8 py-4"
            >
              <MessageCircle className="w-6 h-6" />
              Agenda tu Consulta Gratis
            </a>
          </div>

          {/* Trust indicators */}
          <div 
            className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground animate-fade-up"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="text-center">
              <p className="font-cinzel text-3xl text-primary glow-text">15+</p>
              <p className="font-cormorant text-sm">Años de Experiencia</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="font-cinzel text-3xl text-primary glow-text">2,500+</p>
              <p className="font-cormorant text-sm">Almas Transformadas</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="font-cinzel text-3xl text-primary glow-text">100%</p>
              <p className="font-cormorant text-sm">Confidencialidad</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
