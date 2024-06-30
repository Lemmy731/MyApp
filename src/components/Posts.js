import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from './Post';
import '../styles/posts.css';
import Create from './Create';


function Posts() {
    const [blogs, setBlogs] = useState([])
    const [records, setRecords] = useState([])

    const [myBlogs, setmyBlogs] = useState([])


    useEffect(() => {
        axios.get('https://dummyjson.com/products/?limit=12&skip=10')
        .then(res => {
            setBlogs(res.data.products)
            console.log(res.data.products)
            setRecords(res.data.products)
        })
        .catch(err => console.log(err))
    }, [])
    const getInputData = (event) => {
        setBlogs(records.filter(r => r.title.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    const addBlog = (newBlog) => {
        setmyBlogs([...myBlogs, newBlog]);
    }
console.log(myBlogs)

  return (
    <div className='posts'>
        <div className='search-container'>
            <input type="text" placeholder='search' 
            onInput={getInputData} className='search-input'></input>
        </div>
        <div className='blog-icon'>
            <h3>Blogs</h3>
            <i className='fa fa-calculator'></i>
        </div>
        <div className='posts-container'>
            
            {blogs.map((blog, index) => (
                <Post blog={blog} key={index}/>
            ))}
        </div>

        <div>

       
      </div>

    </div>
  )
}


export default Posts