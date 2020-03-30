import {createContext} from 'react'

export const themes = {
    light: {
      foreground: '#000000',
      background: '#ffffff',
      reverseForegroud: '#ffffff'
    },
    dark: {
      foreground: '#ffffff',
      background: '#262626',
      reverseForegroud: '#000000'
      
    },
  };
  
  export const ThemeContext = createContext(
    themes.dark 
  );