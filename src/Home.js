import BlogList from "./BlogList";
import useFetch from "./useFetch";

// sfc = stateless functional component
// use keyword "sfc" to auto-generate template
const Home = () => {
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Blogs" />}
            <button onClick={
                ()=>{
                    fetch("http://localhost/carddomeapi/index.php",{
                        method: "POST",
                        headers: {
                            "Access-Control-Request-Headers": "Content-Type",
                            "Content-Type":"application/json",
                        },
                        body : JSON.stringify({key:"value"})
                    }).then(console.log)
                }
            }> FETCH </button>
        </div>
    );
}
 
export default Home;