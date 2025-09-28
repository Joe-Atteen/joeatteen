// SEO utilities and helpers

// Generate dynamic sitemap (can be used if you want to generate sitemap dynamically)
export const generateSitemap = (pages) => {
  const baseUrl = "https://joeatteen.com";
  const currentDate = new Date().toISOString().split("T")[0];

  const urlEntries = pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq || "monthly"}</changefreq>
    <priority>${page.priority || "0.5"}</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

// SEO data constants
export const SEO_CONFIG = {
  siteName: "Joe Atteen Portfolio",
  siteUrl: "https://joeatteen.com",
  author: "Joe Atteen",
  twitterHandle: "@Joe_Atteen",
  defaultImage: "https://joeatteen.com/og-image.jpg",
  defaultDescription:
    "Software Engineer specializing in frontend development and user interfaces. I lead teams to build exceptional digital experiences and transform ambitious ideas into reality.",
  keywords: {
    base: "Joe Atteen, Software Engineer, Frontend Developer, React Developer, JavaScript Developer, Web Developer, UI Developer, Ghana Developer",
    about:
      "About Joe Atteen, Software Engineer Background, Team Leader, Ghana Developer",
    projects:
      "Joe Atteen Projects, Portfolio, React Projects, JavaScript Projects, Web Development",
    blog: "Joe Atteen Blog, Web Development Blog, Technology Blog, JavaScript Tutorials",
    contact: "Contact Joe Atteen, Hire Joe Atteen, Software Engineer Contact",
  },
};

// Generate structured data for different page types
export const generateStructuredData = (type, data = {}) => {
  const baseData = {
    "@context": "https://schema.org",
    name: data.name || "Joe Atteen",
    url: data.url || SEO_CONFIG.siteUrl,
  };

  switch (type) {
    case "person":
      return {
        ...baseData,
        "@type": "Person",
        jobTitle: "Software Engineer",
        description: data.description || SEO_CONFIG.defaultDescription,
        image: data.image || SEO_CONFIG.defaultImage,
        sameAs: [
          "https://github.com/Joe-Atteen",
          "https://linkedin.com/in/joe-atteen",
          "https://twitter.com/Joe_Atteen",
          "https://instagram.com/joe_atteen",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Accra",
          addressCountry: "Ghana",
        },
        knowsAbout: [
          "JavaScript",
          "React",
          "Frontend Development",
          "User Interface Design",
          "Web Development",
          "Software Engineering",
        ],
      };

    case "website":
      return {
        ...baseData,
        "@type": "WebSite",
        description: data.description || SEO_CONFIG.defaultDescription,
        author: {
          "@type": "Person",
          name: SEO_CONFIG.author,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };

    case "article":
      return {
        ...baseData,
        "@type": "Article",
        headline: data.title,
        description: data.description,
        author: {
          "@type": "Person",
          name: SEO_CONFIG.author,
        },
        publisher: {
          "@type": "Person",
          name: SEO_CONFIG.author,
        },
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        image: data.image || SEO_CONFIG.defaultImage,
      };

    default:
      return baseData;
  }
};

// Performance optimization helpers
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fonts = [
    "/src/assets/fonts/GT-Walsheim-Bold.otf",
    "/src/assets/fonts/GT-Walsheim-SemiBold.otf",
    "/src/assets/fonts/GT-Walsheim-Regular.otf",
  ];

  fonts.forEach((font) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = font;
    link.as = "font";
    link.type = "font/otf";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  });
};

// Analytics and tracking helpers
// Note: Main analytics functions are in ./analytics.js
// These are SEO-specific tracking utilities

export const trackSEOEvent = (event, page, data = {}) => {
  // Track SEO-related events like schema.org interactions
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, {
      event_category: "seo",
      event_label: page,
      custom_parameters: data,
    });
  }
};

// Track structured data interactions
export const trackStructuredDataView = (type, page) => {
  trackSEOEvent("structured_data_view", page, { schema_type: type });
};

// Track social media meta tag clicks (if implemented)
export const trackSocialShare = (platform, page) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "share", {
      method: platform,
      content_type: "page",
      item_id: page,
    });
  }
};

// Social media meta tag helpers
export const generateSocialMeta = (title, description, image, url) => {
  return {
    // Open Graph
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "og:url": url,
    "og:type": "website",
    "og:site_name": SEO_CONFIG.siteName,

    // Twitter
    "twitter:card": "summary_large_image",
    "twitter:site": SEO_CONFIG.twitterHandle,
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
  };
};
