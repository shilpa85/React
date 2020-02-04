import React from 'react';
import HOC from './withCounter';

const HoverCounter = (props) => {

  return (
		<h2 onMouseOver ={props.callback}> Hover Counter {props.count} </h2>
  )
}

export default HOC(HoverCounter);