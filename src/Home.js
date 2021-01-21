import { useState, useEffect } from "react";
import BlogList from "./BlogList";

// sfc = stateless functional component
// use keyword "sfc" to auto-generate template
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = id => {
        const newBlogs = blogs.filter(blog=>blog.id!==id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log("React RENDERS! when blogs changes");
    }, [blogs]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter(({author})=>author==="mario")} title="Mario's Blog" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;

// useEffect is used to invoke a function when react renders
// useState is active as it makes react rerenders while useEffect is passive as it run code when react renders
// BEST FOR API

/**
 * useEffect Dependency:
 * the second argument of useEffect is for Dependency (an array of useState constant, self-define variable gives no effect)
 * useEffect with Dependency only run at first render or when the useState constant changed by useState set function
 */