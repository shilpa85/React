import React from 'react';
import Counter from './counter.js';
import ClickCounter from './click_counter.js';
import HoverCounter from './hover_counter.js';

const App = () => {
  return (
    <div>
		<Counter render={(count, incrementCount) => <ClickCounter count={count} incrementCount = {incrementCount} />} />
		<Counter render={(count, incrementCount) => <HoverCounter count={count} incrementCount = {incrementCount}  />}  />
  
    </div>
  )
}

export default App;