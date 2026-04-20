import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
      setUserData(response.data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData()
  }, [index])

  let printUserData;
  if (loading) {
    printUserData = Array(8).fill(0).map((_, i) => (
      <div
        key={i}
        className="w-64 h-52 bg-white/40 animate-pulse rounded-xl"
      ></div>
    ));
  } else if (userData.length > 0) {
    printUserData = userData.map((elem) => (
      <Card key={elem.id} elem={elem} />
    ));
  } else {
    printUserData = <h3 className='text-gray-500 text-sm font-bold'>No Data Found</h3>;
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6'>
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text mb-3">
        Pixel Gallery
      </h1>
      <p className="text-gray-600 mb-6">
        Discover stunning visuals from around the world
      </p>
      <hr className="mb-6 border-gray-300" />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        <button style={{ opacity: index == 1 ? 0.5 : 1 }} className='bg-amber-300 text-black rounded-full px-4 py-2 font-medium shadow hover:bg-amber-400 transition cursor-pointer active:scale-95' onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
          }
        }}>Prev</button>
        <h4 className='text-gray-700 font-semibold'>Page {index}</h4>
        <button className='bg-amber-300 text-black rounded-full px-4 py-2 font-medium shadow hover:bg-amber-400 transition cursor-pointer active:scale-95' onClick={() => {
          setIndex(index + 1)
        }}>Next</button>
      </div>
    </div>
  )
}

export default App