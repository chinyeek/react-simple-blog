const BlogList = ({blogs}) => {

  return (
    <div className="blog-list">
      {blogs.map((b) => (
        <div className="blog-preview" key={b.id}>
          <h2>{b.title}</h2>
          <p>Written by {b.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;