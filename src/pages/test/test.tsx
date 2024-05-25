import { useEffect, useState } from "react";
import http from "../../config/axios";

const Test = () => {
    const [posts, setPosts] = useState<any[]>([]); // Change to useState<any[]>([]) to specify the type of state

    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await http.get('/posts'); // Add a slash before 'posts' to make it an absolute path
                console.log(res.data); // Access the data property of the response
                setPosts(res.data); // Set posts state to response data
            } catch (error) {
                console.log(error);
            }
        };

        getPosts();
    }, []); // Add an empty dependency array to useEffect to prevent it from running on every render


    const handleAdd = async () => {
        console.log('testr');

        
        
        try {
            const res = await http.post('posts', {name: 'aya'})
            console.log(res);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const handleDelete = async (id: number | string) => {
        console.log('delete');
        console.log(posts);
        
        
        try {
            const res = await http.delete(`posts/${id}`)
            console.log(res);
            
        } catch (error) {
            console.log(error);
            
        }

        console.log(posts);
        
    }


    return (
        <>
            <h1 className="text-xl text-red-900">Posts</h1> {/* Capitalize 'Posts' */}
            {posts.map((el) => (
                <p key={el.id}>{`${el.id} ==> ${el.name}`}</p>
            ))}

            <button className="bg-slate-300 m-1 p-2" onClick={() => handleAdd()}>add post</button>
            <button className="bg-slate-300 m-1 p-2" onClick={() => handleDelete("ba3e")}>delete post</button>
        </>
    );
};

export default Test;
