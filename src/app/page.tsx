'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { login, logout } from '@/lib/features/user/userSlice';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { username, isLoggedIn } = useAppSelector((state) => state.user);

  return (
    <div>
      <h1>{isLoggedIn ? `Welcome, ${username}` : 'Please log in'}</h1>
      {isLoggedIn ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(login('velog_user'))}>Login</button>
      )}
    </div>
  );
}
