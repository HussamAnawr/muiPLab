import { useState } from 'react';
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import "react-pro-sidebar/dist/css/styles.css"
import { useTheme, Box, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import {token} from '../../theme'
import HomeOutlined from "@mui/icons-material/HomeOutlined"
import PeopleOutlined from "@mui/icons-material/PeopleOutlined"
import ContactsOutlined from "@mui/icons-material/ContactsOutlined"
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined"
import PersonOutline from "@mui/icons-material/PersonOutline"
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined"
import HelpOutline from "@mui/icons-material/HelpOutline"
import BarChartOutlined from "@mui/icons-material/BarChartOutlined"
import PieChartOutlined from "@mui/icons-material/PieChartOutlined"
import TimelineOutlined from "@mui/icons-material/TimelineOutlined"
import MenuOutlined from "@mui/icons-material/MenuOutlined"
import MapOutlined from "@mui/icons-material/MapOutlined"
import profileImage from "../../assets/123.png"


const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme()
    const colors = token(theme.palette.mode)
    return (
        <MenuItem 
        active={selected === title}
        icon={icon}
        onClick={() => setSelected(title)}
        style={{color: colors.grey[100]}}
        >
            <Typography>{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    )
}

const Sidebar = () => {
    const theme = useTheme()
    const colors = token(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState('Dashboard')

    return <Box sx={{
        '& .pro-sidebar-inner': {
            background: `${colors.primary[400]} !important`
        },
        '& .pro-icon-wrapper': {
            background: "transparent !important"
        },
        '& .pro-inner-item': {
            padding: "0px 35px 0px 20px !important",
            transition: 'color 0.3s'
        },
        '& .pro-inner-item:hover': {
            color: "#868dfb !important"
        },
        '& .pro-menu-item.active': {
            color: "#6870fa !important"
        },
    }}>
        <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape='square'>
                <MenuItem 
                onClick={() => setIsCollapsed(prev => !prev)}
                icon={isCollapsed ? <MenuOutlined/> : undefined} 
                style={{
                    margin: "10px 0 10px 0",
                    color: colors.grey[100]
                }}>
                    {!isCollapsed && (
                        <Box 
                        display='flex' 
                        justifyContent={'space-between'} 
                        alignItems='center' 
                        ml="15px">
                            <Typography variant='h3' color={colors.grey[100]}>ADMINIS</Typography>
                            <IconButton>
                                <MenuOutlined/>
                            </IconButton>
                        </Box>
                    )}
                </MenuItem>

                {/* User */}
                {!isCollapsed && (
                    <Box mb="15px">
                        <Box display='flex' justifyContent="center" alignItems="center">
                            <img
                            alt="profile-use"
                            width="70px"
                            height="70"
                            src={profileImage}
                            style={{cursor: "pointer", borderRadius: "50%"}}
                             />
                        </Box>
                        <Box textAlign='center'>
                            <Typography variant='h3' color={colors.grey[100]} fontWeight="700" mt="10px">Amani Hussam</Typography>
                            <Typography variant='h5' color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
                        </Box>
                    </Box>
                    )}
                
                {/* Menu Items */}
                
                <Box pl={isCollapsed ? undefined : "10%"}>
                    <Item 
                    title="Dashboard"
                    to="/"
                    icon={<HomeOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Typography
                    variant='h6'
                    color={colors.grey[300]}
                    m="15px 0 5px 20px"
                    >
                        Data
                    </Typography>
                    <Item 
                    title="Manage Team"
                    to="/team"
                    icon={<PeopleOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    title="Contacts Information"
                    to="/contacts"
                    icon={<ContactsOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    title="Invoices Balances"
                    to="/invoices"
                    icon={<ReceiptOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Typography
                    variant='h6'
                    color={colors.grey[300]}
                    m="15px 0 5px 20px"
                    >
                        Pages
                    </Typography>
                    <Item 
                    title="Profile Form"
                    to="/form"
                    icon={<PersonOutline />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    title="Calendar"
                    to="/calender"
                    icon={<CalendarTodayOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    title="FAQ Page"
                    to="/faq"
                    icon={<HelpOutline />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Typography
                    variant='h6'
                    color={colors.grey[300]}
                    m="15px 0 5px 20px"
                    >
                        Charts
                    </Typography>
                    <Item 
                    title="Bar Chart"
                    to="/bar"
                    icon={<BarChartOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    title="Pie Chart"
                    to="/pie"
                    icon={<PieChartOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    title="Line Chart"
                    to="/line"
                    icon={<TimelineOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    title="Geography Chart"
                    to="/geography"
                    icon={<MapOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                </Box>
            </Menu>
        </ProSidebar>

    </Box>
}

export default Sidebar;