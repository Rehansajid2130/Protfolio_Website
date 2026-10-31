import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ponytail: lean vite configuration with standard react plugin
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});

