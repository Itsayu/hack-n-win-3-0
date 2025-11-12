import { useEffect, useState } from 'react';

export default function BatAnimation() {
  const [bats, setBats] = useState<Array<{ id: number; delay: number; duration: number; top: number }>>([]);

  useEffect(() => {
    const batArray = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      top: Math.random() * 80,
    }));
    setBats(batArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {bats.map((bat) => (
        <div
          key={bat.id}
          className="absolute text-2xl opacity-20 dark:opacity-10"
          style={{
            top: `${bat.top}%`,
            animation: `flyAcross ${bat.duration}s linear ${bat.delay}s infinite`,
          }}
        >
          🦇
        </div>
      ))}
      <style>{`
        @keyframes flyAcross {
          0% {
            left: -50px;
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(15deg);
          }
          100% {
            left: calc(100% + 50px);
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
