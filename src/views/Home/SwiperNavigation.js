// ** Third Party Components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const params = {
  navigation: true
}

const SwiperNavigation = ({ isRtl }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Navigation</CardTitle>
      </CardHeader>
      <CardBody>
        <Swiper {...params} dir={isRtl ? 'rtl' : 'ltr'}>
          <SwiperSlide>
            <p>asdasd</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>asdasd</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>asdasd</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>asdasd</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>asdasd</p>
          </SwiperSlide>
        </Swiper>
      </CardBody>
    </Card>
  )
}

export default SwiperNavigation
