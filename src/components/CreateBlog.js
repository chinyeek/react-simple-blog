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
          <option value="mario">mario</option>
        </select>
      </form>
    </div>
  );
}

export default CreateBlog;