import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

const SectionHeading = (
    props: TypographyProps & { component?: React.ElementType }
) => (
    <Typography
        component="h3"
        color="#23282B"
        fontFamily="open sans"
        fontSize={20}
        fontWeight={600}
        ml={5}
        {...props}
    >
        {props.children}
    </Typography>
);

export default SectionHeading;
