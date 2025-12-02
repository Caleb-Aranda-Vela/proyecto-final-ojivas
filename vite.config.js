import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Este ajuste asegura que las rutas de los assets y CSS se manejen correctamente.
  base: './', 
});
