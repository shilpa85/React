import React from 'react';
import HOC from './withCounter';

const ClickCounter = (props) => {
	
  return (
    <h1>
	{props.name}
	<button onClick={props.callback}> {props.count}</button>
    </h1>
  )
}

export default HOC(ClickCounter);