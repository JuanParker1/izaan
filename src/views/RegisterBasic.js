// ** React Imports
import { Link, useHistory } from 'react-router-dom'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'
import axios from 'axios'
// ** Reactstrap Imports
import React, { useState } from 'react'
import { Card, CardBody, CardTitle, Form, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// ** Styles
import '@styles/react/pages/page-authentication.scss'
import { unblinkedmainserver } from '../utility/apiserver/apiserver'
// Form handling
import { Formik } from 'formik'
// Validations
import * as Yup from 'yup'
// ** Manuals
import PrivacyPolicyManual from './manuals/privacyPolicyManual'
import TermsAndConditionsManual from './manuals/termsAndConditionsManual'

const RegisterBasic = () => {
  const history = useHistory()
  const [termsModal, setTermsModal] = useState(false)
  const [policyModal, setPolicyModal] = useState(false)
  const [policy, setPolicy] = useState(false)
  const [policyError, setPolicyError] = useState(false)
  const [terms, setTerms] = useState(false)
  const [termsError, setTermsError] = useState(false)

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .required("*Username is required"),
    email: Yup.string()
      .email("*Must be a valid email address")
      .required("*Email is required"),
    password: Yup.string()
      .required("*Password is required")
      .min(8, "Must be 8 characters")
      .max(20, "Must not be more than 20 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
        "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    cPassword: Yup.string()
      .required("*Confirm Password is required")
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

  const toggleTerms = () => {
    if (!terms) {
      setTermsModal(!termsModal)
    }
  }

  const togglePolicy = () => {
    if (!policy) {
      setPolicyModal(!policyModal)
    }
  }

  const acceptTerms = () => {
    setTerms(true)
    setTermsError(false)
    toggleTerms()
  }

  const acceptPolicy = () => {
    setPolicy(true)
    setPolicyError(false)
    togglePolicy()
  }

  return (
    <div className='auth-wrapper auth-basic px-2' >
      <div
        className='auth-inner my-2'
        style={{
          marginRight: '100px'
        }}
      >
        <Card className='mb-0'
          style={{
            width: '500px',
            padding: '20px',
            borderRadius: '10px'
          }}
        >
          <CardBody>
            <CardTitle tag='h4' className='mb-1'>
              <h2>Sign up</h2>
            </CardTitle>
            <Formik
              initialValues={{ userName: "", email: "", password: "", cPassword: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                if (!terms) {
                  setTermsError(true)
                }
                if (!policy) {
                  setPolicyError(true)
                }
                if (terms && policy) {
                  setSubmitting(true)
                  axios({
                    method: "post",
                    url: `${unblinkedmainserver}/user/signup`,
                    data: {
                      email: values.email,
                      name: values.userName,
                      password: values.password
                    }
                  })
                    .then((res) => {
                      console.log('response', res.data)
                      resetForm()
                      history.push("/login")
                    })
                    .catch((err) => {
                      console.log("error: ", err)
                    }).finally(() => {
                      setSubmitting(false)
                    })
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit }) => (
                <Form className='auth-register-form mt-3' onSubmit={handleSubmit}>
                  <div className='mt-1'>
                    <Label className='form-label' for='register-email'>
                      Username
                    </Label>
                    <Input
                      type='text'
                      id='userName'
                      placeholder='john'
                      onChange={handleChange('userName')}
                      onBlur={handleBlur}
                      value={values.userName}
                      className={touched.userName && errors.userName ? "error" : null}
                    />
                    {touched.userName && errors.userName ? (
                      <div className="error-message">{errors.userName}</div>
                    ) : null}
                  </div>
                  <div className='mt-2'>
                    <Label className='form-label' for='register-email'>
                      Email
                    </Label>
                    <Input
                      type='email'
                      id='email'
                      placeholder='john@example.com'
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
                    <Label className='form-label' for='register-password'>
                      Password
                    </Label>
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
                  <div className='mt-3'>
                    <Label className='form-label' for='password'>
                      Confirm Password
                    </Label>
                    <InputPasswordToggle
                      id='cPassword'
                      onChange={handleChange('cPassword')}
                      onBlur={handleBlur}
                      value={values.cPassword}
                      className={touched.cPassword && errors.cPassword ? "error" : null}
                    />
                    {touched.cPassword && errors.cPassword ? (
                      <div className="error-message">{errors.cPassword}</div>
                    ) : null}
                  </div>
                  <Card
                    className='mt-3'
                    style={{
                      border: '1px solid black',
                      fontSize: '10px',
                      padding: '10px'
                    }}
                  >
                    — At least 8 characters long (20 maximum).<br />
                    — Have at least one upper case letter.<br />
                    — Have at least one lower case letter.<br />
                    — Have at least one number.<br />
                    — Have at least one of the following<br />
                    ! @ # $ % ^  * ( )<br />
                    No other symbols are allowed.
                  </Card>
                  <div className='d-flex'>
                    <Input
                      type="checkbox"
                      checked={terms}
                      onChange={toggleTerms}
                    />
                    <p style={{ marginLeft: '5px' }}>I agree to terms and conditions.</p>
                    {termsError && (
                      <div className="mt-1 error-message">Must Accept Terms and Conditions</div>
                    )}
                  </div>

                  <div className='d-flex justify-content-start mt-1'>
                    <Input
                      type="checkbox"
                      checked={policy}
                      onChange={togglePolicy}
                    />
                    <p style={{ marginLeft: '5px' }}>Privacy Policy.</p>
                    {policyError && (
                      <div className="mt-1 error-message">Must Accept Privacy Policy</div>
                    )}
                  </div>

                  <Button
                    type='submit'
                    color='primary'
                    style={{
                      width: '100px',
                      marginLeft: '35%',
                      borderRadius: '20px',
                      marginTop: '20px',
                      marginBottom: '-10px'
                    }}
                  >
                    Sign up
                  </Button>
                </Form>
              )}
            </Formik>
            <p className='text-center mt-2'>
              <span className='me-25'>Already have an account?</span>
              <Link to='/login'>
                <span>Sign in instead</span>
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
      <Modal isOpen={termsModal} toggle={toggleTerms} scrollable={true} size="sm" style={{ width: '100% !important' }}>
        <ModalHeader toggle={toggleTerms}>Terms And Conditions</ModalHeader>
        <ModalBody>
          <TermsAndConditionsManual />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => acceptTerms()}>Accept</Button>{' '}
        </ModalFooter>
      </Modal>

      <Modal isOpen={policyModal} toggle={togglePolicy} scrollable={true} size="sm" style={{ width: '100% !important' }}>
        <ModalHeader toggle={togglePolicy}>Privacy Policy</ModalHeader>
        <ModalBody>
          <PrivacyPolicyManual />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => acceptPolicy()}>Accept</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default RegisterBasic
