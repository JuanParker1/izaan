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
    labels: ['Upbit', 'Binance', 'FTX', 'Bithumb'],
    stroke: { width: 0 },
    colors: ['#8833ff', '#ff6633', '#ffca33', '#3361ff', success],
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
                return '67%'
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
        fontFamily:"OpenSans"
      }}
    >
      <CardBody>
        <Row>
          <Col xs='6'>
            <Chart options={options} series={[7000000.00,  2000000.00,  1500000.00, 80000.00]} type='donut' height={140} />
          </Col>
          <Col xs='6'>
            <p>Current Asset Allocation</p>
           <div className='font-small-2'>
              Upbit:&nbsp;  &nbsp;&nbsp;  7000000.00<br/>
              Binance:  2000000.00<br/>
              FTX:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      1500000.00<br/>
              Bithumb:  80000.00
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Earnings
