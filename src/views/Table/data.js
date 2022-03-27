// ** Custom Components
import Avatar from '@components/avatar'
import ApexLineChart from '../charts/ApexLineChart'
import CompanyTable from '../Home/CompanyTable'
import { useRTL } from '@hooks/useRTL'
import { ThemeColors } from '../../utility/context/ThemeColors'
import { useContext } from 'react'
// ** Third Party Components
//import axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, Row, Col, CardTitle } from 'reactstrap'

// ** Vars
//const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']
const status = {
  1: { title: 'Current', color: 'light-primary' },
  2: { title: 'Professional', color: 'light-success' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}

export const data = [
  {
    start_date: "01",
    Opening_Balance: "67,253,301",
    Deposit: "200,000",
    Withdrawal: "0",
    ROR: "4.23",
    Closing_Balance: "70,100,255",
    PNL: "2,846,954"
    },
    {
    start_date: "02",
    Opening_Balance: "70,300,255",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "1.31",
    Closing_Balance: "71,222,001",
    PNL: "921,746"
    },
    {
    start_date: "03",
    Opening_Balance: "71,222,001",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "5.93",
    Closing_Balance: "75,449,391",
    PNL: "4,227,390"
    },
    {
    start_date: "04",
    Opening_Balance: "75,449,391",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "-4.12",
    Closing_Balance: "72,338,491",
    PNL: "-3,110,900"
    },
    {
    start_date: "05",
    Opening_Balance: "72,338,491",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "-0.00",
    Closing_Balance: "72,338,101",
    PNL: "-390"
    },
    {
    start_date: "06",
    Opening_Balance: "72,338,101",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "2.96",
    Closing_Balance: "74,483,819",
    PNL: "2,145,718"
    },
    {
    start_date: "07",
    Opening_Balance: "74,483,819",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "5.83",
    Closing_Balance: "78,829,190",
    PNL: "4,345,371"
    },
    {
    start_date: "08",
    Opening_Balance: "78,829,190",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "1.52",
    Closing_Balance: "80,029,918",
    PNL: "1,200,728"
    },
    {
    start_date: "09",
    Opening_Balance: "80,029,918",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "-1.47",
    Closing_Balance: "78,849,101",
    PNL: "-1,180,817"
    },
    {
    start_date: "10",
    Opening_Balance: "78,849,101",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "-2.90",
    Closing_Balance: "76,555,849",
    PNL: "-2,293,252"
    },
    {
    start_date: "11",
    Opening_Balance: "76,555,849",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "10.92",
    Closing_Balance: "84,920,044",
    PNL: "8,364,195"
    },
    {
    start_date: "12",
    Opening_Balance: "84,920,044",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "4.30",
    Closing_Balance: "88,573,806",
    PNL: "3,653,762"
    },
    {
    start_date: "13",
    Opening_Balance: "88,573,806",
    Deposit: "0",
    Withdrawal: "5,000,000",
    ROR: "-3.39",
    Closing_Balance: "85,564,929",
    PNL: "-3,008,877"
    },
    {
    start_date: "14",
    Opening_Balance: "80,564,929",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "0.53",
    Closing_Balance: "80,993,912",
    PNL: "428,983"
    },
    {
    start_date: "15",
    Opening_Balance: "80,993,912",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "0.00",
    Closing_Balance: "80,993,912",
    PNL: "0"
    },
    {
    start_date: "16",
    Opening_Balance: "80,993,912",
    Deposit: "0",
    Withdrawal: "10,000,000",
    ROR: "0.00",
    Closing_Balance: "80,993,912",
    PNL: "0"
    },
    {
    start_date: "17",
    Opening_Balance: "70,993,912",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "0.32",
    Closing_Balance: "71,222,001",
    PNL: "228,089"
    },
    {
    start_date: "18",
    Opening_Balance: "71,222,001",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "-1.87",
    Closing_Balance: "69,883,940",
    PNL: "-1,338,061"
    },
    {
    start_date: "19",
    Opening_Balance: "69,883,940",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "3.03",
    Closing_Balance: "72,003,958",
    PNL: "2,120,018"
    },
    {
    start_date: "20",
    Opening_Balance: "72,003,958",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "6.32",
    Closing_Balance: "76,554,578",
    PNL: "4,550,620"
    },
    {
    start_date: "21",
    Opening_Balance: "76,554,578",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "15.70",
    Closing_Balance: "88,573,991",
    PNL: "12,019,413"
    },
    {
    start_date: "22",
    Opening_Balance: "88,573,991",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "10.64",
    Closing_Balance: "98,003,991",
    PNL: "9,430,000"
    },
    {
    start_date: "23",
    Opening_Balance: "98,003,991",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "26.51",
    Closing_Balance: "123,994,064",
    PNL: "25,990,073"
    },
    {
    start_date: "24",
    Opening_Balance: "123,994,064",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "13.35",
    Closing_Balance: "140,555,943",
    PNL: "16,561,879"
    },
    {
    start_date: "25",
    Opening_Balance: "140,555,943",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "24.50",
    Closing_Balance: "175,002,966",
    PNL: "34,447,023"
    },
    {
    start_date: "26",
    Opening_Balance: "175,002,966",
    Deposit: "0",
    Withdrawal: "30,000,000",
    ROR: "-5.45",
    Closing_Balance: "165,449,390",
    PNL: "-9,553,576"
    },
    {
    start_date: "27",
    Opening_Balance: "135,449,390",
    Deposit: "0",
    Withdrawal: "",
    ROR: "-4.86",
    Closing_Balance: "128,859,404",
    PNL: "-6,589,986"
    },
    {
    start_date: "28",
    Opening_Balance: "128,859,404",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "-14.68",
    Closing_Balance: "109,938,600",
    PNL: "-18,920,804"
    },
    {
    start_date: "29",
    Opening_Balance: "109,938,600",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "0.00",
    Closing_Balance: "109,938,600",
    PNL: "0"
    },
    {
    start_date: "30",
    Opening_Balance: "109,938,600",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "0.00",
    Closing_Balance: "109,938,600",
    PNL: "0"
    },
    {
    start_date: "31",
    Opening_Balance: "109,938,600",
    Deposit: "0",
    Withdrawal: "0",
    ROR: "-5.01",
    Closing_Balance: "104,428,921",
    PNL: "-5,509,679"
    }
]
// ** Get initial Data
//axios.get('/api/datatables/initial-data').then(response => {
//  data = response.data
//})

// ** Table Zero Config Column
export const basicColumns = [
  {
    name: 'ID',
    sortable: true,
    maxWidth: '100px',
    selector: row => row.id
  },
  {
    name: 'Name',
    sortable: true,
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '310px',
    selector: row => row.email
  },
  {
    name: 'Position',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Age',
    sortable: true,
    minWidth: '100px',
    selector: row => row.age
  },
  {
    name: 'Salary',
    sortable: true,
    minWidth: '175px',
    selector: row => row.salary
  }
]
// ** Table ReOrder Column
export const reOrderColumns = [
  {
    name: 'ID',
    reorder: true,
    sortable: true,
    maxWidth: '100px',
    selector: row => row.id
  },
  {
    name: 'Name',
    reorder: true,
    sortable: true,
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    reorder: true,
    sortable: true,
    minWidth: '310px',
    selector: row => row.email
  },
  {
    name: 'Position',
    reorder: true,
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Age',
    reorder: true,
    sortable: true,
    minWidth: '100px',
    selector: row => row.age
  },
  {
    name: 'Salary',
    reorder: true,
    sortable: true,
    minWidth: '175px',
    selector: row => row.salary
  }
]

// ** Expandable table component
const ExpandableTable = () => {
  const { colors } = useContext(ThemeColors)
  const [isRtl] = useRTL()
  return (
    <div className='expandable-content p-2'>
      <Row>
        <Col xl='6'>
          <CardTitle>
            Portfolio Distribution
          </CardTitle>
          <ApexLineChart direction={isRtl ? 'rtl' : 'ltr'} warning={colors.warning.main}/>
        </Col>
        <Col xl='6'>
          <CardTitle>
            Gainers & Losers
          </CardTitle>
          <CompanyTable/>
        </Col>
      </Row>
    </div>
  )
}

// ** Table Common Column
export const columns = [

  {
    name: 'Date',
    sortable: true,
    minWidth: '100px',
    selector: row => row.start_date
  },

  {
    name: 'Opening Balance',
    sortable: true,
    minWidth: '150px',
    selector: row => row.Opening_Balance
  },
  {
    name: 'Closing Balance',
    sortable: true,
    minWidth: '150px',
    selector: row => row.Closing_Balance
  },
  {
    name: 'PNL',
    sortable: true,
    minWidth: '100px',
    selector: row => row.PNL
  },
  {
    name: 'ROR(%)',
    sortable: true,
    minWidth: '100px',
    selector: row => row.ROR
  },
  {
    name: 'Deposit',
    sortable: true,
    minWidth: '100px',
    selector: row => row.Deposit
  },
  {
    name: 'Withdrawal',
    sortable: true,
    minWidth: '120px',
    selector: row => row.Withdrawal
  }
]

// ** Table Intl Column
export const multiLingColumns = [
  {
    name: 'Name',
    sortable: true,
    minWidth: '200px',
    selector: row => row.full_name
  },
  {
    name: 'Position',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    selector: row => row.email
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: row => row.start_date
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '150px',
    selector: row => row.salary
  },
  {
    name: 'Status',
    sortable: true,
    minWidth: '150px',
    selector: row => row.status,
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: () => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pe-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <FileText size={15} />
                <span className='align-middle ms-50'>Details</span>
              </DropdownItem>
              <DropdownItem>
                <Archive size={15} />
                <span className='align-middle ms-50'>Archive</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className='align-middle ms-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

// ** Table Server Side Column
export const serverSideColumns = [
  {
    sortable: true,
    name: 'Full Name',
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    sortable: true,
    name: 'Email',
    minWidth: '250px',
    selector: row => row.email
  },
  {
    sortable: true,
    name: 'Position',
    minWidth: '250px',
    selector: row => row.post
  },
  {
    sortable: true,
    name: 'Office',
    minWidth: '150px',
    selector: row => row.city
  },
  {
    sortable: true,
    name: 'Start Date',
    minWidth: '150px',
    selector: row => row.start_date
  },
  {
    sortable: true,
    name: 'Salary',
    minWidth: '150px',
    selector: row => row.salary
  }
]

// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'Name',
    sortable: true,
    minWidth: '200px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    selector: row => row.email
  },
  {
    name: 'Post',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'City',
    sortable: true,
    minWidth: '150px',
    selector: row => row.city
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: row => row.start_date
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '100px',
    selector: row => row.salary
  }
]

export default ExpandableTable
