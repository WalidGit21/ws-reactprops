import React from 'react'
import PropTypes from "prop-types";

const FullName = (props) => {
  
  return (
    <div>{props.name}<br></br>
    <a href="/" onClick={props.function}>Click Name</a>
    </div>
    
  )

}
FullName.propTypes = {
  
    name: PropTypes.number,
   };
export default FullName