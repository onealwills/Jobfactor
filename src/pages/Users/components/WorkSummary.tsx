import { Grid, Typography } from "@mui/material";
import Image from "../../../components/Image";
import CircleIcon from '@mui/icons-material/Circle';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

import nasa from '../../../assets/images/nasa.png';
import DashIcon from "../../../assets/icons/DashIcon";
import TraitChip from "./TraitChip";

const WorkSummary = () => (
    <Grid container gap={2.5} py={1.5} alignItems="center" wrap="nowrap">
        <Grid item>
            <Image
                src={nasa}
                alt="NASA"
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
                Lead Product Designer
            </Typography>
            <Grid container alignItems="center" wrap="nowrap" gap={1.5}>
                <Typography
                    component="p"
                    color="#808080"
                    fontFamily="open sans"
                    fontSize={14}
                    fontWeight={400}
                >
                    NASA
                </Typography>
                <CircleIcon sx={{ fontSize: "7.25px" }} htmlColor="#494949" />
                <Grid container alignItems="center" gap={.5}>
                        <Typography
                            component="span"
                            color="#808080"
                            fontFamily="open sans"
                            fontSize={14}
                            fontWeight={400}
                        >
                            2016
                        </Typography>
                            <DashIcon sx={{ fontSize: "16px" }} htmlColor="#494949" />
                        <Typography
                            component="span"
                            color="#808080"
                            fontFamily="open sans"
                            fontSize={14}
                            fontWeight={400}
                        >
                            Present
                        </Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center">
                    <TraitChip type="leader" />
            </Grid>
        </Grid>
    </Grid>
)

export default WorkSummary