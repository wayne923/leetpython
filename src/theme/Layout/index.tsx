import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  useEffect(() => {
    const handleDocLinkClick = event => {
      if (event.target.tagName === 'A' && event.target.closest('.markdown')) {
        const href = event.target.getAttribute('href');
        window.gtag('event', 'click', {
          event_category: 'Documentation Links',
          event_label: href
        });
      }
    };

    document.addEventListener('click', handleDocLinkClick);
    return () => {
      document.removeEventListener('click', handleDocLinkClick);
    };
  }, []);

  return (
    <>
      <Layout {...props} />
    </>
  );
}