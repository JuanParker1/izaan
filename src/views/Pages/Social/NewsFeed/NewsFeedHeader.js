// ** React Imports

// ** Icons Imports

// ** Reactstrap Imports
import { Card, CardImg, Collapse, Navbar, Nav, NavItem, NavLink, Button, Col, Row } from 'reactstrap'
import '../../../../@core/scss/base/components/profileheader.scss'
const ProfileHeader = () => {
  // ** States
  return (
    <Card className='profile-header mb-2'
      style={{
        borderRadius: '10px',
        fontFamily:"OpenSans",
        padding: '20px'
      }}
    >
      <div>
        <Row>
          <Col>
            <h1
            style={{
              marginLeft: '18px'
            }}
            >NEWS FEED</h1>
          </Col>
          <Col>
            
          </Col>
        </Row>
      </div>
    </Card>
  )
}

export default ProfileHeader
