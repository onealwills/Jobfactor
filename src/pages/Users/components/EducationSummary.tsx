import { Grid, Typography } from "@mui/material";
import Image from "../../../components/Image";
import CircleIcon from '@mui/icons-material/Circle';

import cambridge from '../../../assets/images/cambridge.jpg';

const EducationSummary = () => (
    <Grid container gap={2.5} py={1.5} alignItems="center" wrap="nowrap">
        <Grid item>
            <Image
                src={cambridge}
                alt="University of Birmingham"
                sx={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover"
                }}
                border="3px #fff solid"
                borderRadius={2}
                display="block"
            />
        </Grid>
        <Grid item flexGrow={1}>
            <Typography
                component="h4"
                color="#23282B"
                fontFamily="open sans"
                fontSize={14}
                fontWeight={600}
                mb={.5}
            >
                Birmingham University
            </Typography>
            <Typography
                component="p"
                color="#808080"
                fontFamily="open sans"
                fontSize={14}
                fontWeight={400}
                mb={.5}
            >
                MSc Power Systems
            </Typography>
            <Grid container alignItems="center" gap={1.5}>
                    <Typography
                        component="span"
                        color="#808080"
                        fontFamily="open sans"
                        fontSize={14}
                        fontWeight={400}
                    >
                        2016
                    </Typography>
                    <CircleIcon sx={{ fontSize: "7.25px" }} htmlColor="#494949" />
                    <Typography
                        component="span"
                        color="#808080"
                        fontFamily="open sans"
                        fontSize={14}
                        fontWeight={400}
                    >
                        2018
                    </Typography>
            </Grid>
        </Grid>
    </Grid>
)

export default EducationSummary