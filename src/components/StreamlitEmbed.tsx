import React from 'react';

interface StreamlitEmbedProps {
  url: string;
  height?: string | number;
  width?: string | number;
  className?: string;
  showToolbar?: boolean;
  darkTheme?: boolean;
}

const StreamlitEmbed: React.FC<StreamlitEmbedProps> = ({
  url,
  height = 450,
  width = '100%',
  className = '',
  showToolbar = false,
  darkTheme = false,
}) => {
  // Construct the embed URL with query parameters
  const embedUrl = new URL(url);
  embedUrl.searchParams.set('embed', 'true');
  
  // Add optional embed options
  if (showToolbar) {
    embedUrl.searchParams.append('embed_options', 'show-toolbar');
  }
  if (darkTheme) {
    embedUrl.searchParams.append('embed_options', 'dark-theme');
  }

  return (
    <div className={`streamlit-embed-wrapper ${className}`}>
      <iframe
        src={embedUrl.toString()}
        height={height}
        width={width}
        frameBorder="0"
        style={{
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: '4px',
          overflow: 'hidden'
        }}
      />
    </div>
  );
};

export default StreamlitEmbed;