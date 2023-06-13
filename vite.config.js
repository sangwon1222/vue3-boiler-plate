import svgLoader from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@/*': path.resolve(__dirname, 'src'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@template': path.resolve(__dirname, 'src/components/template'),
    },
  },
  include: ['src', 'src/**/*', '*.vue', '*.ts'],
});
