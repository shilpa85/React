import React from 'react';

const HoverCounter = (props) => {
  return (
		<h2 onMouseOver={props.incrementCount} > {props.count} Hover Counter</h2>
  )
}

export default HoverCounter;