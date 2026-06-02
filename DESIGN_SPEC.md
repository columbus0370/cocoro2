# cocoro ブランドサイト — デザイン仕様・引継ぎ書

> ダンス講師 温(cocoro) のブランドサイト。デザイン完了・コーディング前の状態に戻すための引継ぎ資料。

---

## 1. プロジェクト概要

| 項目 | 内容 |
|------|------|
| クライアント | 温(cocoro) — ダンス講師 |
| Instagram | [@cocoro_on_02](https://www.instagram.com/cocoro_on_02) |
| DM URL | https://ig.me/m/cocoro_on_02 |
| 公開先 | GitHub Pages: `https://columbus0370.github.io/cocoro2/` |
| リポジトリ | `https://github.com/columbus0370/cocoro2` |
| コンセプト | ANNA SUI × Vivienne Westwood 的な、上質・個性的・夜の美しさ |

---

## 2. デザインシステム

### 2.1 カラーパレット

```css
:root {
  --deep:      #0D0D0D;  /* ページ背景 */
  --deep2:     #181818;  /* セカンダリ背景 */
  --purple:    #B388FF;  /* メインアクセント */
  --purple-lt: #E9D5FF;  /* サブアクセント（グラデ端） */
  --pink:      #FF5EA8;  /* ハイライト */
  --white:     #FFFFFF;  /* テキスト */
  --muted:     #888888;  /* サブテキスト */
}
```

**グラデーション（ブランドカラー）:**
```css
background: linear-gradient(135deg, #E9D5FF 0%, #B388FF 40%, #FF5EA8 100%);
```

### 2.2 タイポグラフィ

| 役割 | フォント | 用途 |
|------|---------|------|
| 見出し | Playfair Display | セクション見出し、ブランド名、イタリック装飾 |
| ラベル・UI | Poppins | 英語ラベル、トラッキング文字、ボタン |
| 本文 | Noto Sans JP | 日本語テキスト全般 |

**Google Fonts URL:**
```
https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,300;1,400&family=Poppins:wght@300;400;500;600&family=Noto+Sans+JP:wght@300;400;500&display=swap
```

### 2.3 視覚エフェクト

**Glassmorphism（`.glass`クラス）:**
```css
background: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(16px) saturate(1.4);
-webkit-backdrop-filter: blur(16px) saturate(1.4);
border: 1px solid rgba(179, 136, 255, 0.15);
```

**グラデーションテキスト（`.gradient-text`）:**
```css
background: linear-gradient(135deg, #E9D5FF 0%, #B388FF 40%, #FF5EA8 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

**グロー（`.glow-purple` / `.glow-pink`）:**
```css
/* purple */
text-shadow: 0 0 40px rgba(179,136,255,0.5), 0 0 80px rgba(179,136,255,0.2);
/* pink */
box-shadow: 0 0 30px rgba(255,94,168,0.4), 0 0 60px rgba(255,94,168,0.15);
```

**ノイズグレイン（body::before）:**
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: /* SVG fractalNoise */;
  opacity: 0.03;
  pointer-events: none;
  z-index: 9998;
}
```

---

## 3. セクション構成・コンテンツ仕様

### 3.1 Nav（ナビゲーション）
- 固定ヘッダー（スクロールで背景blur追加）
- 左: ブランド名「cocoro」（Playfair Display, gradient-text）
- 右: セクションリンク（About / Lesson / Instagram / Contact） + Instagram CTAボタン
- モバイル: ハンバーガーメニュー

---

### 3.2 Hero（ヒーロー）
- **背景**: YouTube動画 iframe（全画面、ユーザー操作不可）
  - 動画ID: `6C2-AIDyTlA`
  - 埋め込みURL: `https://www.youtube-nocookie.com/embed/6C2-AIDyTlA?autoplay=1&mute=1&controls=0&playsinline=1&rel=0&showinfo=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`
  - サムネイル（即時表示用）: `https://img.youtube.com/vi/6C2-AIDyTlA/maxresdefault.jpg`
  - ループ: YouTube API `onStateChange` state=0 で seekTo+playVideo
  - カバー: 動画再生開始(state=1)まで黒カバー → フェードアウト
- **オーバーレイ**: `linear-gradient(to bottom, rgba(13,13,13,0.65) 0%, rgba(13,13,13,0.5) 40%, rgba(13,13,13,0.75) 80%, #0D0D0D 100%)`
- **コンテンツ（中央配置）**:
  - 小ラベル: `GIRLS HIPHOP / HIPHOP`（Poppins, 10px, 0.4em tracking, --purple）
  - メイン: `cocoro`（Playfair Display, clamp(56px, 18vw, 160px), gradient-text, glow-purple）
  - サブ: `温`（Noto, text-white/50, 0.4em tracking）
  - キャッチ: `Dance with your own style`（Playfair italic, clamp(15px, 3.8vw, 22px)）
  - ボタン2つ: ①「Follow on Instagram」（glass style） ②「Lesson Info ↓」（border only）

---

### 3.3 About（プロフィール）
- **見出し**: ラベル `About` (pink) + `温 (cocoro)` (Playfair, gradient-text)
- **2カラムグリッド** (md以上):
  - 左: プロフィール写真 + フローティングバッジ「S project / GIRLS HIPHOP」
  - 右: 自己紹介テキスト + スタイルタグ
- **プロフィール写真**:
  - ファイル: `/assets/profile.png`（IMG_2972.PNG、1170×1482px、人物上半身）
  - アスペクト比: 3:4（縦長）
  - object-position: center top（顔が上部）
- **自己紹介テキスト**:
  ```
  ダンスを始めたのは、音楽に体が動いてしまったあの瞬間から。
  
  GIRLS HIPHOPの持つ強さと可愛さ、その両方を表現することが私の好きなこと。踊ることで、自分に自信がついた。もっとかっこよくなれた。その体験を、レッスンに来てくれるみんなにも届けたいと思っています。
  ```
- **スタイルタグ**: `GIRLS HIPHOP` / `HIPHOP` / `STREET` / `K-POP`
- **バリューカード** (3枚):
  - ✦ 自分らしく — 型にはまらない。あなたらしい動きを一緒に探していきます。
  - ◇ 楽しむこと — ダンスは楽しむためにある。レッスンで笑顔が生まれることを大切にしています。
  - ✧ 表現すること — 音楽に乗せて、心の中にあるものを体で表現する喜びを届けたい。

---

### 3.4 Lesson（レッスン情報）

**SDA新長田校** — 常磐アリーナ / 毎週月曜（毎月1週目休み）
- 17:50–18:30 エンジェルクラス（幼稚園児対象）
- 18:40–19:30 ジュニアクラス（小学生対象）
- 19:40–20:30 一般クラス（中学生以上対象）
- URL: https://www.shinydanceacademy.jp/17248207147702

**マイセルフ立花校** — ユアスタジオ / 毎週金曜（5週目休み）
- 17:15–18:15 ストリート初級（初心者歓迎）
- 18:15–19:15 K-POP入門（K-POP好き集まれ！）
- URL: https://danceschoolmyself.com

CTA: 「体験レッスンを申し込む (Instagram DM)」→ https://ig.me/m/cocoro_on_02

---

### 3.5 Gallery（ギャラリー）
- プレースホルダー実装（実写真未提供）
- 2カラム(sm以下) / 3カラム(sm以上) マソンリーグリッド
- 一部セルが `row-span-2` で縦長（masonry効果）
- 実装時は実際の写真に差し替え

---

### 3.6 Message（メッセージ）
- 背景装飾: 「MESSAGE」大文字のパラレックステキスト（rgba(179,136,255,0.025)）
- アニメーション: 単語ごとのフェードイン
- テキスト:
  ```
  初めてでも　大丈夫。
  一緒に　ダンスを　楽しもう。
  ```
- 補足:
  ```
  ダンスは特別な才能がある人だけのものじゃない。
  音楽が好き、動くことが好き、それだけで十分。
  あなたのペースで、あなたのスタイルで始めよう。
  ```

---

### 3.7 Instagram（投稿）
- 見出し: `Watch / cocoro dance`（Playfair）
- サブ: `最新のレッスン・パフォーマンスをInstagramで発信中`
- Reels 3本（iframe埋め込み、`https://www.instagram.com/reel/{ID}/embed/`）:
  - `DPIqwL4AcFF` — Dance Reel
  - `DXMnmlzAdqF` — Performance
  - `DS7B7lcgYHM` — Class Scene
- CTA: `@cocoro_on_02 をフォローする`

---

### 3.8 Contact（お問い合わせ）
- **デフォルト: Instagram DM**（タブ切り替えでメールフォームも表示）
- DM: https://ig.me/m/cocoro_on_02
- メールフォーム: Formspree（`https://formspree.io/f/{FORMSPREE_ID}`）
  - 項目: Name / Email / Message
- 返信目安: 1〜3日以内

---

### 3.9 Footer
- ブランド名「cocoro」（Playfair, gradient-text）
- サブ「GIRLS HIPHOP / HIPHOP」
- SNSリンク: Instagram / DM → Contact
- コピーライト: © 2026 cocoro. All rights reserved.
- 補記: S project

---

## 4. テックスタック（推奨）

| 項目 | 採用技術 | 理由 |
|------|---------|------|
| フレームワーク | Next.js (App Router) | 静的エクスポート可、開発体験良好 |
| スタイリング | Tailwind CSS | ユーティリティファーストで効率的 |
| アニメーション | Framer Motion | Reactネイティブ、宣言的 |
| デプロイ | GitHub Pages | 無料、自動デプロイ可 |
| フォーム | Formspree | バックエンド不要のメールフォーム |

---

## 5. GitHub Pages デプロイ設定

```
リポジトリ: columbus0370/cocoro2
公開URL: https://columbus0370.github.io/cocoro2/
basePath: /cocoro2
```

### next.config.ts（必須設定）
```typescript
const isProd = process.env.NODE_ENV === "production";
const BASE_PATH = isProd ? "/cocoro2" : "";

const nextConfig = {
  output: "export",          // 静的エクスポート
  basePath: BASE_PATH,
  assetPrefix: isProd ? "/cocoro2/" : "",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,  // 画像パス構築に使用
  },
};
```

### 重要: 静的アセットのパス
`next/image` はGitHub Pagesの静的エクスポートでは動作しない。
代わりに `<img>` タグ + 環境変数でパス構築:

```tsx
<img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/profile.png`} />
```

### GitHub Actions（.github/workflows/deploy.yml）
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
      - uses: actions/deploy-pages@v4
        id: deployment
```

---

## 6. アセット一覧

| ファイル | 内容 | 場所 |
|---------|------|------|
| `profile.png` | プロフィール写真（1170×1482px、JPEG） | `public/assets/profile.png` |
| hero背景動画 | ローカルのみ（ファイルサイズ大のためgit管理外） | `public/assets/hero-bgmovie.mov` |

`.gitignore` に追加推奨:
```
public/assets/*.mov
public/assets/*.mp4
public/assets/*.webm
public/assets/*.MOV
.claude/
```

---

## 7. iOS Safari 必須対策（前回の実装で判明した問題）

### 問題1: `overflow:hidden` + `border-radius` + `position:absolute` 子要素が消える

**症状**: プロフィール画像など、`overflow:hidden`と`border-radius`が同一要素に設定されていると、iOS Safariで内部の`position:absolute`な要素がレンダリングされない。

**解決策**:
```css
/* コンテナに以下を追加 */
transform: translateZ(0);     /* GPU合成レイヤー強制 */
-webkit-transform: translateZ(0);
isolation: isolate;           /* スタッキングコンテキスト明示 */
```

または、画像要素に:
```css
-webkit-backface-visibility: hidden;
```

### 問題2: `filter:blur()` が `overflow:hidden` の外にはみ出す

**症状**: `filter:blur(60px)` を持つ大きな装飾要素（500px以上）が、iOS Safariでは `overflow:hidden` に関わらず画面外にはみ出し、横スクロールを発生させる。

**解決策**: ぼかし装飾は小さく保つ（200px以下）か `filter:blur` を使わない。`isolation:isolate` を section に追加。

### 問題3: Framer Motion の `useInView` が発火しない

**症状**: `position:fixed` や `overflow:hidden` が親要素にある場合、`IntersectionObserver` が正しく動作しないことがある。

**解決策**:
- `margin` を `"-100px"` など厳しくしすぎない
- アニメーションの `initial` に `opacity:0` を使う場合、`isInView` が必ず発火することを確認するか、`opacity:1` にして他のプロパティでアニメーション

### 問題4: CSSグリッドで横スクロール発生

**症状**: グリッド子要素が長いテキストを含む場合、`min-width:auto`（デフォルト）により親グリッドを横に広げる。

**解決策**:
```css
.grid > * {
  min-width: 0;
}
```

### 問題5: YouTube iframe のUI（一時停止ボタン・矢印）が表示される

- `loop=1&playlist=VIDEO_ID` パラメータはナビゲーション矢印を表示させるため使用禁止
- `controls=0` だけでは一時停止ボタンが出る
- **解決策**: 動画の上に `position:absolute` のカバーを重ねてUI操作を完全ブロック。YouTube API (`enablejsapi=1`) + `postMessage` でループ制御

### 問題6: `word-break:keep-all` の日英境界での改行

**症状**: 日本語テキスト中に英語（"Instagram"など）が混じると、日英の境界で改行が起きて見た目が悪くなる。

**解決策**: 問題箇所に `<br className="sm:hidden" />` で意図的な改行を挿入するか、`word-break:normal` を上書き。

---

## 8. UIコンポーネント設計メモ

### ナビゲーション
- スクロール量に応じて背景を `backdrop-filter:blur` でグラスモーフ化
- `position:fixed; z-index:50`

### セクション共通
- `py-32 px-6`（モバイル余白）
- `max-w-5xl mx-auto`（最大幅制限）
- セクションラベル（小文字、tracking-[0.5em]、ピンクかパープル）+ Playfair Display見出し のパターン

### アニメーション基本パターン
```typescript
// フェードアップ
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

// スタガーコンテナ
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

// スケールイン
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};
```

### ガラスカード
```tsx
<div
  className="glass rounded-2xl p-6"
  style={{ border: "1px solid rgba(179,136,255,0.12)" }}
>
```

### グラデーションボタン（プライマリ）
```tsx
<a
  style={{
    background: "linear-gradient(135deg, rgba(179,136,255,0.25) 0%, rgba(255,94,168,0.25) 100%)",
    border: "1px solid rgba(179,136,255,0.4)",
    backdropFilter: "blur(12px)",
    color: "var(--purple-lt)",
  }}
  className="px-7 py-3.5 rounded-full font-poppins text-sm tracking-wider transition-all hover:scale-105"
>
```

---

## 9. 推奨しない実装パターン（前回の教訓）

- `next/image` コンポーネントの使用（GitHub Pages静的エクスポートでbasePath対応が困難）
- Framer Motion の `whileHover` をカードのリンクに直接適用（クリック干渉）
- `aspect-ratio` + `max-height` の併用（CSS競合で高さが0になる）
- `filter:blur()` を持つ500px以上の装飾要素を `overflow:hidden` 内に配置

---

*このドキュメントは初回実装（2026-06-01）の知見をもとに作成。次回実装時の参考として使用してください。*
