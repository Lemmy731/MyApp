import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/post.css';

// display post
function Post({blog}) {
  return (
    <Link to={`/detail/${blog.id}`} className='post-link'>
        <div className='blog'>
            <img src={blog.thumbnail} className="blog-image"/>
            <div className='blog-title'>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
            </div>
        </div>
    </Link>
  )
}

export default Post