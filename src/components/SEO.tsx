import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  type = 'website' 
}) => {
  const siteName = "I Max Passport and Visa Assistance";
  const fullTitle = `${title} | ${siteName}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": siteName,
          "image": "https://picsum.photos/seed/imax/800/600",
          "@id": "",
          "url": window.location.origin,
          "telephone": "+91-8766993798",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pune, Maharashtra",
            "addressLocality": "Pune",
            "addressRegion": "MH",
            "postalCode": "411001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204,
            "longitude": 73.8567
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.facebook.com/imaxpassport",
            "https://www.instagram.com/imaxpassport"
          ]
        })}
      </script>
    </Helmet>
  );
};
