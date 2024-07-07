import { useState } from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import GuestTable from './components/GuestTable';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <GuestTable />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
