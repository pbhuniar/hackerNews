import {React,useEffect,useState} from 'react'
import axios from 'axios'
 


export default function Home() {
   
     
    let [hackerNewsID,setHackerNewsData]=useState({
        data: []
     })
     let [hackerNewsDATA,setHackerNewsDataDATA]=useState({
        UserData: []
     })


     
     useEffect(()=>{
         axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`).
         then(res=>{
            console.log(res.data);
            setHackerNewsData({data:res.data})
               
            hackerNewsID.data.map(e=>{
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${e}.json?print=pretty`).then(res=>{
                    console.log(res.data)
                setHackerNewsDataDATA({UserData:res.data})
                    console.log(hackerNewsDATA);
            }).
                catch(err=>console.log(err))
            })



         }).catch(err=>{console.log(err);})
    })
 
    
   
    return (
        <div>
            THis is Home !

 
 {/* {hackerNewsDATA.data.map(e=>(

    <li>
        <ul>{e}</ul>
    </li>

    ))}  */}

        </div>
    )
}
