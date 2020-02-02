import React from 'react';
import Helper from './Helper.js';

const List = ({resource, ...props}) => {

	const list = Helper(resource);

	
	const listItems = list.map((item) =>
			<li key ={item.id}>{item.title}</li>
		  );
		  
	return (
			<div className = "image-list">
				<ul>
					{listItems} 
				</ul>
			</div>);

}

export default List;

