import React from 'react'
import { useState, useEffect } from 'react'

const themes = {
       dark: {
              backgroundColor: 'black',
              color: 'white',
              borderColor: 'darkred',
              backgroundImage: `url('https://gamepress.gg/lostword/sites/lostword/files/story_cards/0075_%E2%98%863_Scarlet%20Devil%20Mansion.png')`,
              background: 'linear-gradient(120deg, rgba(0,0,0,0.9) 0%, rgba(110,110,110,0.9) 50%, rgba(0,0,0,0.9) 100%)',
              transition: 'all 0.5s ease-in-out',
       },
       light: {
              backgroundColor: 'floralwhite',
              color: 'black',
              borderColor: '#5DC100',
              backgroundImage: `url( 'https://gamepress.gg/lostword/sites/lostword/files/story_cards/0099_%E2%98%863_Emerging%20Power.png')`,
              background: 'linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(143,143,143,0.8) 50%, rgba(255,255,255,1) 100%)',
              transition: 'all 0.5s ease-in-out',
       }
}
const initialState = {
       dark: false,
       theme: themes.light,
       toggle: () => {}
}
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
       const [dark, setDark] = useState(false) 
       // On mount, read the preferred theme from the persistence
       useEffect(() => {
              const isDark = localStorage.getItem('dark') === 'true'
//store the state mode to the local storage
              setDark(isDark)
       }, [dark])
       // To toggle between dark and light modes
       const toggle = () => {
              const isDark = !dark
              localStorage.setItem('dark', JSON.stringify(isDark))
              setDark(isDark)
       }
       const theme = dark ? themes.dark : themes.light
       return (
              <ThemeContext.Provider value={{ theme, dark, toggle }}>
                     {children}
              </ThemeContext.Provider>
       )
}
export { ThemeProvider, ThemeContext }
