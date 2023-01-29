import React, { useState } from 'react';

function ImageExpands({ images }) {
    const [expandedImage, setExpandedImage] = useState(null);
    const handleImageClick = (index) => {
      setExpandedImage(index);
    }

  return (
    <div style={{ display: '-webkit-inline-box' , height:"90vh", width:"auto", overflowX:'auto'}}>
    {images.map((image, index) => (
        <div style={{height:'70vh', margin:'5px', transition:'.2s', width: expandedImage === index ? '400px' : '200px', position:'relative'}}
        onClick={() => handleImageClick(index)}>
            <img
                key={index}
                src={image.src}
                alt='ken'
                style={{ width: '100%', cursor: 'pointer', height:'100%', objectFit:'cover',  transition:'.2s' }}
            />
            <div style={{position:'absolute',bottom: expandedImage === index ? 0 : "-10%", color:'white', left:'5px', opacity: expandedImage === index ? 1: 0, transitionDelay:'.2s', transitionDuration:'.3s' }}>
                <p style={{fontSize:'1.5rem', fontWeight:'bold'}}>Title</p>
                <p style={{fontSize:'1rem', textAlign:'center'}}>Description of the title</p>
            </div>
      </div>
    ))}
  </div>
  );
}

export default ImageExpands