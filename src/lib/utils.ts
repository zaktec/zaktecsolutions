const BASE_PATH = import.meta.env.BASE_URL || '/';

/**
 * Prepends the configured base path to an internal URL.
 * @param path - The internal path to prefix.
 * @returns A GitHub Pages-safe internal URL.
 */
export function withBase(path: string): string {
  if (path.startsWith('#')) {
    return path;
  }

  if (/^(https?:|mailto:|tel:)/.test(path)) {
    return path;
  }

  const base = BASE_PATH.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return `${base}${cleanPath}`;
}
