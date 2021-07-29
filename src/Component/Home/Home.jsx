import {React,useEffect,useState} from 'react'
import axios from 'axios'
import SingleHome from "./SingleHome/SingleHome";
export default function Home() {
   
     
    let [allIds,setallIds]=useState([])
     useEffect(()=>{
         axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
         .then(res=>{
            console.log(res.data);
            setallIds(res?.data)   
         }).catch(err=>{console.log(err)})
    },[])
    return(
        <div style={{margin:"1rem 0.5rem"}}>
        {
            allIds?.length >0 &&
            allIds?.map((id,index)=>{ return (
                <div style={{margin:"0.5rem 0"}} key={index}>
                    <SingleHome id={id} />
                </div>
            )}) 
            
        }
        
        </div>
    )
}
