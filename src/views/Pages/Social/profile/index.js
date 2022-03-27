// ** React Imports
import { Fragment } from 'react'
// ** Third Party Components
// ** Custom Components
import UILoader from '@components/ui-loader'
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Row, Col, Button } from 'reactstrap'

// ** Demo Components
import ProfilePoll from './ProfilePolls'
import ProfileAbout from './ProfileAbout'
import ProfilePosts from './ProfilePosts'
import ProfileHeader from './ProfileHeader'
import ProfileTwitterFeeds from './ProfileTwitterFeeds'
import ProfileLatestPhotos from './ProfileLatestPhotos'
import ProfileSuggestedPages from './ProfileSuggestedPages'
import ProfileFriendsSuggestions from './ProfileFriendsSuggestions'
import RecentPosts from './RecentPosts'

// ** Styles
import '@styles/react/pages/page-profile.scss'

const Profile = () => {
  
  return (
    <Fragment>
      <div>
        <Row>
          <Col>
            <ProfileHeader/>
          </Col>
        </Row>  
        <Row>
          <Col xl='9'>
            <ProfilePosts/>
          </Col>
          <Col xl='3'>
            <ProfileAbout/>
            <ProfileFriendsSuggestions/>
            <RecentPosts/>
          </Col>
        </Row>
      </div>  
    </Fragment>
  )
}

export default Profile
