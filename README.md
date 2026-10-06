# week16-original — Mio Hasegawa Portfolio

POSSE PH1 Week16 自由制作課題として作成した、長谷川実桜のポートフォリオサイトです。
HTML / Tailwind CSS / JavaScript / React（PH1で学んだ技術）を使い、柔らかい雰囲気とデザイナーっぽい配色を意識して構築しました。

## 使用技術

- React 19 + Vite
- Tailwind CSS v4（`@tailwindcss/vite`）
- useState / useEffect + localStorage（Worksの「いいね」をリロード後も保持）

## セットアップ

```bash
npm install
npm run dev
```

## ビルド・GitHub Pagesへのデプロイ

```bash
npm run build    # dist/ に出力（vite.config.js で base: './' を設定済み）
npm run deploy   # gh-pages パッケージで gh-pages ブランチに公開
```

## 公開URL

https://2pt9bp9rgz-coder.github.io/week16-original/
