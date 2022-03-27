// ** Custom Components
import Avatar from '@components/avatar'
import { useTranslation } from 'react-i18next'

// ** Reactstrap Imports
import { Table, Card } from 'reactstrap'
import { data} from '../Table/data'
// ** Icons Imports
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'
import '../../@core/scss/base/components/hometable.scss'
const CompanyTable = () => {
  // ** vars
  const { t } = useTranslation()
  const renderData = () => {
    return data.map(col => {
      const IconTag = col.ROR > 0 ? (
        <TrendingUp size={20} className='text-success' />
      ) : (
        <TrendingDown size={20} className='text-danger' />
      )
      return (
        <tr
        style={{
          borderRadius: '10px',
          fontFamily:"OpenSans"
        }}>
          <td>
            <div
              style={{
                minHeight:'24px',
                position: 'relative',
                top: '2px'
              }}
            >
              {col.start_date}
            </div>
          </td>
          <td>
            <div
              style={{
                minHeight:'24px',
                position: 'relative',
                top: '2px'
              }}
            >
              {col.Opening_Balance}
            </div>
          </td>
          <td>
            <div
              style={{
                minHeight:'24px',
                position: 'relative',
                top: '2px'
              }}
            >
              {col.Closing_Balance}
            </div>
          </td>
          <td>
            <div
              style={{
                minHeight:'24px',
                position: 'relative',
                top: '2px'
              }}
            >
              {col.PNL}
            </div>
          </td>
          <td>
            <div
              style={{
                minHeight:'24px',
                position: 'relative',
                top: '2px'
              }}
            >
              {col.ROR}<span>{IconTag}</span>
            </div>
          </td>
          <td>
            <div
              style={{
                minHeight:'24px',
                position: 'relative',
                top: '2px'
              }}
            >
              <span>{col.Deposit}</span>
            </div>
          </td>
          <td>
            <div
              style={{
                minHeight:'24px',
                position: 'relative',
                top: '2px'
              }}
            >
              <span>{col.Withdrawal}</span>
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
