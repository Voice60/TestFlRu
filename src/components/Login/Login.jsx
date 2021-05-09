import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail, getUserPassword } from '../../redux/selectors/regSelectors';
import { setAuth } from '../../redux/loginReducer';
import { getIsAuth } from '../../redux/selectors/loginSelectors';
import { Redirect, useHistory } from 'react-router';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.scss'

const Login = () => {

  const dispatch = useDispatch()
  let history = useHistory()
  const isAuth = useSelector(getIsAuth)
  const emailReg = useSelector(getUserEmail)
  const passwordReg = useSelector(getUserPassword)

  const [error, setError] = useState(null)

  if (isAuth) { return <Redirect to='/' /> }

  return (
    <div className={styles.form}>
      <h1>Авторизация</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          if (!values.password) {
            errors.password = 'Required';
          } else if (values.password.length < 7) {
            errors.password = 'Min length 7'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (values.email === emailReg && values.password === passwordReg) {
            dispatch(setAuth({ email: values.email, password: values.password }))
            setSubmitting(false)
            history.push('/')

          } else {
            setError('invalid password or email')
          }
        }}
      >
        <Form>
          <Field placeholder='email' type="email" name="email" />
          <ErrorMessage className={styles.errorMessage} name="email" component="div" />
          <Field placeholder='password' type="password" name="password" />
          <ErrorMessage className={styles.errorMessage} name="password" component="div" />
          {error && <div>{error}</div>}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <NavLink className={styles.redirectLink} to='/reg'>Регистрация</NavLink>
    </div>
  )
}

export default Login