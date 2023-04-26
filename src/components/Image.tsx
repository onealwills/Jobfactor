import { Box, BoxProps } from '@mui/material';

type ImageProps = {
    src: string;
    alt: string;
} & BoxProps;

const Image = (props: ImageProps) => <Box component="img" {...props} />;

export default Image;
