// ** React Imports
import { Fragment } from 'react'
import ReactCountryFlag from 'react-country-flag'
// ** Dropdowns Imports
import UserDropdown from './UserDropdown'
import NavbarButton from './NavbarButton'
import '../../../scss/base/components/navbar.scss'
// ** Third Party Components
import { Sun, Moon } from 'react-feather'

// ** Reactstrap Imports
import { NavItem, NavLink, Button } from 'reactstrap'
import IntlDropdown from './IntlDropdown'
import { useSelector } from 'react-redux'

const NavbarUser = props => {
  const authData = useSelector((state) => state.auth.userData)
  // ** Props
  const { skin, setSkin } = props

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    <Fragment>
      <ul className='nav navbar-nav align-items-center ms-auto'>
        <IntlDropdown />
        <NavLink className='nav-link-style'>
          <ThemeToggler />
        </NavLink>
        {authData && !authData.accessToken &&
          <NavbarButton />
        }
        {authData && authData.accessToken &&
          <UserDropdown />
        }
      </ul>
    </Fragment>
  )
}
export default NavbarUser
