import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SEO = ({
  title = "Joe Atteen - Software Engineer & Frontend Specialist",
  description = "Software Engineer specializing in frontend development and user interfaces. I lead teams to build exceptional digital experiences and transform ambitious ideas into reality.",
  keywords = "Software Engineer, Frontend Developer, React Developer, JavaScript Developer, Web Developer, UI Developer, Ghana Developer, Full Stack Developer",
  author = "Joe Atteen",
  url = "https://joeatteen.com",
  image = "https://joeatteen.com/og-image.jpg",
  type = "website",
  twitterHandle = "@Joe_Atteen",
  siteName = "Joe Atteen Portfolio",
  canonicalUrl,
  noIndex = false,
  structuredData,
}) => {
  // Default structured data for person/professional
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joe Atteen",
    jobTitle: "Software Engineer",
    description: description,
    url: url,
    image: image,
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
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University",
    },
  };

  const finalStructuredData = structuredData || defaultStructuredData;
  const pageTitle = title.includes("Joe Atteen")
    ? title
    : `${title} | Joe Atteen`;
  const finalUrl = canonicalUrl || url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ecc9b0" />
      <link rel="canonical" href={finalUrl} />

      {/* Robots Meta */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow" />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${author} - Software Engineer`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content={`${author} - Software Engineer`}
      />

      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-TileColor" content="#1a1a1a" />
      <meta name="application-name" content={siteName} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {/* Preconnect for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  twitterHandle: PropTypes.string,
  siteName: PropTypes.string,
  canonicalUrl: PropTypes.string,
  noIndex: PropTypes.bool,
  structuredData: PropTypes.object,
};

export default SEO;
