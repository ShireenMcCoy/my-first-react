import React from 'react';

class MyEventHandler extends React.Component {
    // below is an "event handler", a method of the comopnent class. 
    clickAlert() {
        alert('Ouch, you cliked me!');
    }
    render() {
        return (
            // onClick has a special meaning in React, but only if it's used
            // with HTML-like elements
            <div id="hoverDiv" onClick={ this.clickAlert }>CLICK ME</div>
        )
    }
  }
  
  export default MyEventHandler;