import {React,useEffect,useState} from 'react'
import axios from 'axios'
 


export default function Home() {
   
     
    let [hackerNewsID,setHackerNewsData]=useState({
        data: []
     })
     
     useEffect(()=>{
         axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`).
         then(res=>{
            console.log(res.data);
            setHackerNewsData({data:res.data})
         console.log(hackerNewsID);


         }).catch(err=>{console.log(err);})
    },[setHackerNewsData])
 
    
   
    return (
        <div>
            THis is Home !

 
{hackerNewsID.data.map(e=>{

    <li>
        <ul>{e}</ul>
    </li>

})}

        </div>
    )
}
