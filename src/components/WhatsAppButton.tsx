import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "573223281876";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría recibir información sobre sus servicios.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-card border border-border text-foreground font-cormorant px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        ¡Escríbenos ahora!
      </span>
    </a>
  );
};

export default WhatsAppButton;
