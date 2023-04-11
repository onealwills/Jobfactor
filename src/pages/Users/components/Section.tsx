import { Box, BoxProps, Grid } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import React from "react";

type Props = {
    heading?: React.ReactNode
    onClick?: (event: React.MouseEventHandler<HTMLDivElement>) => void
    children: React.ReactNode
} & BoxProps

const Section = ({heading, children, onClick, ...props}: Props) => {
    return (
        <Box component="section">
            {(heading || onClick) && (
                <Grid
                    container
                    alignItems="center"
                    component="div"
                    onClick={onClick}
                    style={{
                        cursor: onClick ? 'pointer' : 'default'
                    }}
                    mb={3}
                >
                    <Grid item flexGrow={1}>
                        {heading}
                    </Grid>
                    {onClick && (
                        <ArrowRightIcon fontSize="large" htmlColor="#055C7F" />
                    )}
                </Grid>
            )}
            <Box 
                py={1.5}
                px={5}
                mb={4.5}
                bgcolor="#fff"
                borderRadius={1.5}
                {...props}
            >
                { children }
            </Box>
        </Box>
    )
};

export default Section