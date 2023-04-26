import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, Typography } from '@mui/material';
import CustomDialog from './CustomDialog';

import List from '@mui/material/List';

import JobFactorIcon from '../../../assets/icons/JobfactorIconMui';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import CakeIcon from '@mui/icons-material/Cake';

import { ContactInfoListItem } from './ContactInfoListItem';

export const ProfileInfoDialog = () => (<CustomDialog open={true} title="Ronald Richard">
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
      sx={{
        width: '100%',
      }}
      component="nav"
    >
      
      <ContactInfoListItem icon={<JobFactorIcon />} title="Your Profile" subtitle="https://Ronaldrichald.info" />
      <ContactInfoListItem icon={<PhoneIcon />} title="Phone" subtitle="+234 704 555 0114  (Office)" />
      <ContactInfoListItem icon={<PlaceIcon />} title="Address" subtitle="3891 Ranchview Dr. Richardson, California 62639" />
      <ContactInfoListItem icon={<EmailIcon />} title="Email" subtitle="Ronaldrichie@outlook.com" />
      <ContactInfoListItem icon={<CakeIcon />} title="Birthday" subtitle="May 29" />

    </List>

</CustomDialog>)