import './App.css';

function App() {
  const title = "Hello from the other side";
  const loves = 3000;
  const site = "https://www.google.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1> 
        <p>Love you {loves}</p>

        <p>Random Number : {Math.random()* 10}</p>
        <a href={site}>Google Site</a>
      </div>
    </div>
  );
}

export default App;

/**
 * Notes: 
 * 1. We can't output boolean and object through render (Array is possible, React will just dump the square bracket and comma)
 */