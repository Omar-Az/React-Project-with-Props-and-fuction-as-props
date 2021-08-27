import { useState} from 'react';
const Home = () => {
    const [num, setNum]=useState(10);
    const incNum=()=>{
        if(num==30)
        {
            return;
        }
        setNum(num+2);
    }
    return ( 
        <div className="home" >
        <h2> OMAR's HomePAGE!!</h2>
        <p>{num}</p>
        <button onClick={incNum}>Count</button>

        </div>
     );
}
 
export default Home;