// ** React Imports
//import { useEffect, useState } from 'react'

// ** Third Party Components
//import axios from 'axios'
import Chart from 'react-apexcharts'
import TinyChartStats2 from './TinyChartStats2'
import TinyChartStats3 from './TinyChartStats3'
// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledButtonDropdown
} from 'reactstrap'

const RevenueReport = props => {
  // ** State
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   axios.get('/card/card-analytics/revenue-report').then(res => setData(res.data))
  //   return () => setData(null)
  // }, [])

  const revenueOptions = {
      chart: {
        stacked: true,
        type: 'bar',
        toolbar: { show: false }
      },
      grid: {
        padding: {
          top: -20,
          bottom: -10
        },
        yaxis: {
          lines: { show: true }
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.86rem',
            fontFamily:"OpenSans"
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      colors: [props.primary, props.warning],
      plotOptions: {
        bar: {
          columnWidth: '17%',
          borderRadius: [5]
        },
        distributed: true
      },
      
      yaxis: {
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.86rem',
            fontFamily:"OpenSans"
          }
        }
      }
    },
    revenueSeries = [
      {
        name: 'Earning',
        data: [95, 177, 284, 256, 105, 63, 168, 218, 72]
      },
      {
        name: 'Expense',
        data: [-145, -80, -60, -180, -100, -60, -85, -75, -100]
      }
    ]
  const budgetSeries = [
      {
        data: [61, 48, 69, 52, 60, 40, 79, 60, 59, 43, 62]
      },
      {
        data: [20, 10, 30, 15, 23, 0, 25, 15, 20, 5, 27]
      }
    ],
    budgetOptions = {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        type: 'line',
        sparkline: { enabled: true }
      },
      stroke: {
        curve: 'smooth',
        dashArray: [0, 5],
        width: [2]
      },
      colors: [props.primary, '#dcdae3'],
      tooltip: {
        enabled: false
      }
    }

  return (
    <Card className='card-revenue-budget'
      style={{
        height: '360px',
        fontFamily:"OpenSans"
      }}
    >
      <Row className='mx-0'>
        <Col className='revenue-report-wrapper' md='8' xs='12'>
          <div className='d-sm-flex justify-content-between align-items-center mb-3'>
            <CardTitle className='mb-50 mb-sm-0'>Closing Balance</CardTitle>
            <div className='d-flex align-items-center'>
              <div className='d-flex align-items-center me-2'>
                <span className='bullet bullet-primary me-50 cursor-pointer'></span>
                <span>Earning</span>
              </div>
              <div className='d-flex align-items-center'>
                <span className='bullet bullet-warning me-50 cursor-pointer'></span>
                <span>Expense</span>
              </div>
            </div>
          </div>
          <Chart id='revenue-report-chart' type='line' height='230' options={revenueOptions} series={revenueSeries} />
        </Col>
        <Col className='budget-wrapper' md='4' xs='12'
          style={{
            marginTop: '20px'
          }}
        >
          <h4>Cumulative Revenue</h4>
          <Chart id='budget-chart' type='line' height='80' options={budgetOptions} series={budgetSeries} 
            style={{
              marginTop: '50px'
            }}
          />
          <Row 
            style={{
              marginTop: '50px'
            }}
          >
            <Col>
              <TinyChartStats2/>
            </Col>
            <Col>
              <TinyChartStats3/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default RevenueReport
