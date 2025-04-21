import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import React from 'react';

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
        <h1>Dark Mode</h1>
      </Container>
    </ThemeProvider>
  );
};

export default App;
