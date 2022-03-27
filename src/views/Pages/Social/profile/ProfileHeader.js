// ** React Imports

// ** Icons Imports

// ** Reactstrap Imports
import { Card, CardImg, Collapse, Navbar, Nav, NavItem, NavLink, Button, Col, Row } from 'reactstrap'
import '../../../../@core/scss/base/components/profileheader.scss'
import profile from '@src/assets/images/avatars/account.png'
const ProfileHeader = () => {
  // ** States
  return (
    <Card className='profile-header mb-2'
      style={{
        borderRadius: '10px',
        fontFamily:"OpenSans"
      }}
    >
      <div>
        <div className='imgname'>
          <Row>
            <Col xl='2'>
              <img
                src= {profile}
                alt="account image"
                className="image"
                width="160px"
                height="160px"
              />
            </Col>
            <Col className='username' xl='5'>
              <h2>Rosalie</h2>
              <p>Have you ever finally just gave in to the temptation and read 
                 your horoscope in the newspaper on Sunday morning? 
                 Sure, we all have. For most of us, it’s a curiosity, an amusement
                 to see what they say our day will be like based on the sign of the
                 zodiac that we were born under. </p>
            </Col>
            <Col>
              <div>
                <Row className='userinfo'>
                  <Col className='userinfo'xl='4'>
                    <h4>128</h4>
                    <p>Post</p>
                  </Col >
                  <Col xl='4'>
                    <h4>249</h4>
                    <p>Follower</p>
                  </Col>
                  <Col className='userinfo' xl='4'>
                    <h4>249</h4>
                    <p>Following</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      color='primary'
                    >
                      Follow
                    </Button>
                  </Col>
                  <Col>
                  <Button
                      color='primary'
                    >
                      Message
                    </Button>
                  </Col>
                  <Col>
                  <Button
                      color='primary'
                    >
                      Message
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  )
}

export default ProfileHeader
