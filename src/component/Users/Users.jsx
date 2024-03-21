import { useLoaderData } from "react-router-dom";


const Users = () => {

    const user = useLoaderData()

    return (
        <div>
            <h2>Our users</h2>
            <h3>Users Length: {user.length}</h3>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a ducimus commodi tenetur! Pariatur, itaque.</div>
        </div>
    );
};

export default Users;