import React, {useState} from 'react';
import List from './List.js';
import UsersList from './UsersList.js'

const App = (props) =>  {
	
const [current, setCurrent] = useState('todos');		
	 
	  return (
		<div className="App">
			<UsersList />
			<button onClick={()=>setCurrent('todos')} > Tasks </button>
			<button onClick={()=>setCurrent('posts')} > Post </button>
			<List resource = {current} />
		</div>
	  );
	
}

export default App;
