// just simple destructuring from props object
const BlockList = ({blogs, title}) => {
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map(blog=>(
                <div className="blog-preview" key={blog.id /* Key is important to react for performance issue */}>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlockList;