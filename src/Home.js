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