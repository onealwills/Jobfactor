import { Grid } from '@mui/material';
import CustomDialog from './CustomDialog';

import List from '@mui/material/List';

import ProfileInfoListItem from './ProfileInfoListItem';
import Input from '../../common/Input';
import PhoneIcon from '@mui/icons-material/Phone';

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
        <Input InputProps={{
          startAdornment: (<PhoneIcon />)
        }}></Input>
    </Grid>
</CustomDialog>)

export default EditProfileInfoDialog;