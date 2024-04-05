import React from 'react'

import Spinner from './Spinner';
import useGif from '../hooks/useGif';


function Random() {
    
    const {gif,loading,fetchData} = useGif()

    const clickHandler = () => {
        fetchData()
    }
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>A Random Gif</h1>

      {loading ? (<Spinner/>) :(<img src={gif} width="450"/>)}

      <button className='w-10/12 bg-green-200  mb-[20px] text-lg py-2 rounded-lg' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
