import React, { useState } from 'react';
import './Anim.css';
const Card = () => {
 const images=[
    {
        id:1,
        src: 'https://64.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg'
    },
    {
        id:2,
        src: 'https://64.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg'
    },
    {
        id:3,
        src: 'https://64.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg'
    },
    {
        id:4,
        src: 'https://64.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg'
    },
  
 ]

 const [clicked, setClicked] = useState(true)

 const handleClick = (e) => {
  if(clicked){
    e.currentTarget.classList.add('active')
    setClicked(false)
    }else{
        e.currentTarget.classList.remove('active')
        setClicked(true)
    }
}


        

    return (
        <div className='wrapper' style={{width:"100vh"}}>
           
                <div onClick={handleClick} className='card active'>
                    <img src='https://64.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg' alt="" />
                </div>

                <div onClick={handleClick} className='card'>
                    <img src='https://64.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg' alt="" />
                </div>

                <div onClick={handleClick} className='card'>
                    <img src='https://64.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg' alt="" />
                </div>

                <div onClick={handleClick} className='card'>
                    <img src='https://64.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg' alt="" />
                </div>
         
        </div>
        
        
        );
}

export default Card