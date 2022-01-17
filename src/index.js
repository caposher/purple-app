import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import '@shopify/polaris/build/esm/styles.css';
import { AppProvider } from '@shopify/polaris';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
