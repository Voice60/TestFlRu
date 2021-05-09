import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { setUser } from '../../redux/regReducer';
import { getIsAuth } from '../../redux/selectors/loginSelectors';
import styles from './Reg.module.scss'


const Reg = () => {

  const dispatch = useDispatch()

  let history = useHistory()
  const isAuth = useSelector(getIsAuth)


  if (isAuth) { return <Redirect to='/' /> }

  return (
    <div className={styles.form}>
      <h1>Регистрация</h1>
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
          dispatch(setUser({ email: values.email, password: values.password }))
          setSubmitting(false)

          history.push('/login')
        }}
      >
        <Form>
          <Field placeholder='email' type="email" name="email" />
          <ErrorMessage className={styles.errorMessage} name="email" component="div" />
          <Field placeholder='password' type="password" name="password" />
          <ErrorMessage className={styles.errorMessage} name="password" component="div" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Reg