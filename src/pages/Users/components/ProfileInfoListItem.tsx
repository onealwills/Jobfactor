import React from 'react';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface IProfileInfoListItemProps {
    icon?: React.ReactNode;
    title: React.ReactNode;
    onClick?: (event?: React.MouseEvent<HTMLLIElement>) => void;
    subtitle?: React.ReactNode;
    children?: React.ReactNode;
}

const ProfileInfoListItem = ({ onClick, children, icon, title, subtitle }: IProfileInfoListItemProps) => (
    <ListItem
        alignItems="flex-start" sx={{p: 1, ml: -1}}
        onClick={onClick ? onClick : undefined}
        style={{
            cursor: onClick ? "pointer" : "default",
        }}
    >
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
                    color={onClick ? "#05668D" : "#808080"}
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
