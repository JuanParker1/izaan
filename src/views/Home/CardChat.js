// // ** React Imports
// import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

// ** Custom Components
import Avatar from '@components/avatar'
import img3 from '@src/assets/images/pages/content-img-2.jpg'
import img1 from '@src/assets/images/pages/card-img-overlay.jpg'
// ** Third Party Components
// import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { MoreVertical, Send, Image, Edit } from 'react-feather'
import img2 from '@src/assets/images/pages/content-img-1.jpg'
// ** Reactstrap Imports
import { Card, CardHeader, Form, Label, InputGroup, Input, InputGroupText, Button, Col, Row } from 'reactstrap'

// ** Images
// import profilePic from '@src/assets/images/portrait/small/avatar-s-11.jpg'

// ** Styles
import '@styles/base/pages/app-chat-list.scss'

// const data = {
//   chat: {
//     id: 2,
//     userId: 1,
//     unseenMsgs: 0,
//     chat: [
//       {
//         message: "How can we help? We're here for you!",
//         time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
//         senderId: 11
//       },
//       {
//         message: 'Hey John, I am looking for the best admin template. Could you please help me to find it out?',
//         time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)',
//         senderId: 1
//       },
//       {
//         message: 'It should be Bootstrap 5 compatible.',
//         time: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)',
//         senderId: 1
//       },
//       { message: 'Absolutely!', time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)', senderId: 11 },
//       {
//         message: 'Modern admin is the responsive bootstrap 5 admin template.!',
//         time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
//         senderId: 11
//       },
//       { message: 'Looks clean and fresh UI.', time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)', senderId: 1 },
//       { message: "It's perfect for my next project.", time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)', senderId: 1 },
//       { message: 'How can I purchase it?', time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)', senderId: 1 },
//       { message: 'Thanks, from ThemeForest.', time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)', senderId: 11 },
//       { message: 'I will purchase it for sure. 👍', time: '2020-12-08T13:52:38.013Z', senderId: 1 }
//     ]
//   },
//   contact: {
//     id: 1,
//     fullName: 'Felecia Rower',
//     avatar: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default,
//     status: 'away'
//   }
// }

const CardChat = () => {
  // ** States
  //const [chatRef, setChatRef] = useState(null)
  //const [chatData, setChatData] = useState()

  //** Formats chat data based on sender
  // const formattedChatData = () => {
  //   let chatLog = []
  //   if (chatData) {
  //     chatLog = chatData.chat.chat
  //   }

  //   const formattedChatLog = []
  //   let chatMessageSenderId = chatLog[0] ? chatLog[0].senderId : undefined
  //   let msgGroup = {
  //     senderId: chatMessageSenderId,
  //     messages: []
  //   }
  //   chatLog.forEach((msg, index) => {
  //     if (chatMessageSenderId === msg.senderId) {
  //       msgGroup.messages.push({
  //         msg: msg.message,
  //         time: msg.time
  //       })
  //     } else {
  //       chatMessageSenderId = msg.senderId
  //       formattedChatLog.push(msgGroup)
  //       msgGroup = {
  //         senderId: msg.senderId,
  //         messages: [
  //           {
  //             msg: msg.message,
  //             time: msg.time
  //           }
  //         ]
  //       }
  //     }
  //     if (index === chatLog.length - 1) formattedChatLog.push(msgGroup)
  //   })
  //   return formattedChatLog
  // }

  //** Renders user chat
  // const renderChats = () => {
  //   return formattedChatData().map((item, index) => {
  //     return (
  //       <div
  //         key={index}
  //         className={classnames('chat', {
  //           'chat-left': item.senderId !== 11
  //         })}
  //       >
  //         <div className='chat-avatar'>
  //           <Avatar
  //             className='box-shadow-1 cursor-pointer'
  //             img={item.senderId === 11 ? profilePic : chatData.contact.avatar}
  //           />
  //         </div>

  //         <div className='chat-body'>
  //           {item.messages.map(chat => (
  //             <div key={chat.msg} className='chat-content'>
  //               <p>{chat.msg}</p>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     )
  //   })
  // }

  //** Scroll to chat bottom
  // const scrollToBottom = () => {
  //   chatRef.scrollTop = Number.MAX_SAFE_INTEGER
  // }

  // useEffect(() => {
  //   if (chatRef !== null) {
  //     scrollToBottom()
  //   }
  // }, [chatRef, chatData.chat.chat.length])
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
          <Card
            onClick={() => {
              history.push('./newsdetail')
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
                <p> 
                  Have you ever finally just gave in to the temptation and read your 
                  horoscope in the newspaper on Sunday morning?
                </p>
              </Col>
            </Row>
          </Card>
          
          <Card
            onClick={() => {
              history.push('./newsdetail')
            }}
            style={{
              padding: '10px',
              alignItems: 'center'
            }}
            className='cursor-pointer'
          >
            <Row>
              <Col xl='4'>
                <img src={img1} width='100px' height='85px'
                  style={{
                    marginLeft: '10px'
                  }}
                ></img>
              </Col>
              <Col xl='8'>
                <p> 
                  Have you ever finally just gave in to the temptation and read your 
                  horoscope in the newspaper on Sunday morning?
                </p>
              </Col>
            </Row>
          </Card>
          <Card
            onClick={() => {
              history.push('./newsdetail')
            }}
            style={{
              padding: '10px',
              alignItems: 'center'
            }}
            className='cursor-pointer'
          >
            <Row>
              <Col xl='4'>
                <img src={img3} width='100px' height='85px'
                  style={{
                    marginLeft: '10px'
                  }}
                ></img>
              </Col>
              <Col xl='8'>
                <p> 
                  Have you ever finally just gave in to the temptation and read your 
                  horoscope in the newspaper on Sunday morning?
                </p>
              </Col>
            </Row>
          </Card>
          <Card
            onClick={() => {
              history.push('./newsdetail')
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
                <p> 
                  Have you ever finally just gave in to the temptation and read your 
                  horoscope in the newspaper on Sunday morning?
                </p>
              </Col>
            </Row>
          </Card>
          <Card
            onClick={() => {
              history.push('./newsdetail')
            }}
            style={{
              padding: '10px',
              alignItems: 'center'
            }}
            className='cursor-pointer'
          >
            <Row>
              <Col xl='4'>
                <img src={img1} width='100px' height='85px'
                  style={{
                    marginLeft: '10px'
                  }}
                ></img>
              </Col>
              <Col xl='8'>
                <p> 
                  Have you ever finally just gave in to the temptation and read your 
                  horoscope in the newspaper on Sunday morning?
                </p>
              </Col>
            </Row>
          </Card>
          <Card
            onClick={() => {
              history.push('./newsdetail')
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
                <p> 
                  Have you ever finally just gave in to the temptation and read your 
                  horoscope in the newspaper on Sunday morning?
                </p>
              </Col>
            </Row>
          </Card>
          <Card
            onClick={() => {
              history.push('./newsdetail')
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
                <p> 
                  Have you ever finally just gave in to the temptation and read your 
                  horoscope in the newspaper on Sunday morning?
                </p>
              </Col>
            </Row>
          </Card>
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
