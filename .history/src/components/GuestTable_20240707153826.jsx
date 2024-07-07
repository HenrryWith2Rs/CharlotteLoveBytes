import React from 'react';
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import useGuestList from '../hooks/useGuestList'; // Import useGuestList hook instead of guestlist

const GuestTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { guestList, deleteGuest, updateGuest } = useGuestList(); // Destructure guestList, deleteGuest, updateGuest from useGuestList

  const handleRead = (id) => {
    // Implement read functionality if needed
    console.log(`Read guest with ID ${id}`);
  };

  const handleUpdate = (id) => {
    const updatedName = prompt('Enter new name:');
    if (updatedName) {
      updateGuest(id, { Name: updatedName }); // Call updateGuest function from useGuestList hook
    }
  };

  const handleDelete = (id) => {
    deleteGuest(id); // Call deleteGuest function from useGuestList hook
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
          <Button onClick={() => handleRead(params.row.id)}>
            <VisibilityIcon />
          </Button>
          <Button onClick={() => handleUpdate(params.row.id)}>
            <EditIcon />
          </Button>
          <Button onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </Button>
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
            backgroundColor: color
