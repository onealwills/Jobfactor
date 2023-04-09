import { Grid, Typography } from "@mui/material";
import Image from "../../../components/Image";
import CircleIcon from '@mui/icons-material/Circle';

import cambridge from '../../../assets/images/cambridge.jpg';

type MockEducationData = {
    university: {
        name: string,
        image?: string,
    },
    major: string,
    yearStarted: string,
    yearEnded: string,
}

type EducationSummaryProps = {
    data: MockEducationData
}

const EducationSummary = ({data: {university, major, yearStarted, yearEnded}}: EducationSummaryProps) => (
    <Grid container gap={2.5} py={1.5} alignItems="center" wrap="nowrap">
        {university.image && (
            <Grid item>
                <Image
                    src={university.image}
                    alt={university.name}
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
                {university.name}
            </Typography>
            <Typography
                component="p"
                color="#808080"
                fontFamily="open sans"
                fontSize={14}
                fontWeight={400}
                mb={.5}
            >
                { major }
            </Typography>
            <Grid container alignItems="center" gap={1.5}>
                    <Typography
                        component="span"
                        color="#808080"
                        fontFamily="open sans"
                        fontSize={14}
                        fontWeight={400}
                    >
                        { yearStarted }
                    </Typography>
                    <CircleIcon sx={{ fontSize: "7.25px" }} htmlColor="#494949" />
                    <Typography
                        component="span"
                        color="#808080"
                        fontFamily="open sans"
                        fontSize={14}
                        fontWeight={400}
                    >
                        { yearEnded }
                    </Typography>
            </Grid>
        </Grid>
    </Grid>
)

export default EducationSummary