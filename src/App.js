import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import styles from './App.module.scss'
import Login from './components/Login/Login'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Reg from './components/Reg/Reg'
import store from './redux/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <div className={styles.content}>
            <Route exact path='/'
              render={() => <Main />} />
            <Route path='/login'
              render={() => <Login />} />
            <Route path='/reg'
              render={() => <Reg />} />
            <Route />
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;
