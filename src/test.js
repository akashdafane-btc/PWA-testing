import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Test = () => {

  const[data,setData] = useState('')

  useEffect(()=>{
    Axios('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      setData(res.data)
    })
  },[])
  
  return (
    <div>
      {data&&data.map((v,k)=>(
        <div>
        <ul k={k}>
          <li>{v.name}</li>
        </ul>
      </div>
      ))}
    </div>
  )
}

export default Test
