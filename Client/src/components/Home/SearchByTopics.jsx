import React, { useContext, useState } from 'react'
import { SearchByContext } from './context';
import { useNavigate } from 'react-router-dom';
export const SearchByTopics = ({searchByRef}) => {

  const {searchByState,setSearchByState} = useContext(SearchByContext);
  const [searched,setSearched] = useState();
  const navigate  = useNavigate();

  const buttons = [
    { id: 1, value: 'Network analytics' },
    { id: 2, value: 'Wisp' },
    { id: 3, value: 'Congestion Control' },
    { id: 4, value: 'WI-DI' },
    { id: 5, value: 'WI-DI Lite' }
  ]

  const handleClick = (id) => {
    setSearchByState((buttons.find(button => button.id == id)).value)
    navigate('/')
    
    const searchByElement = document.getElementById('searchByComponent');
    if (searchByElement) {
      searchByElement.scrollIntoView({ behavior: 'smooth' });
    }
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
