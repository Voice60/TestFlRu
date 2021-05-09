import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { setAuth } from '../../redux/loginReducer';
import { getIsAuth } from '../../redux/selectors/loginSelectors';
import { getUserEmail, getUserPassword } from '../../redux/selectors/regSelectors';

const Login = () => {

  const dispatch = useDispatch()
  let history = useHistory()
  const isAuth = useSelector(getIsAuth)
  const emailReg = useSelector(getUserEmail)
  const passwordReg = useSelector(getUserPassword)

  const [error, setError] = useState(null)

  if (isAuth) { history.push('/') }

  return (
    <div className='d-flex flex-column'>
      <h1 className='mb-4 mt-4 text-center'>Авторизация</h1>
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
          <Field className='form-control mb-3' placeholder='email' type="email" name="email" />
          <ErrorMessage className='text-danger mb-3 ms-4' name="email" component="div" />
          <Field className='form-control mb-3' placeholder='password' type="password" name="password" />
          <ErrorMessage className='text-danger mb-3 ms-4' name="password" component="div" />
          <button className='btn btn-primary' type="submit">Submit</button>
          {error && <div className='text-danger mb-3 mt-3 ms-3'>{error}</div>}
        </Form>
      </Formik>
      <NavLink className='btn btn-link align-self-start ps-0' to='/reg'>Регистрация</NavLink>
    </div>
  )
}

export default Login