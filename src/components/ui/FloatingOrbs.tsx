"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Orb {
  id: number;
  x: string;
  y: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export default function FloatingOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    const generated: Orb[] = [
      { id: 1,  x: "15%",  y: "20%",  size: 260, color: "rgba(179,136,255,0.07)", duration: 18, delay: 0 },
      { id: 2,  x: "75%",  y: "15%",  size: 180, color: "rgba(255,94,168,0.06)",  duration: 22, delay: 3 },
      { id: 3,  x: "60%",  y: "65%",  size: 320, color: "rgba(179,136,255,0.05)", duration: 25, delay: 5 },
      { id: 4,  x: "10%",  y: "70%",  size: 140, color: "rgba(255,94,168,0.08)",  duration: 20, delay: 1 },
      { id: 5,  x: "85%",  y: "50%",  size: 200, color: "rgba(179,136,255,0.06)", duration: 28, delay: 7 },
      { id: 6,  x: "40%",  y: "85%",  size: 160, color: "rgba(255,94,168,0.05)",  duration: 16, delay: 2 },
    ];
    setOrbs(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(40px)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, 0, -10, 0],
            scale: [1, 1.1, 1, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
