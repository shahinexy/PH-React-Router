import { useLoaderData } from "react-router-dom";

const Post = () => {
    const post = useLoaderData()
    const {id, title, body} = post;
    return (
        <div>
            <h3>{id}</h3>
            <h3>{title}</h3>
            <h5>{body}</h5>
        </div>
    );
};

export default Post;