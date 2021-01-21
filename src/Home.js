import { useState, useEffect } from "react";
import BlogList from "./BlogList";

// sfc = stateless functional component
// use keyword "sfc" to auto-generate template
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
            .then(res => {
                if(!res.ok){
                    throw Error("Couldn't fetch data...");
                }
                return res.json();
            })
            .then(data => {
                // if success
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                console.log(err);
                setIsPending(false);
                setError(err.message)
            })
    }, []);

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Blogs" />}
        </div>
    );
}
 
export default Home;