import React from 'react';

const ExternalLink = ({ href, className = '', children, ...props }) => {
  const sanitizedHref = typeof href === 'string' ? href.trim() : '#';

  return (
    <a
      href={sanitizedHref}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
