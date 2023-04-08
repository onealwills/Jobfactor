import { Box, BoxProps, Theme, Typography } from "@mui/material";
import React from "react";

type HeadingOptions = {
    text: string | React.ReactNode
}

type Props = {
    heading?: React.ReactNode
    children: React.ReactNode
} & BoxProps

const Section = ({heading, children, ...props}: Props) => {
    return (
        <Box component="section">
            {heading}
            <Box 
                py={1.5}
                px={5}
                mb={4.5}
                {...props}
                style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    ...props.style
                }}
            >
                { children }
            </Box>
        </Box>
    )
};

export default Section