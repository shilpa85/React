import React from 'react';

const HOC = (OriginalComponent) => {
	class NewComponent extends React.Component {
		
		constructor(props){
			super(props);
			
			this.state = {count: 0};
			
		}
		
		 incrementCounter = () => {
			this.setState(prevState => { return {count : prevState.count + 1}} );
		}
		
		render(){
			//Proxy Props
			const newProps = {count: this.state.count,  callback : this.incrementCounter}

		  return (
			<OriginalComponent {...this.props} {...newProps} />
		  );
		}

	}
	
	return NewComponent;
}
export default HOC;