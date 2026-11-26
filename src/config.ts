/** Site-wide configuration: metadata, availability flag, social links. */

export const site = {
  title: 'Valerii Kliuchnikov',
  description: 'Notes on Go, distributed systems, and the things I build.',
  url: 'https://kliuchnikovv.github.io',
  /** Static fallback OG image used when a post omits its own. */
  defaultOgImage: '/og/default.png',
} as const;

/**
 * Privacy-friendly analytics (GoatCounter). Set `code` to your GoatCounter
 * site code — the subdomain of <code>.goatcounter.com you registered. Empty
 * disables the script entirely. Only loaded in production builds.
 */
export const analytics = {
  goatCounterCode: 'kliuchnikovv',
} as const;

export const availability = {
  available: true,
  label: 'Open to offers · Barcelona',
} as const;

/** Author identity — single source for the bio shown at the end of every post. */
export const author = {
  name: 'Valerii Kliuchnikov',
  initials: 'VK',
  role: 'Senior Software Engineer',
  bio: 'Go and systems engineer in Barcelona. I write about distributed backends, event-driven systems, and the things I build.',
  /** Square portrait in /public; the monogram is the fallback when empty. */
  avatar: '/avatar.jpg',
  aboutHref: '/about/',
} as const;

export interface SocialLink {
  label: string;
  href: string;
}

/** Footer social links, in display order. Add a network = one line here. */
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/kliuchnikovv' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kliuchnikovv' },
  { label: 'Telegram', href: 'https://t.me/kliuchnikovv' },
  { label: 'Email', href: 'mailto:valeriy.v.klyuchnikov@gmail.com' },
];
