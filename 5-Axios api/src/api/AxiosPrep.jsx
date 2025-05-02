import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AxiosPrep = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response)
            setData(response.data)
        })
    }, [])
    

  return (
    <>
        {data.map((data) => {
            return (
                <div>{data.email}</div>
            )
        })}
    </>
  )
}

export default AxiosPrep