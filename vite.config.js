# 11+ Writing Practice — Vercel Deployment

A 4-step process. No coding knowledge needed.

---

## What you need
- A free Vercel account: https://vercel.com/signup
- A free GitHub account: https://github.com/signup
- Your Anthropic API key: https://console.anthropic.com

---

## Step 1 — Put the files on GitHub

1. Go to https://github.com/new
2. Name the repo `11plus-writing` (or anything you like)
3. Leave it **Public**, click **Create repository**
4. On the next page, click **uploading an existing file**
5. Drag in ALL the files from this folder (keeping the folder structure):
   ```
   index.html
   package.json
   vite.config.js
   vercel.json
   src/
     main.jsx
     App.jsx
   api/
     claude.js
   ```
6. Click **Commit changes**

---

## Step 2 — Deploy to Vercel

1. Go to https://vercel.com/new
2. Click **Import** next to your `11plus-writing` repo
3. Leave all settings as default
4. Click **Deploy**
5. Wait about 60 seconds — Vercel builds and deploys automatically

---

## Step 3 — Add your API key

1. In Vercel, go to your project → **Settings** → **Environment Variables**
2. Add a new variable:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** your key starting with `sk-ant-...`
3. Click **Save**
4. Go to **Deployments** → click the three dots on the latest deployment → **Redeploy**

---

## Step 4 — Open on your phone

Vercel gives you a URL like `https://11plus-writing-xyz.vercel.app`

Open it on any device. Bookmark it on your phone home screen:
- **iPhone:** Safari → Share → Add to Home Screen
- **Android:** Chrome → three dots → Add to Home Screen

---

## That's it

The app is now live. Every time you want to update it, edit the files on GitHub and Vercel redeploys automatically within 60 seconds.

---

## Troubleshooting

**"Function invocation failed"** — check your API key is set correctly in Vercel environment variables and redeploy.

**Blank page** — check the browser console for errors. Most common cause is a build error; check the Vercel deployment logs.

**Photo not reading** — ensure good lighting, page flat, whole essay in frame. Dark pen on white paper works best.
