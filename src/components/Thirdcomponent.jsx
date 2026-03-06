const Thirdcomponent = () =>{
    // Variable enables us to create dynamic websites. (It means the content of the websites will be changing over time.)
    // Below we declare some varibles. Note: variables are usually declared just before the return statement in Reactjs.

    let name = "Benson";
    let age = 52;
    let message = "I love programming"

    return(
        <div className="Thirdcomponent">
            <h1>Welcome to my third component</h1>
            {/*Below we bind our variables. We use the variable names that we had declared before */}
            <h5>My name is: {name}</h5>
            <h5>My age is: {age}</h5>
            <h5>And {message}</h5>

        </div>
    )
}

export default Thirdcomponent;

//Create a Forth , have 2 variables i.e wight & height and bind them on  the users interface