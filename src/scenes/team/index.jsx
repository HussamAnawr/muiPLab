import { useTheme, Box, Typography } from "@mui/material";
import { token } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";


const Team = () => {
  const theme = useTheme()
  const colors = token(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    { field: "age", headerName: "Age", type: "number", align: "left" },

    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "access", headerName: "Access Level", flex: 1 , renderCell: ({row: {access}}) => {
      return (
        <Box
        width="60%"
        p="5px"
        m="0 auto"
        display="flex"
        justifyContent="center"
        backgroundColor={
          access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]
        }
        borderRadius="4px"
        >
          {access === 'admin' && <AdminPanelSettingsIcon />}
          {access === 'manager' && <SecurityOutlinedIcon />}
          {access === 'user' && <LockOpenOutlinedIcon />}
          <Typography color={colors.grey[100]} sx={{ml: "5px"}} >
            {access}
          </Typography>
        </Box>
      )
    }},
  ];
  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Manage your team" />
      <Box mt={4} height="74vh" sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column-cell": {
          color: colors.greenAccent[300]
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none"
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: colors.blueAccent[700],
          borderTopLeftRadius: "none"
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
      }}>
        <DataGrid rows={mockDataTeam} columns={columns}/>
      </Box>
    </Box>
  );
};
export default Team;
