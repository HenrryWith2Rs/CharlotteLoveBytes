import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import guestlist from '../data/guestlist.json';

const GuestTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID', type: 'number', flex: 0.5 },
    {
      field: 'Name',
      headerName: 'Name',
    },
    {
      field: 'Team',
      headerName: 'Team',
      align: 'left',
    },
    {
      field: 'Food',
      headerName: 'Food',
    },
    {
      field: 'Table',
      headerName: 'Table',
      type: 'number',
    },
    {
      field: 'Seat',
      headerName: 'Seat',
      type: 'number',
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
