// import Reacct so I can extend React.Component & export my component class
import React from 'react';

// component class names must begin with a capital letter.
// how to make a user-defined component class:

// 1) name the component class
// 2) extend React.Component
// 3) render(){}
// 4) return some JSX wrapepd in parenthesess
class PoemComponent extends React.Component {
    render() {
        return (
        <div class="pink">
        <p>I am a poem</p>
        </div>
        )
    }
  }

 
  // export the component class so that I can access it in other files
  export default PoemComponent;
