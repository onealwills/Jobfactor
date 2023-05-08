import React from 'react';
import { Box, Typography } from '@mui/material';
import { ArrowLeftIcon } from '../../../assets/icons/ArrowLeftIcon';
import { JobsFilterIcon } from '../../../assets/icons/JobsFilterIcon';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const JobsHeader = () => {

    const [date, setDate] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [type, setType] = React.useState('');

    const handleChange = (event: SelectChangeEvent, filter: string) => {
        if (filter === 'date') {
            setDate(event.target.value as string);
        }
        else if (filter === 'location') {
            setLocation(event.target.value as string);
        }
        else if (filter === 'type') {
            setType(event.target.value as string);
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: '#FFFFFF',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignContent: 'center',
                    gap: 4
                }}
            >
                <ArrowLeftIcon />
                <Typography variant="headlineMediumSemiBold" color="#23282B">
                    Jobs
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2.5
                }}
            >
                <Box sx={{ minWidth: 150 }}>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-filled-label">Date Posted</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={date}
                            onChange={(e) => { handleChange(e, 'date') }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>20/10/2021</MenuItem>
                            <MenuItem value={20}>18/02/2022</MenuItem>
                            <MenuItem value={30}>13/05/20223</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 150 }}>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-filled-label">Location Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={location}
                            onChange={(e) => { handleChange(e, 'location') }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>US</MenuItem>
                            <MenuItem value={20}>London</MenuItem>
                            <MenuItem value={30}>Nigeria</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 150 }}>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-filled-label">Job Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={type}
                            onChange={(e) => { handleChange(e, 'type') }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Photoshop</MenuItem>
                            <MenuItem value={20}>Graphic Designer</MenuItem>
                            <MenuItem value={30}>UI/UX Design</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <JobsFilterIcon />
            </Box>
        </Box>
    );
};

export default JobsHeader;
