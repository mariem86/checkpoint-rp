import React from 'react'

 function HandleName () {
    function handleClick(e){
        e.preventDefault();
        alert("Admin!");
      }
    return (
        <div>
          <a href="/" onClick={handleClick}>
            click me
            </a>  
        </div>
    )
}
export default HandleName