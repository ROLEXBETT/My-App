import { useState } from "react"

const Sixthcomponent = () => {
    
    const [weight, setWeight] = useState(50);
    const updateWeight = () => {
        if (weight<55){
            setWeight(weight + 1);
        }
    };
    return(
        <div>
            <h2>My Weight:{weight}kgs</h2>
            <button onClick={updateWeight}>Update Weight</button>
        </div>
    );
};

export default Sixthcomponent;