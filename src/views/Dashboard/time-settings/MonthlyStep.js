// ** React Imports
import { Fragment } from 'react'
import { Col, Button } from 'reactstrap'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'react-feather'

const MonthlyStep = ({YearData, SetYearData, month, setMonth}) => {

  return (
    <Fragment>
        <div>
        <div className="yearChangebtn">
            <button
            onClick={() => {
                { YearData === 2017 ? (
                    SetYearData(YearData)
                ) : SetYearData(YearData - 1) }
            }}
            style={{
                backgroundColor:'transparent',
                border: 'none',
                position: 'relative',
                left: '30px'
            }}
            >
            <ChevronLeft/>
            </button>
            <h4>{YearData}</h4>
            <button
            onClick={() => {
                { YearData === 2022 ? (
                    SetYearData(YearData)
                ) : SetYearData(YearData + 1) }
            }}
            style={{
                backgroundColor:'transparent',
                border: 'none',
                position: 'relative',
                right: '30px'
            }}
            >
            <ChevronRight/>
            </button>
        </div>
        <div className="monthChangebtn">
            <Col>
            <Button
                value={month}
                onClick={() => setMonth(1)}
                className="Monthlybtn"
                outline
                style={{
                }}
            >January</Button>
            <Button
             value={month}
             onClick={() => setMonth(2)}
            className="Monthlybtn"
                outline
                style={{
            }}
            >February</Button>
            <Button
             value={month}
             onClick={() => setMonth(3)}
            className="Monthlybtn"
                outline
                style={{
            }}
            >March</Button>
            </Col>
            <Col>
            <Button
             value={month}
             onClick={() => setMonth(4)}
            className="Monthlybtn"
                outline
                style={{
            }}
            >April</Button>
            <Button
             value={month}
             onClick={() => setMonth(5)}
            className="Monthlybtn"
                outline
                style={{
            }}
            >May</Button>
            <Button
             value={month}
             onClick={() => setMonth(6)}
            className="Monthlybtn"
                outline
                style={{
            }}
            >June</Button>
            </Col>
            <Col>
            <Button
             value={month}
             onClick={() => setMonth(7)}
            className="Monthlybtn"
                outline
                style={{
            }}
            >July</Button>
            <Button
             value={month}
             onClick={() => setMonth(8)}
            className="Monthlybtn"
                outline
                style={{
            }}
            >August</Button>
            <Button
             value={month}
             onClick={() => setMonth(9)}
            className="Monthlybtn"
                outline
                style={{
            }}
            >September</Button>
            </Col>
            <Col>
            <Button
             value={month}
             onClick={() => setMonth(10)}
            className="Monthlybtn"
                outline
                style={{
            }}
            >October</Button>
            <Button
             value={month}
             onClick={() => setMonth(11)}
            className="Monthlybtn"
                outline
                style={{
            }}
            >November</Button>
            <Button
             value={month}
             onClick={() => setMonth(12)}
            className="Monthlybtn"
                outline
                style={{
            }}
            >December</Button>
            </Col>
        </div>
    </div>
    </Fragment>
  )
}

export default MonthlyStep
