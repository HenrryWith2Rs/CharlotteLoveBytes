// src/components/GuestTable.jsx
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import useGuestList from '../utils/GuestListHandler';

const GuestTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { guestList, createGuest, readGuest, updateGuest, deleteGuest } = useGuestList();
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [open, setOpen] = useState(false);

  const handleRead = (id) => {
    const guest = readGuest(id);
    setSelectedGuest(guest);
    setOpen(true);
  };

  const handleUpdate = (id) => {
    const guest = readGuest(id);
    setSelectedGuest(guest);
    setOpen(true);
  };

  const handleDelete = (id) => {
    deleteGuest(id);
  };

  const handleClose = () => {
    setSelectedGuest(null);
    setOpen(false);
  };

  const handleSave = () => {
    if (selectedGuest.id) {
      updateGuest(selectedGuest.id, selectedGuest);
    } else {
      createGuest(selectedGuest);
    }
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedGuest({ ...selectedGuest, [name]: value });
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
      flex: 1,
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
          <Button
            onClick={() => handleRead(params.row.id)}
            sx={{
              border: `1px solid ${colors.primary[200]}`,
              color: colors.primary[200],
              minWidth: '40px',
            }}
          >
            <VisibilityIcon />
          </Button>
          <Button
            onClick={() => handleUpdate(params.row.id)}
            sx={{
              border: `1px solid ${colors.primary[200]}`,
              color: colors.primary[200],
              minWidth: '40px',
            }}
          >
            <EditIcon />
          </Button>
          <Button
            onClick={() => handleDelete(params.row.id)}
            sx={{
              border: `1px solid ${colors.primary[200]}`,
              color: colors.primary[200],
              minWidth: '40px',
            }}
          >
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
        height="99vh"
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
        <DataGrid rows={guestList} columns={columns} components={{ Toolbar: GridToolbar }} />
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedGuest?.id ? 'Edit Guest' : 'Add Guest'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedGuest?.id ? 'Edit the details of the guest.' : 'Fill in the details of the new guest.'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="Name"
            label="Name"
            type="text"
            fullWidth
            value={selectedGuest?.Name || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="Team"
            label="Team"
            type="text"
            fullWidth
            value={selectedGuest?.Team || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="Food"
            label="Food"
            type="text"
            fullWidth
            value={selectedGuest?.Food || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="RSVP"
            label="RSVP"
            type="text"
            fullWidth
            value={selectedGuest?.RSVP || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="Table"
            label="Table"
            type="number"
            fullWidth
            value={selectedGuest?.Table || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="Seat"
            label="Seat"
            type="number"
            fullWidth
            value={selectedGuest?.Seat || ''}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default GuestTable;
