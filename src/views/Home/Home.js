import { Row, Col } from 'reactstrap'
import { Fragment, useContext } from 'react'
import { ThemeColors } from '../../utility/context/ThemeColors'
import Earnings from './Earnings'
import Earnings2 from './Earnings2'
import CardMedal from './CardMedal'
import CompanyTable from './CompanyTable'
import RevenueReport from './RevenueReport'
import DashboardFilter from './DashboardFilter'
import CardChat from './CardChat'
import OrdersBarChart from '@src/ui-elements/cards/statistics/OrdersBarChart'
import ProfitLineChart from '@src/ui-elements/cards/statistics/ProfitLineChart'
//import { useRTL } from '@hooks/useRTL'
//styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import NavbarButton from '../../@core/layouts/components/navbar/NavbarButton'

const Home = () => {
  const { colors } = useContext(ThemeColors)
  //const [isRtl] = useRTL()
  //const trackBgColor = '#e9ecef'
  return (
    <div>
      <Row>
        <Col lg='4' md='10' xs='12'><CardMedal/></Col>
        <Col lg='4' md='6' xs='12'>
          <Earnings success={colors.success.main} />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <Earnings2 success={colors.success.main} />
        </Col>
      </Row>
      <Row>
        <Col lg='4' md='6'>
          <Row>
            <Col><DashboardFilter/></Col>
          </Row>
          <Row>
            <Col lg='6' md='6' xs='12'><ProfitLineChart info={colors.info.main}/></Col>
            <Col lg='6' md='6' xs='12'><OrdersBarChart warning={'#ec5d73'} /></Col>
          </Row>
        </Col>
        <Col lg='8' md='6' xs='12'><RevenueReport primary={colors.primary.main} warning={colors.warning.main}/></Col>
      </Row>
      <Row>
        <Col xl='8' md='6' xs='12'>
          <CompanyTable/>
        </Col>
        <Col xl='4' md='6' xs='12'>
          <CardChat/>
        </Col>
      </Row>
    </div>
  )
}

export default Home
