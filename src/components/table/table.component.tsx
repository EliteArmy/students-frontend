import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../redux/root-reducer';

import {
  deleteStudentStart,
  fetchStudentStart,
} from '../../redux/students/student.actions';

import { Student } from '../../interfaces/student';

import { DataGrid, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import SimpleModal from '../modal/simple-modal.component';

const Table = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  useEffect(() => {
    dispatch(fetchStudentStart());
  }, [dispatch]);

  useEffect(() => {
    setOpen(true);
  }, [selectedStudent]);

  const { isFetching, students, errorMessage } = useSelector(
    (state: RootState) => state.students
  );

  // Controls the Modal:
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = (id: string) => () => {
    const foundStudent = students.find(students => {
      if (students._id) {
        return students._id === id;
      } else return false;
    });
    if (foundStudent) {
      setSelectedStudent(foundStudent);
    }
  };

  const handleClickEdit = (id: string) => () => {
    navigate(`/edit/${id}`);
  };

  const handleClickDelete = (id: string) => () => {
    dispatch(deleteStudentStart({ id }));
  };

  const studentsMapped = students.map(student => {
    return { id: student._id, ...student };
  });

  const columns = [
    { flex: 1, field: '_id', headerName: '#', width: 100 },
    {
      flex: 1,
      field: 'fullName',
      headerName: 'Student Name',
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      flex: 1,
      field: 'edit',
      headerName: 'Edit',
      editable: false,
      renderCell: (params: GridValueGetterParams) => (
        <IconButton
          aria-label="edit student information"
          onClick={handleClickEdit(params.row.id)}
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
      renderCell: (params: GridValueGetterParams) => (
        <IconButton
          aria-label="delete student"
          onClick={handleClickDelete(params.row.id)}
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
      renderCell: (params: GridValueGetterParams) => (
        <Button variant="outlined" onClick={handleClickOpen(params.row.id)}>
          View Details
        </Button>
      ),
    },
  ];

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
              />
              {selectedStudent && (
                <SimpleModal
                  open={open}
                  selectedStudent={selectedStudent}
                  label={'View Details'}
                  onClose={handleClose}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
