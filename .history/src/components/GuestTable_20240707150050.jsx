import { Box, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import guestlist from '../data/guestlist.json';
import { updateGuest, deleteGuest } from '../utils/GuestListHandler'; // Ensure you import your functions

const GuestTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleUpdate = (id) => {
    // Call your updateGuest function here
    const guestToUpdate = guestlist.find((guest) => guest.id === id);
    if (guestToUpdate) {
      // Modify guest data as needed
      const updatedGuest = { ...guestToUpdate, Name: 'Updated Name' }; // Example update
      updateGuest(id, updatedGuest);
    }
  };

  const handleDelete = (id) => {
    // Call your deleteGuest function here
    deleteGuest(id);
  };

  const columns = [
    { field: 'id', headerName: 'ID', type: 'number', flex: 0.5 },
    { field: 'Name', headerName: 'Name', flex: 1 },
    { field: 'Team', headerName: 'Team', align: 'left' },
    { field: 'Food', headerName: 'Food', flex: 1 },
    { field: 'RSVP', headerName: 'RSVP', flex: 1 },
    { field: 'Table', headerName: 'Table', type: 'number', flex: 1 },
    { field: 'Seat', headerName: 'Seat', type: 'number', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        return (
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleUpdate(params.row.id)}
              style={{ marginRight: '10px' }}
            >
              Update
            </Button>
            <Button variant="contained" color="secondary" onClick={() => handleDelete(params.row.id)}>
              Delete
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': { border: 'none' },
          '& .MuiDataGrid-cell': { borderBottom: 'none' },
          '& .name-column--cell': { color: colors.greenAccent[300] },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': { backgroundColor: colors.primary[400] },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': { color: `${colors.greenAccent[200]} !important` },
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
