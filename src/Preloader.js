import React from 'react';

const Preloader = () => {
    const imageStyle = {
        width: '100%', 
        height: '100vh', 
        objectFit: 'cover', 
      };
    
  return (
    <div className="preloader">
      {/* Ваш код прелоадера тут */}
      <img style={ imageStyle}  src="/images/prel.jpg" alt="pr" />
    </div>
  );
};

export default Preloader;