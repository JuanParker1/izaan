// ** React Imports
import { Fragment, useEffect } from 'react'
import axios from 'axios'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import ProfileAbout from './ProfileAbout'
import NewsFeed from './NewsFeed'
import ProfileFriendsSuggestions from './ProfileFriendsSuggestions'
import RecentPosts from './RecentPosts'

// ** Styles
import '@styles/react/pages/page-profile.scss'
import { useDispatch } from 'react-redux'
import { unblinkedsocialapiserver } from '@utility/apiserver/apiserver'
import { setContents, setFollowRecommend } from './../../.../../../../redux/newsfeed'

const Profile = () => {
  const dispatch = useDispatch()

  const fetchPosts = () => {
    const data = {
      id: ""
    }
    axios({
      method: "post",
      url: `${unblinkedsocialapiserver}/newsfeed`,
      data
    })
      .then((res) => {
        console.log('news feed', res.data)
        dispatch(setContents(res.data))
      })
      .catch((err) => {
        console.log("error: ", err)
      })
  }

  const fetchFollowRecommend = () => {
    axios({
      method: "get",
      url: `${unblinkedsocialapiserver}/followrecommend`
    })
      .then((res) => {
        dispatch(setFollowRecommend(res.data))
      })
      .catch((err) => {
        console.log("error: ", err)
      })
  }

  useEffect(() => {
    fetchPosts()
    fetchFollowRecommend()
  }, [])

  return (
    <Fragment>
      <div>
        <Row>
          <Col xl='9'>
            <NewsFeed />
          </Col>
          <Col xl='3'>
            <ProfileAbout />
            <ProfileFriendsSuggestions />
            <RecentPosts />
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default Profile
