// ** React Imports
import { Fragment } from 'react'
import DataTable from 'react-data-table-component'
// ** Reactstrap Imports
import { Card } from 'reactstrap'
import { basicColumns } from '../data'
React.useEffect(() => {
  const token = localStorage.getItem('accessToken')
      console.log('type: ', typeof token)
  
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
  axios.get(`${unblinkedmainserver}/user/apistatus`,{
    headers
  }).then(response => {
    data = response.data
    console.log(data)
  })
  }, [])
const Permissions = () => {
  return (
    <Fragment>
      <h3>Permissions List</h3>
      <p>Each category (Basic, Professional, and Business) includes the four predefined roles shown below.</p>
      <Card>
        <div className='card-datatable app-user-list table-responsive'>
        <div className='react-dataTable'>
        <DataTable
          noHeader
          pagination
          data={data}
          columns={basicColumns}
          className='react-dataTable'
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
        />
      </div>
        </div>
      </Card>
    </Fragment>
  )
}

export default Permissions
