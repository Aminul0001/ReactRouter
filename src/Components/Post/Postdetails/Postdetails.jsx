import { useLoaderData } from "react-router-dom";


const Postdetails = () => {

    const post = useLoaderData()
    return (
        <div>
            <h1>Post number:{post.id}</h1>
            <h3>Details: {post.body} </h3>
        </div>
    );
};

export default Postdetails;