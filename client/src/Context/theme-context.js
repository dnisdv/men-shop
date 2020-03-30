import React, {createContext} from 'react'

export const themes = {
    light: {
      foreground: '#000000',
      background: '#ffffff',
    },
    dark: {
      foreground: '#ffffff',
      background: '#262626',
    },
  };
  
  export const ThemeContext = createContext(
    themes.dark 
  );