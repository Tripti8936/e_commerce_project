import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from './theme';
import Routers from './routers';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Routers />
        </BrowserRouter>
      </ThemeProvider>
      
    </div>
  )
}

export default App
