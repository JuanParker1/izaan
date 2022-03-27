// ** Third Party Components
// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'

const TinyChartStats3 = ({ror}) => {
  // ** Props

  return (
      <div className='pb-50'>
        <h6>ROR(%)</h6>
        <h3 className='fw-bolder mb-1'>{parseFloat(ror).toFixed(2)}%</h3>
      </div>
  )
}

export default TinyChartStats3

