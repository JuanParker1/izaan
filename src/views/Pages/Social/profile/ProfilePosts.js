// ** React Imports
import { Fragment } from 'react'
// ** Custom Components
import Avatar from '@components/avatar'
import profile from '@src/assets/images/avatars/account.png'
import profile4 from '@src/assets/images/avatars/4-small.png'
// ** Third Party Components
import { Heart, MessageSquare, Share2, Camera, Send } from 'react-feather'
import '../../../../@core/scss/base/components/profileposts.scss'
import illustration from '@src/assets/images/illustration/email.svg'
import img1 from '@src/assets/images/pages/card-img-overlay.jpg'
import img2 from '@src/assets/images/pages/content-img-1.jpg'
import img3 from '@src/assets/images/pages/content-img-2.jpg'
// ** Reactstrap Imports
import { Card, CardBody, CardHeader, CardText, Row, Col, UncontrolledTooltip, Input, Label, Button, InputGroup, InputGroupText } from 'reactstrap'
const ProfilePosts = () => {
   return (
     <div>
       <Row>
         <Col xl='12'>
           <Card className='profilepost'>
             <CardHeader>
               <div className='profilPosthead'>
                 <div className='d-flex justify-content-start align-items-center mb-1'>
                   <img
                     src={profile}
                     alt="account image"
                     className="image"
                     width="50px"
                     height="50px"
                   />
                    <div className='profile-user-info'>
                      <h6 className='mb-0'>Rosalie</h6>
                      <small className='text-muted'>12 Dec 2018 at 1:16 AM</small>
                    </div>
                    
                 </div>
                 <div className='linkbtn'>
                   <Camera  className='picturbtn'/>
                   <Heart />
                 </div>
               </div>
             </CardHeader>
             <CardBody>
               <Row style={{
                 marginBottom: '20px'
               }}>
                 <Col xl='8'>
                   <h4>There is a lot of exciting</h4>
                   <p>Have you ever finally just gave in to the temptation and read your 
                     horoscope in the newspaper on Sunday morning? Sure, we all have. For 
                      most of us, it’s a curiosity, an amusement to see what they say our 
                      the sign of the zodiac that we were born under. 
                      Wday will be like based on hen you enter into any new area of science, you almost always find 
                      yourself with a baffling new language. There is a lot of exciting stuff
                       going on in the stars above us that make astronomy so much fun. 
                       The truth is the universe is a constantly changing … </p>
                 </Col>
                 <Col xl='2'>
                   <img src={illustration} height='170' />
                 </Col>
               </Row>
               <Row>
                 <Col>
                   <div className='friendsuggest'>
                     <Avatar img={profile4}  height='40' width='40' />
                     <div className='profile-user-info'>
                       <h6 className='mb-0'>Earl Briggs</h6>
                       <smal>Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.</smal>
                     </div>
                   </div>
                 </Col>
                 <Col className='d-flex justify-content-between justify-content-sm-end align-items-center mb-2' sm='6'>
                   <a href='/' className='text-nowrap' onClick={e => e.preventDefault()}>
                     <MessageSquare size={18} className='text-body me-50'></MessageSquare>
                     <span className='text-muted me-1'>1.25k</span>
                   </a>
                   <a href='/' className='text-nowrap share-post' onClick={e => e.preventDefault()}>
                     <Share2 size={18} className='text-body mx-50'></Share2>
                     <span className='text-muted me-1'>1.25k</span>
                   </a>
                 </Col>
               </Row>
               <fieldset className='form-label-group mb-50'>
                 <Label className='form-check-label'>
                   Add Comment
                 </Label>
                 <br/>
                 <br/>
                 <InputGroup>
                   <Input type='textarea' rows='1' placeholder='Add Comment' />
                   <InputGroupText>
                     <Send size={14}/>
                   </InputGroupText>
                 </InputGroup>
               </fieldset>
             </CardBody>
           </Card>
         </Col>
       </Row>
       <Row>
         <Col xl='12'>
           <Card 
             className='profilepost'
           >
             <CardHeader>
               <div className='profilPosthead'>
                 <div className='d-flex justify-content-start align-items-center mb-1'>
                   <img
                     src={profile}
                     alt="account image"
                     className="image"
                     width="50px"
                     height="50px"
                   />
                    <div className='profile-user-info'>
                      <h6 className='mb-0'>Rosalie</h6>
                      <small className='text-muted'>12 Dec 2018 at 1:16 AM</small>
                    </div>
                    
                 </div>
                 <div className='linkbtn'>
                   <Camera className='picturbtn'/>
                   <Heart />
                 </div>
               </div>
             </CardHeader>
             <CardBody>
               <Row>
                 <Col xl='12'>
                   <img src={img1} width='900px'height="500px"/>
                 </Col>
               </Row>
             </CardBody>
           </Card>
         </Col>
       </Row>
       <Row>
         <Col xl='12'>
           <Card 
             className='profilepost'
           >
             <CardHeader>
               <div className='profilPosthead'>
                 <div className='d-flex justify-content-start align-items-center mb-1'>
                   <img
                     src={profile}
                     alt="account image"
                     className="image"
                     width="50px"
                     height="50px"
                   />
                    <div className='profile-user-info'>
                      <h6 className='mb-0'>Rosalie</h6>
                      <small className='text-muted'>12 Dec 2018 at 1:16 AM</small>
                    </div>
                    
                 </div>
                 <div className='linkbtn'>
                   <Camera  className='picturbtn'/>
                   <Heart />
                 </div>
               </div>
             </CardHeader>
             <CardBody>
               <Row>
                 <Col xl='12'>
                   <h4>There is a lot of exciting</h4>
                   <p>Have you ever finally just gave in to the temptation and read your 
                     horoscope in the newspaper on Sunday morning? Sure, we all have. For 
                     most of us, it’s a curiosity, an amusement to see what they say our 
                     day will be like based on the sign of the zodiac that we were born under. 
                     When you enter into any new area of science, you almost always find 
                     yourself with a baffling new language. There is a lot of exciting stuff
                     going on in the stars above us that make astronomy so much fun. 
                     The truth is the universe is a constantly changing … </p>
                 </Col>
               </Row>
             </CardBody>
           </Card>
         </Col>
       </Row>
       <Row>
         <Col xl='12'>
           <Card 
             className='profilepost'
           >
             <CardHeader>
               <div className='profilPosthead'>
                 <div className='d-flex justify-content-start align-items-center mb-1'>
                   <img
                     src={profile}
                     alt="account image"
                     className="image"
                     width="50px"
                     height="50px"
                   />
                    <div className='profile-user-info'>
                      <h6 className='mb-0'>Rosalie</h6>
                      <small className='text-muted'>12 Dec 2018 at 1:16 AM</small>
                    </div>
                 </div>
                 <div className='linkbtn'>
                   <Camera  className='picturbtn'/>
                   <Heart />
                 </div>
               </div>
             </CardHeader>
             <CardBody>
               <Row>
                 <Col xl='6'>
                  <img src={img2} width='480px'/>
                 </Col>
                 <Col xl='6'>
                   <img src={img3} width='480px'/>
                 </Col>
               </Row>
             </CardBody>
           </Card>
         </Col>
       </Row>
       <Row>
         <Col xl='12'>
           <Card className='profilepost'>
             <CardHeader>
               <div className='profilPosthead'>
                 <div className='d-flex justify-content-start align-items-center mb-1'>
                   <img
                     src={profile}
                     alt="account image"
                     className="image"
                     width="50px"
                     height="50px"
                   />
                    <div className='profile-user-info'>
                      <h6 className='mb-0'>Rosalie</h6>
                      <small className='text-muted'>12 Dec 2018 at 1:16 AM</small>
                    </div>
                    
                 </div>
                 <div className='linkbtn'>
                   <Camera  className='picturbtn'/>
                   <Heart />
                 </div>
               </div>
             </CardHeader>
             <CardBody>
               <Row>
                 <Col xl='8'>
                   <h4>There is a lot of exciting</h4>
                   <p>Have you ever finally just gave in to the temptation and read your 
                     horoscope in the newspaper on Sunday morning? Sure, we all have. For 
                      most of us, it’s a curiosity, an amusement to see what they say our 
                      the sign of the zodiac that we were born under. 
                      Wday will be like based on hen you enter into any new area of science, you almost always find 
                      yourself with a baffling new language. There is a lot of exciting stuff
                       going on in the stars above us that make astronomy so much fun. 
                       The truth is the universe is a constantly changing … </p>
                 </Col>
                 <Col xl='2'>
                   <img src={illustration} height='170' />
                 </Col>
               </Row>
             </CardBody>
           </Card>
         </Col>
       </Row>
     </div>
   )
}

export default ProfilePosts