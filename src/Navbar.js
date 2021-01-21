// sfc = stateless functional component
// use keyword "sfc" to auto-generate template
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Block</h1>
            <div className="link">
                <a href="/">Home</a>
                <a href="/create">New Block</a>
            </div>
        </nav>
    );
}
 
export default Navbar;