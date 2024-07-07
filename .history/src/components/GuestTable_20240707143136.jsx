import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';

const GuestTable = () => {
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
      headerAlign: 'center',
      align: 'left',
    },
    {
      field: 'Food',
      headerName: 'Food',
      headerAlign: 'center',
      flex: 1,
    },
    {
      field: 'Table',
      headerName: 'Table',
      headerAlign: 'center',
      type: 'number',
      flex: 1,
    },
    {
      field: 'Seat',
      headerName: 'Seat',
      headerAlign: 'center',
      type: 'number',
      flex: 1,
    },
  ];
};
