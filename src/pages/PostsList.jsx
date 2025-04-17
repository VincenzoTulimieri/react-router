// importazione file

import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function PostList(){
    const [posts, setPosts]= useState([])

    function postsList(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                setPosts(response.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    useEffect(postsList,[])

    return(
        posts.map(post=>(
            <div className="post-container" key={post.id}>
                <h2 className="post-title">{post.title}</h2>
                <span className="link"><Link to={'/post/:id'}>Dettagli post</Link></span>
            </div>
        ))  
    )
}