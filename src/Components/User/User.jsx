import PropTypes from 'prop-types';
import "./user.css"
import { Link } from 'react-router-dom';
const User = ({user}) => {
    
    return (
        <div className='user'>
            <h1>{user.name}</h1>
            <p>Email:{user.email}</p>
            <p>Phone:{user.phone}</p>
            <Link to={`/users/${user.id}`}>Show details</Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object 
}

export default User;