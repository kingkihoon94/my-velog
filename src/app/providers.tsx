'use client';

import { useEffect, useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/lib/store';

function Initializer({ children }: { children: React.ReactNode }) {
  const [isMockReady, setIsMockReady] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      import('@/mocks/browser').then(({ worker }) => {
        worker.start().then(() => {
          setIsMockReady(true);
        });
      });
    } else {
      setIsMockReady(true);
    }
  }, []);

  if (!isMockReady) {
    return null;
  }

  return <>{children}</>;
}


export default function Providers({ children }: { children: React.ReactNode }) {

  return (
    <ReduxProvider store={store}>
      <Initializer>{children}</Initializer>
    </ReduxProvider>
  );
}
