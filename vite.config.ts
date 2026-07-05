import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(async ({ command }) => {
  const plugins = [react(), tailwindcss()];

  // Prerender is opt-in only: it hangs after completion in CI and locally.
  // Dev never loads the plugin. Prod/CI builds skip it unless explicitly enabled.
  const enablePrerender =
    command === 'build' &&
    process.env.CI !== 'true' &&
    process.env.VITE_PRERENDER === 'true';

  if (enablePrerender) {
    const { vitePrerenderPlugin } = await import('vite-prerender-plugin');
    plugins.push(
      vitePrerenderPlugin({
        renderTarget: '#root',
        prerenderScript: path.resolve(__dirname, 'src/prerender.tsx'),
      }),
    );
  }

  return {
    base: './',
    plugins,
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'react';
            }

            return undefined;
          },
        },
      },
    },
  };
});
