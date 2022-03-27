// ** React Imports
import { Fragment } from 'react'
import { Row } from 'reactstrap'
import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const DailyStep = ({date, setDate}) => {

  return (
    <Fragment>
      <Row className='gy-1 gx-2'>
      <div className="DailyCalender">
        <Flatpickr
            className='form-control flat-picker bg-transparent border-0 shadow-none'
            value={date}
            onChange={date => {
              setDate(new Date(date[0]))
            }}
            options={{
            // eslint-disable-next-line no-mixed-operators
            //defaultDate: [new Date(), new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)],
            inline: true
            }}
        />
      </div>
      </Row>
    </Fragment>
  )
}

export default DailyStep
