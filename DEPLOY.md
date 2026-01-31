# Deploying Code Academy to Cloudflare Pages

We use `@cloudflare/next-on-pages` to support Next.js App Router on the Edge.

## Option 1: Direct Upload (Easiest for now)
You can deploy directly from your terminal if you have a Cloudflare account.

1.  **Login to Cloudflare** (if not already logged in):
    ```bash
    npx wrangler login
    ```

2.  **Deploy**:
    ```bash
    npm run deploy
    ```
    *   This will ask you to create a new project name (e.g., `code-academy`).
    *   It will upload the `.vercel/output/static` folder to Cloudflare.

## Option 2: Git Integration (Recommended for Long Term)
1.  Push this project to a **GitHub Repository**.
2.  Go to the [Cloudflare Dashboard](https://dash.cloudflare.com) > **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**.
3.  Select your repository.
4.  **Build Settings**:
    *   **Framework Preset**: `Next.js`
    *   **Build Command**: `npx @cloudflare/next-on-pages`
    *   **Output Directory**: `.vercel/output/static`
    *   *(Note: Do NOT use the default `next build` / `out` settings).*

## Troubleshooting
*   **Images**: Next.js `<Image>` component requires optimization. On Cloudflare, you might need a paid plan for Image Resizing or use `unoptimized` in `next.config.ts`.
*   **Node.js APIs**: Remember, this runs on the **Edge**. Native Node.js modules (like `fs`) won't work in runtime code (but they work in `getStaticProps` or build time scripts).
