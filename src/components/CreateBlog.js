const CreateBlog = () => {
  return (
    <div className='create'>
      <h2>Add a new Blog</h2>
      <form>
        <label>Blog title:</label>
        <input 
          type='text'
          required
        />
        <label>Blog body:</label>
        <textarea>
          required
        </textarea> 
        <label>Blog author:</label>
        <select>
          <option value="lindsay">lindsay</option>
          <option value="emma">emma</option>
          <option value="bjon">bjon</option>
        </select>
        <button>Add blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;