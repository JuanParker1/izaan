// ** React Imports
import { Fragment } from 'react'
// ** Third Party Components
// ** Custom Components
import UILoader from '@components/ui-loader'
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Row, Col, Button } from 'reactstrap'

// ** Demo Components
import ProfileAbout from '../profile/ProfileAbout'
import ProfileFriendsSuggestions from '../profile/ProfileFriendsSuggestions'
import RecentPosts from '../profile/RecentPosts'
import DetailPost from './DetailPost'
// ** Styles
import '@styles/react/pages/page-profile.scss'

const Detail = () => {
  
  return (
    <Fragment>
      <div>
        <Row>
          <Col xl='9'>
            <DetailPost/>
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

export default Detail