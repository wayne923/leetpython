// src/utils/analytics.ts

type EventParams = {
    event_category: string;
    event_label: string;
    value?: number;
    non_interaction?: boolean;
    [key: string]: any;
  };
  
  export const Analytics = {
    // Page view tracking (called automatically by Docusaurus)
    pageView: (url: string, title: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: title,
          page_location: url,
        });
      }
    },
  
    // Custom event tracking
    trackEvent: (action: string, params: EventParams) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, params);
      }
    },
  
    // Track document/article reading time
    trackReadingTime: (articleId: string, timeInSeconds: number) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'reading_time', {
          event_category: 'Engagement',
          event_label: articleId,
          value: timeInSeconds,
        });
      }
    },
  
    // Track user actions like button clicks
    trackAction: (category: string, label: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'user_action', {
          event_category: category,
          event_label: label,
          non_interaction: false,
        });
      }
    },
  
    // Track outbound links
    trackOutboundLink: (url: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'outbound_link', {
          event_category: 'Outbound Links',
          event_label: url,
        });
      }
    }
  };