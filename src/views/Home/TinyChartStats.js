// ** Third Party Components
// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'
const TinyChartStats = () => {
  //** Props
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
        <h6>Current balance</h6>
        <h2 className='fw-bolder mb-1'>75,011,743</h2>
        
      </CardBody>
    </Card>
  )
}

export default TinyChartStats

