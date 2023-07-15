import { Box, BoxProps, Grid, IconButton } from '@mui/material';
import ArrowRight from '../../../assets/icons/ArrowRight';
import React from 'react';

interface Props extends BoxProps {
    heading?: React.ReactNode;
}

const Section = ({ heading, children, onClick, ...props }: Props) => {
    return (
        <Box component="section">
            {heading || onClick ? (
                <Grid
                    container
                    alignItems="center"
                    component="div"
                    onClick={onClick}
                    style={{
                        cursor: onClick ? 'pointer' : 'default'
                    }}
                    mb={'12px'}
                >
                    <Grid item flexGrow={1}>
                        {heading}
                    </Grid>
                    {onClick ? (
                        <IconButton
                            onClick={() => {}}
                            sx={{
                                background: '#DFEBF0',
                                borderRadius: '8px',
                                padding: '8px'
                            }}
                        >
                            <ArrowRight />
                        </IconButton>
                    ) : null}
                </Grid>
            ) : null}
            <Box
                py={1.5}
                px={5}
                mb={'24px'}
                bgcolor="#fff"
                borderRadius={1.5}
                {...props}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Section;
