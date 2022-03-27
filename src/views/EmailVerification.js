// ** React Imports
import React from 'react'
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
import axios from 'axios'
import { unblinkedmainserver } from '../utility/apiserver/apiserver'

const EmailVerification = (props) => {
  const [status, setStatus] = React.useState(0)

  const verify = () => {
    const token = new URLSearchParams(props.location.search).get('token')
    axios({
      method: "get",
      url: `${unblinkedmainserver}/user/confirm_token?token=${token}`
    })
      .then((res) => {
        console.log('res', res.data)
        if (res.data.respCode === "00") {
          setStatus(1)
        } else {
          setStatus(2)
        }
      })
      .catch((err) => {
        setStatus(2)
        console.log("error: ", err)
      })
  }

  const VefiricationText = () => {
    if (status === 0) {
      return (
        'Please verify your email address to continue to the platform'
      )
    } else if (status === 1) {
      return (
        'Thanks for signing up your email address is verfied '
      )
    } else {
      return (
        'Your token has been expired or its invalid'
      )
    }
  }

  const VefiricationButton = () => {
    if (status === 0) {
      return (
        <Button block onClick={() => verify()} color='primary'>
          Verify
        </Button>
      )
    } else if (status === 1) {
      return (
        <Link to='/login'>
          <Button block onClick={() => verify()} color='primary'>
            Login Now
          </Button>
        </Link>
      )
    } else {
      return (
        <Link to='/register'>
          <Button block onClick={() => verify()} color='primary'>
            Sign up
          </Button>
        </Link>
      )
    }
  }

  return (
    <div className='auth-wrapper auth-basic px-2'>
      <div className='auth-inner my-2'>
        <Card className='mb-0'>
          <CardBody>
            <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
              <svg viewBox='0 0 139 95' version='1.1' height='28'>
                <defs>
                  <linearGradient x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%' id='linearGradient-1'>
                    <stop stopColor='#000000' offset='0%'></stop>
                    <stop stopColor='#FFFFFF' offset='100%'></stop>
                  </linearGradient>
                  <linearGradient x1='64.0437835%' y1='46.3276743%' x2='37.373316%' y2='100%' id='linearGradient-2'>
                    <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>
                    <stop stopColor='#FFFFFF' offset='100%'></stop>
                  </linearGradient>
                </defs>

              </svg>
              <h2 className='brand-text text-primary ms-1'>Unblinked</h2>
            </Link>
            <CardTitle tag='h2' className='fw-bolder mb-1'>
              Verify your email ✉️
            </CardTitle>
            <CardText className='mb-2'>
              <VefiricationText />
            </CardText>
            <VefiricationButton />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default EmailVerification
