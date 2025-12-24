import React from 'react';

export const Logo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src="/mbits/pwa-512x512.png" 
      alt="mBit Logo"
      {...props}
      style={{
        width: '160px',        /* Forces it to be wide */
        height: 'auto',        /* Maintains aspect ratio so it doesn't squish */
        maxWidth: '100%',      /* Prevents it from overflowing */
        borderRadius: '0px', 
        objectFit: 'contain',
        marginTop: '10px',     /* Adds a little breathing room at top */
        ...props.style
      }}
    />
  );
};

export default Logo;
