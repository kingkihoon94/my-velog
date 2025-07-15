'use client';

import { useEffect, useState } from 'react';
import Header from './component/header';

export default function HomePage() {
  const [apiUsername, setApiUsername] = useState<string>('');

  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => setApiUsername(data.username));
  }, []);

  return (
    <div className="pt-12">
      <Header />
      <p>Mock API user: {apiUsername}</p>
    </div>
  );
}
