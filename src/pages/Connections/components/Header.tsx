import { Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { ArrowLeftIcon } from '../../../assets/icons/ArrowLeftIcon';
import MoreIcon from '../../../assets/icons/MoreIcon';
import SelectDropdown from '../../../components/Selectdropdown';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Header = (props: PropTypes) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const sortData = (type: string) => {
        let sortedData: Array<Object> = [];
        if (type === 'A-Z') {
            sortedData = [...props.data].sort((a, b) =>
                a.name > b.name ? 1 : -1
            );
        }
        if (type === 'Z-A') {
            sortedData = [...props.data].sort((a, b) =>
                a.name > b.name ? -1 : 1
            );
        }
        props?.setUsers(sortedData);
        setAnchorEl(null);
    };

    return (
        <>
            <Grid
                container
                sx={{
                    backgroundColor: '#FFFFFF',
                    alignItems: 'center',
                    padding: '32px 40px',
                    borderBottom: '1px solid #D9D9D9'
                }}
            >
                <Grid
                    item
                    xs={10}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '25px'
                    }}
                >
                    <IconButton onClick={() => navigate('/')}>
                        <ArrowLeftIcon />
                    </IconButton>
                    <Typography
                        component={'h1'}
                        sx={{
                            fontSize: '28px',
                            fontWeight: '600',
                            fontFamily: 'Open Sans',
                            color: '#23282B'
                        }}
                    >
                        Followers
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={2}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: '12px'
                    }}
                >
                    {props.title === 'ConnectionPage' && (
                        <SelectDropdown
                            label="Sort"
                            halfWidth={true}
                            options={['A-Z', 'Z-A']}
                            style={{ width: '90px', height: '50px' }}
                            handleChange={(e: any) => sortData(e.target.value)}
                        />
                    )}
                    <IconButton onClick={handleClick}>
                        <MoreIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: 100,
                        width: '20ch'
                    }
                }}
            >
                {['test', 'test'].map((option: any) => (
                    <MenuItem key={option} onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

interface PropTypes {
    data: data[];
    setUsers: (data: Object[]) => void;
    title: string;
}
type data = {
    name: string;
};

export default Header;
