"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = ["初めてでも", "大丈夫。", "一緒に", "ダンスを", "楽しもう。"];

export default function Message() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="message"
      ref={ref}
      className="relative py-40 px-6 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, #0D0D0D, #120820, #0D0D0D)" }}
      />

      {/* Parallax BG text */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <p
          className="font-playfair font-bold text-center leading-none"
          style={{
            fontSize: "clamp(80px, 20vw, 200px)",
            color: "rgba(179,136,255,0.025)",
            whiteSpace: "nowrap",
          }}
        >
          MESSAGE
        </p>
      </motion.div>

      {/* Orb */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,94,168,0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-poppins text-[10px] tracking-[0.5em] uppercase mb-10"
          style={{ color: "var(--pink)" }}
        >
          Message
        </motion.p>

        {/* Big animated words */}
        <div className="flex flex-col items-center gap-4 mb-14">
          {words.map((word, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 + 0.2 }}
                className="font-playfair font-bold text-white"
                style={{ fontSize: "clamp(32px, 8vw, 64px)" }}
              >
                {word}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="glass rounded-3xl p-8 sm:p-10 text-left"
          style={{ border: "1px solid rgba(179,136,255,0.12)" }}
        >
          <p className="font-noto text-white/65 leading-[2.2] text-base">
            ダンス経験ゼロでも、リズム感に自信がなくても全然大丈夫。
            <br /><br />
            大切なのは「やってみたい」という気持ちだけ。
            レッスンの中で少しずつ体を動かしていくうちに、
            気づいたら「もっとうまくなりたい」って思えてくるはず。
            <br /><br />
            好きな音楽に体を委ねる喜びを、一緒に感じましょう。
            あなたの「好き」を、ダンスで表現できる場所がここにあります。
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full"
              style={{ background: "linear-gradient(135deg, rgba(179,136,255,0.3), rgba(255,94,168,0.3))" }}
            />
            <div>
              <p className="font-playfair text-sm font-semibold gradient-text">温 (cocoro)</p>
              <p className="font-poppins text-[10px] text-white/30 tracking-wider">Dance Instructor</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
