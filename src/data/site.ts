export const company = {
  name: 'Prism Industries Pvt. Ltd.',
  short: 'Prism Industries',
  tagline: 'Leader in API Bulk Drugs',
  founded: 1993,
  description:
    'Prism Industries Pvt. Ltd. is a WHO-GMP certified manufacturer and exporter of Active Pharmaceutical Ingredients (APIs), intermediates and specialty chemicals, based in Khambhat, Gujarat, India since 1993.',
  email: 'marketing@prisminltd.com',
  phone: '9227406992',
  phoneIntl: '+919227406992',
  officePhones: ['0265-3504650', '0265-3504649'],
  factory: {
    label: 'Factory',
    lines: ['Survey No. 637/23/A1, Kalamsar,', 'Khambhat–Dhuvaran Road, Ta. Khambhat,', 'Dist. Anand – 388640, Gujarat, India'],
    map: 'https://www.google.com/maps/search/?api=1&query=Prism+Industries+Kalamsar+Khambhat',
  },
  office: {
    label: 'Office',
    lines: ['208, Trivia, Natubhai Circle,', 'Race Course, Vadodara – 390007,', 'Gujarat, India'],
  },
  social: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/prism-industries-589771309/' },
    { name: 'X (Twitter)', href: 'https://x.com/prismindltd' },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61559713707912' },
    { name: 'Instagram', href: 'https://www.instagram.com/prism2241/' },
  ],
};

export const contacts = [
  { name: 'Mr. Samir Shah', role: 'Sales', email: 'marketing@prisminltd.com', phone: '09227406992' },
  { name: 'Mr. Chandrakant Patel', role: 'Director', email: 'cnp@prisminltd.com', phone: '09825051262' },
  { name: 'Mr. Vishnu Patel', role: 'Director', email: 'vnp@prisminltd.com', phone: '09825050731' },
];

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products/' },
  {
    label: 'Nicotine',
    href: '/nicotine/',
    children: [
      { label: 'Nicotine Overview', href: '/nicotine/' },
      { label: 'STIC Nicotine', href: '/stic-nicotine/' },
      { label: 'SIF Strategy', href: '/sif-strategy/' },
      { label: 'Traceability', href: '/traceability/' },
    ],
  },
  {
    label: 'Company',
    href: '/company/',
    children: [
      { label: 'Our Company', href: '/company/' },
      { label: 'About Us', href: '/about-us/' },
      { label: 'Learning Vault', href: '/learning-vault/' },
      { label: 'Corporate Social Responsibility', href: '/csr/' },
      { label: 'Our Policies', href: '/our-policies/' },
      { label: 'Services', href: '/services/' },
      { label: 'Gallery', href: '/gallery/' },
    ],
  },
  { label: 'Blog', href: '/blog/' },
];

/** Certifications and quality credentials, as stated on prisminltd.com (About Us / Company). */
export const certifications = [
  { code: 'WHO-GMP', name: 'WHO Good Manufacturing Practice', group: 'gmp' },
  { code: 'GLP', name: 'Good Laboratory Practice', group: 'gmp' },
  { code: 'USP · EP', name: 'United States & European Pharmacopoeia grades', group: 'pharmacopoeia' },
  { code: 'BP · IP', name: 'British & Indian Pharmacopoeia grades', group: 'pharmacopoeia' },
  { code: 'ISO 9001:2015', name: 'Quality management', group: 'iso' },
  { code: 'ISO 14001:2015', name: 'Environmental management', group: 'iso' },
  { code: 'ISO 45001:2018', name: 'Occupational health & safety', group: 'iso' },
  { code: 'ISO 22000', name: 'Food safety management', group: 'iso' },
  { code: 'Written Confirmation', name: 'For API exports to the EU', group: 'gmp' },
  { code: 'FSSAI', name: 'Food Safety and Standards Authority of India', group: 'other' },
  { code: 'Halal', name: 'Halal certified', group: 'other' },
  { code: 'Kosher', name: 'Kosher certified', group: 'other' },
];

export const productCategories = {
  cinchona: {
    name: 'Quinine & Cinchona Alkaloids',
    short: 'Quinine',
    blurb: 'Antimalarial and antiarrhythmic alkaloids derived from Cinchona bark — Quinine salts, Quinidine, Cinchonine and Cinchonidine.',
  },
  hyoscine: {
    name: 'Hyoscine (Scopolamine) & Tropane Alkaloids',
    short: 'Hyoscine',
    blurb: 'Antispasmodic and anticholinergic APIs — Hyoscine Butylbromide, Hydrobromide, Methylbromide and related salts.',
  },
  antimalarial: {
    name: 'Artemether & Lumefantrine',
    short: 'Antimalarials',
    blurb: 'Artemisinin-combination therapy APIs and intermediates for modern antimalarial formulations.',
  },
  nicotine: {
    name: 'Pharmaceutical Nicotine',
    short: 'Nicotine',
    blurb: 'High-purity nicotine and nicotine salts to USP/EP for nicotine replacement therapy and pharmaceutical use.',
  },
} as const;

export const categoryOrder = ['cinchona', 'hyoscine', 'antimalarial', 'nicotine'] as const;

export const featuredProducts = [
  'quinine-sulphate',
  'nicotine-usp',
  'hyoscine-butyl-bromide',
  'cinchonine',
  'lumefantrine-ip-usp',
  'artemether',
];

export const testimonials = [
  {
    name: 'Dr. Ankit Mehra',
    role: 'Procurement Head',
    headline: 'Exceptional quality and consistency.',
    quote:
      "We've been sourcing Nicotine Salts and Antimalarial APIs from Prism Industries for over 3 years now. Their quality is always consistent, documentation is thorough, and the support team is incredibly responsive. A reliable partner for any pharmaceutical company.",
  },
  {
    name: 'Julia Martinez',
    role: 'Senior Buyer',
    headline: 'Prism delivers what they promise.',
    quote:
      "We appreciate Prism's transparency, timely deliveries, and excellent customer service. It's rare to find a company that combines technical expertise with such a high level of professionalism. They make international business feel easy.",
  },
  {
    name: 'Ahmed Al-Masri',
    role: 'COO',
    headline: 'One of India’s finest API exporters.',
    quote:
      "Among all the Indian manufacturers we've worked with, Prism stands out for its communication, packaging, and overall export readiness. Their products arrive on time and as promised. It’s been a pleasure partnering with them.",
  },
  {
    name: 'Kevin Liu',
    role: 'Director',
    headline: 'Trustworthy and knowledgeable supplier.',
    quote:
      'From product sampling to large-scale orders, Prism has never let us down. Their deep knowledge of regulatory requirements and global standards makes them stand out. Highly recommended for API imports.',
  },
];

export const blogCategories: Record<string, string> = {
  artemether: 'Artemether',
  cinchonidine: 'Cinchonidine',
  health: 'Health',
  hyoscine: 'Hyoscine',
  lumefantrine: 'Lumefantrine',
  medicine: 'Medicine',
  nicotine: 'Nicotine',
  quinidine: 'Quinidine',
  quinine: 'Quinine',
  uncategorized: 'General',
};
