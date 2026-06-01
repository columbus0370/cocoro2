"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const studios = [
  {
    id: "sda",
    name: "SDA新長田校",
    place: "常磐アリーナ",
    day: "毎週月曜",
    note: "毎月1週目休み",
    url: "https://www.shinydanceacademy.jp/17248207147702",
    urlLabel: "Shiny Dance Academy",
    accent: "var(--purple)",
    accentAlpha: "rgba(179,136,255,",
    classes: [
      { time: "17:50 – 18:30", name: "エンジェルクラス", target: "幼稚園児対象" },
      { time: "18:40 – 19:30", name: "ジュニアクラス",   target: "小学生対象" },
      { time: "19:40 – 20:30", name: "一般クラス",       target: "中学生以上対象" },
    ],
  },
  {
    id: "myself",
    name: "マイセルフ立花校",
    place: "ユアスタジオ",
    day: "毎週金曜",
    note: "5週目休み",
    url: "https://danceschoolmyself.com",
    urlLabel: "Dance School Myself",
    accent: "var(--pink)",
    accentAlpha: "rgba(255,94,168,",
    classes: [
      { time: "17:15 – 18:15", name: "ストリート初級", target: "初心者歓迎" },
      { time: "18:15 – 19:15", name: "K-POP入門",     target: "K-POP好き集まれ！" },
    ],
  },
];

export default function Lesson() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="lesson" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, #0D0D0D, #10081a, #0D0D0D)" }}
      />
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(255,94,168,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-poppins text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: "var(--pink)" }}>
            Lesson
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white leading-tight">
            Classes &<br />
            <span className="italic gradient-text">Studios</span>
          </h2>
        </motion.div>

        {/* Studio cards — motionをカード全体には使わず中身だけに当てる */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {studios.map((studio) => (
            <motion.div key={studio.id} variants={fadeInUp}>
              {/* カード本体：hoverアニメはCSSのみ（Framerのwhileに依存しない） */}
              <div
                className="relative glass rounded-3xl p-8 h-full overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                style={{ border: `1px solid ${studio.accentAlpha}0.15)` }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-[60px] pointer-events-none"
                  style={{ background: `${studio.accentAlpha}0.06)` }}
                />

                {/* Studio name */}
                <div className="relative mb-6">
                  <h3
                    className="font-playfair text-2xl font-bold mb-2"
                    style={{ color: studio.accent }}
                  >
                    {studio.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-noto text-xs text-white/40">📍 {studio.place}</span>
                    <span
                      className="px-3 py-0.5 rounded-full text-[10px] font-poppins tracking-wider"
                      style={{ background: `${studio.accentAlpha}0.15)`, color: studio.accent }}
                    >
                      {studio.day}
                    </span>
                    <span className="font-noto text-[10px] text-white/30">{studio.note}</span>
                  </div>
                </div>

                {/* Class list */}
                <div className="flex flex-col gap-3 mb-8">
                  {studio.classes.map((cls) => (
                    <div
                      key={cls.name}
                      className="flex items-start gap-3 p-3 sm:p-4 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <div className="flex-shrink-0 min-w-[100px]">
                        <p className="font-poppins text-[11px] font-medium text-white/50 whitespace-nowrap">
                          {cls.time}
                        </p>
                      </div>
                      <div>
                        <p className="font-noto text-sm font-medium text-white mb-0.5 leading-snug">{cls.name}</p>
                        <p className="font-noto text-xs text-white/35">{cls.target}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Official site link — standalone button, z-index で確実にクリック可 */}
                <a
                  href={studio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-poppins text-sm tracking-wider transition-all duration-200 hover:opacity-80 active:scale-95"
                  style={{
                    background: `${studio.accentAlpha}0.12)`,
                    border: `1px solid ${studio.accentAlpha}0.3)`,
                    color: studio.accent,
                  }}
                >
                  公式サイトへ
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-noto text-white/40 text-sm mb-5">
            体験レッスンや詳細はInstagram DMからお気軽にどうぞ
          </p>
          <a
            href="https://ig.me/m/cocoro_on_02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-poppins text-sm tracking-wider transition-all duration-300 hover:scale-105 glow-pink"
            style={{
              background: "linear-gradient(135deg, rgba(255,94,168,0.3) 0%, rgba(179,136,255,0.3) 100%)",
              border: "1px solid rgba(255,94,168,0.4)",
              color: "#fff",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            体験レッスンを申し込む (Instagram DM)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
