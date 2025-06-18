import { useState, useEffect  } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new Website', body: 'Esse cillum adipisicing id excepteur irure sint reprehenderit id consequat do cillum aliqua eu nostrud.', author: 'Vince', id: 1},
        { title: 'My Life', body: 'Esse cillum adipisicing id excepteur irure sint reprehenderit id consequat do cillum aliqua eu nostrud.', author: 'Vince', id: 2},
        { title: 'My Blog', body: 'Esse cillum adipisicing id excepteur irure sint reprehenderit id consequat do cillum aliqua eu nostrud.', author: 'Binsoy', id: 3}
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect has ran');
        console.log(blogs);

    }, [name]);


    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Vince")} title="Vince's Blogs!"/> */}
            <button onClick={() => setName('luigi')}>Change name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;