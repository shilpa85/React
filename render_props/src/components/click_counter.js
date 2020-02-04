import React from 'react';

const ClickCounter = (props) => {
  return (
    <h1>
	<button onClick={props.incrementCount} > {props.count}</button>
Click Counter
    </h1>
  )
}

export default ClickCounter;