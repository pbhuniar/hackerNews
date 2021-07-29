import {React,useEffect,useState} from 'react'
import axios from 'axios'
 import {Link} from 'react-router-dom'
import SingleHome from './SingleHome/SingleHome'
export default function Home() {
   
     
    let [hackerNewsID,setHackerNewsData]=useState({
        data: []
     })
     useEffect(()=>{
         axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`).
         then(res=>{
            console.log(res.data);
            setHackerNewsData({data:res.data})   
         }).catch(err=>{console.log(err);})
    },[])
    return(
        <>
     
        {hackerNewsID.data.map((e)=>(
            <>
            <Link to={`/me/${e}`}><p>{e}</p></Link>
            </>
        ))}
        </>
    )
}
