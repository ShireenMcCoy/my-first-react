import React, {useState} from 'react';
const options = ["olives", "artichoke", "tomatoes"];

export default function PizzaOrder(){
    // we've defined setSelected() as the state setter. (useState returns a 
    // state setter as its second array element)

    // useState() is the "state hook". In general, "hooks" are functions that let you
    // manage the internal state of components directly from function components.
    const [selected, setSelected] = useState();

    // ({target}) is an example of object destructuring. It's another way of 
    // saying "event.target", or the "target" attribute of whatever object you 
    // pass in.
    const toggleTopping = ({target}) => {
        const clickedTopping = target.value;

        // previous state is the input to the state-setter function.
        // we've defined setSelected to be the state-setter function
        setSelected((prev) => {
            if(prev.includes(clickedTopping)){
                return prev.filter(topping => topping !== clickedTopping);
            } else {
                return[clickedTopping, ...prev]
            }
        });
    };
    return(
        <div>
            {options.map(option => (
                <button value={option} onClick={toggleTopping} key={option}>
                    {selected.includes(option) ? "Remove" : "Add"}
                    {option}
                </button>
            ))}
            <p>Order a {selected.join(", ")} pizza</p>
        </div>
    );
}