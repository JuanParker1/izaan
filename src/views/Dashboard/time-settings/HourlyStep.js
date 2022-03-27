// ** React Imports
import { Fragment } from 'react'
import { Row } from 'reactstrap'
import Flatpickr from 'react-flatpickr'

const HourlyStep = ({date, setDate}) => {

  return (
    <Fragment>
      <Row className='gy-1 gx-2'>
      <div className="MonthlyCalender">
        <Flatpickr
            className='form-control border-0 shadow-none'
            value={date}
            onChange={date => {
              setDate(new Date(date[0]))
            }}
            options={{
            // eslint-disable-next-line no-mixed-operators
            //defaultDate: [new Date(), new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)],
            defaultMinute: 0,
            inline: true,
            enableTime: true,
            time_24hr: true
            }}
        />
        </div>
      </Row>
     
    </Fragment>
  )
}

export default HourlyStep
