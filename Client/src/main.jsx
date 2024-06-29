import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from '../src/Redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(

  // Wrapping up our app with the provider from react-redux so that our whole app can access the store
  // All the major imports are already done in the app.jsx file
  
  <Provider store={store}>
    <App />
  </Provider>
  
)
