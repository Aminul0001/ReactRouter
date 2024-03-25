import  PropTypes  from "prop-types";
import "./Post.css"
import { Link, useNavigate } from "react-router-dom";
const Post = ({post}) => {

const navigate = useNavigate()

const handlePostDetails = () => {
    navigate(`/posts/${post.id}`) 
}

    return (
        <div className="postContainer">
            <h1>PostID:{post.id}</h1>
            <h4>Title:{post.title}</h4>
            <Link to={`/posts/${post.id}`}><button>See More</button></Link>
            <button onClick={handlePostDetails}>Show Post</button>
        </div>
    );
};

Post.propTypes = {
    post : PropTypes.object
}

export default Post;