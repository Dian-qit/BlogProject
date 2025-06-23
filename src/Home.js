import { useState, useEffect  } from "react";
import BlogList from "./BlogList";

const apiKey = process.env.REACT_APP_API_KEY;



const Home = () => {
    const [blogs, setBlogs] = useState(null);

    // const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.url !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {

        const url = `https://newsapi.org/v2/top-headlines?q=Weather&sortBy=publishedAt&apiKey=${apiKey}`;

                
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
                setBlogs(data.articles);
            })
    }, []);

    // useEffect(() => {
    //     console.log('use effect has ran');
    //     console.log(blogs);

    // }, [name]);


    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Vince")} title="Vince's Blogs!"/> */}
            {/* <button onClick={() => setName('luigi')}>Change name</button>
            <p>{name}</p> */}
        </div>
     );
}
 
export default Home;