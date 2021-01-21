import { useState } from "react";

// sfc = stateless functional component
// use keyword "sfc" to auto-generate template
const Home = () => {
    const [name, setName] = useState("mario");
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        setName("Rap...per");
        setAge(10009);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>Your Love One: {name}</p>
            <p>Age: {age}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;

// useState tells react to watch over the data so that the UI will update when the data changes
/**
 * To use state: 
 * const [a const variable, set Function] = useState(DEFAULT_VALUE)
 * 
 * you know... useState return an array of a constant and a function and we just immediately destructure it.
 * 
 * At first I think the const variable should be just a get function so that it PAIRS (GetFunciton, SetFunction, how nice)
 * But a const variable is way more cheaper than a function that return values in term of memory
 * 
 * To set value base on the previous value:
 * setFunction(prevValue => {DO SOMETHING})
 * 
 * This is because that the const variable IS just a const variable. The const variable only changes when react rerun the whole thing and react
 * will not rerun the whole thing when the function that invoke the set function is being invoked
 */