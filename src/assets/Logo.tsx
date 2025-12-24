import React from 'react';

export const Logo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src="/mbits/pwa-192x192.png" 
      alt="mBit Logo"
      {...props}
      style={{
        height: '60px',       /* Made significantly larger */
        width: '60px',        /* Made significantly larger */
        borderRadius: '0px', 
        objectFit: 'contain',
        ...props.style
      }}
    />
  );
};

export default Logo;
