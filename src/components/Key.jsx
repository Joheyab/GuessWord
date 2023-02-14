import React, {useContext} from 'react'
import { AppContext } from '../pages/GamePage'

function Key({keyValue, bigKey}) {
    const {onSelectLetter, onDelete, onEnter} = useContext(AppContext)
    const selectLetter = () =>{
        if (keyValue === 'ENTER'){
           onEnter()
        }else if(keyValue === 'DELETE'){
            onDelete()
        }else{
            onSelectLetter(keyValue)
        }
    }
    const keyClass = bigKey ? 'border-2 border-black rounded-lg w-20 h-10 m-1' : 'border-2 border-black rounded-lg w-10 h-10 m-1'
  return (
    <button className={keyClass} onClick={selectLetter}>{keyValue}</button>
  )
}

export default Key