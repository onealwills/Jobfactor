import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { ArrowLeftIcon } from '../../../../assets/icons/ArrowLeftIcon';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [sort, setSort] = React.useState<string>('');
    const navigate = useNavigate();
    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value);
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
                    alignItems: 'center',
                    gap: '28px'
                }}
            >
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowLeftIcon />
                </IconButton>
                <Typography variant="headlineMediumSemiBold" color="#23282B">
                    Product Designer
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2.5
                }}
            >
                <Box>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-filled-label">
                            Sort By
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={sort}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'name'}>name</MenuItem>
                            <MenuItem value={'date'}>date</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Button
                    variant="contained"
                    onClick={() => navigate('/new-jobpost')}
                    sx={{
                        padding: '15px 20px',
                        width: 'fit-content',
                        minWidth: '240px'
                    }}
                >
                    Post job opening
                </Button>
            </Box>
        </Box>
    );
};

export default Header;
