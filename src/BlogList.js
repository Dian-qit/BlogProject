const BlogList = ({ blogs, title, handleDelete }) => {
  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.url}>
          <h2>{blog.title}</h2>
          <p>{blog.url}</p>
          <p>{blog.source.name}</p>
          <p>Written by: {blog.author || "Unknown"}</p>
          <button onClick={() => handleDelete(blog.url)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
