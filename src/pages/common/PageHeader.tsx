import {
  Grid,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Box,
  Button,
} from '@mui/material';
import React from 'react';
import SelectDropdown from '../../components/Selectdropdown';
import WestIcon from '@mui/icons-material/West';
import { useNavigate } from 'react-router-dom';

interface HeaderActionProps {
  children?: React.ReactNode;
}

interface PageHeaderProps {
  pageTitle: string;
}

const HeaderActions = ({ children }: HeaderActionProps) => {
  return <>{children}</>;
};

const PageHeader = ({ pageTitle }: PageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          padding: '32px 40px',
          marginBottom: '20px',
          borderBottom: '1px solid #D9D9D9',
        }}
      >
        <Grid
          item
          xs={9}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '25px',
          }}
        >
          <IconButton onClick={() => navigate('/')}>
            <WestIcon />
          </IconButton>
          <Typography
            component={'h1'}
            sx={{
              fontSize: '28px',
              fontWeight: '600',
              fontFamily: 'Open Sans',
              color: '#23282B',
            }}
          >
            {pageTitle}
          </Typography>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <HeaderActions>
            <Button variant="outlined">Replace All</Button>
            <Button variant="contained">Request Review</Button>
          </HeaderActions>
        </Grid>
      </Grid>
    </>
  );
};

export default PageHeader;
