import { useTheme, Box, Typography } from "@mui/material";
import { token } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { mockDataInvoices } from "../../data/mockData";

const Invoices = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "cost", headerName: "Cost", flex: 1 , renderCell: (params) => (
        <Typography variant="h6" fontWeight="700" color={colors.greenAccent[500]}>
            {params.row.cost}
        </Typography>
    )},
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
  ];
  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of invoices balances" />
      <Box
        mt={4}
        height="74vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column-cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.blueAccent[700],
            borderTopLeftRadius: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid 
        checkboxSelection 
        rows={mockDataInvoices} 
        columns={columns} />
      </Box>
    </Box>
  );
};
export default Invoices;
