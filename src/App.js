import React from 'react';
import './App.css';
import ProfileB from './profile/Profile Component'

  function App() {
  return (
    <div className="App">
      <ProfileB  fullName="Anne Hathaway" bio=" est une actrice américaine, née le 12 novembre 1982 à Brooklyn" profession=" Actrice" >
       <img style={{borderradius:"10px"}}  src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Anne_Hathaway_in_2017.png" alt=""width="350" height="350"/>
       
        </ProfileB>
        
       
      
        
      
    </div>
  )
}

export default App;
