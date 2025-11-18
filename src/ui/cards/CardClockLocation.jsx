import { useState, useEffect } from 'react';

export default function CardClockLocation() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');

  return (
    <div className="bg-black rounded-2xl p-6 shadow-sm relative overflow-hidden" style={{ height: '200px' }}>
      {/* Purple Gradient Blob Background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute w-64 h-64 rounded-full opacity-80"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, rgba(126, 34, 206, 0.4) 40%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-48 h-48 rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 70%)',
            filter: 'blur(30px)',
            animation: 'pulse 3s ease-in-out infinite reverse',
            right: '20%',
            top: '10%'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Location */}
        <h3 className="text-white text-xl font-bold mb-4">Jakarta</h3>
        
        {/* Time */}
        <div className="text-white text-6xl font-bold tracking-tight">
          {hours}.{minutes}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.1) translate(5px, 5px);
          }
        }
      `}</style>
    </div>
  );
}