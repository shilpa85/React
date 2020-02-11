import {combineReducers } from 'redux';
import booksReducer from './reducer_books';
import activeBookReducer from './reducer_activebook';

const rootReducer = combineReducers({
	books: booksReducer,
	book: activeBookReducer
	
});


export default rootReducer;