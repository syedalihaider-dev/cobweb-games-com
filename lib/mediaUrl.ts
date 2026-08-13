/**
 * Keeps media paths local by default, while allowing production deployments to
 * move large videos behind a CDN without changing component code.
 */
export function mediaUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_MEDIA_CDN_URL?.replace(/\/$/, '');
  return baseUrl ? `${baseUrl}/${path.replace(/^\//, '')}` : path;
}
