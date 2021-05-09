import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { getIsAuth } from '../../redux/selectors/loginSelectors'

const Main = () => {

  const isAuth = useSelector(getIsAuth)
  let history = useHistory()

  if (!isAuth) { history.push('/login')}

  return (
    <div>
      <h1>Главная страница</h1>
    </div>
  )
}

export default Main
