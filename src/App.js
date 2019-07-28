import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Root from './components/Root';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
