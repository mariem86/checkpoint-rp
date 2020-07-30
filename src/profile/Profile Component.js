import React from 'react'
import PropTypes from 'prop-types'
import  HandleName from './HandleName'  
const defaultProps ={
   fullName:"",
   bio:"",
   profession:"" 
};
const myPropTypes = {
   fullName: PropTypes.string,
   bio: PropTypes.string,
   profession: PropTypes.string
}
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
      export default ProfileB;
    ProfileB.defaultProps= defaultProps;
      PropTypes.checkPropTypes(myPropTypes);
      

