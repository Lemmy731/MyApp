import React, {useState} from "react";
import '../styles/create.css';

//function to create a post

function Create({ addBlog}) {
  console.log('Received addBlog:', addBlog);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, desc, file };
    addBlog(newBlog);
    setTitle('');
    setDesc('');
    setFile(null);
  };

  return (
    <div className="form-container1">
      <form onSubmit={handleSubmit}>
        <div className="addnewblog">
          <h2>Create a new blog</h2>
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Write Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="desc"
            placeholder="Write Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="file">
          <label htmlFor="file">Input File:</label>
          <input
            type="file"
            name="file"
            placeholder="File"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button className="newblog-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Create;
