import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store, { persistor } from './configureStore';

const rootEl = document.getElementById('root');

const WholeApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(
  <WholeApp />,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <WholeApp />,
      rootEl
    );
  });
}