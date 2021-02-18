import {useState} from 'react';

const BlogList = (props) => {

  const blogs = props.prop1;
  const title = props.prop2;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((e) => (
        <div className="blog-preview" key={e.id}>
          <h2>{e.title}</h2>
          <p>Written by {e.author}</p>
          {/* <button onClick={() => handleDelete(e.id)}>delete</button> */}
        </div>
      ))}
    </div>
  );

};

export default BlogList;