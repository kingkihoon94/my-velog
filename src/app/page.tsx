'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { login, logout } from '@/lib/features/user/userSlice';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { username, isLoggedIn } = useAppSelector((state) => state.user);
  const [apiUsername, setApiUsername] = useState<string>('');

  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => setApiUsername(data.username));
  }, []);

  return (
    <div className='white'>
      <h1>
        {isLoggedIn
          ? `Welcome, ${username}`
          : 'Please log in'}
      </h1>
      <p>Mock API user: {apiUsername}</p>
      {isLoggedIn ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(login('velog_user'))}>Login</button>
      )}
    </div>
  );
}
