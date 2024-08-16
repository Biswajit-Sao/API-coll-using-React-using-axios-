import { useState } from 'react';
import './App.css'
import axios from 'axios';
function App(){
    const[a,b]=useState([]);
    const[x,y]=useState([]);

    const getImages=async()=>{
        try{
            const response =await axios.get("https://picsum.photos/v2/list");
            const data=response.data;
            console.log(data);
            b(data);
            console.log(a);

        }catch(err){
            console.error("sorry");
        }
    }

    const getImages2=async()=>{
        try{
            const response =await axios.get("https://picsum.photos/v2/list");
            const data=response.data;
            console.log(data);
            y(data);
            console.log(a);

        }catch(err){
            console.error("sorry");
        }
    }

    return(
        <div>
            <button onClick={getImages}>Enter</button>
            <button onClick={getImages2}>Enter</button>

            <div className='desig'>
                {a.map((x)=>{
                  return <img className='image-size' src={x.download_url} key={x}/>
                })}
            </div>

            <div className='desig'>
                {x.map((x)=>{
                  return <img className='image-size' src={x.download_url} key={x}/>
                })}
            </div>
        </div>
    )
}
export default App;

