"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

// ── Formspree の設定 ──────────────────────────────────────────
// 1. https://formspree.io でアカウント作成
// 2. 「New Form」→ メールアドレスを入力 → フォームIDを取得
// 3. 下の FORMSPREE_ID を差し替えれば実際にメールが届くようになります
const FORMSPREE_ID = "YOUR_FORMSPREE_ID"; // ← ここを変える
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;
// ─────────────────────────────────────────────────────────────

type Mode = "dm" | "email";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [mode, setMode] = useState<Mode>("dm");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (FORMSPREE_ID === "YOUR_FORMSPREE_ID") {
      alert("Formspree IDが未設定です。Contact.tsx の FORMSPREE_ID を設定してください。");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,94,168,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-10"
        >
          <p className="font-poppins text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: "var(--pink)" }}>
            Contact
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white leading-tight">
            Get in<br />
            <span className="italic gradient-text">Touch</span>
          </h2>
        </motion.div>

        {/* Mode toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-1 mb-8 p-1 rounded-full"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {([["dm", "Instagram DM"], ["email", "メールフォーム"]] as [Mode, string][]).map(([val, label]) => (
            <button
              key={val}
              onClick={() => setMode(val)}
              className="relative flex-1 py-2.5 px-4 rounded-full font-poppins text-xs tracking-wider transition-all duration-300"
              style={{
                color: mode === val ? "#fff" : "rgba(255,255,255,0.35)",
              }}
            >
              {mode === val && (
                <motion.span
                  layoutId="tab-bg"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: val === "dm"
                      ? "linear-gradient(135deg, rgba(179,136,255,0.3), rgba(255,94,168,0.3))"
                      : "rgba(255,255,255,0.08)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {mode === "dm" ? (
            <motion.div
              key="dm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Instagram DM — primary CTA */}
              <div
                className="glass rounded-3xl p-8 text-center"
                style={{ border: "1px solid rgba(179,136,255,0.15)" }}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, rgba(179,136,255,0.2), rgba(255,94,168,0.2))", border: "1px solid rgba(179,136,255,0.3)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--purple)">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>

                <p className="font-playfair text-xl font-semibold text-white mb-2">Instagram DM</p>
                <p className="font-noto text-white/50 text-sm leading-relaxed mb-8">
                  体験レッスンのお申し込み、レッスンに関するご質問は<br />
                  Instagramのダイレクトメッセージからお気軽にどうぞ。
                </p>

                <a
                  href="https://ig.me/m/cocoro_on_02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-poppins font-medium tracking-wider text-white transition-all duration-300 hover:scale-105 w-full justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(179,136,255,0.35) 0%, rgba(255,94,168,0.35) 100%)",
                    border: "1px solid rgba(179,136,255,0.5)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  DMを送る → @cocoro_on_02
                </a>

                <p className="font-noto text-xs text-white/25 mt-5">
                  ※ 返信は通常1〜3日以内
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div
                className="glass rounded-3xl p-8"
                style={{ border: "1px solid rgba(179,136,255,0.15)" }}
              >
                {status === "sent" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="text-4xl mb-4" style={{ color: "var(--purple)" }}>✦</div>
                    <p className="font-playfair text-xl font-semibold gradient-text mb-2">送信しました！</p>
                    <p className="font-noto text-white/40 text-sm">確認後、メールまたはInstagram DMにてご連絡します。</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {FORMSPREE_ID === "YOUR_FORMSPREE_ID" && (
                      <div
                        className="px-4 py-3 rounded-xl text-xs font-noto text-white/60"
                        style={{ background: "rgba(255,94,168,0.1)", border: "1px solid rgba(255,94,168,0.2)" }}
                      >
                        ⚠ Formspree ID未設定 — Contact.tsx の FORMSPREE_ID を差し替えると実際にメールが届きます
                      </div>
                    )}
                    <div>
                      <label className="block font-poppins text-xs tracking-wider text-white/40 mb-2 uppercase">Name</label>
                      <input type="text" name="name" placeholder="お名前" required />
                    </div>
                    <div>
                      <label className="block font-poppins text-xs tracking-wider text-white/40 mb-2 uppercase">Email</label>
                      <input type="email" name="email" placeholder="メールアドレス" required />
                    </div>
                    <div>
                      <label className="block font-poppins text-xs tracking-wider text-white/40 mb-2 uppercase">Message</label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="お問い合わせ内容&#10;（体験レッスン希望の方は希望クラスをご記入ください）"
                        required
                        style={{ resize: "none" }}
                      />
                    </div>
                    {status === "error" && (
                      <p className="font-noto text-xs text-center" style={{ color: "var(--pink)" }}>
                        送信に失敗しました。Instagram DMからご連絡ください。
                      </p>
                    )}
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl font-poppins font-medium tracking-wider text-sm transition-all duration-300 disabled:opacity-50"
                      style={{
                        background: "linear-gradient(135deg, rgba(179,136,255,0.3) 0%, rgba(255,94,168,0.3) 100%)",
                        border: "1px solid rgba(179,136,255,0.35)",
                        color: "#fff",
                      }}
                    >
                      {status === "sending" ? "送信中..." : "送信する"}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
