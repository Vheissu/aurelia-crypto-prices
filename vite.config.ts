import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import aurelia from '@aurelia/vite-plugin';

export default defineConfig({
  server: {
    open: !process.env.CI,
    port: 9000,
  },
  esbuild: {
    target: 'es2022'
  },
  plugins: [
    aurelia({
      useDev: true,
      // The other possible Shadow DOM mode is 'closed'.
      // If you turn on "closed" mode, there will be difficulty to perform e2e
      // tests (such as Playwright). Because shadowRoot is not accessible through
      // standard DOM APIs in "closed" mode.
      defaultShadowOptions: { mode: 'open' },
    }),
    nodePolyfills(),
  ],
});
