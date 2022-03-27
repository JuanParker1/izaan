// ** Custom Components
import Avatar from '@components/avatar'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
// ** Reactstrap Imports

import { Table, Card } from 'reactstrap'
import { unblinkedmainserver } from '@utility/apiserver/apiserver'
import { useEffect } from 'react'
// ** Icons Imports
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'
import '../../@core/scss/base/components/hometable.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setRevenueReports } from './../../redux/dashboard'
import moment from 'moment'

const CompanyTable = () => {
  const data = useSelector(state => state.dashboard.reports)
  const selectedFormat = useSelector(state => state.dashboard.selectedFormat)
  const dispatch = useDispatch()
  // ** vars
  useEffect(() => {
    const reqdata = {
      start_time: moment().format('YYYY-MM-DD 00:00:00'),
      interval: "DAILY",
      market: "BTC"
    }
    axios.post(`${unblinkedmainserver}/revenue/report`, reqdata)
      .then((res) => {
        dispatch(setRevenueReports(res.data))
      })
      .catch((error) => {
        console.log('error', error)
      })
  }, [])

  const { t } = useTranslation()

  const renderData = () => {
    return data.map(col => {
      const IconTag = col.ror > 0 ? (
        <TrendingUp size={20} className='text-success' />
      ) : (
        <TrendingDown size={20} className='text-danger' />
      )
      return (
        <tr
          key={col.open}
          style={{
            borderRadius: '10px',
            fontFamily: "OpenSans"
          }}>
          <td>
            <div
              style={{
                minHeight: '24px',
                position: 'relative',
                top: '2px'
              }}
            >
              {moment(col.date).format(selectedFormat)}
            </div>
          </td>
          <td>
            <div
              style={{
                minHeight: '24px',
                position: 'relative',
                top: '2px'
              }}
            >
              {col.open}
            </div>
          </td>
          <td>
            <div
              style={{
                minHeight: '24px',
                position: 'relative',
                top: '2px'
              }}
            >
              {col.close}
            </div>
          </td>
          <td>
            <div
              style={{
                minHeight: '24px',
                position: 'relative',
                top: '2px'
              }}
            >
              {col.pnl}
            </div>
          </td>
          <td>
            <div
              style={{
                minHeight: '24px',
                position: 'relative',
                top: '2px'
              }}
            >
              {col.ror}<span>{IconTag}</span>
            </div>
          </td>
          <td>
            <div
              style={{
                minHeight: '24px',
                position: 'relative',
                top: '2px'
              }}
            >
              <span>{col.deposit}</span>
            </div>
          </td>
          <td>
            <div
              style={{
                minHeight: '24px',
                position: 'relative',
                top: '2px'
              }}
            >
              <span>{col.withdrawal}</span>
            </div>
          </td>
        </tr>
      )
    })
  }
  return (
    <Card
      className='card-company-table'
      style={{
        height: '852px',
        fontFamily: 'OpenSans'
      }}
    >
      <Table
        responsive
      >
        <thead className='homtableheadwrapper'
          style={{
            minHeight: '24px',
            padding: '10px'
          }}
        >
          <tr
            style={{
              minHeight: '24px',
              fontSize: '30px'
            }}
          >
            <th>
              <div className="homtablehead">{t('Date')}</div>
            </th>
            <th>
              <div className="homtablehead">{t('Opening')}</div>
            </th>
            <th>
              <div className="homtablehead">{t('Closing')}</div>
            </th>
            <th>
              <div className="homtablehead">{t('PNL')}</div>
            </th>
            <th>
              <div className="homtablehead">{t('ROR')}</div>
            </th>
            <th>
              <div className="homtablehead1">{t('Deposit')}</div>
            </th>
            <th>
              <div className="homtablehead1">{t('Withdrawal')}</div>
            </th>
          </tr>
        </thead>
        <tbody className="hometablebody">{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CompanyTable
