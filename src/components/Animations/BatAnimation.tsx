"use client";

import { useEffect, useRef, useState } from "react";

type Bat = {
  id: number;
  direction: "ltr" | "rtl";
  top: number;
  duration: number;
  rotate: number; // Base rotation tilt
  size: number;
};

export default function BatAnimation() {
  const [bats, setBats] = useState<Bat[]>([]);
  const nextId = useRef(1);
  const intervalRef = useRef<number | null>(null);

  const maxBats = 7;
  const spawnMinMs = 700;
  const spawnMaxMs = 1500;
  const minDuration = 12;
  const maxDuration = 28;

  useEffect(() => {
    spawnBat();

    const spawnLoop = () => {
      const delay = Math.round(
        Math.random() * (spawnMaxMs - spawnMinMs) + spawnMinMs
      );
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
      
      const cornerChance = Math.random();
      let top: number;
      if (cornerChance < 0.18) {
        top = Math.random() * 12;
      } else if (cornerChance < 0.36) {
        top = 88 + Math.random() * 12;
      } else {
        top = 6 + Math.random() * 84;
      }

      const duration = Number(
        (Math.random() * (maxDuration - minDuration) + minDuration).toFixed(2)
      );
      const rotate = (Math.random() - 0.5) * 40;
      const size = Math.random() * 0.9 + 1.0;

      const bat: Bat = { id, direction, top, duration, rotate, size };
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
        
        // We split the animation into two parts:
        // 1. Move X (The linear travel across screen)
        // 2. Wobble Y (The flapping up and down)
        const moveAnimationName = isLTR ? "move-ltr" : "move-rtl";
        
        return (
          <div
            key={bat.id}
            onAnimationEnd={() => handleAnimationEnd(bat.id)}
            className="absolute pointer-events-none will-change-transform"
            style={{
              top: `${Math.max(0, Math.min(100, bat.top))}%`,
              left: 0, // Fixed left, we move using transform
              width: "100%", // Takes full width so we can translate relative to viewport
              height: "0px", // Minimal height wrapper
              opacity: 0.18,
              fontSize: `${bat.size}em`,
              // This outer div handles the Horizontal Movement (X axis)
              animationName: moveAnimationName,
              animationDuration: `${bat.duration}s`,
              animationTimingFunction: "linear",
              animationFillMode: "forwards",
            }}
            aria-hidden
          >
            {/* The inner div handles the Wobble (Y axis) and Rotation */}
            <div
              className="absolute will-change-transform"
              style={{
                left: 0, 
                // We pass the random rotation as a CSS variable to the keyframes
                // @ts-ignore
                "--rot": `${bat.rotate}deg`,
                animationName: isLTR ? "wobble-ltr" : "wobble-rtl",
                animationDuration: `${bat.duration}s`, 
                animationTimingFunction: "linear",
                animationFillMode: "forwards",
              }}
            >
               <span style={{ display: "inline-block" }}>🦇</span>
            </div>
          </div>
        );
      })}

      <style>{`
        /* HORIZONTAL MOVEMENT (X-AXIS)
           Using translate3d forces GPU acceleration 
        */
        @keyframes move-ltr {
          from { transform: translate3d(-100px, 0, 0); }
          to   { transform: translate3d(100vw, 0, 0); }
        }

        @keyframes move-rtl {
          from { transform: translate3d(100vw, 0, 0); }
          to   { transform: translate3d(-100px, 0, 0); }
        }

        /* VERTICAL WOBBLE (Y-AXIS + ROTATION) 
           This runs inside the moving wrapper.
           We removed 'left' and only animate Y and Rotation.
        */
        @keyframes wobble-ltr {
          0%   { transform: translateY(0) rotate(var(--rot)); }
          10%  { transform: translateY(-8px) rotate(var(--rot)); }
          20%  { transform: translateY(6px) rotate(var(--rot)); }
          30%  { transform: translateY(-6px) rotate(var(--rot)); }
          40%  { transform: translateY(4px) rotate(var(--rot)); }
          50%  { transform: translateY(0) rotate(calc(var(--rot) + 10deg)); }
          60%  { transform: translateY(-4px) rotate(calc(var(--rot) - 6deg)); }
          80%  { transform: translateY(2px) rotate(var(--rot)); }
          100% { transform: translateY(0) rotate(var(--rot)); }
        }

        @keyframes wobble-rtl {
          0%   { transform: translateY(0) rotate(var(--rot)); }
          10%  { transform: translateY(-8px) rotate(var(--rot)); }
          20%  { transform: translateY(6px) rotate(var(--rot)); }
          30%  { transform: translateY(-6px) rotate(var(--rot)); }
          40%  { transform: translateY(4px) rotate(var(--rot)); }
          50%  { transform: translateY(0) rotate(calc(var(--rot) - 10deg)); }
          60%  { transform: translateY(-4px) rotate(calc(var(--rot) + 6deg)); }
          80%  { transform: translateY(2px) rotate(var(--rot)); }
          100% { transform: translateY(0) rotate(var(--rot)); }
        }
      `}</style>
    </div>
  );
}