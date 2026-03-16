import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MetaProps } from '../types';
import { COMPANY_INFO } from '../constants';

const SEO: React.FC<MetaProps> = ({ title, description, canonical, schema }) => {
  const siteTitle = `${title} | ${COMPANY_INFO.name}`;
  
  // Safely get origin or fallback
  const origin = (typeof window !== 'undefined' && window.location && window.location.origin !== 'null') 
    ? window.location.origin 
    : 'https://kmwebdesign.com';

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_INFO.name,
    "url": origin,
    "logo": "https://picsum.photos/100/100", // Placeholder logo
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.phone,
      "contactType": "customer service"
    },
    "foundingDate": "2024-09-01",
    "founder": {
      "@type": "Person",
      "name": "Kurt Morales"
    }
  };

  const jsonLd = schema || defaultJsonLd;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;