import React from 'react';

import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';

import store from './store';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const content = useRoutes(routes);

  return (
    <Provider store={store}>
      <ChakraProvider>{content}</ChakraProvider>
    </Provider>
  );
}

export default App;
