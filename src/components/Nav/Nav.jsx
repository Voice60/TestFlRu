import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-lg-0">
          <NavLink className='text-decoration-none me-3' to='/'>Главная</NavLink>
          <NavLink className='text-decoration-none me-3' to='/login'>Авторизация</NavLink>
          <NavLink className='text-decoration-none me-3' to='/reg'>Регистрация</NavLink>
        </ul>
      </div>
    </nav>
  )
}
export default Nav
