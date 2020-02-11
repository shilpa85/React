import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import BookList from '../containers/booklist'
import ActiveBook from '../containers/activebook'
import rootReducer from '../reducers/index'

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
	<Provider store={store}  >
     <BookList />
	 <ActiveBook />
	 </Provider>
    </div>
  );
}

export default App;
