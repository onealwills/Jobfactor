import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BriefcaseIcon from '../../../assets/icons/BriefcaseIconMui';
import AddQualificationDialog from '../components/Modals/AddQualificationDialog';
import EducationSummary from '../components/EducationSummary';
import cambridge from '../../../assets/images/cambridge.jpg'
import nasa from '../../../assets/images/nasa.png';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Box } from '@mui/system';
import WorkSummary from '../components/WorkSummary';
import { Ranking } from '../types/Ranking';

import Grid from '@mui/material/Grid';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

function UserQualifications() {

    const [searchParams] = useSearchParams();
    const [open, setOpen] = useState<boolean>(false);

    const showMockData = searchParams.get('showMockData');

    const handleAddQualification = () => {
        setOpen(true);
    };

    return (
        <>
            <Paper
                sx={{
                    px: 4,
                    py: 2,
                    mb: 3,
                }}
                style={{
                    borderEndStartRadius: 0,
                    borderEndEndRadius: 0
                }}
            >
                <Typography component="p" color="#808080">
                    We use these details to improve your jobfactor score and
                    also show you jobs that match your unique skills and
                    experience
                </Typography>
            </Paper>

            { showMockData ? (
                <>
                    <Box mb={3}>
                        <Paper
                            sx={{
                                px: 4,
                                py: 1.5,
                                mb: 2,
                            }}
                            style={{
                                borderEndStartRadius: 0,
                                borderEndEndRadius: 0,
                            }}
                        >
                            <Typography
                                component="h3"
                                fontSize={20}
                                fontWeight={600}
                                mb={1.5}
                            >
                                Education
                            </Typography>
                            <List>
                                <ListItemButton
                                    style={{ textDecoration: 'none' }}
                                    sx={{ padding: 0 }}
                                >
                                    <Grid
                                        container
                                        wrap="nowrap"
                                        alignItems="center"
                                    >
                                        <Grid flexGrow={1} item>
                                            <EducationSummary
                                                data={{
                                                    university: {
                                                        name: 'Birmingham University',
                                                        image: cambridge
                                                    },
                                                    major: 'MSc Power Systems',
                                                    yearStarted: '2016',
                                                    yearEnded: '2018'
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <ArrowRightIcon
                                                fontSize="large"
                                                htmlColor="#055C7F"
                                            />
                                        </Grid>
                                    </Grid>
                                </ListItemButton>
                            </List>
                        </Paper>

                        <Button
                            sx={{
                                py: 1.5
                            }}
                            variant="contained"
                            endIcon={<AddBoxIcon />}
                            onClick={handleAddQualification}
                        >
                            <Typography
                                component="span"
                                fontSize={14}
                                fontWeight={600}
                            >
                                Add Education
                            </Typography>
                        </Button>
                    </Box>
                    <Box mb={3}>
                        <Paper
                            sx={{
                                px: 4,
                                py: 1.5,
                                mb: 2,
                            }}
                            style={{
                                borderEndStartRadius: 0,
                                borderEndEndRadius: 0,
                            }}
                        >
                            <Typography
                                component="h3"
                                fontSize={20}
                                fontWeight={600}
                                mb={1.5}
                            >
                                Work Experience
                            </Typography>
                            <List>
                                <ListItemButton
                                    style={{ textDecoration: 'none' }}
                                    sx={{ padding: 0 }}
                                >
                                    <Grid
                                        container
                                        wrap="nowrap"
                                        alignItems="center"
                                    >
                                        <Grid flexGrow={1} item>
                                            <WorkSummary
                                                data={{
                                                    employer: {
                                                        name: 'NASA',
                                                        image: cambridge
                                                    },
                                                    title: 'Lead Product Designer',
                                                    yearStarted: '2020',
                                                    yearEnded: '2022',
                                                    skills: [
                                                        'Customer Experience Design',
                                                        'Ux writing',
                                                        'Mobile Interface Design',
                                                        'Web Interface Design',
                                                        'Product Strategy',
                                                        'User Research',
                                                        'Interaction',
                                                    ]
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <ArrowRightIcon
                                                fontSize="large"
                                                htmlColor="#055C7F"
                                            />
                                        </Grid>
                                    </Grid>
                                </ListItemButton>
                            </List>
                        </Paper>

                        <Button
                            sx={{
                                py: 1.5
                            }}
                            variant="contained"
                            endIcon={<AddBoxIcon />}
                            onClick={handleAddQualification}
                        >
                            <Typography
                                component="span"
                                fontSize={14}
                                fontWeight={600}
                            >
                                Add Work Experience
                            </Typography>
                        </Button>
                    </Box>
                    <Box mb={3}>
                        <Paper
                            sx={{
                                px: 4,
                                py: 1.5,
                                mb: 2,
                            }}
                            style={{
                                borderEndStartRadius: 0,
                                borderEndEndRadius: 0,
                            }}
                        >
                            <Typography
                                component="h3"
                                fontSize={20}
                                fontWeight={600}
                                mb={1.5}
                            >
                                Volunteer Service
                            </Typography>
                            <WorkSummary
                                data={{
                                    employer: {
                                        name: 'GoPro INC.',
                                        image: cambridge
                                    },
                                    title: 'Graphics Designer',
                                    yearStarted: '2020',
                                    yearEnded: '2022',
                                }}
                            />
                        </Paper>

                        <Button
                            sx={{
                                py: 1.5
                            }}
                            variant="contained"
                            endIcon={<AddBoxIcon />}
                            onClick={handleAddQualification}
                        >
                            <Typography
                                component="span"
                                fontSize={14}
                                fontWeight={600}
                            >
                                Add Volunteer Service
                            </Typography>
                        </Button>
                    </Box>
                    <Box mb={3}>
                        <Paper
                            sx={{
                                px: 4,
                                py: 1.5,
                                mb: 2,
                            }}
                            style={{
                                borderEndStartRadius: 0,
                                borderEndEndRadius: 0,
                            }}
                        >
                            <Typography
                                component="h3"
                                fontSize={20}
                                fontWeight={600}
                                mb={1.5}
                            >
                                Licenses and Certification
                            </Typography>
                            <List>
                                <ListItemButton
                                    style={{ textDecoration: 'none' }}
                                    sx={{ padding: 0 }}
                                >
                                    <Grid
                                        container
                                        wrap="nowrap"
                                        alignItems="center"
                                    >
                                        <Grid flexGrow={1} item>
                                            <WorkSummary
                                                data={{
                                                    employer: {
                                                        name: 'Google',
                                                        image: cambridge
                                                    },
                                                    title: 'Google Certified Product Designer',
                                                    yearStarted: '2020',
                                                    yearEnded: '2022',
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <ArrowRightIcon
                                                fontSize="large"
                                                htmlColor="#055C7F"
                                            />
                                        </Grid>
                                    </Grid>
                                </ListItemButton>
                                
                                <Box py={2.5}>
                                    <Divider />
                                </Box>

                                <ListItemButton
                                    style={{ textDecoration: 'none' }}
                                    sx={{ padding: 0 }}
                                >
                                    <Grid
                                        container
                                        wrap="nowrap"
                                        alignItems="center"
                                    >
                                        <Grid flexGrow={1} item>
                                            <WorkSummary
                                                data={{
                                                    employer: {
                                                        name: 'Google',
                                                        image: cambridge
                                                    },
                                                    title: 'Google Certified Product Designer',
                                                    yearStarted: '2020',
                                                    yearEnded: '2022',
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <ArrowRightIcon
                                                fontSize="large"
                                                htmlColor="#055C7F"
                                            />
                                        </Grid>
                                    </Grid>
                                </ListItemButton>
                            </List>
                        </Paper>

                        <Button
                            sx={{
                                py: 1.5
                            }}
                            variant="contained"
                            endIcon={<AddBoxIcon />}
                            onClick={handleAddQualification}
                        >
                            <Typography
                                component="span"
                                fontSize={14}
                                fontWeight={600}
                            >
                                Add Licenses & Certification
                            </Typography>
                        </Button>
                    </Box>
                    <Box mb={3}>
                        <Paper
                            sx={{
                                px: 4,
                                py: 1.5,
                                mb: 2,
                            }}
                            style={{
                                borderEndStartRadius: 0,
                                borderEndEndRadius: 0,
                            }}
                        >
                            <Typography
                                component="h3"
                                fontSize={20}
                                fontWeight={600}
                                mb={1.5}
                            >
                                Tests
                            </Typography>
                            <List>
                                <ListItemButton
                                    style={{ textDecoration: 'none' }}
                                    sx={{ padding: 0 }}
                                >
                                    <Grid
                                        container
                                        wrap="nowrap"
                                        alignItems="center"
                                    >
                                        <Grid flexGrow={1} item>
                                            <WorkSummary
                                                data={{
                                                    employer: {
                                                        name: 'College Board',
                                                    },
                                                    title: 'SAT',
                                                    yearStarted: '2020',
                                                    yearEnded: '2022',
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <ArrowRightIcon
                                                fontSize="large"
                                                htmlColor="#055C7F"
                                            />
                                        </Grid>
                                    </Grid>
                                </ListItemButton>
                            </List>
                        </Paper>

                        <Button
                            sx={{
                                py: 1.5
                            }}
                            variant="contained"
                            endIcon={<AddBoxIcon />}
                            onClick={handleAddQualification}
                        >
                            <Typography
                                component="span"
                                fontSize={14}
                                fontWeight={600}
                            >
                                Add Test
                            </Typography>
                        </Button>
                    </Box>
                    <Box mb={3}>
                        <Paper
                            sx={{
                                px: 4,
                                py: 1.5,
                                mb: 2,
                            }}
                            style={{
                                borderEndStartRadius: 0,
                                borderEndEndRadius: 0,
                            }}
                        >
                            <Typography
                                component="h3"
                                fontSize={20}
                                fontWeight={600}
                                mb={1.5}
                            >
                                Awards
                            </Typography>
                            <List>
                                <ListItemButton
                                    style={{ textDecoration: 'none' }}
                                    sx={{ padding: 0 }}
                                >
                                    <Grid
                                        container
                                        wrap="nowrap"
                                        alignItems="center"
                                    >
                                        <Grid flexGrow={1} item>
                                            <WorkSummary
                                                data={{
                                                    employer: {
                                                        name: 'Jobfactor Inc.',
                                                    },
                                                    title: 'Employee of the year',
                                                    yearStarted: '2020',
                                                    yearEnded: '2022',
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <ArrowRightIcon
                                                fontSize="large"
                                                htmlColor="#055C7F"
                                            />
                                        </Grid>
                                    </Grid>
                                </ListItemButton>
                            </List>
                        </Paper>

                        <Button
                            sx={{
                                py: 1.5
                            }}
                            variant="contained"
                            endIcon={<AddBoxIcon />}
                            onClick={handleAddQualification}
                        >
                            <Typography
                                component="span"
                                fontSize={14}
                                fontWeight={600}
                            >
                                Add Award
                            </Typography>
                        </Button>
                    </Box>
                </>
            ) : (
                <Button
                    sx={{
                        py: 1.5
                    }}
                    variant="contained"
                    endIcon={<BriefcaseIcon />}
                    onClick={handleAddQualification}
                >
                    <Typography
                        component="span"
                        fontSize={14}
                        fontWeight={600}
                    >
                        Add a Qualification
                    </Typography>
                </Button>
            ) }

            <AddQualificationDialog open={open} setOpen={setOpen} />
        </>
    );
}

export default UserQualifications;
