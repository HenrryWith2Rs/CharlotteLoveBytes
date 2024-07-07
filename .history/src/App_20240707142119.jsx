import { useState } from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <div>hi</div>
    </>
  );
}

export default App;
