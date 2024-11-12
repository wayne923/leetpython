// src/global.d.ts

declare global {
  interface Window {
    // Make gtag optional since it might not be loaded immediately
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js' | 'consent', 
      action: string,
      parameters: {
        event_category?: string;
        event_label?: string;
        value?: number;
        non_interaction?: boolean;
        page_title?: string;
        page_location?: string;
        send_to?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

// This is needed to make this a module
export {};