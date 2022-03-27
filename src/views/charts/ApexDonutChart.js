// ** Third Party Components
import Chart from 'react-apexcharts'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const ApexRadiarChart = () => {
  const donutColors = {
    series1: '#8833ff',
    series2: '#ff6633',
    series3: '#ffca33',
    series4: '#2b9bf4',
    series5: '#29cc39',
    series6: '#03b4ff'
  }

  // ** Chart Options
  const options = {
    legend: {
      show: true,
      position: 'left'
    },
    labels: ['KRW', 'BTC', 'ETH', 'XRP', 'BTT', 'et Cetera'],

    colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2, donutColors.series4, donutColors.series6],
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${parseInt(val)}%`
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '1rem',
              fontFamily: 'Montserrat'
            },
            value: {
              fontSize: '1rem',
              fontFamily: 'Montserrat',
              formatter(val) {
                return `${parseInt(val)}`
              }
            },
            total: {
              show: true,
              fontSize: '1.5rem',
              label: 'KRW',
              formatter() {
                return '47%'
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380
          },
          legend: {
            position: 'bottom'
          }
        }
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1.5rem'
                  },
                  value: {
                    fontSize: '1rem'
                  },
                  total: {
                    fontSize: '1.5rem'
                  }
                }
              }
            }
          }
        }
      }
    ]
  }

  // ** Chart Series
  const series = [6000000.00, 3000000.00, 2500000.00, 150000.00, 100000.00, 830000.00]

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Current Portfolio
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='donut' height={350} />
      </CardBody>
    </Card>
  )
}

export default ApexRadiarChart
