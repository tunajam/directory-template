/**
 * DIRECTORY SITE CONFIGURATION
 *
 * This is the ONLY file you need to edit to launch a new directory.
 * Everything else reads from this config.
 */

const siteConfig = {
  // ── Basics ──────────────────────────────────────────────
  name: 'DumpsterCompare',
  domain: 'dumpstercompare.com',
  tagline: 'Compare Dumpster Rental Prices Near You',
  description: 'Find and compare dumpster rental prices from trusted local providers.',
  contactEmail: 'hello@dumpstercompare.com',
  notificationEmail: 'fred@tunajam.com', // Where quote requests go

  // ── Industry ────────────────────────────────────────────
  industry: {
    singular: 'Dumpster Rental',      // "Dumpster Rental in Austin, TX"
    plural: 'Dumpster Rentals',        // "Dumpster Rentals in Austin, TX"
    slug: 'dumpster-rental',           // URL-safe
    companyNoun: 'company',            // "5 companies listed"
    companyNounPlural: 'companies',    // "Compare 5 companies"
    serviceVerb: 'rent',               // "Rent a dumpster"
  },

  // ── Service Options (replaces "dumpster sizes") ─────────
  // These are the filterable service tiers/options
  serviceOptions: {
    label: 'Dumpster Size',            // "Select dumpster size"
    unit: 'Yard',                      // "10 Yard Dumpster"
    options: [
      { value: 10, label: '10 Yard', description: 'Small cleanouts, single-room remodels', capacity: '2–3 pickup truck loads' },
      { value: 20, label: '20 Yard', description: 'Medium renovations, roof replacements', capacity: '4–6 pickup truck loads' },
      { value: 30, label: '30 Yard', description: 'Major renovations, new construction', capacity: '8–10 pickup truck loads' },
      { value: 40, label: '40 Yard', description: 'Large-scale demolition, commercial', capacity: '12–14 pickup truck loads' },
    ],
  },

  // ── How It Works Steps ──────────────────────────────────
  steps: [
    { title: 'Search Your City', description: 'Enter your city to see local providers.' },
    { title: 'Compare Prices', description: 'View side-by-side pricing, ratings, and services.' },
    { title: 'Get a Quote', description: 'Request a free quote directly from the company.' },
  ],

  // ── Theme ───────────────────────────────────────────────
  theme: {
    primary: '#1e3a5f',        // navy — header, headings
    primaryLight: '#2a4f7a',
    primaryDark: '#152a45',
    accent: '#f59e0b',         // amber — CTAs, highlights
    accentLight: '#fbbf24',
    accentDark: '#d97706',
  },

  // ── SEO Templates ───────────────────────────────────────
  // Available variables: {city}, {state}, {count}, {industry}, {industryPlural}
  seo: {
    cityTitle: '{industryPlural} in {city}, {state} — Compare {count} Companies | {siteName}',
    cityDescription: 'Compare {industry} prices from {count} companies in {city}, {state}. Get instant quotes.',
    companyTitle: '{companyName} — {industry} in {city}, {state} | {siteName}',
    companyDescription: '{companyName} offers {industry} in {city}, {state}. Compare sizes, pricing, and service areas.',
  },

  // ── Hero Search ─────────────────────────────────────────
  hero: {
    heading: 'Compare {industry}\\nPrices Near You',
    subheading: 'Stop calling around. Find the best deals from trusted local companies — side by side, in seconds.',
    searchPlaceholder: 'Enter your city (e.g. Austin, Denver)',
    searchButton: 'Find {industryPlural} →',
  },

  // ── Quote Form ──────────────────────────────────────────
  quoteForm: {
    heading: 'Get a Free Quote',
    subheading: 'Fill out the form and {companyName} will contact you with pricing.',
    submitButton: 'Get My Free Quote →',
    successMessage: '{companyName} will get back to you within 1 business day.',
    fields: ['name', 'phone', 'email', 'serviceOption', 'message'],
  },

  // ── Blog ────────────────────────────────────────────────
  blog: {
    title: '{industry} Blog',
    description: 'Expert advice on {industry} costs, tips, and guides.',
  },

  // ── Monetization ─────────────────────────────────────────
  monetization: {
    ads: {
      enabled: true,           // Toggle ad slots on/off globally
      topSlot: true,           // Show ad slot at top of city/blog pages
      sidebarSlot: true,       // Show ad slot in sidebar
    },
    claimListing: {
      enabled: true,           // Show "Claim Your Listing" CTA on company pages
      heading: 'Is this your business?',
      subheading: 'Claim this listing to update your info, add real pricing, respond to quotes, and get a verified badge.',
      buttonText: 'Claim This Listing — It\'s Free',
    },
    leadCapture: {
      enabled: true,           // Show "Get Free Quotes" form on city pages
      heading: 'Get Free Quotes',
      subheading: 'Tell us what you need and get quotes from top-rated local companies.',
      buttonText: 'Get My Free Quotes →',
      successMessage: 'Thanks! Local companies will reach out within 1 business day.',
    },
  },

  // ── Analytics ───────────────────────────────────────────
  posthog: {
    key: '', // Set in .env.local: NEXT_PUBLIC_POSTHOG_KEY
    host: 'https://us.i.posthog.com',
  },

  // ── Notifications ───────────────────────────────────────
  notifications: {
    provider: 'resend', // 'resend' | 'none'
    // Set RESEND_API_KEY in .env.local
  },
} as const;

export default siteConfig;
export type SiteConfig = typeof siteConfig;
