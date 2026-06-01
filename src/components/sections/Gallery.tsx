"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, scaleIn } from "@/lib/animations";

const placeholders = [
  { id: 1, cols: 1, rows: 2, label: "Live Performance" },
  { id: 2, cols: 1, rows: 1, label: "Class Scene" },
  { id: 3, cols: 1, rows: 1, label: "Studio Shot" },
  { id: 4, cols: 1, rows: 1, label: "Event" },
  { id: 5, cols: 1, rows: 2, label: "Portrait" },
  { id: 6, cols: 1, rows: 1, label: "Rehearsal" },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="font-poppins text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: "var(--purple)" }}>
              Gallery
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white leading-tight">
              World<br />
              <span className="italic gradient-text">of cocoro</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/cocoro_on_02"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-xs font-poppins tracking-wider text-white/40 hover:text-white transition-colors"
          >
            View all on Instagram
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Masonry-like grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {placeholders.map((item, i) => (
            <motion.div
              key={item.id}
              variants={scaleIn}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${
                item.rows === 2 ? "row-span-2" : ""
              }`}
              style={{
                aspectRatio: item.rows === 2 ? "3/4" : "1/1",
              }}
            >
              {/* Placeholder background */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(145deg, rgba(179,136,255,${0.05 + i * 0.015}) 0%, rgba(255,94,168,${0.03 + i * 0.01}) 100%)`,
                  border: "1px solid rgba(179,136,255,0.1)",
                  borderRadius: "inherit",
                }}
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }}
              >
                <span className="font-poppins text-xs tracking-wider text-white/80">{item.label}</span>
              </div>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-10 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(179,136,255,0.6)">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center font-noto text-xs text-white/20 mt-6"
        >
          写真・動画素材は準備中です / Photos coming soon
        </motion.p>
      </div>
    </section>
  );
}
