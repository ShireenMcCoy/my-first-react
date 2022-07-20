import './App.css';
import PoemComponent from './myModule.js';
import MyEventHandler from './MyEventHandler.js';
import Greeting from './greeting.js';

/* This following function ("App") is a React "component". Comonents return something
describing what should appear on the screen.

User-defined components start with a capital letter. 

By convention, App is the "root component" at the top of the component tree. */
function App() {
  return (
    <div id="topDiv">
      <div className="Centered">

        {/* by giving the Greeting component a "name" attribute, the value of "name"
        gets passed to the Greeting component as part of the "props" object. 
        It can be accessed from inside the comonent as "this.props.name" */}
          <p>Hello < Greeting name="World"/></p>

          < PoemComponent />
          {/* to add a component class, add a JSX element that has the same
          name as your component class. -- <PoemComponent /> here
          The component class name must be uppercase so React knows this is a 
          component instance, not just a regular HTML tag. */}
          < MyEventHandler />
      
      </div>
      <div className="myList">
        <ul>{GroceryList}</ul>
      </div>
     
    </div>
  );
}

export default App;

const groceries = ["apples", "bananas", "peanut butter", "bread", "chocolate"];
const GroceryList = groceries.map((grocery) => <li>{grocery}</li>);

// the things in tags are JSX elements. Evey JSX element is actually a call to
// React.CreateElement(tagName, props, children).