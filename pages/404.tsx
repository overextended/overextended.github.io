import { useRouter } from 'next/router';
import React from 'react';

const FourOhFour: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    const timeout = setTimeout(() => router.push('/'), 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-neutral-900">
      <img src="https://avatars.githubusercontent.com/u/209772401" width="64" />
      <p className="text-4xl text-white">404</p>
      <p className="text-lg text-white">Redirecting...</p>
    </div>
  );
};

export default FourOhFour;
