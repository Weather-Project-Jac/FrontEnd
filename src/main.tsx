import * as React from 'react';
import ReactDOM from 'react-dom/client'
import "./index.css"
import Navbar from "./components/Navbar.tsx";
import HomePage from "./pages/HomePage.tsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const THEME = createTheme({
  typography: {
   "fontFamily": `"Cascadia Mono", "Helvetica", "Arial", sans-serif`,
   "fontSize": 14,
  },
  palette: {
    background: 
    {
      default: "#176087",
    },
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <Navbar />
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>,
)
