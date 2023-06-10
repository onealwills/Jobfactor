import Grid from '@mui/material/Grid';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

interface ISteppedProgressProps extends BoxProps {
    completedSteps: number;
    steps: string[];
}

function SteppedProgress({
    steps,
    completedSteps,
    ...other
}: ISteppedProgressProps) {
    return (
        <Box {...other}>
            <Grid container width="100%" alignItems="center">
                {steps.map((step, index) => (
                    <>
                        <Grid item>
                            <Box
                                width={40}
                                height={40}
                                margin="auto"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                sx={{
                                    backgroundColor:
                                        index >= completedSteps
                                            ? '#FFC24C'
                                            : '#07AF22',
                                    borderRadius: '50%'
                                }}
                            >
                                <Typography
                                    fontSize={14}
                                    fontWeight={600}
                                    color="#fff"
                                >
                                    {index + 1}
                                </Typography>
                            </Box>
                            <Typography mt={0.5} fontSize={12} color="#808080">
                                {step}
                            </Typography>
                        </Grid>
                        {index < steps.length - 1 ? (
                            <Grid item flexGrow={1}>
                                <Divider
                                    sx={{
                                        backgroundColor: '#EDEDED',
                                        height: 4,
                                        border: 'none'
                                    }}
                                />
                            </Grid>
                        ) : null}
                    </>
                ))}
            </Grid>
        </Box>
    );
}

export default SteppedProgress;
