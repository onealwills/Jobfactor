import React from 'react';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

interface IContactInfoListItemProps {
    icon?: React.ReactNode;
    title: React.ReactNode;
    subtitle: React.ReactNode;
}

export const ContactInfoListItem = ({ icon, title, subtitle }: IContactInfoListItemProps) => (
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
            <Typography
                fontSize={14}
            >
                {subtitle}
            </Typography>      
        </Grid>
    </ListItem>
)
