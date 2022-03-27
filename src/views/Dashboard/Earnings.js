// ** Third Party Components
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import { kFormatter6 } from '@utils'
// ** Reactstrap Imports
import { Card, CardBody, Row, Col } from 'reactstrap'

const Earnings = ({ success }) => {
  const revenueSummaryDistribution = useSelector(state => state.dashboard.revenueSummaryDistribution)
  const [values, setValues] = useState([])
  const [labels, setLabels] = useState([])

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
    labels,
    legend: { show: false },
    stroke: { width: 0 },
    colors: ['#F16B5C', '#C0D724', '#80C844', '#E4445E', '#A6B8D0', '#0F4C81', success],
    plotOptions: {
      pie: {
        startAngle: 2,
        donut: {
          size: '72%',
          labels: {
            show: true,
            value: {
              show: true,
              style: {
                fontSize: '12px',
                fontFamily: undefined
              },
              fontWeight: 600,
              color: undefined,
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

  useEffect(() => {
    const value = []
    const label = []
    revenueSummaryDistribution.map((revenueSummary) => {
      value.push(revenueSummary.value)
      label.push(revenueSummary.currency)
    })
    setValues(value)
    setLabels(label)
  }, [revenueSummaryDistribution])
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
              <p className='text-center'>Current Asset Distribution</p>
              <div>
                {revenueSummaryDistribution &&
                  revenueSummaryDistribution.map((revenueSummary) => (
                    <div key={revenueSummary.currency} className='d-flex justify-content-between'>
                      <span className='mb-0'>{revenueSummary.currency}:</span>
                      <span>{(revenueSummary.weight * 100).toFixed(2)}%</span></div>
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
