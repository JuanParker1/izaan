// ** Third Party Components
// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'

const TinyChartStats2 = ({pnl}) => {
  // ** Props

  return (
    <div>
      <h6>PNL</h6>
      <h3 className='fw-bolder mb-1'>{pnl}</h3>
    </div>
  )
}

export default TinyChartStats2

