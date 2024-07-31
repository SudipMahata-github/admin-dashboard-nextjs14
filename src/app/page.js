'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // const timeoutId = setTimeout(() => {
    router.push('/dashboard');
    // }, 1000); 

    // return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <h2 className="text-red-500">Redirecting to dashboard.....</h2>
    </>
  );
}
