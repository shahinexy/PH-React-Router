import { Link, useLoaderData } from "react-router-dom";

const Posts = () => {
    const posts = useLoaderData()
    console.log(posts);
    return (
        <div>
            <h2>All Posts</h2>

            <div className="card_container">
                {
                    posts.map(post => (
                        <div key={post.id} className="card">
                            <h2>User ID: {post.id}</h2>
                            <hr />
                            <ul>
                                <li>
                                    Post Title: {post.title}
                                </li>
                            </ul>
                            <Link to={`/post/${post.id}`}>
                            <button>Details</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Posts;