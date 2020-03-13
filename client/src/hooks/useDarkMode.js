import {useEffect, useState} from 'react'


export const useDarkMode = (initialValue) => {
 const [darkmode, setdarkmode] = useState(initialValue)




 useEffect(() => {
   const body = document.querySelector('body')
   return  darkmode === false ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
 }, [darkmode])

 return [darkmode, setdarkmode]
}