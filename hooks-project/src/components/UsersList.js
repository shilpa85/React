import React  from 'react';
import Helper  from './Helper.js';

const UsersList = () => {

	const users = Helper('users');
	
	const listItems = users.map((user) =>
			<li key ={user.id}>{user.name}</li>
		  );
		  
	return (
			<div className = "image-list">
				<ul>
					{listItems} 
				</ul>
			</div>);

}

export default UsersList;

