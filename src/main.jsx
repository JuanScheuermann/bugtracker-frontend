import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { App } from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { PersistGate } from 'redux-persist/integration/react'
//import persistStore from 'redux-persist/es/persistStore'

/* let persistor = persistStore(store)*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}>
      </PersistGate> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
