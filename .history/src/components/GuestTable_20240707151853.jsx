import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import { createGuest, readGuestList, updateGuest, deleteGuest } from '../utils/GuestListHandler';

const GuestTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [guestlist, setGuestlist] = useState([]);

  useEffect(() => {
    // Load initial guest list when component mounts
    setGuestlist(readGuestList());
  }, []);

  const handleDelete = (id) => {
    const deletedGuest = deleteGuest(id);
    if (deletedGuest) {
      setGuestlist(readGuestList());
    }
  };

  const handleUpdate = (id) => {
    const updatedName = prompt('Enter new name:');
    if (updatedName) {
      const updatedGuest = updateGuest(id, { Name: updatedName });
      if (updatedGuest) {
        setGuestlist(readGuestList());
      }
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', type: 'number', flex: 0.5 },
    {
      field: 'Name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'Team',
      headerName: 'Team',
      align: 'left',
    },
    {
      field: 'Food',
      headerName: 'Food',
      flex: 1,
    },
    {
      field: 'RSVP',
      headerName: 'RSVP',
      flex: 1,
    },
    {
      field: 'Table',
      headerName: 'Table',
      type: 'number',
      flex: 1,
    },
    {
      field: 'Seat',
      headerName: 'Seat',
      type: 'number',
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <div>
          <Button onClick={() => handleUpdate(params.row.id)}>Update</Button>
          <Button onClick={() => handleDelete(params.row.id)}>Delete</Button>
        </div>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid rows={guestlist} columns={columns} components={{ Toolbar: GridToolbar }} />
      </Box>
    </Box>
  );
};

export default GuestTable;
