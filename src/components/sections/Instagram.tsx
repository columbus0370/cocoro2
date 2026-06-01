"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const REELS = [
  { id: "DPIqwL4AcFF", label: "Dance Reel" },
  { id: "DXMnmlzAdqF", label: "Performance" },
  { id: "DS7B7lcgYHM", label: "Class Scene" },
];

function ReelCard({ reel, index }: { reel: (typeof REELS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      /* スマホでは中央寄せ・幅制限 */
      className="mx-auto w-full max-w-[280px] sm:max-w-none group"
    >
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(179,136,255,0.2), rgba(255,94,168,0.2))",
          filter: "blur(8px)",
        }}
      />
      <div
        className="relative rounded-2xl overflow-hidden w-full"
        style={{
          border: "1px solid rgba(179,136,255,0.15)",
          aspectRatio: "9/16",
        }}
      >
        <iframe
          src={`https://www.instagram.com/reel/${reel.id}/embed/`}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          loading="lazy"
          title={reel.label}
        />
      </div>
    </motion.div>
  );
}

export default function Instagram() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="instagram" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, #0D0D0D, #0f0718, #0D0D0D)" }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(179,136,255,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <p
            className="font-poppins text-[10px] tracking-[0.5em] uppercase mb-3"
            style={{ color: "var(--purple)" }}
          >
            Instagram
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Watch<br />
            <span className="italic gradient-text">cocoro dance</span>
          </h2>
          <p className="font-noto text-white/40 text-sm">
            最新のレッスン・パフォーマンスを<br className="sm:hidden" />Instagramで発信中
          </p>
        </motion.div>

        {/* 3 Reels — スマホは縦1列・中央寄せ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 place-items-center sm:place-items-stretch mb-14">
          {REELS.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} index={i} />
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="https://www.instagram.com/cocoro_on_02"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-poppins font-medium tracking-wider text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            style={{
              background: "linear-gradient(135deg, rgba(179,136,255,0.25) 0%, rgba(255,94,168,0.25) 100%)",
              border: "1px solid rgba(179,136,255,0.4)",
            }}
          >
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(135deg, rgba(179,136,255,0.3) 0%, rgba(255,94,168,0.3) 100%)",
                filter: "blur(20px)",
              }}
            />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 shrink-0">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="relative z-10">@cocoro_on_02 をフォローする</span>
          </a>
          <p className="font-poppins text-xs text-white/25 tracking-widest">Instagram</p>
        </motion.div>
      </div>
    </section>
  );
}
