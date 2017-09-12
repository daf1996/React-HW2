import React from 'react';

class Output extends React.Component {
	
	constructor(){
    super();
    

    
  	}
    render(){


    	const params = this.props.match.params;
        return (
            <div>
                <h1>Output : {params.value}</h1>
            </div>
        );
    }
}

export default Output;