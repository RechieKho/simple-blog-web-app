import { useState } from "react";
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

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter(({author})=>author==="mario")} title="Mario's Blog" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;

// Checkout BlogList.js and you knows everything