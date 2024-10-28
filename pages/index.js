// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/login'); // Redireciona para a página de login
  }, []);

  return null; // Pode retornar null ou um loader aqui.
}
