import { MessageCircle, Moon, Flame, Heart, Star } from 'lucide-react';

const services = [
  {
    icon: Moon,
    title: "Lectura del Tarot",
    description: "Descubre los mensajes del universo a través de las cartas. Orientación clara para tomar decisiones importantes en amor, trabajo y vida personal.",
    price: "Desde $80.000 COP",
    whatsappMessage: "Hola, me interesa una lectura de Tarot. ¿Podrías darme más información?",
  },
  {
    icon: Flame,
    title: "Limpieza Energética",
    description: "Libera las energías negativas que bloquean tu camino. Rituales de purificación para tu hogar, negocio o ser interior.",
    price: "Desde $120.000 COP",
    whatsappMessage: "Hola, necesito información sobre limpiezas energéticas. ¿Cómo funciona?",
  },
  {
    icon: Heart,
    title: "Amarres y Endulzamientos",
    description: "Rituales ancestrales para fortalecer vínculos amorosos, recuperar relaciones y atraer el amor verdadero a tu vida.",
    price: "Desde $150.000 COP",
    whatsappMessage: "Hola, me gustaría saber más sobre los rituales de amor. ¿Podemos hablar?",
  },
  {
    icon: Star,
    title: "Protección Espiritual",
    description: "Escudos energéticos personalizados para protegerte de envidias, malas intenciones y energías negativas.",
    price: "Desde $100.000 COP",
    whatsappMessage: "Hola, necesito protección espiritual. ¿Qué opciones tienen disponibles?",
  },
];

const Services = () => {
  const whatsappNumber = "573043295611";

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
                className="card-mystical p-8 transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <h3 className="font-cinzel text-xl md:text-2xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="font-cormorant text-lg text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Price & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="font-cinzel text-primary text-lg">
                    {service.price}
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 btn-whatsapp text-sm px-5 py-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Consultar
                  </a>
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
