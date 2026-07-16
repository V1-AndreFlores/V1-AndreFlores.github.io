import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'politica-de-privacidade/index.html'),
        privacyListaMercadoFacil: resolve(
          __dirname,
          'politica-de-privacidade/lista-de-mercado-facil/index.html',
        ),
        privacyFinancasEmDia: resolve(
          __dirname,
          'politica-de-privacidade/financas-em-dia/index.html',
        ),
      },
    },
  },
});
