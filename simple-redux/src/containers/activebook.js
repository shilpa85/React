import React from 'react';
import { connect } from 'react-redux';


class ActiveBook extends React.Component {
	
	
	render(){
			
		  if(! this.props.book ){
			 return <h3> Please select a book. </h3>
		  }
		  
		  return (
			<h3>{this.props.book.title}</h3>
		  );
	}
}
function mapStateToProps(state){
	return {book: state.book};
}

export default connect(mapStateToProps)(ActiveBook);
