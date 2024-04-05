
import { useState } from 'react';
import './App.css';


function App() {
 

  const [count,setCount]=useState(0);
  function decreaseHandler(){
   setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }
  return (
  
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#34415109] flex-col gap-10 bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <div className='text-[#222] text-2xl bg-yellow-400 px-5 py-3 rounded-full'>Increment && Decrement</div>
      <div className='bg-[#fff] flex flex-row justify-center gap-12 py-3 rounded-md text-[25px] text-[#344151]'>
        <button onClick={decreaseHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          -
        </button>
        <div className='font-bold gap-12 text-5xl'>
          {count}
        </div>
        <button onClick={increaseHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'> 
          +
        </button>
      </div>
        <button onClick={resetHandler} className='px-12 py-3 text-white text-lg bg-blue-600 rounded-full hover:bg-blue-700  font-bold'>
        Reset
        </button>
    </div>
  );
}
export default App; 


      


