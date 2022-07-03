import React, { useEffect, useState } from 'react';
import axios from "axios";

const pageSize =10;
const Posts = () => {
    const [posts, setPosts] = useState();
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos") 
      .then(res=>{
        console.log(res.data);
        setPosts(res.data);
      }); 
    }, []);
    const pageCount = posts? Math.ceil(posts.lenth/pageSize) :0;
    if (pageCount ===1) return null;
    const pages 
    return  <div>{
     !posts ? ("No data found"):(
     <table className='table'>
       <thead>
          <tr>
             <th>ID</th>
             <th>User ID</th>
             <th>Title</th>
              <th>Status</th>
         </tr>
      </thead>
       <tbody>
         {
           posts.map((post, index)=>(
             <tr key={index}>
                 <td>{post.id}</td>
                 <td>{post.userId}</td>
                 <td>{post.title}</td>
                   <td>
                     <p className={post.completed ? "btn btn-success" : "btn btn-danger"}>
                      {post.completed ? "Completed" : "Pending"}  
                     </p>
                  </td>
             </tr>
                ))
              }  
            </tbody>
           </table> 
        )}
        <nav className='d-flex justify-content-center'>
          <ul className='pagination'>
            <li className='page-link'>1</li>
            <li className='page-link'>2</li>
            <li className='page-link'>3</li>
            </ul>  
        </nav>
        </div> ;
};
 
export default Posts;
