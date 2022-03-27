// // ** React Imports
// import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'

// ** Custom Components
import Avatar from '@components/avatar'
import img3 from '@src/assets/images/pages/content-img-2.jpg'
// ** Third Party Components
// import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { MoreVertical, Edit } from 'react-feather'
import img2 from '@src/assets/images/pages/content-img-1.jpg'
// ** Reactstrap Imports
import { Card, CardHeader, Form, Label, InputGroup, Input, InputGroupText, Button, Col, Row } from 'reactstrap'

// ** Images
// import profilePic from '@src/assets/images/portrait/small/avatar-s-11.jpg'

// ** Styles
import '@styles/base/pages/app-chat-list.scss'

const CardChat = () => {
  const contents = useSelector((state) => state.newsfeed.contents)
  const history = useHistory()

  return (
    <Card className='chat-widget'
      style={{
        height: '850px',
        fontFamily: 'OpenSans'
      }}
    >
      <CardHeader>
        <div className='d-flex align-items-center'>
          <Avatar status='online' className='me-2' img={img3} imgHeight='34' imgWidth='34' />
          <h5 className='mb-0'>Carrie Hawkins</h5>
        </div>
        <MoreVertical size={18} className='cursor-pointer' />
      </CardHeader>
      <div className='chat-app-window'>
        <PerfectScrollbar
          className='user-chats scroll-area'
          options={{ wheelPropagation: false }}
          style={{
            height: '740px'
          }}
        >
          {contents && contents.map((content) => (
            <Card
              key={content.id}
              onClick={() => {
                history.push('./mainfeed')
              }}
              style={{
                padding: '10px',
                alignItems: 'center'
              }}
              className='cursor-pointer'
            >
              <Row>
                <Col xl='4'>
                  <img src={img2} width='100px' height='85px'
                    style={{
                      marginLeft: '10px'
                    }}
                  ></img>
                </Col>
                <Col xl='8'>
                  <p style={{ flex: 1 }} nu>
                    {content.content.substring(0, 120)} ...
                  </p>
                </Col>
              </Row>
            </Card>
          ))}
        </PerfectScrollbar>
        <Form className='chat-app-form' onSubmit={e => handleSendMsg(e)}>
          <InputGroup className='input-group-merge me-1 form-send-message'>
            <InputGroupText>
              <Label className='attachment-icon mb-0' for='attach-doc'>
                <Edit className='cursor-pointer text-secondary' size={24}
                  onClick={() => history.push('./edit')}
                />
              </Label>
            </InputGroupText>
            <Input
              className='border-0'
              placeholder='Type your message'
              onClick={() => history.push('./edit')}
            />
          </InputGroup>
          <Button className='send' color='primary'
            onClick={() => history.push('./edit')}
          >
            Write
          </Button>
        </Form>
      </div>
    </Card>
  )
}

export default CardChat
