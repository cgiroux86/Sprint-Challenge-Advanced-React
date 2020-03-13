import React, {useState, useEffect} from 'react'
import axios from 'axios'




export const useCustomFetchHook = (url) => {
 const [data, setData] = useState([])

  useEffect(() => {
     axios.get(url).then(res => {
        console.log(res.data.results)
        setData(res.data.results)

   
     })
   }, [])
   
    


 
  return [data]
}