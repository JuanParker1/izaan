// ** Custom Components
import Avatar from '@components/avatar'
import * as Icon from 'react-feather'
// ** Third Party Components
import { UserPlus } from 'react-feather'
import profile from '@src/assets/images/avatars/account.png'
// ** Reactstrap Imports
import { InputGroup, Input, InputGroupText, Card, Button, ModalFooter, Modal, ModalHeader, ModalBody } from 'reactstrap'
import '../../../../@core/scss/base/components/recentpost.scss'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import { unblinkedsocialapiserver } from '@utility/apiserver/apiserver'

const ProfileFriendsSuggestions = () => {
  const [modal, setModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState('')
  const followRecommend = useSelector((state) => state.newsfeed.followRecommend)

  //toggle modal
  const toggle = () => {
    setModal(!modal)
  }

  //follow
  const follow = () => {
    console.log('user', selectedUser)
    axios({
      method: "post",
      url: `${unblinkedsocialapiserver}/follow`,
      data: {
        nickname: selectedUser
      }
    })
      .then((res) => {
        console.log('res', res)
        toggle()
      })
      .catch((err) => {
        console.log("error: ", err)
      })
  }


  return (
    <>
      <Card>
        <InputGroup className='input-group-merge'>
          <Input placeholder='Search here' />
          <InputGroupText>
            <Icon.Search size={14} />
          </InputGroupText>
        </InputGroup>
        {followRecommend && followRecommend.map((user) => (
          <div className='friendsuggest' key={user.nickname}>
            <Avatar img={profile} height='40' width='40' />
            <div className='profile-user-info'>
              <h6 className='mb-0'>{user.nickname}</h6>
              <small className='text-muted'>6 Mutual Friends</small>
            </div>
            <div className='ms-auto'>
              <Button className='btn-icon' color='primary' size='sm'
                onClick={() => {
                  setSelectedUser(user.nickname)
                  toggle()
                }}>
                <UserPlus size={14} />
              </Button>
            </div>
          </div>
        ))}
      </Card>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Follow</ModalHeader>
        <ModalBody>
          Do you want to follow?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => follow()}>Yes</Button>{' '}
        </ModalFooter>
      </Modal>
    </>
  )
}

export default ProfileFriendsSuggestions
