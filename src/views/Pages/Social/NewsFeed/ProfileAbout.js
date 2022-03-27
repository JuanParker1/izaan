// ** Reactstrap Imports
import { Card, CardBody, CardText } from 'reactstrap'

const ProfileAbout = () => {
  return (
    <Card
      style={{
        borderRadius: '10px'
      }}
    >
      <CardBody>
        <h5 className='mb-75'>About</h5>
        <CardText>Tart I love sugar plum I love oat cake. Sweet ⭐️ roll caramels I love jujubes. Topping cake wafer.</CardText>
        <div className='mt-2'>
          <h5 className='mb-75'>Joined:</h5>
          <CardText>November 15, 2015</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Lives:</h5>
          <CardText>New York, USA</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Email:</h5>
          <CardText>bucketful@fiendhead.org</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Website:</h5>
          <CardText>www.pixinvent.com</CardText>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProfileAbout
