
// ** Custom Components
import Avatar from '@components/avatar'
import profile from '@src/assets/images/avatars/account.png'
import profile4 from '@src/assets/images/avatars/4-small.png'
// ** Third Party Components
import { Heart, MessageSquare, Share2, Camera, CornerDownLeft } from 'react-feather'
import '../../../../@core/scss/base/components/profileposts.scss'
import illustration from '@src/assets/images/illustration/email.svg'
// ** Reactstrap Imports
import { Card, CardBody, Row, Col, Input, Label, InputGroup, InputGroupText } from 'reactstrap'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { unblinkedsocialapiserver } from '@utility/apiserver/apiserver'

const NewsFeed = () => {
  const contents = useSelector((state) => state.newsfeed.contents)
  const [comment, setComment] = useState("")

  const likePost = (id) => {
    const data = {
      id
    }
    axios({
      method: "post",
      url: `${unblinkedsocialapiserver}/like`,
      data
    })
      .then((res) => {
        fetchPosts()
        console.log('likeee', res.data)
      })
      .catch((err) => {
        console.log("error: ", err)
      })
  }

  const unLikePost = (id) => {
    const data = {
      id
    }
    axios({
      method: "delete",
      url: `${unblinkedsocialapiserver}/unlike`,
      data
    })
      .then((res) => {
        fetchPosts()
        console.log('unlikeee', res.data)
      })
      .catch((err) => {
        console.log("error: ", err)
      })
  }

  const addComment = (id) => {
    const data = {
      id,
      content: comment
    }
    axios({
      method: "post",
      url: `${unblinkedsocialapiserver}/comments`,
      data
    })
      .then((res) => {
        setComment("")
        fetchPosts()
        console.log('comment', res.data)
      })
      .catch((err) => {
        console.log("error: ", err)
      })
  }

  return (
    <div>
      <Row>
        <Col xl='12'>
          <Card>
            <h3
              style={{
                marginLeft: '18px',
                padding: '20px',
                alignItems: 'center',
                fontSize: '24px'
              }}
            >NEWS FEED</h3>
          </Card>
        </Col>
        <Col>

        </Col>
      </Row>
      {contents && contents.map((content) => (
        <Row key={content.id}>
          <Col xl='12'>
            <Card className='profilepost'>
              <div className='d-flex justify-content-between'>
                <div className='d-flex justify-content-start align-items-center mb-1'>
                  <img
                    src={profile}
                    alt="account image"
                    className="image"
                    width="50px"
                    height="50px"
                  />
                  <div className='profile-user-info'>
                    <h6 className='mb-0'>{content.nickname}</h6>
                    <small className='text-muted'>12 Dec 2018 at 1:16 AM</small>
                  </div>

                </div>
                <div className='linkbtn'>
                  {content.likecount > 0 ?
                    (<Heart onClick={() => unLikePost(content.id)} color="#7367F0" style={{ cursor: 'pointer' }} />)
                    :
                    (<Heart onClick={() => likePost(content.id)} style={{ cursor: 'pointer' }} />)
                  }
                </div>
              </div>
              <CardBody>
                <Row style={{
                  marginBottom: '20px'
                }}>
                  <Col xl='8'>
                    <p>{content.content}</p>
                  </Col>
                  <Col xl='2'>
                    <img src={content.thumbnail !== '0' ? content.thumbnail : illustration} height='170' width="295" style={{ objectFit: 'contain' }} />
                  </Col>
                </Row>
                {content.comments.map((comment) => (
                  <Row key={comment.id}>
                    <Col>
                      <div className='friendsuggest'>
                        <Avatar img={profile4} height='40' width='40' />
                        <div className='profile-user-info'>
                          <h6 className='mb-0'>{comment.nickname}</h6>
                          <smal>{comment.content}</smal>
                        </div>
                      </div>
                    </Col>
                  </Row>
                ))}

                <fieldset className='form-label-group mb-50'>
                  <Label className='form-check-label'>
                    Add Comment
                  </Label>
                  <br />
                  <br />
                  <InputGroup>
                    <Input type='textarea' rows='1' value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Add Comment' />
                    <InputGroupText>
                      <CornerDownLeft size={14} onClick={() => addComment(content.id)} style={{ cursor: 'pointer' }} />
                    </InputGroupText>
                  </InputGroup>
                </fieldset>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )
      )}

    </div>
  )
}

export default NewsFeed