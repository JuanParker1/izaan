import { Link } from 'react-router-dom'
import { Fragment } from 'react'

// ** Third Party Components

import { UserPlus } from 'react-feather'
// ** Custom Components
import '../../../../@core/scss/base/components/recentpost.scss'
import img10 from '@src/assets/images/pages/kb-image.jpg'
import img11 from '@src/assets/images/pages/search-result.jpg'
import img12 from '@src/assets/images/pages/404.png'
import img13 from '@src/assets/images/pages/500.png'
// ** Reactstrap Imports


const RecentPosts = () => {
  return (
      <div>
        <div>
            <Fragment>
              <div className='blog-recent-posts mt-3'>
                <h6 className='section-label'>Recent Posts</h6>
                <div className='recentpostcontent'>
                  <Link className='me-2' to={'/login'} >
                    <img src={img10} className='rounded' width='100' height='70'/> 
                  </Link>
                  <div>
                    <h6>
                      <Link className='me-2' to={'/login'} >
                        Why Should Forget Facebook?
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className='recentpostcontent'>
                  <Link className='me-2' to={'/login'} >
                    <img src={img11} className='rounded' width='100' height='70'/> 
                  </Link>
                  <div>
                    <h6>
                      <Link className='me-2' to={'/login'} >
                        Publish your passions, your way
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className='recentpostcontent'>
                  <Link className='me-2' to={'/login'} >
                    <img src={img12} className='rounded' width='100' height='70'/> 
                  </Link>
                  <div>
                    <h6>
                      <Link className='me-2' to={'/login'} >
                        The Best Ways to Retain More
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className='recentpostcontent'>
                  <Link className='me-2' to={'/login'} >
                    <img src={img13} className='rounded' width='100' height='70'/> 
                  </Link>
                  <div>
                    <h6>
                      <Link className='me-2' to={'/login'} >
                        Share a Shocking Fact or Statistic
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </Fragment>
        </div>
      </div>
  )
}

export default RecentPosts
