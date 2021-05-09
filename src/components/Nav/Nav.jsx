import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.item} to='/'>Главная</NavLink>
      <NavLink className={styles.item} to='/login'>Авторизация</NavLink>
      <NavLink className={styles.item} to='/reg'>Регистрация</NavLink>
    </nav>
  )
}
export default Nav
