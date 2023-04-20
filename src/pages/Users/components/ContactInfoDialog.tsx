import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, Typography } from '@mui/material';
import CustomDialog from './CustomDialog';

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
                    color={'#05668D'}
                    fontFamily="open sans"
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
</CustomDialog>)