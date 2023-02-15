import React from 'react'

function ResultModal({status}) {
  return (
    <div className=' absolute flex justify-center items-center w-full h-screen top-0 bg-black bg-opacity-70 '>
        <div className=' flex flex-col items-center justify-center bg-gray-900 w-[200px] h-[200px] z-10 opacity-100'>
            <h1 className='text-white text-xl'>Juego finalizado</h1>
            {status === "win" ? 
            <h2 className='text-green-800 text-xl'>Ganaste!</h2> 
            : 
            <h2 className='text-red-800 text-xl'>Perdiste!</h2>}
            <button className='flex bg-black text-white px-3 py-1 rounded mt-4' onClick={() => {window.location.reload()}}>Return</button>
        </div>
    </div>
  )
}

export default ResultModal