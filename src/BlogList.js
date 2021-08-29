const Bloglist =({blogs, handleDelete})=>{
    return(
        <div className="blig-list">   
         {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <button onClick={()=> handleDelete(blog.id)}>delete</button>
        </div>
       ))}
       </div>

    );

}
export default Bloglist;