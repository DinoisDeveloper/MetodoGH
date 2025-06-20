import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // A pasta 'public' é servida na raiz por padrão.
  // Se index.html está na raiz do projeto e referencia /src/index.tsx,
  // nenhuma configuração especial de 'root' ou 'resolve.alias' é necessária.
})
