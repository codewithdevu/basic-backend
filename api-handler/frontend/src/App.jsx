import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  // const [products , error , loading] = CustomQuerySelector('api/products')

  const [products, setproducts] = useState([])
  const [error, seterror] = useState(false)
  const [loading, setloading] = useState(false)
  const [search, setsearch] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setloading(true)
        seterror(false)
        const response = await axios.get('api/products?search=' +search , {
          signal: controller.signal
        })
        console.log(response.data);
        setproducts(response.data)
        setloading(false)
      } catch (error) {
        if(axios.isCancel(error)){
          console.log("request cancel" , error.message)
          return
        }
        seterror(true)
        setloading(false)
      }
    })()

    //clean up
    return () => {
      controller.abort()
    }

  }, [search])

  // if(error) {
  //   return <h1>something went wrong</h1>
  // } 

  // if(loading) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
      <h1>chai aur api in react</h1>

      <input type="text"
        placeholder='search'
        value={search}
        onChange={(e) => setsearch(e.target.value)} />

      {loading && (<h1>loading...</h1>)}
      {error && (<h1>Something went wrong</h1>)}
      <h2>number of products : {products.length}</h2>
    </>
  )
}

export default App


// const CustomQuerySelector = (urlpath) => {
//   const [products, setproducts] = useState([])
//   const [error , seterror] = useState(false)
//   const [loading , setloading] = useState(false)

//   useEffect(() => {
//     (async() => {
//       try {
//         setloading(true)
//         seterror(false)
//         const response = await axios.get(urlpath)
//         console.log(response.data);
//         setproducts(response.data)
//         setloading(false)
//       } catch (error) {
//         seterror(true)
//         setloading(false)
//       }
//     })()

//   } , [])

//   return [products , error , loading]
// }
