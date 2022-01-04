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
      <IconButton onClick={() => {}} aria-label="edit student information">
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
      <IconButton aria-label="delete student" onClick={() => {}}>
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
