import React, { useState } from 'react'
import { SearchByContext } from './context';

export const SearchByTopicsProvider = ({children}) => {
    const [searchByState,setSearchByState] = useState('');
  return (
    <SearchByContext.Provider value={{ searchByState,setSearchByState }}>
        {children}
    </SearchByContext.Provider>
  )
}
