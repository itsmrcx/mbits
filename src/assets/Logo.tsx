import React from 'react';

export const Logo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src="/mbits/pwa-192x192.png" 
      alt="mBit Logo"
      {...props}
      style={{
        height: '40px',
        width: 'auto',
        borderRadius: '0px', 
        border: '1px solid #00FF41', /* Adds a matrix border to the logo */
        ...props.style
      }}
    />
  );
};

export default Logo;
