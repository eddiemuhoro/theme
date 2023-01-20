import { Light, Star, WbSunnyOutlined } from '@mui/icons-material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { Button } from '@mui/material';
import React, { useState } from 'react';

const Theme = () => {
  const images=[
    {
        id:'one',
        src: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'two',
        src: 'https://images.unsplash.com/photo-1673901159004-cf765b562280?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        id:'three',
        src: 'https://images.unsplash.com/photo-1674050288049-7008419cd2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    },
    {
        id:'four',
        src: 'https://images.unsplash.com/photo-1674071393771-eaeaa3d4d1c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
  
 ]
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [theme, setTheme]= useState('white')
  const handleClick = () => {
    theme === 'white' ? setTheme('dark') : setTheme('white');
  }



  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:"100vh", backgroundColor: theme === 'white' ? 'white' : 'black',  color: theme === 'white' ? 'black' : 'white'}}>
      <Button onClick={handleClick} style={{position:'absolute', top:"20%", right:'16%', backgroundColor: theme === 'white' ? 'white' : 'black',  color: theme === 'white' ? 'black' : 'white' }}>{theme === 'white'?<WbSunnyIcon/>: <ModeNightIcon/>}</Button>
      <div style={styles.container}>
        {images.map((image, index) => (
          <div style={selectedIndex === index ? styles.hover : styles.notHover}>

            <img
              key={index}
              src={image.src}
              alt='im'
              style={{ ...styles.image, width: selectedIndex === index ? '100%' : '100%', height: selectedIndex === index ? '200px' : '200px', transition:'1s' }}
              onMouseEnter={() => setSelectedIndex(index)}
              onMouseLeave={() => setSelectedIndex(-1)}

            />
            <div style={selectedIndex === index ? styles.text : styles.noText}>
                <h3>{image.id}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
  },
  image: {
    margin: '10px',
    objectFit:'cover',
    borderRadius:'10px'
  },
  hover:{
    width:"320px",
    transition:'.3s',
    position:'relative',
    cursor:'pointer'
  },
  notHover:{
    width:"100px",
    transition:'.2s ',
    margin:"5px",
  },
  noText:{
    opacity:0, 
    display:'none',
    position:'absolute',
    bottom:'0',
    transition:'.3s',
  },
  text:{
    transition:'.3s',
    position:"absolute",
    left:'50%',
    transform:'translateX(-50%)',
    width:'80%',
    textAlign:'center',
    overFlow:"hidden",
    borderRadius:"10px 10px 0 0"
  }
};

export default Theme;
