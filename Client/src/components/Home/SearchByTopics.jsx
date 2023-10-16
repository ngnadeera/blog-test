import React, { useState } from 'react'

export const SearchByTopics = () => {

  const [searched,setSearched] = useState();

  const buttons = [
    { id: 1, value: 'Network analytics' },
    { id: 2, value: 'Wisp' },
    { id: 3, value: 'Congestion Control' },
    { id: 4, value: 'WI-DI' },
    { id: 5, value: 'WI-DI Lite' }
  ]

  const handleClick = (id) => {
    setSearched(buttons.find(button => button.id == id))
  }
  
  return (
    <div className='search-by-topics'>
      
        {
          buttons.map((button,index) => (
            <button id={button.id} className='btn' onClick={() => handleClick(button.id)}>
                {button.value}
            </button>
          ))
        }
  
    </div>
  )
}
