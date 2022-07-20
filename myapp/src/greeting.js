import React from 'react';

class Greeting extends React.Component{
    constructor(props){
        // super must always be the first thing called in the constructor.
        super(props);
        this.state = {name: 'Biznatch'};

        // In React, whenever you define an event handler that
        // uses "this", you need to explicitly state what "this" refers to.
        // See below. (here, updateState is the event handler):
        this.updateState  = this.updateState.bind(this);
        // .bind() returns a new function which, when invoked, has it's "this"
        // bound to a specific value.
    }
    // don't update state from inside the render function OR from
    // inside the constructor.
    updateState(){
        if(this.state.name == 'Biznatch'){
            this.setState({name: "Boo"})
            // setState takes 2 arguments: an object showing what parts of the
            //state have changed, and a callback. You basically never need the callback.
        } else {
            this.setState({name: "Biznatch"})

        }
    }
    //this.setState({name: "boop"});
    // methods should never be separated by commas inside a class body. 
    // this is to distinguish them from object literals.

    render(){

        // this.state is defined in the constructor. 
        // unlike props, "state" is not passed in from the outside.
        return (<span id="namechange" onClick={this.updateState}> 
          {this.state.name}
        </span> )
    }
}

export default Greeting;

