import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/search">Search</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
        </div>
    );
};

export default Header;