// Minimal inline SVG icon set used across the site.
// Kept dependency-free so this drops into any React project without extra installs.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ToothIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
      <path d="M12 3c-2.2 0-3.2 1.3-4.5 1.3S5 3.4 3.8 4.4C2.5 5.5 2 7.4 2.4 9.6c.4 2.3 1.4 3.6 1.8 6 .3 1.8.7 4.4 2.3 4.4 1.4 0 1.3-2.6 1.7-4.4.3-1.5.7-2.4 1.5-2.4s1.2.9 1.5 2.4c.4 1.8.3 4.4 1.7 4.4 1.6 0 2-2.6 2.3-4.4.4-2.4 1.4-3.7 1.8-6 .4-2.2-.1-4.1-1.4-5.2C15 3.4 14.2 4.3 12.9 4.3S14.2 3 12 3Z" />
    </svg>
  );
}

export function SparkleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
      <path d="M12 3v4M12 17v4M4 12h4M16 12h4M6.5 6.5l2.5 2.5M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5" />
    </svg>
  );
}

export function HeartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
      <path d="M12 20s-7-4.4-9.5-9C1 8 2.4 4.8 5.8 4.2 8 3.8 10 5 12 7.5 14 5 16 3.8 18.2 4.2 21.6 4.8 23 8 21.5 11 19 15.6 12 20 12 20Z" />
    </svg>
  );
}

export function GemIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
      <path d="M6 3h12l3 5-9 13L3 8Z" />
      <path d="M3 8h18M9 3l-2 5 5 13 5-13-2-5" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
      <path d="M12 3 4.5 6v6c0 4.4 3 7.7 7.5 9 4.5-1.3 7.5-4.6 7.5-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M12 21s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2.2 2A17 17 0 0 1 2 6.2 2 2 0 0 1 4 4Z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 6 6.6.7-4.9 4.5 1.3 6.5L12 16.8 6.1 20.2l1.3-6.5-4.9-4.5 6.6-.7Z" />
    </svg>
  );
}


export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M14 8h2V4.5c-.5-.1-1.8-.2-3.2-.2-3.2 0-5.4 2-5.4 5.6V13H4v4h3.4v7h4.2v-7h3.5l.6-4h-4.1V10.2c0-1.2.3-2.2 2.4-2.2Z" />
    </svg>
  );
}

export function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M14 4v10.2a3.8 3.8 0 1 1-3.8-3.8c.3 0 .6 0 .8.1V7.2c-.3 0-.5-.1-.8-.1A7.1 7.1 0 1 0 17.3 14V9.8c1.1.8 2.4 1.3 3.7 1.3V7.8c-2.1-.1-3.8-1.6-4.2-3.8H14Z" />
    </svg>
  );
}


export const iconMap = {
  sparkle: SparkleIcon,
  heart: HeartIcon,
  gem: GemIcon,
  tooth: ToothIcon,
  clock: ClockIcon,
  shield: ShieldIcon,
  tiktok:TikTokIcon,
  facebook:FacebookIcon,
  instagram:InstagramIcon
};
