// sfc = stateless functional component
// use keyword "sfc" to auto-generate template
const Home = () => {

    const handleClick = (e) => {
        console.log(`Hello, world`);
        console.log(e);
    }
    const handleClickAgain = name => {
        console.log(`Hello ${name}`)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain("Richie")}>Click Me Again</button>
        </div>
    );
}
 
export default Home;

// To set event, a function is needed. (You can just define a anonymous function when setting the event)
// you can event wrap function in an annonymous function to pass in parameter or invoke more function
// event object will be passed into the function as the first argument