import { Star, Quote, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: "María Fernanda",
    location: "Chapinero, Bogotá",
    text: "Después de la limpieza energética, mi vida cambió completamente. Mi negocio comenzó a prosperar y las energías negativas desaparecieron. Eternamente agradecida.",
    rating: 5,
    service: "Limpieza Energética",
  },
  {
    name: "Carlos Alberto",
    location: "Usaquén, Bogotá",
    text: "La lectura del tarot fue increíblemente precisa. Me ayudó a tomar decisiones importantes en mi carrera. Su don es real y su energía es muy positiva.",
    rating: 5,
    service: "Lectura del Tarot",
  },
  {
    name: "Sandra Patricia",
    location: "Suba, Bogotá",
    text: "Gracias al ritual de amor, mi esposo y yo pudimos superar una crisis muy difícil. Ahora estamos más unidos que nunca. Un trabajo espiritual muy poderoso.",
    rating: 5,
    service: "Amarres y Endulzamientos",
  },
  {
    name: "Jorge Luis",
    location: "Kennedy, Bogotá",
    text: "La protección espiritual me dio la paz que necesitaba. Sentía mucha envidia a mi alrededor y ahora me siento blindado. Muy profesional y discreta.",
    rating: 5,
    service: "Protección Espiritual",
  },
];

const stats = [
  { value: "98%", label: "Clientes Satisfechos" },
  { value: "2,500+", label: "Consultas Realizadas" },
  { value: "15", label: "Años de Experiencia" },
  { value: "100%", label: "Confidencial" },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="relative py-24 bg-muted/20">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-cormorant text-primary text-lg tracking-widest uppercase">
            Testimonios
          </span>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="text-foreground">Voces de </span>
            <span className="text-gradient-gold">Transformación</span>
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Historias reales de personas en Bogotá que encontraron su camino hacia la luz
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="card-mystical p-6 text-center"
            >
              <p className="font-cinzel text-3xl md:text-4xl text-primary glow-text mb-2">
                {stat.value}
              </p>
              <p className="font-cormorant text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-mystical p-8 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="font-cormorant text-lg text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-cinzel text-foreground">
                    {testimonial.name}
                  </p>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span className="font-cormorant text-sm">{testimonial.location}</span>
                  </div>
                </div>
                <span className="font-cormorant text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Location badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-cormorant text-lg text-foreground">
              Atendemos en toda <span className="text-primary">Bogotá, Colombia</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
