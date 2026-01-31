import { useState, useEffect, ReactNode } from 'react';

interface MaintenanceModeProps {
  children: ReactNode;
}

const MaintenanceMode = ({ children }: MaintenanceModeProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showMaintenance, setShowMaintenance] = useState(false);

  useEffect(() => {
    fetch('/mantenimiento.json')
      .then(res => res.json())
      .then(data => {
        // true = mostrar pantalla de mantenimiento
        // false = sitio funciona normalmente
        setShowMaintenance(data.activo === true);
        setIsLoading(false);
      })
      .catch(() => {
        setShowMaintenance(false);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (showMaintenance) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🔮</div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Estamos realizando mejoras en nuestro sitio
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            Volveremos pronto con nuevas energías y mejores servicios para ti.
          </p>
          <div className="flex justify-center gap-2">
            <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
            <span className="w-3 h-3 bg-primary rounded-full animate-pulse delay-150"></span>
            <span className="w-3 h-3 bg-primary rounded-full animate-pulse delay-300"></span>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default MaintenanceMode;
