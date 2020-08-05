import React from 'react'
import  HandleName from './HandleName'  
const mystyle = {
   color: "white",
   backgroundColor: "DodgerBlue",
   padding: "10px",
   fontFamily: "Arial"
 }; 

 function ProfileB (props)  {

   function handleClick(e){
      e.preventDefault();
      alert("test!");
    }
   
       return (
         <div>
          <h1 style={mystyle}>fullName:{props.fullName}</h1>
          <p style={{color:"navy",textindent: "30px"}} > bio:{props.bio}</p>
          <h1 style={mystyle}>profession:{props.profession}</h1> 
            {props.children}
           <HandleName  handleClick ={ handleClick}/>
         </div>
        )
   }
    ProfileB.defaultProps = {
      fullName: "Anne Hathaway",
      profession:" Actrice",
      bio:" est une actrice américaine, née le 12 novembre 1982 à Brooklyn"
    }; 
      export default ProfileB;
  
      

