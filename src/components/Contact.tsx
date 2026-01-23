import { MessageCircle, Phone, Clock, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  const phoneNumber = "3223281876";
  const whatsappNumber = "573223281876";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría agendar una consulta. ¿Cuál es su disponibilidad?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="relative py-24 bg-muted/20">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-cormorant text-primary text-lg tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="text-foreground">Inicia tu </span>
            <span className="text-gradient-gold">Transformación</span>
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Da el primer paso hacia una vida llena de luz, amor y prosperidad
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="card-mystical p-8 md:p-12 text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-[#25D366]/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-[#25D366]" />
            </div>
            <h3 className="font-cinzel text-2xl md:text-3xl text-foreground mb-4">
              ¿Lista/o para cambiar tu vida?
            </h3>
            <p className="font-cormorant text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              Agenda tu consulta inicial gratuita y descubre cómo puedo ayudarte 
              a superar tus obstáculos y alcanzar tus metas
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-whatsapp text-xl px-10 py-5"
            >
              <MessageCircle className="w-6 h-6" />
              Escribir por WhatsApp
            </a>
          </div>

          {/* Contact info cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-mystical p-6 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-cinzel text-foreground mb-2">Teléfono</h4>
              <a 
                href={`tel:+57${phoneNumber}`}
                className="font-cormorant text-lg text-primary hover:text-golden transition-colors"
              >
                +57 {phoneNumber}
              </a>
            </div>

            <div className="card-mystical p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-cinzel text-foreground mb-2">Horario</h4>
              <p className="font-cormorant text-muted-foreground">
                Lunes a Sábado<br />
                8:00 AM - 8:00 PM
              </p>
            </div>

            <div className="card-mystical p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-cinzel text-foreground mb-2">Ubicación</h4>
              <p className="font-cormorant text-muted-foreground">
                Bogotá, Colombia<br />
                <span className="text-primary text-sm">Consultas presenciales y virtuales</span>
              </p>
            </div>
          </div>

          {/* Additional info */}
          <p className="text-center font-cormorant text-muted-foreground mt-12">
            ✦ Primera consulta sin compromiso ✦ Absoluta discreción garantizada ✦
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
