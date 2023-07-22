import React from 'react';

const Preloader = () => {
    const imageStyle = {
        width: "350px", 
        height: "350px", 
        marginRight:"10px",
        marginBottom:"200px",
      };
      const preloader = {
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "black",
        width: '100%', 
        height: '100vh', 
        objectFit: 'cover', 
      };
    
  return (
    <div style={ preloader} className="preloader">
      {/* Ваш код прелоадера тут */}
      <img style={ imageStyle}  src="/images/logo.jpg" alt="pr" />
    </div>
  );
};

export default Preloader;