const base = import.meta.env.BASE_URL;

/**
 * Resolve an app-relative path against the configured base path so the build
 * works both at a domain root and inside a project sub-path of the host.
 */
export function href(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const hashAt = path.indexOf('#');
  const hash = hashAt >= 0 ? path.slice(hashAt) : '';
  const pathname = hashAt >= 0 ? path.slice(0, hashAt) : path;
  const normalised = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  return `${base.endsWith('/') ? base : `${base}/`}${normalised}${hash}`;
}

/** True when `current` is the page (or a descendant of the page) at `path`. */
export function isCurrent(current: string, path: string): boolean {
  // Hash links jump inside a page; they are not themselves the current route.
  if (path.includes('#')) return false;
  const target = href(path);
  if (target === base || target === `${base}/`) return current === target;
  return current === target || current.startsWith(target);
}
