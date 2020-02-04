import React from 'react';


class Counter extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {count: 0};
		
	}
	
	 incrementCounter = () => {
		this.setState(prevState => { return {count : prevState.count + 1}} );
	}
	
	render(){

	  return (
		<div className="Counter" > 
		{this.props.render(this.state.count, this.incrementCounter)}
		</div>
	  )
	}

}

export default Counter;