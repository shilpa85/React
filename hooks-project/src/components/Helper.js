import {useState, useEffect} from 'react';

const Helper = (resource) => {

	const [list, updateState] = useState([]);

		useEffect( 
					() => { 
					getList(resource)
					},
					[resource]
				);
	
	const getList =  selectedResource => {
			
		fetch(`https://jsonplaceholder.typicode.com/${selectedResource}`)
									.then(result => result.json())
									.then(data => updateState(data));

		
	}
	
	console.log(list);

	return list;

}

export default Helper;

