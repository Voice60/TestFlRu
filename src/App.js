import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Reg from './components/Reg/Reg'
import store from './redux/store'
import styles from './App.module.scss'

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
