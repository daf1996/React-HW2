import React from 'react';
import {  NavLink } from 'react-router-dom';
class Input extends React.Component {
	  constructor() {
    super();
    this.state = { b: "" };

  }

    setvalue(e){
    var a = e.target.value;
    this.setState({b:a});
    }
  
    render(){
        return (
            <div>
        <input type="text" onChange={this.setvalue.bind(this)} placeholder="Name" ref="name"/>
        <NavLink to={{pathname:"/level1/"+this.state.b}} activeClassName="active"><input type="submit" /></NavLink>
      
            </div>
        );
    }
}

export default Input;