import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/insight/',
  publicDir: 'public',
  define: {
    __IMG_BASE__: JSON.stringify('/insight/images/'),
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: process.platform === 'darwin' ? 'Google Chrome' : 'chrome',
  },
});
