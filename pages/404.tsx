import { useRouter } from 'next/router';
import React from 'react';

const FourOhFour: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/');
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center bg-neutral-900">
      <p className="text-4xl text-white">404</p>
    </div>
  );
};

export default FourOhFour;
