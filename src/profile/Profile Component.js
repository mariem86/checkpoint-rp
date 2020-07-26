import React from 'react'
import PropTypes from 'prop-types'

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

 function ProfileB (props)  {
   function handleName(e){
      e.preventDefault();
      alert("Admin!");
    }
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    }; 
       return (
         <div>
          <h1 style={mystyle}>fullName:{props.fullName}</h1>
          <p style={{color:"navy",textindent: "30px"}} > bio:{props.bio}</p>
          <h1 style={mystyle}>profession:{props.profession}</h1> 
            {props.children}
           <a href="/" onClick={handleName}>
            click me
            </a>
         </div>
        )
   }
      export default ProfileB
      ProfileB.defaultProps= defaultProps
      PropTypes.checkPropTypes(myPropTypes);
      

