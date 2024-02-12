import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: 'popup.html',
      },
      output: {
        entryFileNames: 'assets/[name].js',
      },
    },
  },
});
