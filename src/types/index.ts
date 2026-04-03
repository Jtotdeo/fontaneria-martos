export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  specs: { label: string; value: string }[];
  images: number;
}

export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}
