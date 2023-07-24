import React from 'react';

const Preloader = () => {
    const imageStyle = {
        width: "300px", 
        height: "300px", 
        marginRight:"10px",
        marginBottom:"230px",
      };
      const preloader = {
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "white",
        width: '100%', 
        height: '100vh', 
        objectFit: 'cover', 
      };
    
  return (
    <div style={ preloader} className="preloader">
      {/* Ваш код прелоадера тут */}
      <img style={ imageStyle}  src="/images/downloud.gif" alt="pr" />
    </div>
  );
};

export default Preloader;