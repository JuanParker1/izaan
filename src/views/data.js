// ** Table Zero Config Column
export const basicColumns = [
  {
    name: 'public key',
    sortable: true,
    maxWidth: '500px',
    selector: row => row.public_key
  },
  {
    name: 'Exchange',
    sortable: true,
    minWidth: '100px',
    selector: row => row.exchange
  },
  {
    name: 'Status',
    sortable: true,
    minWidth: '75px',
    selector: row => (row.is_work ? 'normal' : 'not working'),
    conditionalCellStyles: [
      {
        when: row => row.is_work,
        style: {
          color: '#4ACF84'
        }
      },
      {
        when: row => !row.is_work,
        style: {
          color: '#EB5D5E'
        }
      }
    ]
  }
]