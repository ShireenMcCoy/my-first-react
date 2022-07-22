import React, {useState} from 'react';
const options = ["olive", "artichoke", "tomato", "basil"];

export default function PizzaOrder(){
    // give useState() an empty array for the initial state ("selected").
    const [selected, setSelected] = useState([]);
    const toggleTopping = ({target}) => {
        const clickedTopping = target.value;
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
                    {selected.includes(option) ? "Remove " : "Add "}
                    {option}
                </button>
            ))}
            <p>Order a {selected.join(", ")} pizza</p>
        </div>
    );
}