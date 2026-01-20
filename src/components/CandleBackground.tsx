import { useEffect, useState } from 'react';

interface Candle {
  id: number;
  left: string;
  animationDelay: string;
  scale: number;
  opacity: number;
}

const CandleBackground = () => {
  const [candles, setCandles] = useState<Candle[]>([]);

  useEffect(() => {
    const generatedCandles: Candle[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${5 + (i * 8)}%`,
      animationDelay: `${Math.random() * 2}s`,
      scale: 0.6 + Math.random() * 0.6,
      opacity: 0.3 + Math.random() * 0.4,
    }));
    setCandles(generatedCandles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(20 15% 5% / 0.3) 0%, hsl(20 15% 5% / 0.8) 50%, hsl(20 15% 5% / 0.95) 100%)'
        }}
      />
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, hsl(38 100% 60% / 0.15) 0%, transparent 70%)',
        }}
      />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, hsl(280 40% 30% / 0.1) 0%, transparent 70%)',
          animationDelay: '1s',
        }}
      />
      
      {/* Candles */}
      {candles.map((candle) => (
        <div
          key={candle.id}
          className="absolute bottom-0"
          style={{
            left: candle.left,
            transform: `scale(${candle.scale})`,
            opacity: candle.opacity,
          }}
        >
          {/* Candle glow */}
          <div 
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full animate-glow-pulse"
            style={{
              background: 'radial-gradient(circle, hsl(38 100% 60% / 0.4) 0%, hsl(38 100% 60% / 0.1) 40%, transparent 70%)',
              animationDelay: candle.animationDelay,
            }}
          />
          
          {/* Flame */}
          <div 
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-8 rounded-full animate-flicker"
            style={{
              background: 'linear-gradient(to top, hsl(30 100% 50%), hsl(45 100% 60%), hsl(50 100% 85%))',
              boxShadow: '0 0 20px hsl(38 100% 60% / 0.8), 0 0 40px hsl(38 100% 60% / 0.5), 0 0 60px hsl(38 100% 60% / 0.3)',
              animationDelay: candle.animationDelay,
              filter: 'blur(0.5px)',
            }}
          />
          
          {/* Candle body */}
          <div 
            className="w-4 h-20 rounded-t-sm"
            style={{
              background: 'linear-gradient(180deg, hsl(40 30% 85%) 0%, hsl(35 25% 70%) 100%)',
            }}
          />
        </div>
      ))}
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'hsl(38 90% 55% / 0.4)',
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default CandleBackground;
