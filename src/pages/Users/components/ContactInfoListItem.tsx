import React from 'react';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

interface IContactInfoListItemProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}

export const ContactInfoListItem = ({ icon, title, subtitle }: IContactInfoListItemProps) => (
    <ListItemButton alignItems="flex-start" sx={{p: 1, ml: -1}}>
        <ListItemIcon sx={{mt: 0, mr: 3, color: "#05668D", minWidth: "auto",}}>
            { icon }
        </ListItemIcon>
        <Grid container gap={1} flexDirection="column">
            <Typography
                fontWeight={600}
                fontSize={16}
            >
                {title}
            </Typography>
            <Typography
                fontSize={14}
            >
                {subtitle}
            </Typography>      
        </Grid>
    </ListItemButton>
)
