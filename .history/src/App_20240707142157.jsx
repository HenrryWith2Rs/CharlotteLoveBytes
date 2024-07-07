import { useState } from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">hi</div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
