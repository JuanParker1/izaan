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
    TabContent,
    TabPane, 
    Nav, 
    NavItem,
    NavLink 
     } from 'reactstrap'
import { useState, useRef } from 'react'
import Flatpickr from 'react-flatpickr'
import { ChevronLeft, ChevronRight, Aperture, Truck, Star, Target, Settings,  Book, Package, Command, CreditCard, Check } from 'react-feather'
import '../../@core/scss/base/components/dashboardfilter.scss'
import "flatpickr/dist/flatpickr.min.css"
import "flatpickr/dist/themes/dark.css"
import "flatpickr/dist/themes/light.css"
import Wizard from '@components/wizard'
import moment from 'moment'

// ** Steps
import HourlyyStep from './time-settings/HourlyStep'
import DailyStep from './time-settings/DailyStep'
import MonthlyStep from './time-settings/MonthlyStep'
import AnnuallyStep from './time-settings/AnnuallyStep'

const DashboardFilter = () => {
  const ref = useRef(null)
  // ** Props
  const [ControlModal, setControlModal] = useState(false)

  const [HourlyCheck, setHourlyCheck] = useState(false)
  const [DailyCheck, setDailyCheck] = useState(false)
  const [MonthlyCheck, setMonthlyCheck] = useState(false)
  const [AnnuallyCheck, setAnnuallyCheck] = useState(false)
  const [YearData, SetYearData] = useState(2020)
  const [SubmitData, setSubmitData] = useState(false)
  const [show, setShow] = useState(false)
  const [stepper, setStepper] = useState(0)
  const [hourly, setHourly] = useState(new Date())
  const [daily, setDaily] = useState(new Date())
  const [monthly, setMonthly] = useState('January')
  const [yearly, setYearly] = useState(2017)

  const steps = [
    {
      id: 'hourly',
      title: 'Hourly',
      subtitle: '3HR - 5min x 36',
      icon: <Aperture className='font-medium-3' />,
      content: <HourlyyStep stepper={stepper} date={hourly} setDate={setHourly} />
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
        borderRadius: '10px',
        padding: '10px',
        height: '150px',
        fontFamily:"OpenSans"
      }}
    >
      <div className='controlHeader'>
        <CardTitle>
            Controller
        </CardTitle>
        <button
          className='settingbutton'
          onClick={() => setShow(true)}
        >
          <Settings 
            color='#6b7a99'
          />
        </button>
      </div>
      <div>
        <Row
          style={{
              marginBottom: '20px'
          }}
        >
            <Row>
              <Col xl='4'><h5>Time Interval</h5></Col>
              <Col xl='8'>
              <div>Monthly</div>
              {SubmitData === true ? (
                <div>
                {stepper._currentIndex === 0 ? (
                    <div>Hourly</div>
                ) : null}
                {stepper._currentIndex === 1 ? (
                    <div>Daily</div>
                ) : null}
                {stepper._currentIndex === 2 ? (
                    <div>Monthly</div>
                ) : null}
                {stepper._currentIndex === 3 ? (
                    <div>Annually</div>
                ) : null}
                </div>
              ) : null }
              </Col>
            </Row>
        </Row>
      </div>
      <div>
        <Row>
          <Row>
            <Col xl='4'>
              <h5
                style={{
                    fontFamily:"OpenSans"
                }}
              >Time Range</h5>
            </Col>
            <Col xl='8'>
            {stepper && stepper._currentIndex === 3 && <p>{yearly}</p>}
            {stepper && stepper._currentIndex === 2 && <p>{monthly}  {`  ${YearData}`}</p>}
            {stepper && stepper._currentIndex === 1 && <p>{moment(daily).format('YYYY-MM-DD')}</p>}
            {stepper && stepper._currentIndex === 0 && <p>{moment(hourly).format('YYYY-MM-DD HH:mm')}</p>}
            </Col>
          </Row>
        </Row>
      </div>
      <div>
          <Modal
            isOpen={ControlModal}
            toggle={() => setControlModal(!ControlModal)}
            className='modal-dialog-centered modal-lg h-50'
            backdrop={true}
            id="control-popup"
            xs='6'
            style={{
                padding: '10px',
                maxHeight: '1000px',
                height:'100%',
                fontFamily:"OpenSans"
            }}
          >
            <ModalHeader className='bg-transparent' toggle={() => setControlModal(!ControlModal)}></ModalHeader>
            <ModalBody >
              <h1 className='text-center mb-1'>Time Setting</h1>
              <Row>
                <Col xl='4'>
                  <button
                    className="controlbtn"
                    block 
                    outline
                    color='primary'
                    style={{
                        height: '80px'
                    }}
                    onClick={() => {
                      setHourlyCheck(!HourlyCheck)
                      setDailyCheck(false)
                      setMonthlyCheck(false)
                      setAnnuallyCheck(false)
                    }}
                  ><div className='timeselectbtn'><Aperture className='timeicon'/>&nbsp; Hourly<br/><small className='smalltxt'>3HR - 5min x 36</small></div></button>
                  <button
                    color='primary'
                    className="controlbtn"
                    block 
                    outline
                    style={{
                        height: '80px',
                        border: '0px solid #fff'
                    }}
                    onClick={() => {
                      setDailyCheck(!DailyCheck)
                      setHourlyCheck(false)
                      setMonthlyCheck(false)
                      setAnnuallyCheck(false)
                    }}
                  ><div className='timeselectbtn'><Star  className='timeicon'/> Daily<br/><small className='smalltxt'>1Day - 1hr x 24</small></div></button>
                  <button
                    color='primary'
                    className="controlbtn"
                    block 
                    outline
                    style={{
                        height: '80px'
                    }}
                    onClick={() => {
                      setMonthlyCheck(!MonthlyCheck)
                      setDailyCheck(false)
                      setHourlyCheck(false)
                      setAnnuallyCheck(false)
                    }}
                  ><div className='timeselectbtn'><Truck className='timeicon'/>&nbsp; Monthly<br/><small className='smalltxt'> 1 Month - 1day x 30</small></div></button>
                  <button
                    color='primary'
                    className="controlbtn"
                    block 
                    outline
                    style={{
                        height: '80px'
                    }}
                    onClick={() => {
                      setAnnuallyCheck(!AnnuallyCheck)
                      setHourlyCheck(false)
                      setMonthlyCheck(false)
                      setDailyCheck(false)
                    }}
                  ><div className='timeselectbtn'><Target className='timeicon'/>&nbsp; Annually<br/><small className='smalltxt'> 1 Year - 1 Month x 12</small></div></button>
                  <br/>
                  <br/>
                </Col>
                <Col xl='8'>
                  {HourlyCheck === true ? (
                      <div className="MonthlyCalender">
                        <Flatpickr
                          className='form-control flat-picker bg-transparent border-0 shadow-none'
                          options={{
                            // eslint-disable-next-line no-mixed-operators
                            //defaultDate: [new Date(), new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)],
                            inline: true,
                            enableTime: true,
                            time_24hr: true
                          }}
                        />
                      </div>
                  ) : null}
                  {DailyCheck === true ? (
                      <div className="DailyCalender">
                        <Flatpickr
                          className='form-control flat-picker bg-transparent border-0 shadow-none'
                          options={{
                            // eslint-disable-next-line no-mixed-operators
                            //defaultDate: [new Date(), new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)],
                            inline: true
                          }}
                        />
                    </div>
                  ) : null}
                  {MonthlyCheck === true ? (
                      <div>
                          <div className="yearChangebtn">
                              <button
                                onClick={() => {
                                    { YearData === 2017 ? (
                                        SetYearData(YearData)
                                    ) : SetYearData(YearData - 1) }
                                }}
                                style={{
                                    backgroundColor:'transparent',
                                    border: 'none',
                                    position: 'relative',
                                    left: '30px'
                                }}
                              >
                                <ChevronLeft/>
                              </button>
                              <h4>{YearData}</h4>
                              <button
                                onClick={() => {
                                    { YearData === 2022 ? (
                                        SetYearData(YearData)
                                    ) : SetYearData(YearData + 1) }
                                }}
                                style={{
                                    backgroundColor:'transparent',
                                    border: 'none',
                                    position: 'relative',
                                    right: '30px'
                                }}
                              >
                                <ChevronRight/>
                              </button>
                          </div>
                          <div className="monthChangebtn">
                              <Col>
                                <Button
                                  className="Monthlybtn"
                                  outline
                                  style={{
                                  }}
                                >January</Button>
                                <Button
                                className="Monthlybtn"
                                  outline
                                  style={{
                                }}
                                >February</Button>
                                <Button
                                className="Monthlybtn"
                                  outline
                                  style={{
                                }}
                                >March</Button>
                              </Col>
                              <Col>
                                <Button
                                className="Monthlybtn"
                                  outline
                                  style={{
                                }}
                                >April</Button>
                                <Button
                                className="Monthlybtn"
                                  outline
                                  style={{
                                }}
                                >May</Button>
                                <Button
                                className="Monthlybtn"
                                  outline
                                  style={{
                                }}
                                >June</Button>
                              </Col>
                              <Col>
                                <Button
                                className="Monthlybtn"
                                  outline
                                  style={{
                                }}
                                >July</Button>
                                <Button
                                className="Monthlybtn"
                                  outline
                                  style={{
                                }}
                                >August</Button>
                                <Button
                                className="Monthlybtn"
                                  outline
                                  style={{
                                }}
                                >September</Button>
                              </Col>
                              <Col>
                                <Button
                                className="Monthlybtn"
                                  outline
                                  style={{
                                }}
                                >October</Button>
                                <Button
                                className="Monthlybtn"
                                  outline
                                  style={{
                                }}
                                >November</Button>
                                <Button
                                className="Monthlybtn"
                                  outline
                                  style={{
                                }}
                                >December</Button>
                              </Col>
                          </div>
                      </div>
                  ) : null}
                  {AnnuallyCheck === true ? (
                      <div className="annuallybtn">
                        <div>
                            <h3
                              style={{
                                  marginLeft: '33%',
                                  marginBottom: '10%'
                              }}
                            >Pick Year</h3>
                          <Button
                            outline
                            style={{
                                marginRight: '10px',
                                marginBottom: '30px',
                                width: '100px',
                                fontSize: '16px',
                                height: '50px'
                            }}
                          >2017</Button>
                          <Button
                          outline
                            style={{
                                marginRight: '10px',
                                marginBottom: '30px',
                                width: '100px',
                                fontSize: '16px',
                                height: '50px'
                            }}
                          >2018</Button>
                          <Button
                            outline
                            style={{
                                marginRight: '10px',
                                marginBottom: '30px',
                                width: '100px',
                                fontSize: '16px',
                                height: '50px'
                            }}
                          >2019</Button>
                          <Button
                            outline
                            style={{
                                marginRight: '10px',
                                width: '100px',
                                fontSize: '16px',
                                height: '50px'
                            }}
                          >2020</Button>
                          <Button
                            outline
                            style={{
                                marginRight: '10px',
                                width: '100px',
                                fontSize: '16px',
                                height: '50px'
                            }}
                          >2021</Button>
                          <Button
                            outline
                            style={{
                                marginRight: '10px',
                                width: '100px',
                                fontSize: '16px',
                                height: '50px'
                            }}
                          >2022</Button>
                        </div>
                      </div>
                  ) : null}
                </Col>
              </Row>
              {/* <div className='nav-vertical'>
                <Nav tabs className='nav-left'>
                  <NavItem>
                    <NavLink
                      active={active === '1'}
                      onClick={() => {
                        toggle('1')
                      }}
                    >
                      <h3>Hourly</h3><br/>
                      <small>5min interval</small>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active={active === '2'}
                      onClick={() => {
                        toggle('2')
                      }}
                    >
                      <h3>Daily</h3><br/>
                      <small>5min interval</small>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active={active === '3'}
                      onClick={() => {
                        toggle('3')
                      }}
                    >
                      <h3>Monthly</h3><br/>
                      <small>5min interval</small>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active={active === '4'}
                      onClick={() => {
                        toggle('4')
                      }}
                    >
                      <h3>Annually</h3><br/>
                      <small>5min interval</small>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={active}>
                  <TabPane tabId='1'>
                    <div className="MonthlyCalender">
                      <Flatpickr
                        className='form-control flat-picker bg-transparent border-0 shadow-none'
                        options={{
                          // eslint-disable-next-line no-mixed-operators
                          //defaultDate: [new Date(), new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)],
                          inline: true,
                          enableTime: true,
                          time_24hr: true
                        }}
                      />
                      <br/>
                      <br/>
                    </div>
                  </TabPane>
                  <TabPane tabId='2'>
                    <div className="DailyCalender">
                      <Flatpickr
                        className='form-control flat-picker bg-transparent border-0 shadow-none'
                        options={{
                          // eslint-disable-next-line no-mixed-operators
                          //defaultDate: [new Date(), new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)],
                          inline: true
                        }}
                      />
                      <br/>
                      <br/>
                    </div>
                  </TabPane>
                  <TabPane tabId='3'>
                    <div>
                      <div className="yearChangebtn">
                          <button
                            onClick={() => {
                                { YearData === 2017 ? (
                                    SetYearData(YearData)
                                ) : SetYearData(YearData - 1) }
                            }}
                            style={{
                                backgroundColor:'transparent',
                                border: 'none',
                                position: 'relative',
                                left: '50px'
                            }}
                          >
                            <ChevronLeft/>
                          </button>
                          <h4>{YearData}</h4>
                          <button
                            onClick={() => {
                                { YearData === 2022 ? (
                                    SetYearData(YearData)
                                ) : SetYearData(YearData + 1) }
                            }}
                            style={{
                                backgroundColor:'transparent',
                                border: 'none',
                                position: 'relative',
                                right: '50px'
                            }}
                          >
                            <ChevronRight/>
                          </button>
                      </div>
                      <div className="monthChangebtn">
                          <Col>
                            <Button
                              className="Monthlybtn"
                              outline
                              style={{
                              }}
                            >January</Button>
                            <Button
                            className="Monthlybtn"
                              outline
                              style={{
                            }}
                            >February</Button>
                            <Button
                            className="Monthlybtn"
                              outline
                              style={{
                            }}
                            >March</Button>
                          </Col>
                          <Col>
                            <Button
                            className="Monthlybtn"
                              outline
                              style={{
                            }}
                            >April</Button>
                            <Button
                            className="Monthlybtn"
                              outline
                              style={{
                            }}
                            >May</Button>
                            <Button
                            className="Monthlybtn"
                              outline
                              style={{
                            }}
                            >June</Button>
                          </Col>
                          <Col>
                            <Button
                            className="Monthlybtn"
                              outline
                              style={{
                            }}
                            >July</Button>
                            <Button
                            className="Monthlybtn"
                              outline
                              style={{
                            }}
                            >August</Button>
                            <Button
                            className="Monthlybtn"
                              outline
                              style={{
                            }}
                            >September</Button>
                          </Col>
                          <Col>
                            <Button
                            className="Monthlybtn"
                              outline
                              style={{
                            }}
                            >October</Button>
                            <Button
                            className="Monthlybtn"
                              outline
                              style={{
                            }}
                            >November</Button>
                            <Button
                            className="Monthlybtn"
                              outline
                              style={{
                            }}
                            >December</Button>
                          </Col>
                          <br/>
                          <br/>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId='4'>
                    <div className="annuallybtn">
                      <div>
                          <h3
                            style={{
                                marginLeft: '33%',
                                marginRight: '10%',
                                marginBottom: '10%'
                            }}
                          >Pick Year</h3>
                        <Button
                          outline
                          style={{
                              marginRight: '10px',
                              marginBottom: '30px',
                              width: '100px',
                              fontSize: '16px',
                              height: '50px'
                          }}
                        >2017</Button>
                        <Button
                        outline
                          style={{
                              marginRight: '10px',
                              marginBottom: '30px',
                              width: '100px',
                              fontSize: '16px',
                              height: '50px'
                          }}
                        >2018</Button>
                        <Button
                          outline
                          style={{
                              marginRight: '10px',
                              marginBottom: '30px',
                              width: '100px',
                              fontSize: '16px',
                              height: '50px'
                          }}
                        >2019</Button>
                        <Button
                          outline
                          style={{
                              marginRight: '10px',
                              width: '100px',
                              fontSize: '16px',
                              height: '50px'
                          }}
                        >2020</Button>
                        <Button
                          outline
                          style={{
                              marginRight: '10px',
                              width: '100px',
                              fontSize: '16px',
                              height: '50px'
                          }}
                        >2021</Button>
                        <Button
                          outline
                          style={{
                              marginRight: '10px',
                              width: '100px',
                              fontSize: '16px',
                              height: '50px'
                          }}
                        >2022</Button>
                      </div>
                      <br/>
                      <br/>
                    </div>
                  </TabPane>
                  <br/>
                  <br/>
                  <br/>
                </TabContent>
              </div> */}
            </ModalBody>
            <ModalFooter>
              <Button color='primary' onClick={() => {
                  setControlModal(!ControlModal)
                  setSubmitData(true)
                }}
                style={{
                    marginRight: '45%'
                }}
              >
                Save
              </Button>{' '}
            </ModalFooter>
          </Modal>
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
                console.log('step', stepper)
                console.log('value', daily)
                console.log('value', hourly)
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

