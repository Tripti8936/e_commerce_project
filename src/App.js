import React, { useEffect } from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from './theme';
import Routers from './routers';
import { BrowserRouter, useLocation } from 'react-router-dom';

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <Routers />;
};

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/e_commerce_project">
        <AppContent />
        </BrowserRouter>
      </ThemeProvider>
      
    </div>
  )
}

export default App
