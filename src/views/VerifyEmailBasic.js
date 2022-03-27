// ** React Imports
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

const VerifyEmailBasic = () => {
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
              <h2 className='brand-text text-primary ms-1'>Vuexy</h2>
            </Link>
            <CardTitle tag='h2' className='fw-bolder mb-1'>
              Verify your email ✉️
            </CardTitle>
            <CardText className='mb-2'>
              We've sent a link to your email address: <span className='fw-bolder'>hello@pixinvent.com</span> Please
              follow the link inside to continue.
            </CardText>
            <Button block tag={Link} to='/' color='primary'>
              Skip for now
            </Button>
            <p className='text-center mt-2'>
              <span>Didn't receive an email? </span>
              <a href='/' onClick={e => e.preventDefault()}>
                <span>Resend</span>
              </a>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default VerifyEmailBasic
