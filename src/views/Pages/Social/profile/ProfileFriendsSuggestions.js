// ** Custom Components
import Avatar from '@components/avatar'
import * as Icon from 'react-feather'
// ** Third Party Components
import { UserPlus } from 'react-feather'
import profile from '@src/assets/images/avatars/account.png'
import profile1 from '@src/assets/images/avatars/1-small.png'
import profile2 from '@src/assets/images/avatars/2-small.png'
import profile3 from '@src/assets/images/avatars/3-small.png'
import profile4 from '@src/assets/images/avatars/4-small.png'
import profile5 from '@src/assets/images/avatars/5-small.png'
// ** Reactstrap Imports
import { InputGroup, Input, InputGroupText, Card, Button } from 'reactstrap'
import '../../../../@core/scss/base/components/recentpost.scss'
const ProfileFriendsSuggestions = () => {
  return (
    <Card>
      <InputGroup className='input-group-merge'>
        <Input placeholder='Search here' />
        <InputGroupText>
          <Icon.Search size={14} />
        </InputGroupText>
      </InputGroup>
      <div className='friendsuggest'>
        <Avatar img={profile}  height='40' width='40' />
        <div className='profile-user-info'>
          <h6 className='mb-0'>Rosalie</h6>
          <small className='text-muted'>6 Mutual Friends</small>
        </div>
        <div className='ms-auto'>
          <Button className='btn-icon' color='primary' size='sm'>
            <UserPlus size={14} />
          </Button>
        </div>
      </div>
      <div className='friendsuggest'>
       <Avatar img={profile1}  height='40' width='40' />
        <div className='profile-user-info'>
          <h6 className='mb-0'>Harriett Adkins</h6>
          <small className='text-muted'>3 Mutual Friends</small>
        </div>
        <div className='ms-auto'>
          <Button className='btn-icon' color='primary' size='sm'>
            <UserPlus size={14} />
          </Button>
        </div>
      </div>
      <div className='friendsuggest'>
        <Avatar img={profile2}  height='40' width='40' />
        <div className='profile-user-info'>
          <h6 className='mb-0'>Juan Weaver</h6>
          <small className='text-muted'>1 Mutual Friends</small>
        </div>
        <div className='ms-auto'>
          <Button className='btn-icon' color='primary' size='sm'>
            <UserPlus size={14} />
          </Button>
        </div>
      </div>
      <div className='friendsuggest'>
        <Avatar img={profile3}  height='40' width='40' />
        <div className='profile-user-info'>
          <h6 className='mb-0'>Claudia Chandler</h6>
          <small className='text-muted'>16 Mutual Friends</small>
        </div>
        <div className='ms-auto'>
          <Button className='btn-icon' color='primary' size='sm'>
            <UserPlus size={14} />
          </Button>
        </div>
      </div>
      <div className='friendsuggest'>
        <Avatar img={profile4}  height='40' width='40' />
        <div className='profile-user-info'>
          <h6 className='mb-0'>Earl Briggs</h6>
          <small className='text-muted'>2 Mutual Friends</small>
        </div>
        <div className='ms-auto'>
          <Button className='btn-icon' color='primary' size='sm'>
            <UserPlus size={14} />
          </Button>
        </div>
      </div>
      <div className='friendsuggest'>
        <Avatar img={profile5}  height='40' width='40' />
        <div className='profile-user-info'>
          <h6 className='mb-0'>Jonathan Lyons</h6>
          <small className='text-muted'>6 Mutual Friends</small>
        </div>
        <div className='ms-auto'>
          <Button className='btn-icon' color='primary' size='sm'>
            <UserPlus size={14} />
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default ProfileFriendsSuggestions
