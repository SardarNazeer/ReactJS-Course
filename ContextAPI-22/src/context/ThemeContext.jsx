

// createcontext create kiya usko ek variable me store kar dia 
// or usko export karwa dia matlab ke usko koi bhi access kar payega 

import { createContext, useState } from "react"

export const ThemeDataContext = createContext()


const ThemeContext = (props) => {

  const [theme,setTheme] = useState('light')
  return (
    <div>
      <ThemeDataContext.Provider value={[theme,setTheme]}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
