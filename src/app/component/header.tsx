'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { login, logout } from '@/lib/features/user/userSlice';
import { toggleTheme } from '@/lib/features/theme/themeSlice';

export default function Header() {
  const dispatch = useAppDispatch();
  const { username, isLoggedIn } = useAppSelector((state) => state.user);
  const theme = useAppSelector((state) => state.theme.mode);

  return (
    <header className="fixed top-0 left-0 right-0 h-12 flex justify-between items-center px-4 shadow">
      <div className="font-bold">my-velog</div>
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <span className="text-sm">{username}</span>
            <button
              onClick={() => dispatch(logout())}
              className="text-sm px-3 py-1 border rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => dispatch(login('velog_user'))}
            className="text-sm px-3 py-1 border rounded"
          >
            Login
          </button>
        )}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="flex items-center w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors"
        >
          <span
            className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
              }`}
          />
        </button>
      </div>
    </header>
  );
}
