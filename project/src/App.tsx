import { Box } from '@chakra-ui/react';
import React from 'react';
import SplashScreen from './components/splash-screen';

const  App = (): JSX.Element => {
  return (
    <Box height="100%">
      <SplashScreen/>
    </Box>
  );
}

export default App;
