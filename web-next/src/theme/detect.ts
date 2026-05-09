export type Theme = 'light' | 'dark';

export const DEFAULT_THEME: Theme = 'light';
export const THEME_COOKIE = 'HXA_THEME';

export function detectTheme(): Theme {
  if (typeof document === 'undefined') return DEFAULT_THEME;
  const match = document.cookie.match(/(?:^|; )HXA_THEME=(light|dark)(?:;|$)/);
  return match ? (match[1] as Theme) : DEFAULT_THEME;
}

export function setThemeCookie(theme: Theme) {
  if (typeof document === 'undefined') return;
  const secure = window.location.protocol === 'https:' ? ';secure' : '';
  document.cookie = `${THEME_COOKIE}=${theme};path=/;max-age=31536000;samesite=lax${secure}`;
}
