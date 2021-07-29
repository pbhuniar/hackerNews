import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleHome = () => {
    const [state, setState] = useState({
        data: []
    })
    const params = useParams()
    console.log(params.id);
    useEffect(() => {
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${params.id}.json?print=pretty`).then((res) => {
            console.log(res.data)
            setState({ data: res.data })
        })
    }, [])
    return (
        <div>
            <h1>Id: {state.data.id}</h1>
            <h1>TITLE : {state.data.title}</h1>
            <h1>Type : {state.data.type}</h1>
            <p>by: {state.data.by}</p>
            <p>descendants : {state.data.descendants}</p>
            <p>score : {state.data.score}</p>
            <p>TEXT : {state.data.text}</p>
            <p>TIME : {state.data.time}</p>
            {/* <div>keys : {state.data.kids.map((e) => (<h1>{e}</h1>))}</div> */}
        </div>
    )
}

export default SingleHome
