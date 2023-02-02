import { 
    useTheme, 
    Box, 
    Typography, 
    Accordion, 
    AccordionDetails, 
    AccordionSummary} from "@mui/material";
import Header from "../../components/Header";
import { token } from "../../theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const FAQ = () => {
    
    const theme = useTheme()
    const colors = token(theme.palette.mode)
    return ( 
    <Box m="20px"
    sx={{
        "& .MuiCollapse-entered": {
            borderTop: `solid 2px ${colors.greenAccent[700]}`,
        }
        // "& .MuiCollapse-root": {
        //     padding: ""
        // }
    }}>
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
        <Accordion sx={{mb: 1, backgroundColor: colors.primary[400]}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Important Questions
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{p: "20px 10px"}}>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt ratione cum sapiente dolore sequi impedit ex vel blanditiis repellat similique a non commodi sunt, error dolor, officiis eos mollitia quaerat hic numquam asperiores aliquid porro. Quas consequatur suscipit exercitationem?
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion sx={{mb: 1, backgroundColor: colors.primary[400]}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Important Questions
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{p: "20px 10px"}}>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt ratione cum sapiente dolore sequi impedit ex vel blanditiis repellat similique a non commodi sunt, error dolor, officiis eos mollitia quaerat hic numquam asperiores aliquid porro. Quas consequatur suscipit exercitationem?
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion sx={{mb: 1, backgroundColor: colors.primary[400]}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Important Questions
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{p: "20px 10px"}}>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt ratione cum sapiente dolore sequi impedit ex vel blanditiis repellat similique a non commodi sunt, error dolor, officiis eos mollitia quaerat hic numquam asperiores aliquid porro. Quas consequatur suscipit exercitationem?
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion sx={{mb: 1,backgroundColor: colors.primary[400]}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Important Questions
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{p: "20px 10px"}}>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt ratione cum sapiente dolore sequi impedit ex vel blanditiis repellat similique a non commodi sunt, error dolor, officiis eos mollitia quaerat hic numquam asperiores aliquid porro. Quas consequatur suscipit exercitationem?
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion sx={{mb: 2,backgroundColor: colors.primary[400]}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Important Questions
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{p: "20px 10px"}}>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt ratione cum sapiente dolore sequi impedit ex vel blanditiis repellat similique a non commodi sunt, error dolor, officiis eos mollitia quaerat hic numquam asperiores aliquid porro. Quas consequatur suscipit exercitationem?
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
    );
}

export default FAQ;