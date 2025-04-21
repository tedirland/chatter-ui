import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes';

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
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
