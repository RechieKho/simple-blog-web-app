import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");

    return ( 
        <div className="create">
            <form>
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
                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;