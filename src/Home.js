import { useState, useEffect } from "react";
import BlogList from "./BlogList";

// sfc = stateless functional component
// use keyword "sfc" to auto-generate template
const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            })
    }, []);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="Blogs"/>
            // logical and: If expr1 can be converted to true, returns expr2; else, returns expr1.
            }
        </div>
    );
}
 
export default Home;

// json server: npx json-server --watch data/db.json --port 8000