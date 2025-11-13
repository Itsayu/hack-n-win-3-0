import { useEffect, useState } from "react";

/**
 * BatAnimation
 * - Spawns bats that fly across the screen from either left->right or right->left
 * - Each bat has randomized: side, top, delay, duration, and slight rotation/bob
 * - Bats from the right are mirrored so they face left
 */

export default function BatAnimation() {
  const [bats, setBats] = useState<
    Array<{
      id: number;
      delay: number;
      duration: number;
      top: number;
      side: "left" | "right";
      size: number;
      rotate: number;
    }>
  >([]);

  useEffect(() => {
    const createBat = (i: number) => {
      const side = Math.random() > 0.5 ? "left" : "right";
      return {
        id: i,
        delay: Math.random() * 6, // start delay in seconds
        duration: 8 + Math.random() * 10, // flight duration
        top: 5 + Math.random() * 85, // percent from top (5% - 90%)
        side,
        size: 16 + Math.random() * 28, // emoji font size in px
        rotate: -15 + Math.random() * 30, // base rotation for variety
      };
    };

    // create n bats
    const initial = Array.from({ length: 7 }, (_, i) => createBat(i));
    setBats(initial);

    // optional: respawn new random bats periodically to keep variety
    const interval = setInterval(() => {
      setBats((prev) => {
        // remove one and add a new randomized bat to keep movement lively
        const next = prev.slice(1);
        const newId = (prev[prev.length - 1]?.id ?? 0) + 1;
        next.push(createBat(newId));
        return next;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {bats.map((bat) => {
        const animationName = bat.side === "left" ? "flyRight" : "flyLeft";
        const transformFlip = bat.side === "right" ? "scaleX(-1)" : "none";
        return (
          <div
            key={bat.id}
            className="absolute opacity-30 dark:opacity-20"
            style={{
              top: `${bat.top}%`,
              left: bat.side === "left" ? "-60px" : undefined,
              right: bat.side === "right" ? "-60px" : undefined,
              fontSize: `${bat.size}px`,
              transform: transformFlip,
              animation: `${animationName} ${bat.duration}s linear ${bat.delay}s infinite`,
            }}
            aria-hidden
          >
            <span
              style={{
                display: "inline-block",
                transform: `rotate(${bat.rotate}deg)`,
                willChange: "transform, left, right",
              }}
            >
              🦇
            </span>
          </div>
        );
      })}

      <style>{`
        @keyframes flyRight {
          0% {
            left: -60px;
            transform: translateY(0) rotate(-5deg);
            opacity: 0.25;
          }
          25% {
            transform: translateY(-8px) rotate(10deg);
            opacity: 0.6;
          }
          50% {
            left: calc(50% - 20px);
            transform: translateY(0) rotate(-10deg);
            opacity: 0.9;
          }
          75% {
            transform: translateY(8px) rotate(10deg);
            opacity: 0.6;
          }
          100% {
            left: calc(100% + 60px);
            transform: translateY(0) rotate(-5deg);
            opacity: 0.25;
          }
        }

        @keyframes flyLeft {
          0% {
            right: -60px;
            transform: translateY(0) rotate(5deg);
            opacity: 0.25;
          }
          25% {
            transform: translateY(-8px) rotate(-10deg);
            opacity: 0.6;
          }
          50% {
            right: calc(50% - 20px);
            transform: translateY(0) rotate(10deg);
            opacity: 0.9;
          }
          75% {
            transform: translateY(8px) rotate(-10deg);
            opacity: 0.6;
          }
          100% {
            right: calc(100% + 60px);
            transform: translateY(0) rotate(5deg);
            opacity: 0.25;
          }
        }

        /* reduce motion for users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .fixed [style*="animation"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
