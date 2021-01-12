import { Box } from '@chakra-ui/react';
import React from 'react';
import SplashScreen from './components/pages/splash-screen';
import {BrowserRouter} from "react-router-dom"

const  App = (): JSX.Element => {
  return (
    <Box height="100%">
      <BrowserRouter>
        <SplashScreen/>
      </BrowserRouter>
    </Box>
  );
}

export default App;
