import type { Metadata } from "next";
import { Playfair_Display, Poppins, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "cocoro | GIRLS HIPHOP DANCE",
  description:
    "温(cocoro)のダンスの世界へ。GIRLS HIPHOP / HIPHOPダンス講師。SDA新長田校・マイセルフ立花校でレッスン生募集中。",
  metadataBase: new URL("https://columbus0370.github.io/cocoro2"),
  openGraph: {
    title: "cocoro | GIRLS HIPHOP DANCE",
    description: "温(cocoro)のダンスの世界へ。GIRLS HIPHOP / HIPHOPダンス講師。",
    type: "website",
    locale: "ja_JP",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "cocoro | GIRLS HIPHOP DANCE",
    description: "温(cocoro)のダンスの世界へ。",
  },
  keywords: ["ダンス", "GIRLS HIPHOP", "HIPHOP", "レッスン", "SDA新長田校", "マイセルフ立花校", "cocoro", "温"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${playfair.variable} ${poppins.variable} ${notoSansJP.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
