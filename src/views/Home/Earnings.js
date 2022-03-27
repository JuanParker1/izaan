// ** Third Party Components
import Chart from 'react-apexcharts'

// ** Reactstrap Imports
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

const Earnings = ({ success }) => {
  const options = {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: { show: false },
    comparedResult: [2, -3, 8],
    labels: ['KRW', 'BTC', 'ETH', 'XRP', 'BTT', 'et'],
    stroke: { width: 0 },
    colors: ['#F16B5C', '#C0D724', '#80C844', '#E4445E', '#A6B8D0', '#0F4C81', success],
    grid: {
      padding: {
        right: -20,
        bottom: -8,
        left: -20
      }
    },
    plotOptions: {
      pie: {
        startAngle: -10,
        donut: {
          size: '80%',
          labels: {
            show: true,
            name: {
              offsetY: 15
            },
            value: {
              offsetY: -15,
              formatter(val) {
                return `${parseInt(val)} `
              }
            },
            total: {
              show: true,
              offsetY: 15,
              label: 'App',
              formatter() {
                return '53%'
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1325,
        options: {
          chart: {
            height: 100
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 120
          }
        }
      },
      {
        breakpoint: 1065,
        options: {
          chart: {
            height: 100
          }
        }
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 120
          }
        }
      }
    ]
  }

  return (
    <Card className='earnings-card'
      style={{
        fontFamily:"OpenSans",
        height:'190px'
      }}
    >
      <CardBody>
        <Row>
          <Col xs='6'>
            <Chart options={options} series={[4000000, 3000000, 500000, 250000, 100000, 830000]} type='donut' height={140} />
          </Col>
          <Col xs='6'>
            <p>Current Portfolio Distribution</p>
           <div className='font-small-2'>
              KRW:  6000000.00<br/>
              BTC:  3000000.00<br/>
              ETH:  500000.00<br/>
              XRP:  150000.00<br/>
              BTT:  100000.00<br/>
              et Cetera:   830000.00
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Earnings
