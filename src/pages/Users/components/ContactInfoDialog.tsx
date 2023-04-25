import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, Typography } from '@mui/material';
import CustomDialog from './CustomDialog';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import JobFactorIcon from '../../../assets/icons/JobfactorIconMui';
import { Box } from '@mui/system';

export const ContactInfoDialog = () => (<CustomDialog open={true} title="Ronald Richard">
    <Grid
        container
        alignItems="center"
    >
        <Grid item flexGrow={1}>
            <Typography
                component="h6"
                fontSize={20}
                fontWeight="600"
                fontFamily="open sans"
            >
                Contact Info
            </Typography>
        </Grid>
        <Grid item>
            <Button
                disableRipple
                sx={{
                    backgroundColor: '#FCFBF8',
                    borderRadius: '8px',
                    padding: '0 16px',
                }}
                startIcon={<EditIcon />}
            >
                <Typography
                    fontWeight={600}
                    fontSize={14}
                    sx={{
                        textTransform: 'none',
                        py: 1,
                    }}
                >
                    Edit
                </Typography>
            </Button>
        </Grid>
    </Grid>
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      component="nav"
    >
      <ListItemButton alignItems="flex-start">
        <ListItemIcon>
          <JobFactorIcon htmlColor="#05668D" />
        </ListItemIcon>
        <Box>
            <Typography
                fontWeight={600}
                fontSize={16}
            >
                Your Profile
            </Typography>
            <Typography
                fontSize={14}
            >
                Your Profile
            </Typography>      
        </Box>
      </ListItemButton>
    </List>

</CustomDialog>)