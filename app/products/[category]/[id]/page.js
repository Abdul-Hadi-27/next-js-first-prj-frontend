"use client"

import axios from "axios"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const Page = () => {
  const { category, id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  

  useEffect(() => {
    if (!category || !id) return

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/${category}/${id}`
        )
        setData(res.data)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [category, id])

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Product not found</h1>

  return (
   <>

   <div className="h-full w-full flex justify-center items-center">
      <Link
          
            href={''}   // future detail page
            key={data.id}
            className=" rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col h-[100%]  w-[100% justify-center mt-4"
          >
            
            {/* Image */}
          
            <div className="h-90    flex items-center justify-center">
              <img src={data.image}
                alt={data.title} 
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
           <div className="flex flex-col  w-full">

  {/* Title + Price row */}
  <div className="flex items-center justify-between p-4 ">
    <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
      {data.title}
    </h2>

    <span className="text-xl font-bold text-green-600">
      ${data.price}
    </span>
  </div>

  {/* Description */}
  <div className="px-4 pb-4">
    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
      {data.description}
    </p>
  </div>

</div>

          </Link>
          </div>
   </>
  )
}

export default Page
