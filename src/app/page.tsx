import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center mt-20'>
      <button className='text-center font-bold bg-gray-700 w-32 justify-center flex rounded-md text-nowrap py-1 curosr-pointer hover:bg-gray-600'><Link href="/musics">Get Started</Link></button>
    </div>
  )
}

export default page
