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
import moment from 'moment'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

const RevenueReport = props => {
  const data = useSelector(state => state.dashboard.reports)
  const heatMapData = useSelector(state => state.dashboard.heatMapData)
  const selectedFormat = useSelector(state => state.dashboard.selectedFormat)
  const [closingBalance, setClosingBalance] = useState([])
  const [dates, setDates] = useState([])
  const [heatData, setHeatData] = useState([])
  // ** State

  useEffect(() => {
    const balance = []
    const dats = []
    data.map((d) => {
      balance.push(d.close)
      dats.push(moment(d.date).format(selectedFormat))
    })
    setClosingBalance(balance)
    setDates(dats)
  }, [data])

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
      categories: dates,
      labels: {
        style: {
          colors: '#b9b9c3',
          fontSize: '0.86rem',
          fontFamily: "OpenSans"
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
          fontFamily: "OpenSans"
        }
      }
    }
  },
    revenueSeries = [
      {
        name: 'Balance',
        data: closingBalance ? closingBalance : []
      }
    ]

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      heatmap: {
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: -3,
              to: -3,
              color: '#134780',
              name: '최저'
            },
            {
              from: -2,
              to: -2,
              color: '#8176f2',
              name: '대손실'
            },
            {
              from: -1,
              to: -1,
              color: '#8f85f3',
              name: '약손실'
            },
            {
              from: 0,
              to: 0,
              color: '#9d95f5',
              name: '변동없음'
            },
            {
              from: 1,
              to: 1,
              color: '#aba4f6',
              name: '약이익'
            },
            {
              from: 2,
              to: 2,
              color: '#b9b3f8',
              name: '대수익'
            },
            {
              from: 3,
              to: 3,
              color: '#f942a3',
              name: '최고이익'
            }
          ]
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'bottom'
    },
    grid: {
      padding: {
        top: -20
      }
    },

    xaxis: {
      tooltip: {
        enabled: false
      },
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },

    tooltip: {
      custom: ({ seriesIndex, dataPointIndex, w }) => {
        const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex]

        return `<ul>
        <li><b>Date</b>:  ${data.date} </li>
        <li><b>ROR</b>:   ${data.x} </li>
        </ul>`
      }
    }
  }

  useEffect(() => {
    const size = 13
    const arrayOfArrays = []
    for (let i = 0; i < heatMapData.length; i += size) {
      arrayOfArrays.push(heatMapData.slice(i, i + size))
    }

    const seriesValues = ['Q1', 'Q2', 'Q3', 'Q4']
    const finalArray = []
    for (let i = 0; i < arrayOfArrays.length; i++) {
      const newArray = arrayOfArrays[i].map((data) => {
        return { x: data.ror, y: data.grade, date: data.date }
      })
      const obj = {
        name: seriesValues[i],
        data: newArray
      }
      finalArray.push(obj)
    }

    setHeatData(finalArray)
  }, [heatMapData])


  return (
    <Card className='card-revenue-budget'
      style={{
        fontFamily: "OpenSans"
      }}
    >
      <Row className='mx-0'>
        <Col className='revenue-report-wrapper' md='8' xs='12'>
          <div className='d-sm-flex justify-content-between align-items-center mb-3'>
            <CardTitle className='mb-50 mb-sm-0'>Closing Balance</CardTitle>
            <div className='d-flex align-items-center'>
              <div className='d-flex align-items-center me-2'>
                <span className='bullet bullet-primary me-50 cursor-pointer'></span>
                <span>Balance</span>
              </div>
            </div>
          </div>
          <Chart id='revenue-report-chart' type='line' height='230' options={revenueOptions} series={revenueSeries} />
        </Col>
        <Col md='4' xs='12'>
          <CardTitle className='mt-1'>ROR by Week</CardTitle>
          <Chart options={options} series={heatData} type='heatmap' height={270} />
        </Col>
      </Row>
    </Card>
  )
}

export default RevenueReport
