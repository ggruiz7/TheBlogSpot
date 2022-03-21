import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>BlogSpot</h1>
      <div className="links">
        <Link to="/SignUp">Sign Up</Link>
        <Link to="/Login">Login</Link>
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
