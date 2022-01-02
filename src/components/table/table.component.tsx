import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchStudentStart } from '../../redux/students/student.actions';
import { RootState } from '../../redux/root-reducer';

import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import SimpleModal from '../modal/simple-modal.component';

const columns = [
  { flex: 1, field: '_id', headerName: '#', width: 100 },
  {
    flex: 1,
    field: 'fullName',
    headerName: 'Student Name',
    valueGetter: (params: any) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    flex: 1,
    field: 'edit',
    headerName: 'Edit',
    editable: false,
    renderCell: () => (
      <IconButton
        onClick={() => {
          console.log('hey');
        }}
        aria-label="edit student information"
      >
        <EditIcon />
      </IconButton>
    ),
  },
  {
    flex: 1,
    field: 'delete',
    headerName: 'Delete',
    editable: false,
    renderCell: () => (
      <IconButton
        aria-label="delete student"
        onClick={() => {
          console.log('hey');
        }}
      >
        <DeleteIcon />
      </IconButton>
    ),
  },
  {
    flex: 1,
    field: 'View Details',
    headerName: 'View Details',
    editable: false,
    renderCell: () => <SimpleModal />,
  },
];

const rows = [
  {
    id: 1,
    firstName: 'Jon',
    lastName: 'Snow',
    birthDate: 35,
    address: 'Honduras',
    email: 'Jon@gmail.com',
    gender: 'male',
  },
  {
    id: 2,
    firstName: 'Cersei',
    lastName: 'Lannister',
    birthDate: 42,
    address: 'Honduras',
    email: 'Cersei@gmail.com',
    gender: 'female',
  },
  {
    id: 3,
    firstName: 'Jaime',
    lastName: 'Lannister',
    birthDate: 45,
    address: 'Honduras',
    email: 'Lannister@gmail.com',
    gender: 'male',
  },
  {
    id: 4,
    firstName: 'Arya',
    lastName: 'Stark',
    birthDate: 16,
    address: 'Honduras',
    email: 'Arya@gmail.com',
    gender: 'female',
  },
  {
    id: 5,
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    birthDate: null,
    address: 'Honduras',
    email: 'Daenerys@gmail.com',
    gender: 'female',
  },
  {
    id: 6,
    firstName: null,
    lastName: 'Melisandre',
    birthDate: 150,
    address: 'Honduras',
    email: 'Melisandre@gmail.com',
    gender: 'female',
  },
  {
    id: 7,
    firstName: 'Ferrara',
    lastName: 'Clifford',
    birthDate: 44,
    address: 'Honduras',
    email: 'Ferrara@gmail.com',
    gender: 'male',
  },
  {
    id: 8,
    firstName: 'Rossini',
    lastName: 'Frances',
    birthDate: 36,
    address: 'Honduras',
    email: 'Rossini@gmail.com',
    gender: 'male',
  },
  {
    id: 9,
    firstName: 'Harvey',
    lastName: 'Roxie',
    birthDate: 65,
    address: 'Honduras',
    email: 'Harvey@gmail.com',
    gender: 'femamle',
  },
];

const Table = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentStart());
  }, [dispatch]);

  const { isFetching, students, errorMessage } = useSelector(
    (state: RootState) => state.student
  );

  const studentsMapped = students.map(student => {
    return { id: student._id, ...student };
  });

  return (
    <div>
      {isFetching ? (
        <div>Loading</div>
      ) : errorMessage ? (
        <div>Error</div>
      ) : (
        <div style={{ height: 400, width: '100%' }}>
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexGrow: 1 }}>
              <DataGrid
                rows={studentsMapped}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
