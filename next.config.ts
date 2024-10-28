// next.config.js
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Recomendado para detectar problemas em seu código
  swcMinify: true,       // Habilita a minificação com SWC
  // Qualquer outra configuração que você desejar pode ser adicionada aqui
};

export default nextConfig;
