import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/actions/store';
import MessengerCustomerChat from 'react-messenger-customer-chat';

ReactDOM.render(
  <Provider store={store}>
    <App />,
    <MessengerCustomerChat
      pageId="100567068919638"
      appId="969792837168056"
    />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

