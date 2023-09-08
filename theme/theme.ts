'use client'

import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#9578bd',
      main: '#78599f',
      dark: '#644883',
      contrastText: '#f9f7fc'
    },
    background: {
      paper: '#f9f7fc',
      default: '#e5def0',
    },
  },
  typography: {
    // eslint-disable-next-line quotes
    fontFamily: ["'__Albert_Sans_629cb5'", "'__Albert_Sans_Fallback_629cb5'"].join(',')
  }
});

export default theme;