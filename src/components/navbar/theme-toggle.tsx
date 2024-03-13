'use client';

import { useTheme } from 'next-themes';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="theme toggle"
      onClick={changeTheme}
    >
      <Icons.sun className="dark:hidden" />
      <Icons.moon className="hidden dark:block" />
    </Button>
  );
};
