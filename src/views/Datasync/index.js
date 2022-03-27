// ** React Imports
import React, { Fragment } from 'react'
// ** Reactstrap Imports

import { basicColumns } from '../data'
import { ChevronDown } from 'react-feather'
import TableWithButtons from './TableWithButtons'
import { unblinkedmainserver } from '@utility/apiserver/apiserver'
import {
  Card
} from 'reactstrap'
import axios from 'axios'
import { setApiKeys } from './../../redux/datasync'
import { useDispatch, useSelector } from 'react-redux'

const Datasync = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.datasync.apiKeys)

  React.useEffect(() => {
    axios.get(`${unblinkedmainserver}/user/apistatus`)
    .then((response) => {
      dispatch(setApiKeys(response.data))
    })
    .catch((error) => {
      console.log('error', error)
    })
    }, [])

  return (
    <Fragment>
      <Card>
      <div className='card-datatable app-user-list table-responsive'>
        
      <TableWithButtons
            noHeader
            pagination
            data={data}
            columns={basicColumns}
            className='react-dataTable'
            sortIcon={<ChevronDown size={10} />}
            paginationRowsPerPageOptions={[10, 25, 50, 100]}
        />
        </div>
      </Card>
    </Fragment>
  )
}

export default Datasync
