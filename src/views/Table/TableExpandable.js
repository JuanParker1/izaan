// ** React Imports

// ** Table columns & Expandable Data
import ExpandableTable, { columns, data } from './data'

// ** Third Party Components
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle } from 'reactstrap'

const DataTableWithButtons = () => {
  // ** State
  
  return (
    <Card>
      <div 
        className='react-dataTable'
        style={{
          height: '850px',
          overflow: 'scroll',
          fontFamily:"OpenSans",
          opacity:100
        }}
      >
        <DataTable
          noHeader
          pagination
          data={data}
          columns={columns}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
        />
      </div>
    </Card>
  )
}

export default DataTableWithButtons
