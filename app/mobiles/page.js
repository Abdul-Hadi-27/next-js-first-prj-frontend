'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
   const [mobile, setMobile] = useState([])
   const BASE_URL = "https://next-js-first-proj-backend-production.up.railway.app"
   useEffect(() => {
   const fetchMobile=async ()=>{
    try {
       const {data}=await axios.get(`${BASE_URL}/mobiles`)
       console.log(data)
       setMobile(data)
      
    } catch (error) {
      console.log(error)
      
    }

   }
   fetchMobile()
   }, [])
   
  return (
    <>
      <div className='min-h-screen mt-4'>

        <div className=' w-full text-center text-5xl flex items-center justify-center'><h1> Mobiles Section</h1></div>
      <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 ">
      
        {mobile.map((m) => (
          
          <Link
          
            href={`/products/mobiles/${m.id}`}   // future detail page
            key={m.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden mt-15"
          >
            
            {/* Image */}
          
            <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
              <img src={m.image}
                alt={m.title} 
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {m.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {m.description}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-bold text-green-600">
                  ${m.price}
                </span>

                <button onClick={()=>{
                  router.push(`/products/mobiles/${m.id}`)
                }}
                 className="px-3 py-1 text-sm bg-black text-white rounded-lg hover:bg-gray-800">
                  View
                </button>
              </div>
            </div>
          </Link>
        ))}

      </div>

  </div>
    
    </>
  )
}

export default page