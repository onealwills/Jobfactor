import Grid from '@mui/material/Grid';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

interface ISteppedSectionHeaderProps extends BoxProps {
    activeStep: number;
    steps: PropTypes[];
}
interface PropTypes {
    title: string;
    completed: boolean;
}
function SteppedSectionHeader({
    steps,
    activeStep,
    ...other
}: ISteppedSectionHeaderProps) {
    return (
        <Box {...other}>
            <Grid container width="100%" alignItems="center" gap={4}>
                {steps.map((step, index) => (
                    <>
                        <Grid item flexGrow={1}>
                            <Divider
                                sx={{
                                    backgroundColor: step.completed
                                        ? '#5B5B5B'
                                        : '#EDEDED',
                                    height: 8,
                                    borderRadius: 4,
                                    border: 'none'
                                }}
                            />
                            <Typography
                                mt={0.75}
                                fontSize={16}
                                fontWeight={step.completed ? 700 : 400}
                                color={step.completed ? '#5B5B5B' : '#999999'}
                            >
                                {step.title}
                            </Typography>
                        </Grid>
                    </>
                ))}
            </Grid>
        </Box>
    );
}

export default SteppedSectionHeader;
