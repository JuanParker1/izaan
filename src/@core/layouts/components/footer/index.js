// ** Icons Import
import { Heart } from 'react-feather'
import { NavLink } from 'react-router-dom'
import '../../../scss/base/components/footer.scss'
const Footer = () => {
  return (
    <div className="footerwrapper">
      <div className="footercontainer">
        <NavLink to='/'>
          <div className="footertxt">
            UnBlinked
          </div>
        </NavLink>
        <div className="footertxt">
          Contact info.
        </div>
        <div className="footertxt">
          Terms and Conditions
        </div>
        <div className="footertxt">
          Privacy Policy
        </div>
      </div>
      <div>
        <br/>
        <br/>
        <div className="text-center"> Copyright Unblinked. All Rights Reserved</div>
      </div>
    </div>
  )
}

export default Footer
