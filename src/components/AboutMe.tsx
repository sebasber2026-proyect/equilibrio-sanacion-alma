import { Award, Eye, Heart, Shield, Sparkles, Users } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: "Don Natural",
    description: "Habilidades espirituales desarrolladas desde la infancia, heredadas de generación en generación.",
  },
  {
    icon: Award,
    title: "15 Años de Experiencia",
    description: "Más de una década ayudando a personas a encontrar su camino y superar obstáculos.",
  },
  {
    icon: Shield,
    title: "Discreción Total",
    description: "Tu privacidad es sagrada. Cada consulta se maneja con absoluta confidencialidad.",
  },
  {
    icon: Heart,
    title: "Atención Personalizada",
    description: "Cada caso es único. Diseño rituales y tratamientos específicos para tu situación.",
  },
  {
    icon: Users,
    title: "Miles de Testimonios",
    description: "Más de 2,500 personas han transformado sus vidas con nuestra guía espiritual.",
  },
  {
    icon: Sparkles,
    title: "Resultados Comprobados",
    description: "Trabajo con energías reales y rituales ancestrales que generan cambios tangibles.",
  },
];

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="relative py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <div>
            <span className="font-cormorant text-primary text-lg tracking-widest uppercase">
              Sobre Mí
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              <span className="text-foreground">Tu Guía </span>
              <span className="text-gradient-gold">Espiritual</span>
            </h2>
            
            <div className="font-cormorant text-lg text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Desde muy joven, descubrí que poseía un don especial para percibir las energías 
                y conectar con el mundo espiritual. Este regalo, heredado de mi abuela, una 
                reconocida curandera de la región, me ha permitido ayudar a miles de personas 
                a encontrar paz, amor y prosperidad.
              </p>
              <p>
                Con más de <span className="text-primary">15 años de experiencia</span>, he 
                dedicado mi vida a estudiar las artes ancestrales de sanación, combinando 
                conocimientos del tarot, la magia blanca y rituales de diferentes culturas 
                para ofrecer soluciones efectivas y personalizadas.
              </p>
              <p>
                Mi misión es ser un puente entre el mundo físico y espiritual, guiándote 
                con amor, respeto y <span className="text-primary">absoluta discreción</span> 
                hacia la transformación que tu alma necesita.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-cinzel text-primary text-xl">
                Con luz y amor,
              </p>
              <p className="font-cormorant text-muted-foreground italic mt-2">
                Maestra Espiritual • Bogotá, Colombia
              </p>
            </div>
          </div>

          {/* Right - Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="card-mystical p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-cinzel text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-cormorant text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
