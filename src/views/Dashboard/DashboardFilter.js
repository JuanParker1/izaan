import {
  Card,
  Button,
  Col,
  Row,
  CardTitle,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Badge,
  ButtonDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem
} from 'reactstrap'
import { useState, useRef, useEffect } from 'react'
import { Aperture, Truck, Star, Target, Settings } from 'react-feather'
import '../../@core/scss/base/components/dashboardfilter.scss'
import "flatpickr/dist/flatpickr.min.css"
import "flatpickr/dist/themes/dark.css"
import "flatpickr/dist/themes/light.css"
import Wizard from '@components/wizard'
import moment from 'moment'
import axios from 'axios'
import { unblinkedmainserver } from '../../utility/apiserver/apiserver'
// ** Steps
import HourlyyStep from './time-settings/HourlyStep'
import DailyStep from './time-settings/DailyStep'
import MonthlyStep from './time-settings/MonthlyStep'
import AnnuallyStep from './time-settings/AnnuallyStep'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import {
  setRevenueReports, setHeatMapData, setSelectedFormat,
  setSelectedCurrency
} from './../../redux/dashboard'

const DashboardFilter = () => {
  const currency = useSelector(state => state.dashboard.selectedCurrency)
  const ref = useRef(null)
  const dispatch = useDispatch()
  // ** Props

  const [YearData, SetYearData] = useState(2020)
  const [SubmitData, setSubmitData] = useState(false)
  const [show, setShow] = useState(false)
  const [stepper, setStepper] = useState(0)
  const [hourly, setHourly] = useState(new Date())
  const [daily, setDaily] = useState(new Date())
  const [monthly, setMonthly] = useState(1)
  const [yearly, setYearly] = useState(2017)
  const [timeInterval, setTimeInterval] = useState('Daily')
  const [timeRange, setTimeRange] = useState(moment().format('Do MMM YYYY 00:00'))
  const [heatMapYear, setHeatMapYear] = useState("2021-01-01 00:00:00")
  // const [badgeColor, setBadgeColor] = useState('info')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [range, setRange] = useState('1 hour')
  const [endTime, setEndTime] = useState(moment().format('Do MMM YYYY 03:00'))
  const [reportReqData, setReportReqData] = useState({
    start_time: moment().format('YYYY-MM-DD 00:00:00'),
    interval: "DAILY",
    market: "BTC"
  })

  const toggleDropdown = (e) => {
    e.preventDefault()
    setDropdownOpen(!dropdownOpen)
    if (dropdownOpen) {
      const selectedCurrency = e.target.text
      dispatch(setSelectedCurrency(selectedCurrency))
      setReportReqData({
        ...reportReqData,
        market: selectedCurrency
      })
    }
  }

  const getRevenueReport = (data) => {
    axios({
      method: "post",
      url: `${unblinkedmainserver}/revenue/report`,
      data
    })
      .then((res) => {
        dispatch(setRevenueReports(res.data))
      })
      .catch((err) => {
        console.log("error: ", err)
      })
  }

  const getHeatMapData = (data) => {
    axios({
      method: "post",
      url: `${unblinkedmainserver}/heatmap`,
      data
    })
      .then((res) => {
        console.log('map data', res.data)
        dispatch(setHeatMapData(res.data))
      })
      .catch((err) => {
        console.log("error: ", err)
      })
    console.log('data', heatMapYear)
  }
  
  useEffect(() => {
    getRevenueReport(reportReqData)
  }, [reportReqData])

  useEffect(() => {
    const data = {
      start_time: moment().format('YYYY-01-01 00:00:00')
    }
    axios({
      method: "post",
      url: `${unblinkedmainserver}/heatmap`,
      data
    })
      .then((res) => {
        console.log('map data', res.data)
        dispatch(setHeatMapData(res.data))
      })
      .catch((err) => {
        console.log("error: ", err)
      })
  }, [])

  const steps = [
    {
      id: 'hourly',
      title: 'Hourly',
      subtitle: '3HR - 5min x 36',
      icon: <Aperture className='font-medium-3' />,
      content: <HourlyyStep stepper={stepper} date={hourly.setMinutes(0)} setDate={setHourly} />
    },
    {
      id: 'daily',
      title: 'Daily',
      subtitle: '1Day - 1hr x 24',
      icon: <Star className='font-medium-3' />,
      content: <DailyStep stepper={stepper} date={daily} setDate={setDaily} />
    },
    {
      id: 'monthly',
      title: 'Monthly',
      subtitle: '1 Month - 1day x 30',
      icon: <Truck className='font-medium-3' />,
      content: <MonthlyStep stepper={stepper} YearData={YearData} SetYearData={SetYearData} month={monthly} setMonth={setMonthly} />
    },
    {
      id: 'anually',
      title: 'Anually',
      subtitle: '1 Year - 1 Month x 12',
      icon: <Target className='font-medium-3' />,
      content: <AnnuallyStep stepper={stepper} year={yearly} setYearly={setYearly} />
    }
  ]

  return (
    <Card className='card-tiny-line-stats'
      style={{
        minHeight: '190px',
        borderRadius: '10px',
        padding: '10px',
        fontFamily: "OpenSans"
      }}
    >
      <div className='controlHeader'>
        <CardTitle className='mb-0'>
          Controller
        </CardTitle>
        <div>
         <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown} size="sm">
            <DropdownToggle color='flat-info' caret>
              {currency}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href='/' tag='a'>BTC</DropdownItem>
              <DropdownItem href='/' tag='a'>KRW</DropdownItem>
              <DropdownItem href='/' tag='a'>USDT</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown> 
          <button
            className='settingbutton'
            onClick={() => setShow(true)}
          >
            <Settings
              color='#6b7a99'
            />
          </button>
        </div>
      </div>
      <div className='bg-light-primary rounded p-2'>
        <Row>
          <Col md='4'>
            <h3 style={{marginBottom: '3px'}}>{timeInterval}</h3>
            <h6>{range}</h6>
          </Col>
          <Col md='8' className='d-md-flex flex-column align-items-end'>
            <h5>{timeRange}</h5>
            <h5>~ {endTime}</h5>
          </Col>
        </Row>
      </div>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='pb-3 px-sm-3'>
          <h1 className='text-center mb-1'>Time Settingss</h1>
          <Wizard
            ref={ref}
            steps={steps}
            type='vertical'
            headerClassName='border-0'
            options={{ linear: false }}
            instance={el => setStepper(el)}
            contentClassName='shadow-none'
            className='bg-transparent create-app-wizard shadow-none'
          />
          <ModalFooter>
            <Button color='primary' onClick={() => {
              const monthlyDate = new Date(YearData, monthly)
              let mapdata = null
              setReportReqData(null)
              if (stepper._currentIndex === 0) {
                setTimeInterval("Hourly")
                // setBadgeColor('primary')
                dispatch(setSelectedFormat('hh:mm'))
                setHeatMapYear(moment(hourly).format('YYYY-01-01 00:00:00'))
                setTimeRange(moment(hourly).format('Do MMM YYYY HH:mm'))
                setEndTime(moment(hourly).add(3, 'h').format('Do MMMM YYYY HH:mm'))
                setRange('5 min')
                mapdata = {
                  start_time: moment(hourly).format('YYYY-01-01 00:00:00')
                }
                setReportReqData({
                  start_time: moment(hourly).format('YYYY-MM-DD HH:00:00'),
                  interval: "3HRS",
                  market: currency
                })
              } else if (stepper._currentIndex === 1) {
                setTimeInterval("Daily")
                // setBadgeColor('info')
                dispatch(setSelectedFormat('hh:mm'))
                setHeatMapYear(moment(daily).format('YYYY-01-01 00:00:00'))
                setTimeRange(moment(daily).format('Do MMM YYYY'))
                setEndTime(moment(daily).add(1, 'd').format('Do MMM YYYY'))
                setRange('1 hour')
                mapdata = {
                  start_time: moment(daily).format('YYYY-01-01 00:00:00')
                }
                setReportReqData({
                  start_time: moment(daily).format('YYYY-MM-DD 00:00:00'),
                  interval: "DAILY",
                  market: currency
                })
              } else if (stepper._currentIndex === 2) {
                setTimeInterval("Monthly")
                // setBadgeColor('warning')
                dispatch(setSelectedFormat('Do'))
                setHeatMapYear(moment(monthlyDate).format('YYYY-01-01 00:00:00'))
                setTimeRange(`${moment().month(monthly).subtract(1, 'months').format('MMMM')}  ${YearData}`)
                setEndTime(`${moment().month(monthly).format('MMMM')}  ${YearData}`)
                setRange('1 day')
                mapdata = {
                  start_time: moment(monthlyDate).subtract(1, 'months').format('YYYY-01-01 00:00:00')
                }
                setReportReqData({
                  start_time: moment(monthlyDate).subtract(1, 'months').format('YYYY-MM-01 00:00:00'),
                  interval: "MONTHLY",
                  market: currency
                })
              } else if (stepper._currentIndex === 3) {
                setTimeInterval("Annually")
                // setBadgeColor('success')
                dispatch(setSelectedFormat('MMM'))
                setHeatMapYear(moment(`'${yearly}'`).format('YYYY-01-01 00:00:00'))
                setTimeRange(yearly)
                setEndTime(moment().year(yearly).add(1, 'years').format('YYYY'))
                setRange('1 month')
                mapdata = {
                  start_time: moment(`'${yearly}'`).format('YYYY-01-01 00:00:00')
                }
                setReportReqData({
                  start_time: moment(`'${yearly}'`).format('YYYY-01-01 00:00:00'),
                  interval: "ANNUALLY",
                  market: currency
                })
              }
              getHeatMapData(mapdata)
              setShow(!show)
              setSubmitData(true)
            }}
              style={{
                marginRight: '25%',
                marginButton: '10px',
                width: '100px'
              }}
            >
              Save
            </Button>{' '}
          </ModalFooter>
        </ModalBody>
      </Modal>

    </Card>
  )
}

export default DashboardFilter

