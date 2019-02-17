import React, { Component } from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { PreviousMap } from "postcss";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import Root from "./components/Root";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Root />
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
