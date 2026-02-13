import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [products, setproducts] = useState([])
  const [error , seterror] = useState(false)
  const [loading , setloading] = useState(false)

  useEffect(() => {
    (async() => {
      try {
        setloading(true)
        seterror(false)
        const response = await axios.get('/api/products')
        console.log(response.data);
        setproducts(response.data)
        setloading(false)
      } catch (error) {
        seterror(true)
        setloading(false)
      }
    })()

  } , [])

  if(error) {
    return <h1>something went wrong</h1>
  } 

  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>chai aur api in react</h1>
      <h2>number of products : {products.length}</h2>
    </>
  )
}

export default App
