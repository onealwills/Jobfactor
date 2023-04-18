import { Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WestIcon from '@mui/icons-material/West';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (
    <>
      <Grid container
        sx={{
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          padding: "32px 40px",
          borderBottom: "1px solid #D9D9D9",
        }}
      >
        <Grid item xs={10}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '25px'
          }}
        >
          <IconButton
            onClick={() => navigate('/')}
          >
            <WestIcon />
          </IconButton>
          <Typography
            component={'h1'}
            sx={{
              fontSize: '28px',
              fontWeight: '600',
              fontFamily: 'Open Sans',
              color: "#23282B"
            }}
          >
            Followers
          </Typography>
        </Grid>
        <Grid item xs={2}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <IconButton
            onClick={handleClick}
          >
            <MoreVertIcon />
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
            width: '20ch',
          },
        }}
      >
        {['test', 'test'].map((option: any) => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default Header