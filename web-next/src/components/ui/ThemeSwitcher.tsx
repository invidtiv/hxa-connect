'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/theme/context';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const Icon = theme === 'light' ? Moon : Sun;

  return (
    <button
      onClick={toggleTheme}
      className="text-sm px-2 py-1 rounded hover:bg-hxa-bg-hover transition-colors text-hxa-text-dim hover:text-hxa-text inline-flex items-center"
      title={`Switch to ${nextTheme} mode`}
      aria-label={`Switch to ${nextTheme} mode`}
    >
      <Icon size={15} aria-hidden="true" />
    </button>
  );
}
