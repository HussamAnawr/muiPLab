import { Box, Typography, useTheme} from "@mui/material"
import { token } from "../theme";

const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = token(theme.palette.mode)
    return (
        <Box mb="30px">
            <Typography 
            color={colors.grey[100]}
            variant="h2"
            fontWeight="700"
            mb="5px"
            >
                {title}
            </Typography>
            <Typography
            variant="h5"
            color={colors.greenAccent[400]}
            >
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Header