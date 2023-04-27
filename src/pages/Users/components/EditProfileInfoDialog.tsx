import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, Typography } from '@mui/material';
import CustomDialog from './CustomDialog';

import List from '@mui/material/List';

import JobFactorIcon from '../../../assets/icons/JobfactorIconMui';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import CakeIcon from '@mui/icons-material/Cake';

import ProfileInfoListItem from './ProfileInfoListItem';

const EditProfileInfoDialog = () => (<CustomDialog open={true} title="Ronald Richard">
    <List
      sx={{
        width: '100%',
      }}
      component="nav"
    >
      
      <ProfileInfoListItem title="Your Profile" subtitle="https://Ronaldrichald.info" />
      <ProfileInfoListItem title="Email" subtitle="Ronaldrichie@outlook.com" />
    </List>
    <Grid>
        <Grid item columns={7}>

        </Grid>
        <Grid item columns={5}>
            
        </Grid>
    </Grid>
</CustomDialog>)

export default EditProfileInfoDialog;