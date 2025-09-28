// Google Tag Manager Analytics Utilities
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// GTM DataLayer utilities
// No need for GA_MEASUREMENT_ID - handled in GTM dashboard

// Initialize GTM DataLayer (GTM script in index.html handles the rest)
export const initGTM = () => {
  // Ensure dataLayer exists
  window.dataLayer = window.dataLayer || [];
  console.log("GTM DataLayer initialized");
};

// Helper function to push events to GTM dataLayer
const pushToDataLayer = (eventData) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(eventData);
    console.log("GTM Event:", eventData); // For debugging
  }
};

// Track page views through GTM
export const trackPageView = (path, title) => {
  pushToDataLayer({
    event: "page_view",
    page_title: title || document.title,
    page_location: window.location.href,
    page_path: path,
  });
};

// Track custom events through GTM
export const trackEvent = (
  action,
  category = "engagement",
  label = "",
  value = 0
) => {
  pushToDataLayer({
    event: "custom_event",
    event_action: action,
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track clicks on external links
export const trackExternalLink = (url, linkText) => {
  pushToDataLayer({
    event: "external_link_click",
    link_url: url,
    link_text: linkText,
    event_category: "engagement",
  });
};

// Track downloads (like resume)
export const trackDownload = (fileName) => {
  pushToDataLayer({
    event: "file_download",
    file_name: fileName,
    event_category: "engagement",
  });
};

// Track contact form submissions
export const trackContactForm = (method) => {
  pushToDataLayer({
    event: "contact_interaction",
    contact_method: method,
    event_category: "lead_generation",
  });
};

// Track project views
export const trackProjectView = (projectName) => {
  pushToDataLayer({
    event: "project_view",
    project_name: projectName,
    event_category: "content_engagement",
  });
};

// Track blog post views
export const trackBlogPost = (postTitle) => {
  pushToDataLayer({
    event: "blog_post_view",
    article_title: postTitle,
    event_category: "content_engagement",
  });
};

// React hook for automatic page tracking with GTM
export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname, document.title);
  }, [location]);
};
