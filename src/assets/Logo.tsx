import React from 'react';

export const Logo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src="/mbits/pwa-192x192.png"
      alt="mBits Logo"
      {...props}
      style={{
        height: '40px',
        width: 'auto',
        borderRadius: '0px', // Enforce square edges
        ...props.style
      }}
    />
  );
};

export default Logo;
