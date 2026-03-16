import React from 'react';
import { NavItem, Service, Project, TeamMember, BlogPost } from './types';
import { Monitor, Code, Search, PenTool, BarChart, Smartphone } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Custom, responsive websites designed to convert visitors into customers.',
    icon: <Monitor className="w-8 h-8 text-brand-500" />,
    features: ['UI/UX Design', 'Responsive Layouts', 'Design Systems', 'Prototyping'],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Robust and scalable web applications built with modern technologies.',
    icon: <Code className="w-8 h-8 text-brand-500" />,
    features: ['React & TypeScript', 'Full-stack Development', 'CMS Integration', 'API Development'],
  },
  {
    id: 'seo',
    title: 'SEO Services',
    description: 'Boost your visibility and drive organic traffic with data-driven SEO strategies.',
    icon: <Search className="w-8 h-8 text-brand-500" />,
    features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Content Strategy'],
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Create a memorable brand identity that resonates with your target audience.',
    icon: <PenTool className="w-8 h-8 text-brand-500" />,
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Collateral'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'techwave-platform',
    title: 'TechWave Platform',
    category: 'Web Development',
    imageUrl: 'https://picsum.photos/id/1/800/600',
    gallery: [
      'https://picsum.photos/id/1/1200/800',
      'https://picsum.photos/id/2/1200/800',
      'https://picsum.photos/id/3/1200/800',
      'https://picsum.photos/id/4/1200/800'
    ],
    description: 'A comprehensive SaaS platform with modern UI and seamless user experience.',
    client: 'TechWave Inc.',
    duration: '4 months',
    date: '2024-08-15',
    tags: ['Web Development', 'UI/UX Design', 'API Integration'],
    challenge: 'TechWave needed a scalable platform that could handle thousands of concurrent users while maintaining a seamless experience.',
    solution: 'We built a modern React-based platform with serverless architecture, ensuring optimal performance and scalability.',
    results: ['300% increase in user engagement', '50% reduction in page load times', '99.9% uptime since launch'],
  },
  {
    id: 'zenith-mobile',
    title: 'Zenith Mobile App',
    category: 'UI/UX Design',
    imageUrl: 'https://picsum.photos/id/119/800/600',
    description: 'Award-winning mobile app design with focus on accessibility, engagement, and intuitive navigation.',
    client: 'Zenith Startups',
    duration: '3 months',
    date: '2024-07-20',
    tags: ['Mobile App', 'Prototyping', 'User Research'],
    challenge: 'Zenith required a mobile-first approach to capture a younger demographic that demands intuitive, fast interfaces.',
    solution: 'We designed a gesture-based navigation system and a dark-mode first UI that resulted in higher retention rates.',
    results: ['Featured in App Store', '4.8 Star Average Rating', '15% Higher Retention'],
  },
  {
    id: 'nova-ecommerce',
    title: 'Nova E-Commerce',
    category: 'Web Design',
    imageUrl: 'https://picsum.photos/id/20/800/600',
    description: 'High-converting e-commerce platform with optimized checkout flow and beautiful product showcases.',
    client: 'Nova Retail',
    duration: '6 months',
    date: '2024-06-10',
    tags: ['E-Commerce', 'Shopify', 'CRO'],
    challenge: 'Cart abandonment was high due to a complex checkout process and unappealing product pages.',
    solution: 'We simplified the checkout to one page and implemented immersive product galleries.',
    results: ['40% increase in conversion rates', '25% increase in average order value', 'Reduced bounce rate by 30%'],
  },
  {
    id: 'apex-branding',
    title: 'Apex Identity',
    category: 'Branding',
    imageUrl: 'https://picsum.photos/id/60/800/600',
    description: 'Rebranding initiative for a logistics leader entering the modern digital market.',
    client: 'Apex Logistics',
    duration: '2 months',
    date: '2024-05-05',
    tags: ['Identity', 'Logo Design', 'Print Media'],
    challenge: 'The legacy brand felt outdated and did not communicate the company\'s technological advancements.',
    solution: 'We created a dynamic visual identity system that works across digital and physical touchpoints.',
    results: ['Modernized Brand Image', 'Consistent Cross-Platform ID', 'Positive Stakeholder Feedback'],
  },
  {
    id: 'urban-coffee',
    title: 'Urban Coffee SEO',
    category: 'SEO',
    imageUrl: 'https://picsum.photos/id/42/800/600',
    description: 'Targeted local SEO strategy for a chain of coffee shops, boosting foot traffic.',
    client: 'Urban Coffee Co.',
    duration: 'Ongoing',
    date: '2024-04-12',
    tags: ['Local SEO', 'Content', 'Analytics'],
    challenge: 'Local competitors were dominating search results, leading to lower foot traffic.',
    solution: 'We implemented a hyper-local content strategy and optimized Google Business Profiles.',
    results: ['Top 3 Ranking for Keywords', '25% Traffic Increase', 'Double listing visibility'],
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 'kurt',
    name: 'Kurt Morales',
    role: 'Founder & Lead Developer',
    bio: 'Founded Kmwebdesign in September 2024, Kurt brings a passion for clean code and user-centric design to every project, ensuring technical excellence aligns with business goals.',
    imageUrl: 'https://picsum.photos/id/1005/400/400',
  },
  {
    id: 'kevin',
    name: 'Kevin Lieau',
    role: 'Developer',
    bio: 'Specializing in backend architecture and API integrations, Kevin builds the robust foundations that power our most complex applications.',
    imageUrl: 'https://picsum.photos/id/1012/400/400',
  },
  {
    id: 'niceole',
    name: 'Niceole Askoml',
    role: 'Designer & Marketing',
    bio: 'Niceole blends artistic vision with market strategy, creating brand identities and user interfaces that captivate audiences and drive conversions.',
    imageUrl: 'https://picsum.photos/id/1011/400/400',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'what-is-payload',
    title: 'What is Payload?',
    excerpt: 'Discover Payload, the code-first Next.js fullstack framework that gives you a full admin panel, automatic database schema, and instant APIs.',
    content: `
      <p class="text-xl text-slate-600 mb-6 leading-relaxed">
        Payload is the Next.js fullstack framework that is revolutionizing how developers build content-driven applications. 
        Write a Payload Config and instantly get a powerful backend without the boilerplate.
      </p>

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Features</h3>
      <ul class="space-y-4 mb-8">
        <li class="flex items-start">
          <span class="mr-3 text-brand-600 mt-1.5">•</span>
          <span class="text-slate-700 leading-relaxed"><strong>Full Admin Panel:</strong> A beautiful, customizable UI using React server/client components that matches the shape of your data. It's completely extensible with your own React components.</span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 text-brand-600 mt-1.5">•</span>
          <span class="text-slate-700 leading-relaxed"><strong>Automatic Database Schema:</strong> Define your config in code, and Payload handles direct DB access, ownership, migrations, transactions, and proper indexing.</span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 text-brand-600 mt-1.5">•</span>
          <span class="text-slate-700 leading-relaxed"><strong>Instant APIs:</strong> Get fully typed REST, GraphQL, and Local Node.js APIs immediately based on your collections.</span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 text-brand-600 mt-1.5">•</span>
          <span class="text-slate-700 leading-relaxed"><strong>Authentication:</strong> Built-in, secure authentication that you can use across your own applications.</span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 text-brand-600 mt-1.5">•</span>
          <span class="text-slate-700 leading-relaxed"><strong>Access Control:</strong> Deeply customizable function-based access control patterns for granular security.</span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 text-brand-600 mt-1.5">•</span>
          <span class="text-slate-700 leading-relaxed"><strong>Media Management:</strong> Powerful file storage and image tools, including cropping and focal point selection.</span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 text-brand-600 mt-1.5">•</span>
          <span class="text-slate-700 leading-relaxed"><strong>Live Preview:</strong> See your frontend render content changes in realtime as you update in the Admin UI.</span>
        </li>
      </ul>

      <div class="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-500 my-8">
        <p class="text-brand-900 italic font-medium">
          "Payload allows us to move faster by treating our CMS as part of our application code, not an external service."
        </p>
      </div>

      <p class="text-slate-700 mb-4 leading-relaxed">
        Whether you are building a simple portfolio or a complex enterprise application, Payload provides the flexibility of a headless CMS with the developer experience of a modern application framework.
      </p>
    `,
    author: 'Kurt Morales',
    date: 'October 28, 2024',
    imageUrl: 'https://picsum.photos/id/0/1200/800',
    category: 'Web Development',
    readTime: '4 min read',
  },
  {
    id: 'future-web-design-2025',
    title: 'Web Design Trends to Watch in 2025',
    excerpt: 'From AI-generated imagery to immersive 3D experiences, explore the trends that will define the digital landscape next year.',
    content: `
      <p class="text-xl text-slate-600 mb-6 leading-relaxed">
        As we approach 2025, the web design landscape is evolving rapidly. User expectations are higher than ever, and technology is catching up to meet them.
      </p>
      <p class="text-slate-700 mb-4 leading-relaxed">
        We are seeing a shift towards more immersive, interactive experiences. Static pages are being replaced by dynamic, motion-rich interfaces that tell a story.
      </p>
      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Top Predictions</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-700">
        <li><strong>AI-Driven Personalization:</strong> Interfaces that adapt layout and content based on user behavior in real-time.</li>
        <li><strong>Micro-Interactions:</strong> Subtle animations that provide immediate feedback and delight.</li>
        <li><strong>Bento Grids:</strong> The block-style layout popularized by Apple is becoming a standard for organizing complex information.</li>
      </ul>
    `,
    author: 'Sarah Jenkins',
    date: 'October 15, 2024',
    imageUrl: 'https://picsum.photos/id/180/1200/800',
    category: 'Design',
    readTime: '6 min read',
  }
];

export const COMPANY_INFO = {
  name: 'Kmwebdesign',
  address: '8035 Torremolinos ave, Las Vegas NV 89178',
  email: 'support@kmwebdesign.xyz',
  phone: '+1 702-758-5543',
  hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
  foundedYear: 2024,
};