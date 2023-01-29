
import React from "react";
import ImageRotator from "./projects/ImageExpand/ImageExpands";
import './App.css'
import Theme from "./projects/Theme/Theme";
import Dashboard from "./projects/Dashboard/Dashboard";
function App() {
  const images=[
    {
        id:'one',
        src: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'two',
        src: 'https://images.unsplash.com/photo-1586165877141-3dbcfc059283?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        id:'three',
        src: 'https://images.unsplash.com/photo-1674050288049-7008419cd2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    },
    {
        id:'four',
        src: 'https://images.unsplash.com/photo-1674071393771-eaeaa3d4d1c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      id:'one',
      src: 'https://images.unsplash.com/photo-1619204715997-1367fe5812f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80'
  },
  {
      id:'two',
      src: 'https://images.unsplash.com/photo-1514439827219-9137a0b99245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  
 ]


  return (
    <div className="App">
      {/* <ImageRotator images= {images} /> */}
      <Dashboard/>
    </div>

  );
}

export default App;
