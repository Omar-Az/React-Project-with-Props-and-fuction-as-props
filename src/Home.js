import Bloglist from './BlogList';
import { useState} from 'react';

const Home = () => {
    const[blogs, setBlogs]=useState([
        {title:'Omar Aziz', body:'This is 1ist blog', author:'Omar', id:1},
        {title:'Omar Aziz', body:'This is 1ist blog', author:'Omar', id:2},
        {title:'Omar Aziz', body:'This is 1ist blog', author:'Omar', id:3} 
     ]);
     const handleDelete=(id)=>{
            const newblog= blogs.filter(blog=> blog.id!==id);
            setBlogs(newblog);
     }
    return ( 
        <div className="home" >
        <Bloglist blogs={blogs} handleDelete={handleDelete} />
        
        </div>

     );
}
 
export default Home;