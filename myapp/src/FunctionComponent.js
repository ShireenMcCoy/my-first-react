import React from 'react';

/* Function components do everything class components can do, and they're 
more elegant. Instead of writing:
class MyComponentClass extends React.Component { render(){return some JSX}} , 
You can just do:
const MyComponentFunction = () => {return some JSX}

The other good thing about function components is that you don't need 
the "this" keyword to access the props */
const MyFunctionComponent = (props) => {
    return <p>I am a "function component," {props.name}</p>
}

export default MyFunctionComponent;