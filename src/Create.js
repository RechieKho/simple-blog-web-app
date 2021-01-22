import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault(); // default include refreshing the page which we don't want that
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(blog)
        })
        .then(()=>{
            console.log("new blog added");
            setIsPending(false);
            history.push("/");
            // history.go() redirect to the previous site or proceed site by index (-1,1,2,etc)
        })
    }

    return ( 
        <div className="create">
            <form
                onSubmit={handleSubmit}
            >
                <label>Blog Title: </label>
                <input 
                    required
                    type="text"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                />
                <label>Blog Body: </label>
                <textarea
                    required
                    type="text"
                    value={body}
                    onChange={e=>setBody(e.target.value)}
                />
                <label>Blog Author: </label>
                <select
                    value={author}
                    onChange={e=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {isPending?<button disabled>Adding Blog...</button>:<button>Add Blog</button>}
            </form>
        </div>
    );
}
 
export default Create;