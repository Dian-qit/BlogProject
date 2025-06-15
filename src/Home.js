import { useState  } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new Website', body: 'Esse cillum adipisicing id excepteur irure sint reprehenderit id consequat do cillum aliqua eu nostrud.', author: 'Vince', id: 1},
        { title: 'My Life', body: 'Esse cillum adipisicing id excepteur irure sint reprehenderit id consequat do cillum aliqua eu nostrud.', author: 'Vince', id: 2},
        { title: 'My Blog', body: 'Esse cillum adipisicing id excepteur irure sint reprehenderit id consequat do cillum aliqua eu nostrud.', author: 'Binsoy', id: 3}
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "Vince")} title="Vince's Blogs!"/>
            
        </div>
     );
}
 
export default Home;