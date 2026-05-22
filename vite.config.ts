import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = !!process.env.VERCEL;

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
// When deploying on Vercel, we bypass the Cloudflare plugin and use the standard server entry.
export default defineConfig({
  cloudflare: isVercel ? false : {},
  tanstackStart: isVercel
    ? {}
    : {
        server: { entry: "server" },
      },
});

