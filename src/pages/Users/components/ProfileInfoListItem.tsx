import React from 'react';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface IProfileInfoListItemProps {
    icon?: React.ReactNode;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    children?: React.ReactNode;
}

const ProfileInfoListItem = ({ children, icon, title, subtitle }: IProfileInfoListItemProps) => (
    <ListItem alignItems="flex-start" sx={{p: 1, ml: -1}}>
        {icon && (
            <ListItemIcon sx={{mt: 0, mr: 3, color: "#05668D", minWidth: "auto",}}>
                { icon }
            </ListItemIcon>
        )}
        <Grid container gap={1} flexDirection="column">
            <Typography
                fontWeight={600}
                fontSize={16}
            >
                {title}
            </Typography>
            {subtitle && (
                <Typography
                    fontSize={14}
                >
                    {subtitle}
                </Typography>      
            )}
            {children && (
                <Box>
                    { children }
                </Box>
            )}
        </Grid>
    </ListItem>
)

export default ProfileInfoListItem;
