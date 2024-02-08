import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'popup.html',
        background: path.resolve(__dirname, 'src', 'background.ts'),
      },
      output: {
        entryFileNames: (chunkInfo) =>
          chunkInfo.name === 'background'
            ? 'assets/[name].js'
            : 'assets/[name]-[hash:8].js',
      },
    },
  },
});
