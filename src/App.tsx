import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import React from 'react';
import Auth from './components/auth/Auth';

// setting a global theme based on the mui API
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Auth />
      </Container>
    </ThemeProvider>
  );
};

export default App;
