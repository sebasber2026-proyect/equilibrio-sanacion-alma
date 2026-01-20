import { MessageCircle, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "3043295611";
  const whatsappNumber = "573043295611";

  const quickLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#sobre-mi", label: "Sobre Mí" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ];

  const services = [
    "Lectura del Tarot",
    "Limpieza Energética",
    "Amarres y Endulzamientos",
    "Protección Espiritual",
  ];

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-xl">✦</span>
              </div>
              <span className="font-cinzel text-lg text-foreground">
                Equilibrio & Sanación
              </span>
            </div>
            <p className="font-cormorant text-muted-foreground leading-relaxed mb-6">
              Guiando almas hacia la luz desde hace más de 15 años. 
              Tu transformación espiritual comienza aquí.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-cormorant">Bogotá, Colombia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-foreground text-lg mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-cormorant text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-cinzel text-foreground text-lg mb-6">
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="font-cormorant text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-foreground text-lg mb-6">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href={`tel:+57${phoneNumber}`}
                className="flex items-center gap-3 font-cormorant text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                +57 {phoneNumber}
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-cormorant text-muted-foreground hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                WhatsApp
              </a>
            </div>

            <div className="mt-6">
              <p className="font-cormorant text-sm text-muted-foreground">
                <span className="text-primary">Horario:</span><br />
                Lunes a Sábado: 8AM - 8PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-cormorant text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Equilibrio y Sanación para el Alma. Todos los derechos reservados.
            </p>
            <p className="font-cormorant text-sm text-muted-foreground flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> en Bogotá, Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
