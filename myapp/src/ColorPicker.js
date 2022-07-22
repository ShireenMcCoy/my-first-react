import React, { useState } from 'react';

export default function ColorPicker() {
    /* useState() returns an array of 2 values: the current state and a
    state-setter function. Below, I'm naming the state setter "setColor". 
    I'm passing in "pink" for the initial state, but that can be changed */
    const [color, setColor] = useState("rgba(214, 219, 255, 0.57)");
    
    const divStyle = {backgroundColor: color};
    return (
        <div style = {divStyle}>
            <p>&nbsp;&nbsp;the color is {color}</p>
            {/* reminder: we have defined setColor to be the state setter.
            Whenever the state setter is called, React re-renders the whole component. */}
            <button onClick={() => setColor('rgba(214, 219, 255, 0.57)')}>Purple</button>
            <button onClick={() => setColor('pink')}>Pink</button>

        </div>
    );
}
