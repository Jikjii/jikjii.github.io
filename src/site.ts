// Everything you'd want to change without touching a layout lives here.

export const site = {
  // The pen name. Appears in the masthead, the <title>, the feed.
  title: 'alfonso mcentire',
  author: 'alfonso mcentire',
  // Second line of the masthead. Chinaski wouldn't give you his address either.
  place: 'address withheld',
  description: 'essays and fragments, typed.',

  // The first thing on the homepage, typed like everything else.
  // Placeholder -- replace it with your own line before you push.
  epigraph:
    "the stone doesn't care who's pushing it. most days neither do i.",
};

/**
 * GitHub Pages project sites serve under a sub-path, so nothing can be
 * hard-coded to `/`. Use href('/fragments') instead of '/fragments'.
 * If you rename the repo to jikjii.github.io, BASE_URL becomes '/' and
 * this keeps working unchanged.
 */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const tail = path.replace(/^\/+/, '');
  return tail ? `${base}/${tail}` : base || '/';
}

/** "september 11, 2026" -- typed lowercase like the rest of the page. */
export function typedDate(d: Date): string {
  return d
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    })
    .toLowerCase();
}

export function year(d: Date): string {
  return String(d.getUTCFullYear());
}
