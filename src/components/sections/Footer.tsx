"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t" style={{ borderColor: "rgba(179,136,255,0.1)" }}>
      {/* Gradient top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(179,136,255,0.3), rgba(255,94,168,0.3), transparent)" }}
      />

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <p className="font-playfair text-2xl font-bold gradient-text mb-1">cocoro</p>
          <p className="font-noto text-xs text-white/25">GIRLS HIPHOP / HIPHOP</p>
        </div>

        {/* SNS links */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/cocoro_on_02"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-poppins text-xs tracking-wider text-white/40 hover:text-white transition-colors duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
          <a
            href="https://ig.me/m/cocoro_on_02"
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins text-xs tracking-wider px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10"
            style={{ border: "1px solid rgba(179,136,255,0.25)", color: "var(--purple)" }}
          >
            DM → Contact
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p className="font-poppins text-[10px] text-white/20 tracking-widest">
          © 2026 cocoro. All rights reserved.
        </p>
        <p className="font-poppins text-[10px] text-white/15 tracking-wider">
          S project
        </p>
      </div>
    </footer>
  );
}
