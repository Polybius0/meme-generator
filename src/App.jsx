import React, {useRef, useState} from 'react';
import memeData from './memeData';
import './App.css';


function App() {

  const [bottomText, setBottomText] = useState()

  const bottomTextWrite =(event)=> {
    setBottomText(event.target.value)
  }

  const [topText, setTopText] = useState()

  const topTextWrite =(event)=> {
    setTopText(event.target.value)
  }
  
  

  const [meme, setMeme] = useState()

  function memeGet(){
    const memeArray = memeData.data.memes
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    const url = memeArray[randomNumber].url
    
    setMeme(url)
  }

  return (
    <main className='App grid place-content-center p-10'>
      
      <div className='form grid grid-cols-2 gap-3'>
        <input type='text' 
        onChange = {topTextWrite}
        placeholder="Top Text"
        className='input shadow-lg border-2 border-purple-600 rounded-md p-2 indent-2'/>
        
        <input type='text' 
        onChange = {bottomTextWrite}
        placeholder="Bottom Text"
        className='input shadow-lg border-2 border-purple-600 rounded-md p-2 indent-2'/>
        
        <button onClick={memeGet}
        className='button shadow-md col-span-2 w-full bg-purple-600 rounded-md text-white p-2'>Get New Image</button>
      </div>

        <div className='haha flex justify-around flex-col items-center'>
          <p className='memeText font-bold z-10 translate-y-12 text-white text-5xl'>{topText}</p>
          <img src={meme} className='meme col-span-2 w-[400px]'/>
          <p className='memeText align-bottom font-bold z-10 -translate-y-12 text-white text-5xl'>{bottomText}</p>
        </div>
      
      
    </main>
  );
}

export default App;
