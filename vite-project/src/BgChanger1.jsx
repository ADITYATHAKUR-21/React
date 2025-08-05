import React from 'react'
import { useState } from 'react'

const BgChanger1 = () => {
    const {color, setColor} = useState('red')
  return (
    <div className='w-full h-screen duration-200'style={{background : color}}>
        <div className='fixed  flex flex-wrap justify-center inset-x-0  bottom-12'>
            <div className='flex flex-wrap justify-center rounded-4xl bg-white px-6 py-2 gap-5'>
                <button onClick={()  => setColor('')} className='cursor-pointer px-10 py-3 bg-cyan-900 rounded-3xl font-bold text-white outline-0'></button>
                <button onClick={()  => setColor('')} className='cursor-pointer px-10 py-3 bg-cyan-900 rounded-3xl font-bold text-white outline-0'></button>
                <button onClick={()  => setColor('')} className='cursor-pointer px-10 py-3 bg-cyan-900 rounded-3xl font-bold text-white outline-0'></button>

            </div>

        </div>

    </div>
  )
}

export default BgChanger1
