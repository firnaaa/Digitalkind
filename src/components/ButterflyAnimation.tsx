import { useEffect, useState } from "react";
import fireflyImg from "@/assets/firefly.png";

interface Firefly {
  id: number;
  x: number;
  y: number;
  scale: number;
}

const ButterflyAnimation = () => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize fireflies
    const initialFireflies: Firefly[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: 0.15 + Math.random() * 0.15,
    }));
    setFireflies(initialFireflies);

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animate fireflies
    const interval = setInterval(() => {
      setFireflies((prev) =>
        prev.map((firefly) => {
          const dx = mousePos.x - firefly.x;
          const dy = mousePos.y - firefly.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Follow cursor when close
          const followStrength = distance < 200 ? 0.02 : 0.005;
          
          return {
            ...firefly,
            x: firefly.x + dx * followStrength + (Math.random() - 0.5) * 2,
            y: firefly.y + dy * followStrength + (Math.random() - 0.5) * 2,
          };
        })
      );
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [mousePos.x, mousePos.y]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {fireflies.map((firefly) => (
        <img
          key={firefly.id}
          src={fireflyImg}
          alt=""
          className="absolute transition-all duration-1000 ease-out opacity-60 dark:opacity-100 dark:[filter:drop-shadow(0_0_20px_rgba(139,255,74,1))_drop-shadow(0_0_40px_rgba(139,255,74,0.6))_brightness(2)_saturate(2)]"
          style={{
            left: `${firefly.x}px`,
            top: `${firefly.y}px`,
            transform: `translate(-50%, -50%) scale(${firefly.scale})`,
            width: "30px",
            height: "30px",
          }}
        />
      ))}
    </div>
  );
};

export default ButterflyAnimation;
