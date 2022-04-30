import React from 'react';

import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';

import store from './store';

function App() {
  const content = useRoutes(routes);

  return <Provider store={store}>{content}</Provider>;
}

export default App;
