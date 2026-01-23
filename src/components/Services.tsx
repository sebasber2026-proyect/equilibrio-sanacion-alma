import { MessageCircle, Moon, Flame, Heart, Star } from 'lucide-react';
import tarotImg from '@/assets/service-tarot.jpg';
import limpiezaImg from '@/assets/service-limpieza.jpg';
import amarresImg from '@/assets/service-amarres.jpg';
import proteccionImg from '@/assets/service-proteccion.jpg';

const services = [
  {
    icon: Moon,
    title: "Lectura del Tarot",
    description: "Descubre los mensajes del universo a través de las cartas. Orientación clara para tomar decisiones importantes en amor, trabajo y vida personal.",
    whatsappMessage: "Hola, me interesa una lectura de Tarot. ¿Podrías darme más información?",
    image: tarotImg,
  },
  {
    icon: Flame,
    title: "Limpieza Energética",
    description: "Libera las energías negativas que bloquean tu camino. Rituales de purificación para tu hogar, negocio o ser interior.",
    whatsappMessage: "Hola, necesito información sobre limpiezas energéticas. ¿Cómo funciona?",
    image: limpiezaImg,
  },
  {
    icon: Heart,
    title: "Amarres y Endulzamientos",
    description: "Rituales ancestrales para fortalecer vínculos amorosos, recuperar relaciones y atraer el amor verdadero a tu vida.",
    whatsappMessage: "Hola, me gustaría saber más sobre los rituales de amor. ¿Podemos hablar?",
    image: amarresImg,
  },
  {
    icon: Star,
    title: "Protección Espiritual",
    description: "Escudos energéticos personalizados para protegerte de envidias, malas intenciones y energías negativas.",
    whatsappMessage: "Hola, necesito protección espiritual. ¿Qué opciones tienen disponibles?",
    image: proteccionImg,
  },
];

const Services = () => {
  const whatsappNumber = "573223281876";

  return (
    <section id="servicios" className="relative py-24">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-cormorant text-primary text-lg tracking-widest uppercase">
            Nuestros Servicios
          </span>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="text-foreground">Caminos hacia tu </span>
            <span className="text-gradient-gold">Transformación</span>
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada servicio es diseñado con dedicación y amor, utilizando conocimientos 
            ancestrales para guiarte hacia la luz
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`;

            return (
              <div
                key={service.title}
                className="card-mystical overflow-hidden transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-cinzel text-xl md:text-2xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-cormorant text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="flex justify-center sm:justify-start">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 btn-whatsapp text-sm px-6 py-3"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Consultar Ahora
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional note */}
        <p className="text-center font-cormorant text-muted-foreground mt-12 text-lg">
          ✦ Todos los servicios incluyen seguimiento personalizado ✦
        </p>
      </div>
    </section>
  );
};

export default Services;
