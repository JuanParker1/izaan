import React, { useState } from 'react'
import { Col, Card, Tooltip } from 'reactstrap'
import {  useSelector } from 'react-redux'
// import { kFormatter } from '../../utility/Utils'
import { Prefix } from '../../utility/Utils'
import moment from 'moment'

const CurrentBalance = ({ currentBalance, pnl }) => {
    const currency = useSelector(state => state.dashboard.selectedCurrency)
    const [currentBalanceToolTip, setCurrentBalanceToolTip] = useState(false)
    const [pnlToolTip, setPnlToolTip] = useState(false)

    const toggleCurrentBalanceToolTip = () => {
        setCurrentBalanceToolTip(!currentBalanceToolTip)
    }

    const togglePnlToolTip = () => {
        setPnlToolTip(!pnlToolTip)
    }

    return (
        <>
            <Col lg='6' md='6' xs='12'>
                <Card className='currentBlance'>
                    <p className='h'>Current Balance</p>
                    <p className='a' id="currentBalanceToolTip">{Prefix(currency, currentBalance)}</p>
                    <p className='bh' id="pnlToolTip">{Prefix(currency, pnl)}</p>
                    <p className='d'>Since {moment().format('YYYY-MM-DD')}</p>
                </Card>
            </Col>
            <Tooltip placement="right" isOpen={currentBalanceToolTip} target="currentBalanceToolTip" toggle={toggleCurrentBalanceToolTip}>
                {currentBalance}
            </Tooltip>
            <Tooltip placement="right" isOpen={pnlToolTip} target="pnlToolTip" toggle={togglePnlToolTip}>
                {pnl}
            </Tooltip>
        </>
    )
}

export default CurrentBalance