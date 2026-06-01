"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import StarField from "@/components/ui/StarField";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const parallaxY  = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = 0.85;
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Video background ── */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: videoReady ? 1 : 0,
            transition: "opacity 1.5s ease",
          }}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoReady(true)}
        >
          <source src="/assets/hero-bgmovie.mov" type="video/mp4" />
          <source src="/assets/hero-bgmovie.mov" type="video/quicktime" />
        </video>

        {/* Dark overlay — ensures text readability over bright video */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.40) 40%, rgba(13,13,13,0.70) 80%, #0D0D0D 100%)",
          }}
        />
        {/* Purple tint overlay — brand color wash */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(17,9,32,0.35)" }}
        />
      </div>

      {/* Fallback background (while video loads) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(179,136,255,0.08) 0%, #0D0D0D 70%)",
        }}
      />

      <StarField count={50} />
      <FloatingOrbs />

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-[10%] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(179,136,255,0.18), transparent)" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 1 }}
        />
        <motion.div
          className="absolute right-[10%] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(255,94,168,0.12), transparent)" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 1.2 }}
        />
      </div>

      {/* ── Main content ── */}
      <motion.div
        style={{ y: parallaxY, opacity: textOpacity }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        {/* Genre label */}
        <motion.p
          className="font-poppins text-[10px] tracking-[0.5em] uppercase mb-8"
          style={{ color: "var(--purple)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          GIRLS HIPHOP / HIPHOP
        </motion.p>

        {/* Main name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-playfair font-bold leading-none gradient-text glow-purple"
            style={{ fontSize: "clamp(56px, 18vw, 160px)" }}
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            cocoro
          </motion.h1>
        </div>

        {/* Japanese name */}
        <motion.p
          className="font-noto text-white/50 text-sm tracking-[0.4em] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          温
        </motion.p>

        {/* Tagline — letter by letter */}
        <div className="overflow-hidden mb-12">
          <motion.div
            className="flex flex-wrap justify-center font-playfair italic text-white/80"
            style={{ fontSize: "clamp(14px, 3.5vw, 22px)", letterSpacing: "0.08em" }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04, delayChildren: 1 } },
            }}
          >
            {"Dance with your own style".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <a
            href="https://www.instagram.com/cocoro_on_02"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-7 py-3.5 rounded-full font-poppins text-sm tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, rgba(179,136,255,0.25) 0%, rgba(255,94,168,0.25) 100%)",
              border: "1px solid rgba(179,136,255,0.4)",
              backdropFilter: "blur(12px)",
              color: "var(--purple-lt)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow on Instagram
          </a>
          <a
            href="#lesson"
            className="px-7 py-3.5 rounded-full font-poppins text-sm tracking-wider text-white/60 hover:text-white transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
          >
            Lesson Info ↓
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="font-poppins text-[9px] tracking-[0.4em] text-white/30 uppercase">Scroll</span>
        <motion.div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, rgba(179,136,255,0.6), transparent)" }}
          animate={{ scaleY: [1, 0.3, 1], y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
