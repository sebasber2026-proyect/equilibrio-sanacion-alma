import { useEffect, useState } from 'react';

interface MaintenanceConfig {
  activo: boolean;
  mensaje: string;
}

interface MaintenanceModeProps {
  children: React.ReactNode;
}

const MaintenanceMode = ({ children }: MaintenanceModeProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [maintenance, setMaintenance] = useState<MaintenanceConfig | null>(null);

  useEffect(() => {
    const checkMaintenance = async () => {
      try {
        // Add timestamp to prevent caching
        const response = await fetch(`/mantenimiento.json?t=${Date.now()}`);
        const config: MaintenanceConfig = await response.json();
        setMaintenance(config);
      } catch (error) {
        // If file doesn't exist or error, show site normally
        setMaintenance({ activo: false, mensaje: '' });
      } finally {
        setIsLoading(false);
      }
    };

    checkMaintenance();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!maintenance?.activo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 flex items-center justify-center p-4">
        <div className="text-center max-w-lg">
          {/* Mystical symbol */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
              <span className="text-primary text-5xl">✦</span>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="font-cinzel text-3xl md:text-4xl text-foreground mb-4">
            Sitio en Mantenimiento
          </h1>
          
          {/* Message */}
          <p className="font-cormorant text-xl text-muted-foreground mb-8">
            {maintenance.mensaje}
          </p>
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-4 text-primary/50">
            <span>☾</span>
            <div className="w-16 h-px bg-primary/30" />
            <span>✧</span>
            <div className="w-16 h-px bg-primary/30" />
            <span>☽</span>
          </div>
          
          {/* Contact info */}
          <p className="mt-8 font-cormorant text-muted-foreground">
            Para consultas urgentes: <br />
            <a href="tel:+573223281876" className="text-primary hover:underline">
              +57 322 328 1876
            </a>
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default MaintenanceMode;
