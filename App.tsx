import React from 'react';
import {ThemeProvider, createTheme} from '@rneui/themed';
import Router from './navigation/Router';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
