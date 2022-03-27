// ** Third Party Components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const SwiperCenterSlidesStyle = ({ isRtl }) => {
  const params = {
    className: 'swiper-centered-slides swiper-container p-1',
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    navigation: true,
    slideToClickedSlide: true
  }

  return (
    <Card className='bg-transparent shadow-none'>
      <CardBody>
        <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
          <SwiperSlide className='rounded swiper-shadow'>
            <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>Getting Started</p>
          </SwiperSlide>
          <SwiperSlide className='rounded swiper-shadow'>
            <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>Pricing & Plans</p>
          </SwiperSlide>
          <SwiperSlide className='rounded swiper-shadow'>
            <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>Sales Questions</p>
          </SwiperSlide>
          <SwiperSlide className='rounded swiper-shadow'>
            <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>User Guides</p>
          </SwiperSlide>
          <SwiperSlide className='rounded swiper-shadow'>
            <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>General Guides</p>
          </SwiperSlide>
        </Swiper>
      </CardBody>
    </Card>
  )
}

export default SwiperCenterSlidesStyle
