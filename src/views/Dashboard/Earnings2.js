// ** Third Party Components
import Chart from 'react-apexcharts'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// ** Reactstrap Imports
import { Card, CardBody, Row, Col } from 'reactstrap'
import { kFormatter6 } from '@utils'
const Earnings = ({ success }) => {
  const revenueSummaryAllocation = useSelector(state => state.dashboard.revenueSummaryAllocation)
  const [values, setValues] = useState([])
  const [labels, setLabels] = useState([])

  useEffect(() => {
    const value = []
    const label = []
    revenueSummaryAllocation.map((revenueSummary) => {
      value.push(revenueSummary.value)
      label.push(revenueSummary.exchange)
    })
    setValues(value)
    setLabels(label)
  }, [revenueSummaryAllocation])

  const options = {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    legend: { show: false },
    labels,
    stroke: { width: 0 },
    colors: ['#8833ff', '#ff6633', '#ffca33', '#3361ff', success],
    plotOptions: {
      pie: {
        startAngle:2,
        donut: {
          size: '72%',
          labels: {
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            color: undefined,
            show: true,
            value: {
              
              offsetY: -10,
              formatter: (val) => {
                return kFormatter6(val)
              }
            }
          }
        }
      }
    }
  }

  return (
    <>
      <Card className='earnings-card'
        style={{
          fontFamily: "OpenSans",
          height: '190px'
        }}
      >
      <CardBody>
        <Row>
          <Col xs='6'>
            <Chart options={options} series={values} type='donut' height={170} />
          </Col>
          <Col xs='6'>
            <p className='text-center'>Current Asset Allocation</p>
            <div>
              {revenueSummaryAllocation && revenueSummaryAllocation.map((revenueSummary) => (
                <div key={revenueSummary.exchange} className='d-flex justify-content-between'>
                  <span className='mb-0 align-self-baseline'>{revenueSummary.exchange}:</span>
                  <span className='align-self-start'>{(revenueSummary.weight * 100).toFixed(2)}%</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
    </>
  )
}

export default Earnings
