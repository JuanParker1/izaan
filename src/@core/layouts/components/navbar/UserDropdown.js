// ** React Imports
import { Link } from 'react-router-dom'
import { useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
// import { isUserLoggedIn } from '@utils'

// ** Third Party Components
import { User, Mail, Power, BookOpen, Database } from 'react-feather'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem, Button } from 'reactstrap'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import { useDispatch } from 'react-redux'
import { handleLogout } from '../../../../redux/authentication'

const UserDropdown = () => {
  // ** State
  const [userData] = useState(null)
  const dispatch = useDispatch()


  //** ComponentDidMount
  // useEffect(() => {
  //   if (isUserLoggedIn() !== null) {
  //     setUserData(JSON.parse(localStorage.getItem('userData')))
  //   }
  // }, [])

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar


  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
      </DropdownToggle>
      <DropdownMenu end>
        <Link to="/dashboard">
          <DropdownItem>
            <Database size={14} className='me-75' />
            <span className='align-middle'>Dashboard</span>
          </DropdownItem>
        </Link>
        <Link to="/datasync">
          <DropdownItem>
            <Database size={14} className='me-75' />
            <span className='align-middle'>Datasync</span>
          </DropdownItem>
        </Link>
        <Link to="/profile">
          <DropdownItem tag='a' href='/profile' onClick={e => e.preventDefault()}>
            <User size={14} className='me-75' />
            <span className='align-middle'>My Profile</span>
          </DropdownItem>
        </Link>
        <Link to="/mainfeed">
          <DropdownItem>
            <BookOpen size={14} className='me-75' />
            <span className='align-middle'>News Feed</span>
          </DropdownItem>
        </Link>
        <Link to="/edit">
          <DropdownItem>
            <Mail size={14} className='me-75' />
            <span className='align-middle'>Contents Write</span>
          </DropdownItem>
        </Link>
        <Link to="/newsdetail">
          <DropdownItem>
            <Mail size={14} className='me-75' />
            <span className='align-middle'>News Detail</span>
          </DropdownItem>
        </Link>
        <DropdownItem onClick={() => dispatch(handleLogout())}>
          <Power size={14} className='me-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
