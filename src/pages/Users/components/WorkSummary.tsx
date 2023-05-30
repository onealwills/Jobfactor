import { Grid, Typography, Box } from '@mui/material';
import Image from '../../../components/Image';

import CircleIcon from '@mui/icons-material/Circle';
import DashIcon from '../../../assets/icons/DashIcon';

import TraitChip from './TraitChip';
import { Ranking } from '../types/Ranking';

interface MockWorkData {
    employer: {
        name: string;
        image?: string;
    };
    title: string;
    yearStarted: string;
    yearEnded?: string;
    rankings?: Ranking[];
    skills?: string[];
}

interface WorkSummaryProps {
    data: MockWorkData;
}

const WorkSummary = ({
    data: { employer, title, yearStarted, yearEnded, rankings, skills }
}: WorkSummaryProps) => (
    <Box>
        <Grid container gap={2.5} py={1.5} alignItems="center" wrap="nowrap">
            {employer.image && (
                <Grid item>
                    <Image
                        src={employer.image}
                        alt={employer.name}
                        sx={{
                            width: '64px',
                            height: '64px',
                            objectFit: 'cover'
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
                    mb={0.5}
                >
                    {title}
                </Typography>
                <Grid
                    container
                    alignItems="center"
                    wrap="nowrap"
                    gap={1.5}
                    mb={0.5}
                >
                    <Typography
                        component="p"
                        color="#808080"
                        fontFamily="open sans"
                        fontSize={14}
                        fontWeight={400}
                        flexShrink={0}
                    >
                        {employer.name}
                    </Typography>
                    {!!rankings?.length ? (
                        <>
                            <CircleIcon
                                sx={{ fontSize: '7.25px' }}
                                htmlColor="#494949"
                            />
                            <Grid container alignItems="center" gap={0.5}>
                                <Typography
                                    component="span"
                                    color="#808080"
                                    fontFamily="open sans"
                                    fontSize={14}
                                    fontWeight={400}
                                >
                                    {yearStarted}
                                </Typography>
                                <DashIcon
                                    sx={{ fontSize: '16px' }}
                                    htmlColor="#494949"
                                />
                                <Typography
                                    component="span"
                                    color="#808080"
                                    fontFamily="open sans"
                                    fontSize={14}
                                    fontWeight={400}
                                >
                                    {yearEnded || 'Present'}
                                </Typography>
                            </Grid>
                        </>
                    ) : null}
                </Grid>
                {!!rankings?.length ? (
                    <Grid
                        container
                        alignItems="center"
                        gap={0.75}
                        wrap="nowrap"
                    >
                        {rankings.slice(0, 2).map((ranking) => (
                            <TraitChip type={ranking} />
                        ))}
                        {rankings.length > 2 &&
                            Array(Math.min(2, rankings.length - 2))
                                .fill('')
                                .map(() => (
                                    <CircleIcon
                                        sx={{ fontSize: '7.25px' }}
                                        htmlColor="#494949"
                                    />
                                ))}
                    </Grid>
                ) : (
                    <Grid container alignItems="center" gap={1.5}>
                        <Typography
                            component="span"
                            color="#808080"
                            fontFamily="open sans"
                            fontSize={14}
                            fontWeight={400}
                        >
                            {yearStarted}
                        </Typography>
                        <CircleIcon
                            sx={{ fontSize: '7.25px' }}
                            htmlColor="#494949"
                        />
                        <Typography
                            component="span"
                            color="#808080"
                            fontFamily="open sans"
                            fontSize={14}
                            fontWeight={400}
                        >
                            {yearEnded || 'Present'}
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Grid>
        {!!skills?.length ? (
            <Box mb={1}>
                <Typography component="span" fontSize={14} fontWeight={700}>
                    Skills: &nbsp;
                </Typography>
                {skills.map((skill, index) => {
                    return (
                        <Typography component="span" fontSize={14} key={index}>
                            {skill}
                            {index !== skills.length - 1 ? (
                                <>&nbsp;&middot;&nbsp;</>
                            ) : (
                                ''
                            )}
                        </Typography>
                    );
                })}
            </Box>
        ) : null}
    </Box>
);

export default WorkSummary;
