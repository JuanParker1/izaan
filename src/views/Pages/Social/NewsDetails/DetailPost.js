// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
// import classnames from 'classnames'
import {
  Share2,
  GitHub,
  Gitlab,
  Twitter,
  Bookmark,
  Facebook,
  Linkedin,
  CornerUpLeft,
  MessageSquare
} from 'react-feather'

// ** Utils
// import { kFormatter } from '@utils'
import img1 from '@src/assets/images/pages/card-img-overlay.jpg'
import profile from '@src/assets/images/avatars/account.png'
import profile4 from '@src/assets/images/avatars/4-small.png'
import profile1 from '@src/assets/images/avatars/1-small.png'
// ** Custom Components
import Avatar from '@components/avatar'
import Breadcrumbs from '@components/breadcrumbs'
// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Form,
  Badge,
  Input,
  Label,
  Button,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

// ** Styles
import '@styles/base/pages/page-blog.scss'

// ** Images

const DetailPost = () => {
  const str = "Before you get into the nitty-gritty of coming up with a perfect title," +
  "start with a rough draft: your working title. What is that, exactly? A lot of people confuse" +
   "working titles with topics. Let's clear that Topics are very general and could yield several" +
   "different blog posts. Think raising healthy kids, or kitchen storage. A writer might look at " +
   "either of those topics and choose to take them in very, very different directions. A working title," +
   "on the other hand, is very specific and guides the creation of a single blog post. For example," +
   "from the topic raising healthy kids, you could derive the following working title See how different " +
   "and specific each of those is? That's what makes them working titles, instead of overarching topics. "
  
  // ** States
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   axios.get('/blog/list/data/detail').then(res => setData(res.data))
  // }, [])

  // const badgeColorsArr = {
  //   Quote: 'light-info',
  //   Fashion: 'light-primary',
  //   Gaming: 'light-danger',
  //   Video: 'light-warning',
  //   Food: 'light-success'
  // }

  // const renderTags = () => {
  //   return data.blog.tags.map((tag, index) => {
  //     return (
  //       <a key={index} href='/' onClick={e => e.preventDefault()}>
  //         <Badge
  //           className={classnames({
  //             'me-50': index !== data.blog.tags.length - 1
  //           })}
  //           color={badgeColorsArr[tag]}
  //           pill
  //         >
  //           {tag}
  //         </Badge>
  //       </a>
  //     )
  //   })
  // }

  // const renderComments = () => {
  //   return data.comments.map(comment => {
  //     return (
  //       <Card className='mb-3' key={comment.userFullName}>
  //         <CardBody>
  //           <div className='d-flex'>
  //             <div>
  //               <Avatar className='me-75' img={comment.avatar} imgHeight='38' imgWidth='38' />
  //             </div>
  //             <div>
  //               <h6 className='fw-bolder mb-25'>{comment.userFullName}</h6>
  //               <CardText>{comment.commentedAt}</CardText>
  //               <CardText>{comment.commentText}</CardText>
  //               <a href='/' onClick={e => e.preventDefault()}>
  //                 <div className='d-inline-flex align-items-center'>
  //                   <CornerUpLeft size={18} className='me-50' />
  //                   <span>Reply</span>
  //                 </div>
  //               </a>
  //             </div>
  //           </div>
  //         </CardBody>
  //       </Card>
  //     )
  //   })
  // }

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle='Details'
        breadCrumbParent='NewsFeed'
        breadCrumbActive='Details'
      />
      <div className='blog-wrapper'>
        <div className='content-detached'>
          <div className='content-body'>
              <Row>
                <Col xl ='12' sm='12'>
                  <Card className='mb-3'>
                    <CardImg src={img1} className='img-fluid' top />
                    <CardBody>
                      <CardTitle tag='h4'>The Best Features Coming to iOS and Web design</CardTitle>
                      <div className='d-flex'>
                        <Avatar className='me-50' img={profile} imgHeight='24' imgWidth='24' />
                        <div>
                          <small className='text-muted me-25'>by</small>
                          <small>
                            <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                              Rosalie
                            </a>
                          </small>
                          <span className='text-muted ms-50 me-25'>|</span>
                          <small className='text-muted'>12 Dec 2018 at 1:16 AM</small>
                        </div>
                      </div>
                      {/* <div className='my-1 py-25'>{renderTags()}</div> */}
                      <div style={{
                        marginTop: '12px'
                      }}
                        dangerouslySetInnerHTML={{
                          __html: str
                        }}
                      ></div>
                      <div className='d-flex'
                        style={{
                          marginTop: '15px'
                        }}
                      >
                        <div>
                          <Avatar img={profile4} className='me-2' imgHeight='50' imgWidth='50'
                            style={{
                              marginTop: '10px'
                            }}
                          />
                        </div>
                        <div>
                          <h6 className='fw-bolder'>Willie Clark</h6>
                          <CardText className='mb-0'>
                            Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends
                            through photos and quotes by influential creatives and web designer around the world.
                          </CardText>
                        </div>
                      </div>
                      <hr className='my-2' />
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                          <div className='d-flex align-items-center me-1'>
                            <a className='me-50' href='/' onClick={e => e.preventDefault()}>
                              <MessageSquare size={21} className='text-body align-middle' />
                            </a>
                            <a href='/' onClick={e => e.preventDefault()}>
                              {/* <div className='text-body align-middle'>{kFormatter(data.blog.comments)}</div> */}
                            </a>
                          </div>
                          <div className='d-flex align-items-cente'>
                            <a className='me-50' href='/' onClick={e => e.preventDefault()}>
                              <Bookmark size={21} className='text-body align-middle' />
                            </a>
                            <a href='/' onClick={e => e.preventDefault()}>
                              {/* <div className='text-body align-middle'>{data.blog.bookmarked}</div> */}
                            </a>
                          </div>
                        </div>
                        <UncontrolledDropdown className='dropdown-icon-wrapper'>
                          <DropdownToggle tag='span'>
                            <Share2 size={21} className='text-body cursor-pointer' />
                          </DropdownToggle>
                          <DropdownMenu end>
                            <DropdownItem className='py-50 px-1'>
                              <GitHub size={18} />
                            </DropdownItem>
                            <DropdownItem className='py-50 px-1'>
                              <Gitlab size={18} />
                            </DropdownItem>
                            <DropdownItem className='py-50 px-1'>
                              <Facebook size={18} />
                            </DropdownItem>
                            <DropdownItem className='py-50 px-1'>
                              <Twitter size={18} />
                            </DropdownItem>
                            <DropdownItem className='py-50 px-1'>
                              <Linkedin size={18} />
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl='12' sm='12' id='blogComment'>
                  <h6 className='section-label'>Comment</h6>
                  <Card className='mb-3'>
                    <CardBody>
                      <div className='d-flex'>
                        <div>
                          <Avatar className='me-75' img={profile1} imgHeight='38' imgWidth='38' />
                        </div>
                        <div>
                          <h6 className='fw-bolder mb-25'>Chad Alexander</h6>
                          <CardText>May 24, 2020</CardText>
                          <CardText>A variation on the question technique above, the multiple-choice question great way to engage your reader.</CardText>
                          <a href='/' onClick={e => e.preventDefault()}>
                            <div className='d-inline-flex align-items-center'>
                              <CornerUpLeft size={18} className='me-50' />
                              <span>Reply</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl='12' sm='12'>
                  <h6 className='section-label'>Leave a Comment</h6>
                  <Card>
                    <CardBody>
                      <Form className='form' onSubmit={e => e.preventDefault()}>
                        <Row>
                          <Col sm='12'>
                            <div className='mb-2'>
                              <Input className='mb-2' type='textarea' rows='4' placeholder='Comment' />
                            </div>
                          </Col>
                          <Col sm='12'>
                            <Button color='primary'>Post Comment</Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default DetailPost
