import { useState } from "react";

// sfc = stateless functional component
// use keyword "sfc" to auto-generate template
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    return ( 
        <div className="home">
            {
                blogs.map(blog=>(
                    <div className="blog-preview" key={blog.id /* Key is important to react for performance issue */}>
                        <h2>{blog.title}</h2>
                        <p>Written By {blog.author}</p>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Home;

// Key is used to compare the previous state of the DOM and current state of the DOM (after changes).
// if key is absent, react will just do DUMB shit that effect performance instead of doing some smart moves
// react docs: https://reactjs.org/docs/reconciliation.html#recursing-on-children