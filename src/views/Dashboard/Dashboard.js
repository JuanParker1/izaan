import { Row, Col } from 'reactstrap'
import { useContext, useEffect, useState } from 'react'
import { ThemeColors } from '../../utility/context/ThemeColors'
import Earnings from './Earnings'
import Earnings2 from './Earnings2'
import CardMedal from './CardMedal'
import CompanyTable from './CompanyTable'
import RevenueReport from './RevenueReport'
import DashboardFilter from './DashboardFilter'
import CardChat from './CardChat'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import axios from 'axios'
import CurrentBalance from './CurrentBalance'
import NetBalance from './NetBalance'
import { unblinkedmainserver, unblinkedsocialapiserver } from '@utility/apiserver/apiserver'
import { useDispatch, useSelector } from 'react-redux'
import { setRevenueSummary, setRevenueSummaryAllocation, setRevenueSummaryDistribution } from './../../redux/dashboard'
import { setContents } from './../../.../../redux/newsfeed'

const Dashboard = () => {
  const { colors } = useContext(ThemeColors)
  const dispatch = useDispatch()
  const data = useSelector(state => state.dashboard.revenueSummary)
  const reports = useSelector(state => state.dashboard.reports)
  const currency = useSelector(state => state.dashboard.selectedCurrency)
  const [ror, setRor] = useState(0.0)
  const [pnl, setPnl] = useState(0.0)
  //const [isRtl] = useRTL()
  //const trackBgColor = '#e9ecef'

  const fetchPosts = () => {
    const data = {
      id: ""
    }
    axios({
      method: "post",
      url: `${unblinkedsocialapiserver}/newsfeed`,
      data
    })
      .then((res) => {
        console.log('news feed', res.data)
        dispatch(setContents(res.data))
      })
      .catch((err) => {
        console.log("error: ", err)
      })
  }

  useEffect(() => {
    axios({
      method: "get",
      url: `${unblinkedmainserver}/revenue/summary?market=${currency}`
    })
      .then((res) => {
        dispatch(setRevenueSummary(res.data))
      })
      .catch((err) => {
        console.log("error: ", err)
      })

    axios({
      method: "get",
      url: `${unblinkedmainserver}/summary/allocation?market=${currency}`
    })
      .then((res) => {
        console.log('data', res.data)
        dispatch(setRevenueSummaryAllocation(res.data))
      })
      .catch((err) => {
        console.log("error: ", err)
      })

    axios({
      method: "get",
      url: `${unblinkedmainserver}/summary/distribution?market=${currency}`
    })
      .then((res) => {
        dispatch(setRevenueSummaryDistribution(res.data))
      })
      .catch((err) => {
        console.log("error: ", err)
      })

  }, [currency])

  useEffect(() => {
    let ror = 0
    let pnl = 0
    reports.map((report) => {
      ror += parseFloat(report.ror)
      pnl += parseFloat(report.pnl)
    })

    setRor(ror / reports.length)
    setPnl(pnl / reports.length)
  }, [reports])

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <Row>
        <Col lg='4' md='12' xs='12' l><DashboardFilter /></Col>
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
            <Col>
              <CardMedal />
            </Col>
          </Row>
          <Row>
            <CurrentBalance currentBalance={data.current_balance} ror={data.ror} pnl={data.pnl} />
            <NetBalance ror={ror} pnl={pnl} />
          </Row>
        </Col>
        <Col lg='8' md='6' xs='12'>
          <RevenueReport primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
      </Row>
      <Row>
        <Col xl='8' md='6' xs='12'>
          <CompanyTable />
        </Col>
        <Col xl='4' md='6' xs='12'>
          <CardChat />
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
