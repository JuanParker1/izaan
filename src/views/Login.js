import { Link, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, Label, Input, Button } from 'reactstrap'
import '@styles/react/pages/page-authentication.scss'
import React from 'react'
import axios from 'axios'
import { unblinkedmainserver } from '../utility/apiserver/apiserver'
import { handleLogin } from './../redux/authentication'
import { useDispatch } from 'react-redux'
// Form handling
import { Formik } from 'formik'
// Validations
import * as Yup from 'yup'

const LoginCover = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("*Must be a valid email address")
      .required("*Email is required"),
    password: Yup.string()
      .required("*Password is required")
  })

  return (
    <div className='auth-wrapper auth-cover'>
      <Row className='col-sm-12 align-self-center'>
        <Col className='col-lg-4 col-md-4 col-sm-4 container justify-content-center auth-bg px-2 p-lg-5' lg='3' sm='8'
          style={{
            borderRadius: '10px'
          }}
        >
          <Col className='px-xl-2 mx-auto' sm='12' md='12' lg='12'
            style={{
              borderRadius: '10px'
            }}
          >
            <CardTitle tag='h2' className='fw-bold mb-1'>
              LOGIN
            </CardTitle>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true)
                axios({
                  method: "post",
                  url: `${unblinkedmainserver}/user/login`,
                  data: {
                    email: values.email,
                    password: values.password
                  }
                })
                  .then((res) => {
                    dispatch(handleLogin(res.data))
                    resetForm()
                    history.push("/dashboard")
                  })
                  .catch((err) => {
                    console.log("error: ", err)
                  }).finally(() => {
                    setSubmitting(false)
                  })
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting }) => (
                <Form className='auth-login-form mt-2' onSubmit={handleSubmit}>
                  <div className='mb-1'>
                    <Label className='form-label' for='login-email'>
                      Email
                    </Label>
                    <Input
                      type='email'
                      id='email'
                      placeholder='unblinked@example.com'
                      autoFocus
                      onChange={handleChange('email')}
                      onBlur={handleBlur}
                      value={values.email}
                      className={touched.email && errors.email ? "error" : null}
                    />
                    {touched.email && errors.email ? (
                      <div className="error-message">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className='mt-2'>
                    <div className='d-flex justify-content-between'>
                      <Label className='form-label' for='login-password'>
                        Password
                      </Label>
                    </div>
                    <InputPasswordToggle
                      id='password'
                      onChange={handleChange('password')}
                      onBlur={handleBlur}
                      value={values.password}
                      className={touched.password && errors.password ? "error" : null}
                    />
                    {touched.password && errors.password ? (
                      <div className="error-message">{errors.password}</div>
                    ) : null}
                  </div>
                  <div className='mt-3 form-check'>
                    <Input type='checkbox' id='remember-me' />
                    <Label className='form-check-label' for='remember-me'>
                      Remember Me
                    </Label>
                  </div>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    color='primary'
                    style={{
                      width: '100px',
                      marginLeft: '35%',
                      borderRadius: '20px',
                      marginTop: '20px',
                      marginBottom: '-10px'
                    }}
                  >
                    Login
                  </Button>
                </Form>
              )}
            </Formik>
            <p className='text-center mt-2'>
              <span className='me-25'>New on our platform?</span>
              <Link to='/register'>
                <span>Create an account</span>
              </Link>
            </p>
            <p className='ml-10'>
              <Link to='/pages/forgot-password-cover'>
                <span style={{ marginLeft: '35%' }}>Forgot Password?</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default LoginCover
