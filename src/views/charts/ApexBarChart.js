// ** Third Party Components
import Chart from 'react-apexcharts'


// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Row, Col } from 'reactstrap'

const ApexBarChart = () => {
  // ** Chart Options
  // const options = {
  //   chart: {
  //     parentHeightOffset: 0,
  //     toolbar: {
  //       show: false
  //     }
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: false,
  //       barHeight: '50%',
  //       columnWidth: '8%',
  //       borderRadius: [0, 5],
  //       colors: {
  //         backgroundBarColors: ['#f3f3f3', '#f3f3f3', '#f3f3f3', '#f3f3f3', '#f3f3f3'],
  //         backgroundBarRadius: 5
  //       }
  //     }
  //   },
  //   grid: {
  //     show: false
  //   },
  //   colors: 'rgb(236, 163, 102)',
  //   dataLabels: {
  //     enabled: false
  //   },
  //   xaxis: {
  //     labels: {
  //       show: false
  //     },
  //     axisBorder: {
  //       show: false
  //     },
  //     axisTicks: {
  //       show: false
  //     }
  //   },
  //   yaxis: {
  //     show: false
  //   }
  // }

  // // ** Chart Series
  // const series = [
  //   {
  //     data: [45, 65]
  //   }
  // ]

  return (
    <Card
      style={{
        height: '185px'
      }}
    >
      <CardBody>
      <h6>Net transfer</h6>
      <h2>320,000</h2>
        <div
          style={{
            position: 'relative',
            bottom: '20px'
          }}
        >
          {/* <Chart options={options} series={series} type='bar' height={110} /> */}
          {/* <Row>
            <Col xl='1'>
              <div
                style={{
                  backgroundColor: 'rgb(246, 183, 122)',
                  height: '70px',
                  width: '12px',
                  borderRadius: '10px',
                  marginTop: '10px'
                }}
              />
            </Col>
            <Col xl='5'>
              Deposit
            </Col>
            <Col xl='1'>
              <div
                style={{
                  backgroundColor: 'rgb(246, 183, 122)',
                  height: '70px',
                  width: '12px',
                  borderRadius: '10px',
                  marginTop: '10px'
                }}
              />
            </Col>
            <Col xl='5'>
              Withdrawal
            </Col>
          </Row> */}
        </div>
      </CardBody>
    </Card>
  )
}

export default ApexBarChart
