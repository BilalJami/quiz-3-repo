import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Name',
    headerName: 'name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'age',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'city',
    headerName: 'city',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, Name: 'akbar', age: 35, city: 'London'},
  { id: 2, Name: 'asghar', age: 42 , city: 'new york'},
  { id: 3, Name: 'jameel', age: 45, city: 'multan'},
  { id: 4, Name: 'khizir', age: 16 , city: 'lahore'},
  { id: 5, Name: 'ghulam yaseen', age: null , city: 'gujrat'},
  { id: 6, Name: null, age: 150 , city: 'peshawar'},
  { id: 7, Name: 'abdullah', age: 44 , city: 'islamabad'},
  { id: 8, Name: 'Ghlam Rasool', age: 36 , city: 'karachi'},
  { id: 9, Name: 'Allah Ditta', age: 65 , city: 'lodhran'},
];

export default function Table() {
  return (
    <div className='container'>
        <h1>Data Set</h1>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </div>
  );
}
