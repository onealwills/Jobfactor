import { Grid, Typography } from "@mui/material";
import Image from "../../../components/Image";

import CircleIcon from '@mui/icons-material/Circle';
import DashIcon from "../../../assets/icons/DashIcon";

import TraitChip from "./TraitChip";
import { Ranking } from "../types/Ranking";

type MockWorkData = {
    employer: {
        name: string,
        image?: string,
    },
    title: string,
    yearStarted: string,
    yearEnded?: string,
    rankings: Ranking[]
}

type WorkSummaryProps = {
    data: MockWorkData
}

const WorkSummary = ({data: {employer, title, yearStarted, yearEnded, rankings}}: WorkSummaryProps) => (
    <Grid container gap={2.5} py={1.5} alignItems="center" wrap="nowrap">
        { employer.image && (
            <Grid item>

                <Image
                    src={ employer.image }
                    alt={ employer.name }
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
        )}
        <Grid item flexGrow={1}>
            <Typography
                component="h4"
                color="#23282B"
                fontFamily="open sans"
                fontSize={14}
                fontWeight={600}
                mb={.5}
            >
                { title }
            </Typography>
            <Grid
                container
                alignItems="center"
                wrap="nowrap"
                gap={1.5}
                mb={.5}
            >
                <Typography
                    component="p"
                    color="#808080"
                    fontFamily="open sans"
                    fontSize={14}
                    fontWeight={400}
                >
                    { employer.name }
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
                            { yearStarted }
                        </Typography>
                            <DashIcon sx={{ fontSize: "16px" }} htmlColor="#494949" />
                        <Typography
                            component="span"
                            color="#808080"
                            fontFamily="open sans"
                            fontSize={14}
                            fontWeight={400}
                        >
                            { yearEnded || 'Present' }
                        </Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center" gap={.75}>
                {
                    rankings.slice(0, 2).map(
                        (ranking) => (
                            <TraitChip type={ranking} />
                        )
                    )
                }
                {
                    rankings.length > 2 && Array(Math.min(2, rankings.length - 2)).fill('').map(
                        () => <CircleIcon sx={{ fontSize: "7.25px" }} htmlColor="#494949" />
                    )
                }
            </Grid>
        </Grid>
    </Grid>
)

export default WorkSummary