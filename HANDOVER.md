# cocoro LP — Claude Code 引き継ぎドキュメント

## プロジェクト概要

| 項目 | 内容 |
|------|------|
| クライアント | 温（cocoro） |
| 所属 | S project |
| ジャンル | GIRLS HIPHOP、HIPHOP |
| 目的 | プロフィール紹介 ＋ レッスン生募集 |
| ターゲット | スマホユーザーがメイン |

---

## 現在の状態

- `index.html` — LP本体（コーディング完了・素材差し替え待ち）
- `wireframe_cocoro.html` — ワイヤーフレーム（参考用）
- `HANDOVER.md` — この引き継ぎ書

---

## デプロイ構成

| 環境 | URL |
|------|-----|
| テスト | https://columbus0370.github.io/cocoro2/ |
| 本番（予定） | XSERVER（ドメイン未定） |

- テスト環境は GitHub Pages（main ブランチ自動反映）
- 本番は XSERVER に静的ファイルをアップロード予定

---

## デザイン仕様

### コンセプト
**「ダークロマンティック・ストリート」**
ANNA SUI × Vivienne Westwood × GIRLS HIPHOP の世界観。
深夜の都市、紫煙、女の子の強さ。甘さと毒が共存するデザイン。

### カラーパレット（CSS変数）

```css
--deep:    #1A0A2E   /* ベース・闇 */
--deep2:   #120720   /* より深い背景 */
--purple:  #7B5EA7   /* サブカラー */
--rose:    #C9748A   /* アクセント・CTA */
--rose-lt: #e8a0b2   /* ローズの明るめ */
--off:     #F5F0F8   /* 明るいテキスト・背景 */
--muted:   #b8aec8   /* グレイッシュパープル */
--text:    #1C1C1C
```

### フォント（Google Fonts）

| 用途 | フォント |
|------|---------|
| 見出し | Cormorant Garamond（セリフ・優雅） |
| 英字アクセント | Bebas Neue（ストリート・力強さ） |
| 本文 | Noto Serif JP（読みやすさ） |

---

## セクション構成

| # | ID | 内容 |
|---|-----|------|
| S1 | `#hero` | 動画BG（ループ自動再生）＋ テキストオーバーレイ |
| S2 | `#about` | プロフィール（写真＋テキスト＋バッジ） |
| S3 | `#lesson` | スタジオカード×2（クラス一覧＋動画モーダル） |
| S4 | `#instagram` | Instagramフィード埋め込み |
| S5 | `#cta` | 体験申込ボタン（Instagram DM） |
| S6 | `#footer` | フッター |

---

## 素材差し替えガイド

### 動画・写真ファイルの置き場所
```
cocoro2/
├── index.html
├── assets/
│   ├── hero.mp4          # S1: ヒーロー動画（ループ）
│   ├── lesson-sda.mp4    # S3: SDA新長田校 レッスン動画
│   ├── lesson-myself.mp4 # S3: マイセルフ立花校 レッスン動画
│   ├── profile.jpg       # S2: プロフィール写真
│   ├── thumb-sda.jpg     # S3: SDA動画サムネイル（任意）
│   └── thumb-myself.jpg  # S3: マイセルフ動画サムネイル（任意）
```

### S1 ヒーロー動画の有効化
`index.html` 内のコメントアウトを外す：
```html
<!-- コメントを外してsrcを設定 -->
<video autoplay muted loop playsinline>
  <source src="./assets/hero.mp4" type="video/mp4">
</video>
```

### S2 プロフィール写真の差し替え
`.about-photo` div 内のプレースホルダーを `<img>` に置き換え：
```html
<img src="./assets/profile.jpg" alt="cocoro" style="width:100%;height:100%;object-fit:cover;object-position:center top;">
```

### S3 レッスン動画サムネイルの追加
`.lesson-video-wrap` の中にサムネイル画像を追加：
```html
<img src="./assets/thumb-sda.jpg" alt="SDA新長田校レッスン"
     style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.6;">
```

### S4 Instagramウィジェット差し替え
`.ig-feed-placeholder` div をSnapWidgetの埋め込みコードに置き換え：
```html
<!-- SnapWidget埋め込みコード（SnapWidget.comで取得） -->
<script src="https://snapwidget.com/js/snapwidget.js"></script>
<iframe src="https://snapwidget.com/embed/XXXXXXX"
        class="snapwidget-widget"
        allowtransparency="true"
        frameborder="0"
        scrolling="no"
        style="border:none;overflow:hidden;width:100%;"></iframe>
```

---

## 機能仕様

### 動画モーダル
- `.lesson-video-wrap` をタップで起動
- `data-modal-title` 属性 → モーダルのタイトル
- `data-video-src` 属性 → 再生する動画ファイルパス
- 閉じ方：×ボタン / 背景クリック / ESCキー
- 閉じると自動的に動画停止・srcクリア

### スクロールリビール
- `.reveal` クラスを付けた要素が画面に入るとフェードイン
- `IntersectionObserver` で実装（threshold: 0.12）

### CTA ボタン
- Instagram DM への直リンク
- URL: `https://ig.me/m/cocoro_on_02`

---

## スタジオ情報

### SDA新長田校
- 場所：常磐アリーナ
- 曜日：毎週月曜（毎月1週目休み）
- HP：https://www.shinydanceacademy.jp/17248207147702
- クラス：
  - 17:50〜18:30 エンジェルクラス（幼稚園児）
  - 18:40〜19:30 ジュニアクラス（小学生）
  - 19:40〜20:30 一般クラス（中学生以上）

### マイセルフ立花校
- 場所：ユアスタジオ
- 曜日：毎週金曜（5週目休み）
- HP：https://danceschoolmyself.com
- クラス：
  - 17:15〜18:15 ストリート初級
  - 18:15〜19:15 K-POP入門

---

## SNS

| サービス | URL |
|---------|-----|
| Instagram | https://www.instagram.com/cocoro_on_02 |
| Instagram DM | https://ig.me/m/cocoro_on_02 |

---

## 今後のタスク

- [ ] 動画素材入手 → `assets/` に配置して差し替え
- [ ] プロフィール写真入手 → 差し替え
- [ ] SnapWidget でInstagramウィジェット設定・差し替え
- [ ] 実機スマホで表示確認・微調整
- [ ] XSERVER に本番公開
