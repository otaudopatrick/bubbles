import React from 'react';

function HelperIcon(props) {
  return (
    <img src={props.pathName} style={props.style} alt={props.alt} title={props.title} />
  );
}

export default HelperIcon;