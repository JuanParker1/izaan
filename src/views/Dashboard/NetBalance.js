import React, { useState } from 'react'
import { Col, Card, Tooltip } from 'reactstrap'
import {  useSelector } from 'react-redux'
import { Prefix } from '../../utility/Utils'
const NetBalance = ({ pnl, ror }) => {
    const currency = useSelector(state => state.dashboard.selectedCurrency)
    const [toolTip, setToolTip] = useState(false)

    const toggle = () => {
        setToolTip(!toolTip)
    }

    return (
        <>
            <Col lg='6' md='6' xs='12'>
                <Card className='currentBlance'>
                    <p className='h'>Cumulative Revenue</p>
                    <div className='d-flex justify-content-between' style={{ marginTop: '30px' }}>
                        <p className='d'>PNL</p>
                        <p className='values' id="pnl">{Prefix(currency, pnl)}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='d'>ROR</p>
                        <p className='values'>{parseFloat(ror).toFixed(2)} %</p>
                    </div>
                </Card>
            </Col>
            <Tooltip placement="left" isOpen={toolTip} target="pnl" toggle={toggle}>
                {pnl}
            </Tooltip>
        </>
    )
}

export default NetBalance