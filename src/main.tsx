import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { Toaster } from 'react-hot-toast';
import iranSans from '../public/fonts/irsans.ttf'
import App from './App.tsx'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import { CssBaseline } from '@mui/material';
const theme = createTheme({
  direction: 'rtl',
  typography:{
    fontFamily: iranSans,
  },
   components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'iranSans';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('irsans'), url(${iranSans}) format('ttf');
        }
      `,
    },
  },
});
const cacheRtl = createCache({
   key: 'muirtl',
   stylisPlugins: [prefixer, rtlPlugin],
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <Toaster/>
      <CssBaseline/>
    <App />
    </ThemeProvider>
    </CacheProvider>
  </StrictMode>,
)
