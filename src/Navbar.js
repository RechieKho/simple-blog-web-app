import { Link } from 'react-router-dom';

// sfc = stateless functional component
// use keyword "sfc" to auto-generate template
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Block</h1>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: 'white', 
                    backgroundColor: '#f1356d', 
                    borderRadius: '8px'
                }}>New Block</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;

/**
 * when using dynamic inline style, object is used instead of string
 */