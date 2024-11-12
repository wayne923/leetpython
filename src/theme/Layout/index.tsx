// src/theme/Layout/index.tsx
import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type {WrapperProps} from '@docusaurus/types';
import { Analytics } from 'src/utils/analytics';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  useEffect(() => {
    // Track page view on route change
    const pathname = window.location.pathname;
    const title = document.title;
    Analytics.pageView(pathname, title);

    // Track doc link clicks
    const handleDocLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const linkElement = target.closest('a') as HTMLAnchorElement;
      
      if (!linkElement) return;
      const href = linkElement.getAttribute('href');
      if (!href) return;

      // Internal documentation links
      if (href.startsWith('/docs/') || href.startsWith('#')) {
        Analytics.trackAction('Documentation', href);
      }
      // External links
      else if (href.startsWith('http')) {
        Analytics.trackOutboundLink(href);
      }
    };

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          Analytics.trackEvent('scroll_depth', {
            event_category: 'Scroll Depth',
            event_label: `Scrolled ${maxScroll}%`,
            non_interaction: true
          });
        }
      }
    };

    document.addEventListener('click', handleDocLinkClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleDocLinkClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <Layout {...props} />;
}