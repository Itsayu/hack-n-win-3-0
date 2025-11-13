"use client";

import { useEffect, useRef, useState } from "react";

type Bat = {
  id: number;
  direction: "ltr" | "rtl";
  top: number;
  startSide: "left" | "right";
  duration: number;
  rotate: number;
  size: number;
};

export default function BatAnimation() {
  const [bats, setBats] = useState<Bat[]>([]);
  const nextId = useRef(1);
  const intervalRef = useRef<number | null>(null);

  const maxBats = 7;
  const spawnMinMs = 700;
  const spawnMaxMs = 1500;
  const minDuration = 12; // Increased from 6
  const maxDuration = 28; // Increased from 14

  useEffect(() => {
    spawnBat();

    const spawnLoop = () => {
      const delay = Math.round(Math.random() * (spawnMaxMs - spawnMinMs) + spawnMinMs);
      intervalRef.current = window.setTimeout(() => {
        spawnBat();
        spawnLoop();
      }, delay);
    };

    spawnLoop();

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function spawnBat() {
    setBats((prev) => {
      if (prev.length >= maxBats) return prev;

      const id = nextId.current++;
      const direction = Math.random() > 0.5 ? ("ltr" as const) : ("rtl" as const);
      const startSide = direction === "ltr" ? "left" : "right";

      const cornerChance = Math.random();
      let top: number;
      if (cornerChance < 0.18) {
        top = Math.random() * 12;
      } else if (cornerChance < 0.36) {
        top = 88 + Math.random() * 12;
      } else {
        top = 6 + Math.random() * 84;
      }

      const duration = Number((Math.random() * (maxDuration - minDuration) + minDuration).toFixed(2));
      const rotate = (Math.random() - 0.5) * 40;
      const size = Math.random() * 0.9 + 1.0;

      const bat: Bat = { id, direction, top, startSide, duration, rotate, size };
      return [...prev, bat];
    });
  }

  const handleAnimationEnd = (id: number) => {
    setBats((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {bats.map((bat) => {
        const isLTR = bat.direction === "ltr";
        const startLeft = isLTR ? "-60px" : "calc(100% + 60px)";
        const endLeft = isLTR ? "calc(100% + 60px)" : "-60px";
        const animationName = isLTR ? "fly-ltr" : "fly-rtl";

        return (
          <div
            key={bat.id}
            onAnimationEnd={() => handleAnimationEnd(bat.id)}
            className="absolute"
            style={{
              top: `${Math.max(0, Math.min(100, bat.top))}%`,
              left: startLeft,
              fontSize: `${bat.size}em`,
              opacity: 0.18,
              transform: `rotate(${bat.rotate}deg)`,
              animationName,
              animationDuration: `${bat.duration}s`,
              animationTimingFunction: "linear",
              animationFillMode: "forwards",
              animationDelay: `${(Math.random() * 0.6).toFixed(2)}s`,
              willChange: "transform, left",
            }}
            aria-hidden
          >
            <span style={{ display: "inline-block" }}>🦇</span>
          </div>
        );
      })}

      <style>{`
        @keyframes fly-ltr {
          0% {
            left: -60px;
            transform: translateY(0) rotate(var(--rot, 0deg));
          }
          10% { transform: translateY(-8px) rotate(var(--rot, 0deg)); }
          20% { transform: translateY(6px) rotate(var(--rot, 0deg)); }
          30% { transform: translateY(-6px) rotate(var(--rot, 0deg)); }
          40% { transform: translateY(4px) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(0) rotate(calc(var(--rot, 0deg) + 10deg)); }
          60% { transform: translateY(-4px) rotate(calc(var(--rot, 0deg) - 6deg)); }
          80% { transform: translateY(2px) rotate(var(--rot, 0deg)); }
          100% {
            left: calc(100% + 60px);
            transform: translateY(0) rotate(var(--rot, 0deg));
          }
        }

        @keyframes fly-rtl {
          0% {
            left: calc(100% + 60px);
            transform: translateY(0) rotate(var(--rot, 0deg));
          }
          10% { transform: translateY(-8px) rotate(var(--rot, 0deg)); }
          20% { transform: translateY(6px) rotate(var(--rot, 0deg)); }
          30% { transform: translateY(-6px) rotate(var(--rot, 0deg)); }
          40% { transform: translateY(4px) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(0) rotate(calc(var(--rot, 0deg) - 10deg)); }
          60% { transform: translateY(-4px) rotate(calc(var(--rot, 0deg) + 6deg)); }
          80% { transform: translateY(2px) rotate(var(--rot, 0deg)); }
          100% {
            left: -60px;
            transform: translateY(0) rotate(var(--rot, 0deg));
          }
        }
      `}</style>
    </div>
  );
}