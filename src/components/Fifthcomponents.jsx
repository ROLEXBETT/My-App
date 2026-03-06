import { useState } from "react";

const Fifthcomponent = () =>{


    //The useState() hook enambles us to create dynamic websites whereby it usually has the start/initial state followed by a state that get show when some effects happen on our websites
     const [number, setNumber] = useState(10);
    return(
        <div className="Fifthcomponent">
            {/* Below we bind our value for number*/ }
            <h1>Welcome to my fifth component</h1>

            <h2>Current number is: {number}</h2>

            {/*call the SetNumber function  to update the number after a click effect */}
            <button onClick={() =>setNumber(20)}>Click to update the Number</button>

        </div>
    )
}
export default Fifthcomponent;