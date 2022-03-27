// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import htmlToDraft from 'html-to-draftjs'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, ContentState } from 'draft-js'
import profile from '@src/assets/images/avatars/account.png'
// ** Custom Components
import Avatar from '@components/avatar'
import Breadcrumbs from '@components/breadcrumbs'

// ** Utils

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardText, Form, Label, Input, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/editor/editor.scss'
import '@styles/base/plugins/forms/form-quill-editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/base/pages/page-blog.scss'

const BlogEdit = () => {
  const initialContent = `
  <p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p>
  <p>Liquorice dragée cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans dragée macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>
  `

  const contentBlock = htmlToDraft(initialContent)
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
  const editorState = EditorState.createWithContent(contentState)

  // ** States
  const
    [content, setContent] = useState(editorState),
    [featuredImg, setFeaturedImg] = useState(null),
    [imgPath, setImgPath] = useState('banner.jpg')


  // const categories = [
  //   { value: 'fashion', label: 'Fashion' },
  //   { value: 'gaming', label: 'Gaming' },
  //   { value: 'quote', label: 'Quote' },
  //   { value: 'video', label: 'Video' },
  //   { value: 'food', label: 'Food' }
  // ]

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    setImgPath(files[0].name)
    reader.onload = function () {
      setFeaturedImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  return (
    <div className='blog-edit-wrapper'>
      <Breadcrumbs
        breadCrumbTitle='Blog Edit'
        breadCrumbParent='Pages'
        breadCrumbParent2='Blog'
        breadCrumbActive='Edit'
      />
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div className='d-flex'>
                  <div>
                    <Avatar className='me-75' img={profile} imgWidth='38' imgHeight='38' />
                  </div>
                  <div>
                    <h6 className='mb-25'>Rosalie</h6>
                    <CardText>12 Dec 2018 at 1:16 AM</CardText>
                  </div>
                </div>
                <Form className='mt-2' onSubmit={e => e.preventDefault()}>
                  <Row>
                    <Col sm='12' className='mb-2'>
                      <Label className='form-label'>Content</Label>
                      <Editor editorState={content} onEditorStateChange={data => setContent(data)} />
                    </Col>
                    <Col className='mb-2' sm='12'>
                      <div className='border rounded p-2'>
                        <h4 className='mb-1'>Featured Image</h4>
                        <div className='d-flex flex-column flex-md-row'>
                          <img
                            className='rounded me-2 mb-1 mb-md-0'
                            src={featuredImg}
                            alt='featured img'
                            width='170'
                            height='110'
                          />
                          <div>
                            <small className='text-muted'>Required image resolution 800x400, image size 10mb.</small>

                            <p className='my-50'>
                              <a href='/' onClick={e => e.preventDefault()}>
                                {`C:/fakepath/${imgPath}`}
                              </a>
                            </p>
                            <div className='d-inline-block'>
                              <div className='mb-0'>
                                <Input
                                  type='file'
                                  id='exampleCustomFileBrowser'
                                  name='customFile'
                                  onChange={onChange}
                                  accept='.jpg, .png, .gif'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col className='mt-50'>
                      <Button color='primary' className='me-1'>
                        Save Changes
                      </Button>
                      <Button color='secondary' outline>
                        Cancel
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </div>
  )
}

export default BlogEdit
