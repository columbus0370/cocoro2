"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const values = [
  { icon: "✦", title: "自分らしく", body: "型にはまらない。あなたらしい動きを一緒に探していきます。" },
  { icon: "◇", title: "楽しむこと", body: "ダンスは楽しむためにある。レッスンで笑顔が生まれることを大切にしています。" },
  { icon: "✧", title: "表現すること", body: "音楽に乗せて、心の中にあるものを体で表現する喜びを届けたい。" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* BG accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(179,136,255,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <ScrollReveal className="mb-16">
          <p
            className="font-poppins text-[10px] tracking-[0.5em] uppercase mb-3"
            style={{ color: "var(--pink)" }}
          >
            About
          </p>
          <h2 className="font-playfair text-5xl font-bold gradient-text leading-tight">
            温<span className="italic font-light text-white/30 text-3xl ml-3">(cocoro)</span>
          </h2>
        </ScrollReveal>

        {/* Main block */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="relative aspect-[3/4] rounded-2xl overflow-hidden glass"
              style={{ border: "1px solid rgba(179,136,255,0.2)" }}
            >
              {/* Photo placeholder — replace with <img src="/assets/profile.jpg" ... /> */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                style={{
                  background: "linear-gradient(145deg, rgba(179,136,255,0.08) 0%, rgba(255,94,168,0.05) 100%)",
                }}
              >
                <div className="w-20 h-20 rounded-full" style={{ background: "rgba(179,136,255,0.15)", border: "1px solid rgba(179,136,255,0.3)" }} />
                <p className="font-poppins text-xs text-white/20 tracking-wider">PHOTO COMING SOON</p>
              </div>

              {/* Corner decoration */}
              <div
                className="absolute top-4 right-4 w-12 h-12 rounded-full"
                style={{ background: "rgba(255,94,168,0.12)", border: "1px solid rgba(255,94,168,0.2)" }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-5 -right-5 glass px-5 py-3 rounded-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ border: "1px solid rgba(179,136,255,0.2)" }}
            >
              <p className="font-poppins text-xs text-white/50 tracking-wider">S project</p>
              <p className="font-playfair text-sm font-semibold" style={{ color: "var(--purple)" }}>GIRLS HIPHOP</p>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="flex flex-col gap-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="font-noto text-white/70 leading-[2] text-base"
            >
              ダンスを始めたのは、音楽に体が動いてしまったあの瞬間から。
              <br /><br />
              GIRLS HIPHOPの持つ強さと可愛さ、その両方を表現することが私の好きなこと。
              踊ることで、自分に自信がついた。もっとかっこよくなれた。
              その体験を、レッスンに来てくれるみんなにも届けたいと思っています。
            </motion.p>

            <motion.div variants={fadeInUp} className="glass rounded-xl p-5" style={{ border: "1px solid rgba(179,136,255,0.12)" }}>
              <p className="font-poppins text-xs tracking-[0.3em] text-white/30 uppercase mb-3">Style</p>
              <div className="flex flex-wrap gap-2">
                {["GIRLS HIPHOP", "HIPHOP", "STREET", "K-POP"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-poppins tracking-wider"
                    style={{
                      background: "rgba(179,136,255,0.1)",
                      border: "1px solid rgba(179,136,255,0.2)",
                      color: "var(--purple-lt)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="grid sm:grid-cols-3 gap-5"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass rounded-2xl p-7 flex flex-col gap-3"
              style={{ border: "1px solid rgba(179,136,255,0.12)" }}
            >
              <span className="text-2xl" style={{ color: "var(--purple)" }}>{v.icon}</span>
              <h3 className="font-playfair font-semibold text-lg text-white">{v.title}</h3>
              <p className="font-noto text-sm text-white/50 leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
