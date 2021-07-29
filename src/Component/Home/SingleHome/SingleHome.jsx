import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SingleHome = ({id}) => {
    const [sData, setSData] = useState("")
    useEffect(() => {
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then((res) => {
            console.log(res.data)
            setSData(res.data)
        })
    }, [id])
    return (
        <>
        {
            id && 
            <div style={{border: "1px solid black",borderRadius:"10px"}}>
            <h1>Id: {sData.id}</h1>
            <h1>TITLE : {sData.title}</h1>
            <h1>Type : {sData.type}</h1>
            <p>by: {sData.by}</p>
            <p>descendants : {sData.descendants}</p>
            <p>score : {sData.score}</p>
            <p>TEXT : {sData.text}</p>
            <p>TIME : {sData.time}</p>
            <a href={sData.url}>{sData.url}</a>
            {/* <div>keys : {sData.kids.map((e) => (<h1>{e}</h1>))}</div> */}
        </div>
   
        }
         </>
         )
}

export default SingleHome
