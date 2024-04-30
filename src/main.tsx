import * as React from 'react';
import ReactDOM from 'react-dom/client'
import "./index.css"
import Navbar from "./components/Navbar.tsx";
import HomePage from "./pages/HomePage.tsx";
import WeatherCityPage from './pages/WeatherCityPage.tsx';
import AuthPage from './pages/AuthenticationPage.tsx';
import { useNavigate, useLocation, Navigate, BrowserRouter, Routes, Route } from "react-router-dom";


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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar/><HomePage /></>} />
          <Route path="/:city" element={<><Navbar/><WeatherCityPage /></>} />
          <Route path="/auth" element={<><Navbar/><AuthPage /></>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
