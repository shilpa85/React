import React from 'react';
import ClickCounter from './click_counter.js';
import HoverCounter from './hover_counter.js';

const App = () => {
  return (
    <div>
		 <ClickCounter name = "Click Counter"  />
		 <HoverCounter   />
  
    </div>
  )
}

export default App;