import { Button } from 'reactstrap'
import { useHistory } from 'react-router'
const NavbarButton = () => {
  const history = useHistory()
    return (
      <div>
        <Button
          onClick={() => history.push('./login')}
          color='primary' 
          style={{
              marginRight:10,
              marginLeft: 10,
              fontFamily:"OpenSans"
          }}
        >
          Login
        </Button>
        <Button
          onClick={() => history.push('./register')}
          color='primary'
          style={{
            marginRight:10,
            fontFamily:"OpenSans"
        }}  
        >
          Sign up
        </Button>
      </div>
    )
}

export default NavbarButton
