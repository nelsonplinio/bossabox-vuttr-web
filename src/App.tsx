import React from 'react';
import AppProvider from './hooks';
import Home from './pages/Home';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Home />
      </AppProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
