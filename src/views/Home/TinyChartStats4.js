// ** Third Party Components
// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'
import TinyChartStats from '@components/widgets/stats/TinyChartStats'
                  
const TinyChartStats4 = () => {
  // ** Props
  return (
    <Card className='card-tiny-line-stats'
      style={{
      borderRadius: '10px',
      padding: '6px',
      fontFamily:"OpenSans",
      height: '185px'
    }}
    >
      <CardBody>
        <h6>Net transfer</h6>
        <h2 className='fw-bolder mb-1'>320,000</h2>
      </CardBody>
    </Card>
  )
}

export default TinyChartStats4

