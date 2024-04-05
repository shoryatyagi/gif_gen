import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import { useState } from 'react';


function Tag() {
    // const[gif, setGif] =useState('')
    // const [loading,setLoading] = useState(false)
    const [tag,setTag] = useState('car')

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    //     const {data} = await axios.get(url);
    //     const imgSrc = data.data.images.downsized_large.url;
    //     setGif(imgSrc)
    //     setLoading(false);
    // }
    // useEffect(()=>{
    //     fetchData()
    // },[])
    const {gif,loading,fetchData} = useGif(tag);

    const clickHandler = () => {
        fetchData(tag)
    }
    const changeHandler = (event) =>{
      setTag(event.target.value)
    }
     const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchData(tag)
      // Call your desired function here
    }
  }
  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>Random {tag} Gif</h1>

      {loading ? (<Spinner/>) :(<img src={gif} width="450"/>)}

      <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={changeHandler} 
        onKeyDown={handleKeyDown}
        value={tag}
      />

      <button className='w-10/12 bg-green-200  mb-[20px] text-lg py-2 rounded-lg' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag
